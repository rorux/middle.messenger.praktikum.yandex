import Component from "../../core/Component";
import tpl from "./tpl";
import formInput from "../../components/formInput";
import Validation from "../../services/Validation";
import Router from "../../core/Router";
import { AuthAPI } from "../../api";
import { TLoginData } from "../../api/auth";
import { Actions } from "../../core/Store";
import connect from "../../core/Store/Connect";

export class Auth extends Component {
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    this.addEventsForms();

    const form = this._element.querySelector("form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let errors = 0;
      const dataForm: TLoginData = {};

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

        AuthAPI.login({
          data: dataForm,
          headers: { 'Content-Type': 'application/json' }
        }).then(result => {
          if(result?.status !== 200 && result?.response.reason) {
            errorMsg.innerText = result?.response.reason
          } else {
            AuthAPI.getUserInfo().then(
              resGetUser => Actions.changeUserData(resGetUser.response)
            );
            (new Router()).go('/messenger');
          }
        })

        console.log("Form submitted..");
      } else console.log("Errors of validation!");
    });
  }
}

const AuthConnectedStore = connect(Auth, (state) => { return state.user ?? {} })

export default (): Component =>
  new AuthConnectedStore("div", {
    attr: { class: "content-center" },
    formInputLogin: new formInput("div", {
      type: "text",
      param: "login",
      name: "Логин",
      attr: { class: "form__group" },
    }),
    formInputPassword: new formInput("div", {
      type: "password",
      param: "password",
      name: "Пароль",
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
      }
    }
  });


