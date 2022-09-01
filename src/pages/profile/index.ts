import Component, {TpropsAndChilds} from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";
import { AuthAPI, UsersAPI } from "../../api";
import Router from "../../core/Router";
import { Actions } from "../../core/Store";
import Store from "../../core/Store/Store";
import { TUser } from "../../api/auth";
import connect from "../../core/Store/Connect";

export class Profile extends Component {
  constructor(tag: string, props: TpropsAndChilds) {
    props.attr = {class: "content-center"},
    props.displayName = (Actions.getUserState() as TUser).display_name,
    props.formInputEditEmail = new formInputEdit("div", {
      type: "text",
      param: "email",
      name: "Почта",
      value: props.email,
      disabled: true,
      attr: {class: "form-edit__group"},
    }),
    props.avatarPicture = props.avatar
      ? `https://ya-praktikum.tech/api/v2/resources${props.avatar}`
      : 'img/avatar.png',
    props.formInputEditLogin = new formInputEdit("div", {
      type: "text",
      param: "login",
      name: "Логин",
      value: props.login,
      disabled: true,
      attr: {class: "form-edit__group"},
    }),
    props.formInputEditFirstName = new formInputEdit("div", {
      type: "text",
      param: "first_name",
      name: "Имя",
      value: props.first_name,
      disabled: true,
      attr: {class: "form-edit__group"},
    }),
    props.formInputEditLastName = new formInputEdit("div", {
      type: "text",
      param: "second_name",
      name: "Фамилия",
      value: props.second_name,
      disabled: true,
      attr: {class: "form-edit__group"},
    }),
    props.formInputEditDisplayName = new formInputEdit("div", {
      type: "text",
      param: "display_name",
      name: "Имя в чате",
      value: props.display_name,
      disabled: true,
      attr: {class: "form-edit__group"},
    }),
    props.formInputEditTel = new formInputEdit("div", {
      type: "tel",
      param: "phone",
      name: "Телефон",
      value: props.phone,
      disabled: true,
      attr: {class: "form-edit__group"},
    }),
    super(tag, props)
  }
  render() {
    return this.compile(tpl);
  }

  addEvents() {
    this.addEventsForms();
    const logoutBtn = this._element.querySelector("#logout") as HTMLFormElement;
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      AuthAPI.logout();
      localStorage.removeItem(Store.STORE_NAME);
      (new Router()).go('/auth');
    })

    const sendAvatarForm = this._element.querySelector("#sendAvatar") as HTMLFormElement;
    const successMsg = this._element.querySelector(".success") as HTMLDivElement;
    const errorMsg = this._element.querySelector(".error") as HTMLDivElement;

    sendAvatarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = new FormData(sendAvatarForm);

      UsersAPI.changeAvatar({ data: form })
       .then((res) => {
         if(res.status === 200) {
           Actions.changeUserData({...res.response})
           const avatarPicture_ = this._props.avatar
             ? `https://ya-praktikum.tech/api/v2/resources${this._props.avatar}`
             : 'img/avatar.png';
           this.setProps({avatarPicture: avatarPicture_});
           successMsg.innerText = 'Аватар изменен!';
           errorMsg.innerText = '';
         }
         else {
           errorMsg.innerText = 'Аватар не изменен, выберите изображение!';
           successMsg.innerText = '';
         }
       });
    });
  }
}

const ProfileConnectedStore = connect(Profile, (state) => {
  return state.user ?? {}
})

export default () => new ProfileConnectedStore("div");
