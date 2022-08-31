import Component from "../../core/Component";
import tpl from "./tpl";
import formInput from "../../components/formInput";
import Validation from "../../services/Validation";
import { AuthAPI } from "../../api";
import Router from "../../core/Router";
import { TSignUpData } from "../../api/auth";

export class Signup extends Component {
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    this.addEventsForms();

    const form = this._element.querySelector("form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let errors = 0;
      const dataForm: {
        [index: string]: string;
      } = {};

      const errorMsg = this._element.querySelector(".error") as HTMLElement;

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
        const { password_again, ...signUpData } = dataForm;

        AuthAPI.signUp({
          data: signUpData as TSignUpData,
          headers: { 'Content-Type': 'application/json' } }
        ).then(result => {
          if(result?.status !== 200 && result?.response.reason) {
            errorMsg.innerText = result?.response.reason
          } else (new Router()).go('/auth');
        }).catch(error => console.log(error))

        console.log("Form submitted..");
      } else console.log("Errors of validation!");
    });
  }
}

export default (): Component =>
  new Signup("div", {
    attr: { class: "content-center" },
    formInputEmail: new formInput("div", {
      type: "text",
      param: "email",
      name: "Почта",
      attr: { class: "form__group" },
    }),
    formInputLogin: new formInput("div", {
      type: "text",
      param: "login",
      name: "Логин",
      attr: { class: "form__group" },
    }),
    formInputFirstName: new formInput("div", {
      type: "text",
      param: "first_name",
      name: "Имя",
      attr: { class: "form__group" },
    }),
    formInputSecondName: new formInput("div", {
      type: "text",
      param: "second_name",
      name: "Фамилия",
      attr: { class: "form__group" },
    }),
    formInputTel: new formInput("div", {
      type: "tel",
      param: "phone",
      name: "Телефон",
      attr: { class: "form__group" },
    }),
    formInputPassword: new formInput("div", {
      type: "password",
      param: "password",
      name: "Пароль",
      attr: { class: "form__group" },
    }),
    formInputPasswordAgain: new formInput("div", {
      type: "password",
      param: "password_again",
      name: "Пароль (еще раз)",
      attr: { class: "form__group" },
    }),
    events: {
      focus: (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      },
      blur: (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
  });
