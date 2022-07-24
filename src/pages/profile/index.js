import tpl from "./profile.hbs";
import formInputEdit from "../../components/formInputEdit";

export default () => {
  const profileInputs = [
    {
      type: "text",
      param: "email",
      name: "Почта",
      value: "pochta@yandex.ru",
      disabled: true,
    },
    {
      type: "text",
      param: "login",
      name: "Логин",
      value: "ivanivanov",
      disabled: true,
    },
    {
      type: "text",
      param: "first_name",
      name: "Имя",
      value: "Иван",
      disabled: true,
    },
    {
      type: "text",
      param: "last_name",
      name: "Фамилия",
      value: "Иванов",
      disabled: true,
    },
    {
      type: "text",
      param: "display_name",
      name: "Имя в чате",
      value: "Иван",
      disabled: true,
    },
    {
      type: "tel",
      param: "phone",
      name: "Телефон",
      value: "+7 (909) 967 30 30",
      disabled: true,
    },
  ];

  return tpl({ profileInputs });
};
