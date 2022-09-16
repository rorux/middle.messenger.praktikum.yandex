import Component from "@core/Component";
import tpl from "./tpl";
import formInput from '@components/formInput';
import Router from "@core/Router";
import { AuthAPI } from "../../api";
import { Actions } from "@core/Store";
import connect from "@core/Store/Connect";
import { validateForm } from "@services/Validation/functions";

export class Auth extends Component {
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    this.addEventsForms();

    const form = this._element.querySelector<HTMLFormElement>("form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();

      const errorMsg = this._element.querySelector<HTMLElement>(".error");
      const dataForm = validateForm(this._element);

      if (dataForm) {
        (async () => {
          const result = await AuthAPI.login({
            data: dataForm,
            headers: { 'Content-Type': 'application/json' }
          })

          if(result?.status !== 200) {
            (errorMsg as HTMLElement).innerText = JSON.parse(result?.response).reason
          } else {
            console.log("Form submitted..");
            const resGetUser = await AuthAPI.getUserInfo();
            Actions.changeUserData(resGetUser.response);
            (new Router()).go('/messenger');
          }
        })();
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


