import { v4 as makeUUID } from "uuid";
import Handlebars from "handlebars";
import EventBus from "./EventBus";
import Validation from "../services/Validation";

type TpropsAndChilds = {
  [index: string]: string | object | Component;
};

export default class Component {
  static EVENT_INIT = "init";
  static EVENT_FLOW_CDM = "flow:component-did-mount";
  static EVENT_FLOW_CDU = "flow:component-did-update";
  static EVENT_FLOW_RENDER = "flow:render";

  _props: TpropsAndChilds;
  _children: TpropsAndChilds;
  _id: string;
  _element: HTMLElement;
  _meta: { tag: string; props: TpropsAndChilds };
  _eventBus: EventBus;
  _setUpdate = false;

  constructor(tag = "div", propsAndChilds = {}) {
    const { children, props } = this.getChildren(propsAndChilds);
    this._eventBus = new EventBus();
    this._id = makeUUID();
    this._children = this.makePropsProxy(children);
    this._props = this.makePropsProxy({ ...props, _id: this._id });
    this._meta = { tag, props };
    this.registerEvents();
    this._eventBus.emit(Component.EVENT_INIT);
  }

  registerEvents() {
    this._eventBus.on(Component.EVENT_INIT, this.init.bind(this));
    this._eventBus.on(
      Component.EVENT_FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    this._eventBus.on(
      Component.EVENT_FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this._eventBus.on(Component.EVENT_FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this._element = this.createDocumentElement(this._meta?.tag);
    this._eventBus.emit(Component.EVENT_FLOW_RENDER);
  }

  createDocumentElement(tag: string) {
    const element = document.createElement(tag);

    if (this._props.settings?.withInternalID)
      element.setAttribute("data-id", this._id);

    return element;
  }

  _render() {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = "";
    this._element.appendChild(block);
    this.addEvents();
    this.addAttribute();
  }

  render() {}

  addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  addEventsForms() {
    this._element
      .querySelectorAll("input")
      .forEach((input: HTMLInputElement) => {
        input.addEventListener("focus", (e) => {
          const target = e.target as HTMLInputElement;
          const validationBlock = this._element.querySelector(
            `#${target.id}-validation`
          );
          Validation.focus(
            target.value,
            target.id,
            validationBlock as HTMLElement
          );
        });

        input.addEventListener("blur", (e) => {
          const target = e.target as HTMLInputElement;
          const validationBlock = this._element.querySelector(
            `#${target.id}-validation`
          );
          Validation.blur(
            target.value,
            target.id,
            validationBlock as HTMLElement
          );
        });
      });
  }

  addSubmitFormValidation() {
    const form = this._element.querySelector("form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let errors = 0;
      const dataForm: {
        [index: string]: string;
      } = {};

      this._element
        .querySelectorAll("input")
        .forEach((input: HTMLInputElement) => {
          const validationBlock = this._element.querySelector(
            `#${input.id}-validation`
          );
          Validation.focus(
            input.value,
            input.id,
            validationBlock as HTMLElement
          );
          if (validationBlock?.innerHTML) errors++;
          else dataForm[input.id] = input.value;
        });

      if (!errors) {
        Object.entries(dataForm).forEach(([key, value]) => {
          console.log(key + ":", value);
        });
        console.log("Form submitted..");
      } else console.log("Errors of validation!");
    });
  }

  removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  addAttribute() {
    const { attr = {} } = this._props;
    Object.entries(attr).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsAndChilds: TpropsAndChilds) {
    const children: TpropsAndChilds = {};
    const props: TpropsAndChilds = {};

    Object.keys(propsAndChilds).forEach((key) => {
      if (propsAndChilds[key] instanceof Component)
        children[key] = propsAndChilds[key];
      else props[key] = propsAndChilds[key];
    });

    return { children, props };
  }

  compile(template: string, props?: TpropsAndChilds) {
    if (typeof props == "undefined") props = this._props;

    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(
      ([key, child]: [string, Component]) => {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    );

    const fragment = this.createDocumentElement(
      "template"
    ) as HTMLTemplateElement;
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach((child: Component) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child: Component) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus.emit(Component.EVENT_FLOW_CDM);
    if (Object.keys(this._children).length)
      this._eventBus.emit(Component.EVENT_FLOW_RENDER);
  }

  _componentDidUpdate(oldProps: TpropsAndChilds, newProps: TpropsAndChilds) {
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (isReRender) this._eventBus.emit(Component.EVENT_FLOW_RENDER);
  }

  componentDidUpdate(oldProps: TpropsAndChilds, newProps: TpropsAndChilds) {
    oldProps;
    newProps;
    return true;
  }

  setProps(newProps: TpropsAndChilds) {
    if (!newProps) return;

    this._setUpdate = false;
    const oldValue = { ...this._props };

    const { children, props } = this.getChildren(newProps);

    if (Object.values(children).length) Object.assign(this._children, children);

    if (Object.values(props).length) Object.assign(this._props, props);

    if (this._setUpdate) {
      this._eventBus.emit(Component.EVENT_FLOW_CDU, oldValue, this._props);
      this._setUpdate = false;
    }
  }

  makePropsProxy(props: TpropsAndChilds) {
    return new Proxy(props, {
      get(target: TpropsAndChilds, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },

      set(target: TpropsAndChilds, prop: string, value) {
        if (target[prop] !== value) {
          target[prop] = value;
          this._setUpdate = true;
        }
        return true;
      },
    });
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }

  getContent() {
    return this._element;
  }
}
