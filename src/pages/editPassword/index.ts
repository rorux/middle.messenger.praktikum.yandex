import Component from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";

export class EditPassword extends Component {
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    this.addEventsForms();
    this.addSubmitFormValidation();
  }
}

export default (): Component =>
  new EditPassword("div", {
    attr: { class: "content-center" },
    formInputEditOldPassword: new formInputEdit("div", {
      type: "password",
      param: "old-password",
      name: "Старый пароль",
      value: "123456",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditNewPassword: new formInputEdit("div", {
      type: "password",
      param: "new-password",
      name: "Новый пароль",
      value: "",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditNewPasswordRepeat: new formInputEdit("div", {
      type: "password",
      param: "new-password-repeat",
      name: "Повторите новый пароль",
      value: "",
      disabled: false,
      attr: { class: "form-edit__group" },
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
