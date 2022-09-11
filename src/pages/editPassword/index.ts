import Component from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";
import Validation from "../../services/Validation";
import { UsersAPI } from "../../api";
import Router from "../../core/Router";
import { validateForm } from "../../services/Validation/functions";

export class EditPassword extends Component {
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
        const { "newPassword-repeat": newPasswordRepeat, ...editPasswordData } = dataForm;

        (async () => {
          try {
            const result = await UsersAPI.editPassword({
              data: editPasswordData,
              headers: { 'Content-Type': 'application/json' }
            });
            if(result?.status !== 200) {
              (errorMsg as HTMLElement).innerText = JSON.parse(result?.response).reason
            } else {
              console.log("Form submitted..");
              (new Router()).go('/edit-password');
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
  new EditPassword("div", {
    attr: { class: "content-center" },
    formInputEditOldPassword: new formInputEdit("div", {
      type: "password",
      param: "oldPassword",
      name: "Старый пароль",
      value: "",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditNewPassword: new formInputEdit("div", {
      type: "password",
      param: "newPassword",
      name: "Новый пароль",
      value: "",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditNewPasswordRepeat: new formInputEdit("div", {
      type: "password",
      param: "newPassword-repeat",
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
