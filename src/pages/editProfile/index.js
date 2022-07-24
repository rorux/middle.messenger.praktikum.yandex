import tpl from "./editProfile.hbs";
import formInputEdit from "../../components/formInputEdit";

export default () => {
  const editProfileInputs = [
    {
      type: "text",
      param: "email",
      name: "Почта",
      value: "pochta@yandex.ru",
      disabled: false,
    },
    {
      type: "text",
      param: "login",
      name: "Логин",
      value: "ivanivanov",
      disabled: false,
    },
    {
      type: "text",
      param: "first_name",
      name: "Имя",
      value: "Иван",
      disabled: false,
    },
    {
      type: "text",
      param: "last_name",
      name: "Фамилия",
      value: "Иванов",
      disabled: false,
    },
    {
      type: "text",
      param: "display_name",
      name: "Имя в чате",
      value: "Иван",
      disabled: false,
    },
    {
      type: "tel",
      param: "phone",
      name: "Телефон",
      value: "+7 (909) 967 30 30",
      disabled: false,
    },
  ];

  return tpl({ editProfileInputs });
};
