import Component, {TpropsAndChilds} from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";
import { UsersAPI } from "../../api";
import Validation from "../../services/Validation";
import {TUser} from "../../api/auth";
import { Actions } from "../../core/Store";

export class EditProfile extends Component {
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

        UsersAPI.editProfile({
          data: dataForm,
          headers: { 'Content-Type': 'application/json' }
        }).then(result => {
          if(result?.status !== 200 && result?.response.reason) {
            errorMsg.innerText = result?.response.reason
          } else {
            Actions.changeUserData({ ...result?.response });
          }
        }).catch(error => console.log(error))

        console.log("Form submitted..");
      } else console.log("Errors of validation!");
    });
  }
}

export default () => {
  return new EditProfile("div", {
    attr: { class: "content-center" },
    avatarPicture: (Actions.getUserState() as TUser).avatar
      ? `https://ya-praktikum.tech/api/v2/resources${(Actions.getUserState() as TUser).avatar}`
      : 'img/avatar.png',
    formInputEditEmail: new formInputEdit("div", {
      type: "text",
      param: "email",
      name: "Почта",
      value: (Actions.getUserState() as TUser).email,
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditLogin: new formInputEdit("div", {
      type: "text",
      param: "login",
      name: "Логин",
      value: (Actions.getUserState() as TUser).login,
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditFirstName: new formInputEdit("div", {
      type: "text",
      param: "first_name",
      name: "Имя",
      value: (Actions.getUserState() as TUser).first_name,
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditLastName: new formInputEdit("div", {
      type: "text",
      param: "second_name",
      name: "Фамилия",
      value: (Actions.getUserState() as TUser).second_name,
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditDisplayName: new formInputEdit("div", {
      type: "text",
      param: "display_name",
      name: "Имя в чате",
      value: (Actions.getUserState() as TUser).display_name,
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditTel: new formInputEdit("div", {
      type: "tel",
      param: "phone",
      name: "Телефон",
      value: (Actions.getUserState() as TUser).phone,
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
  })
}
