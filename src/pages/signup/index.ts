import Component from "@core/Component";
import formInput from "@components/formInput";
import { AuthAPI } from "../../api";
import Router from "@core/Router";
import { TSignUpData } from "@api/auth";
import { validateForm } from "@services/Validation/functions";
import tpl from "./tpl";

export class Signup extends Component {
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
        const { password_again, ...signUpData } = dataForm;
        console.log(password_again);

        (async () => {
          try {
            const result = await AuthAPI.signUp({
                data: signUpData as TSignUpData,
                headers: {'Content-Type': 'application/json'}
              }
            );

            if (result?.status !== 200) {
              (errorMsg as HTMLElement).innerText = JSON.parse(result?.response).reason
            } else {
              console.log("Form submitted..");
              (new Router()).go('/auth');
            }
          } catch(error) {
            console.log(error)
          }
        })();
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
