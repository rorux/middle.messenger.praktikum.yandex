import Component from "../../core/Component";
import tpl from "./tpl";
import formInput from "../../components/formInput";

export class Signup extends Component {
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    this.addEventsForms();
    this.addSubmitFormValidation();
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
