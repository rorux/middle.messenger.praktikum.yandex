import Component from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";
import { TError, UsersAPI } from "../../api";
import Validation from "../../services/Validation";
import { TUser } from "../../api/auth";
import { Actions } from "../../core/Store";
import {validateForm} from "../../services/Validation/functions";

export class EditProfile extends Component {
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
          try {
            const result = await UsersAPI.editProfile({
              data: dataForm,
              headers: {'Content-Type': 'application/json'}
            });

            if (result?.status !== 200) {
              (errorMsg as HTMLElement).innerText = (result?.response as TError).reason
            } else {
              Actions.changeUserData({...result?.response as TUser});
              console.log("Form submitted..");
            }
          } catch(error) {
            console.log(error)
          }
        })()
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
