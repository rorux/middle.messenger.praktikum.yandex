import tpl from "./signup.hbs";
import formInput from "../../components/formInput";

export default () => {
  const signupInputs = [
    {
      type: "text",
      param: "email",
      name: "Почта",
      errorName: "Неверный email",
    },
    {
      type: "text",
      param: "login",
      name: "Логин",
      errorName: null,
    },
    {
      type: "text",
      param: "first_name",
      name: "Имя",
      errorName: null,
    },
    {
      type: "text",
      param: "second_name",
      name: "Фамилия",
      errorName: null,
    },
    {
      type: "tel",
      param: "phone",
      name: "Телефон",
      errorName: null,
    },
    {
      type: "password",
      param: "password",
      name: "Пароль",
      errorName: null,
    },
    {
      type: "password",
      param: "password_again",
      name: "Пароль (еще раз)",
      errorName: null,
    },
  ];

  return tpl({ signupInputs });
};
