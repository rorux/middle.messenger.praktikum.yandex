import Component from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";
import Validation from "../../services/Validation";
import { UsersAPI } from "../../api";
import Router from "../../core/Router";

export class EditPassword extends Component {
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
        const { "newPassword-repeat": newPasswordRepeat, ...editPasswordData } = dataForm;

        UsersAPI.editPassword({
          data: editPasswordData,
          headers: { 'Content-Type': 'application/json' }
        }).then(result => {
          if(result?.status !== 200 && result?.response.reason) {
            errorMsg.innerText = result?.response.reason
          } else {
            (new Router()).go('/edit-password');
          }
        }).catch(error => console.log(error))

        console.log("Form submitted..");
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
