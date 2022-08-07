import Component from "../../core/Component";
import tpl from "./tpl";
import formInput from "../../components/formInput";

export class Auth extends Component {
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    this.addEventsForms();
    this.addSubmitFormValidation();
  }
}

export default (): Component =>
  new Auth("div", {
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
      },
    },
  });
