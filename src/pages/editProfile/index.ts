import Component from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";

export class EditProfile extends Component {
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    this.addEventsForms();
    this.addSubmitFormValidation();
  }
}

export default (): Component =>
  new EditProfile("div", {
    attr: { class: "content-center" },
    formInputEditEmail: new formInputEdit("div", {
      type: "text",
      param: "email",
      name: "Почта",
      value: "pochta@yandex.ru",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditLogin: new formInputEdit("div", {
      type: "text",
      param: "login",
      name: "Логин",
      value: "ivanivanov",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditFirstName: new formInputEdit("div", {
      type: "text",
      param: "first_name",
      name: "Имя",
      value: "Иван",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditLastName: new formInputEdit("div", {
      type: "text",
      param: "second_name",
      name: "Фамилия",
      value: "Иванов",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditDisplayName: new formInputEdit("div", {
      type: "text",
      param: "display_name",
      name: "Имя в чате",
      value: "Иван",
      disabled: false,
      attr: { class: "form-edit__group" },
    }),
    formInputEditTel: new formInputEdit("div", {
      type: "tel",
      param: "phone",
      name: "Телефон",
      value: "+79099673030",
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
