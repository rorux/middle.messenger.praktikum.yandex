import tpl from "./auth.hbs";
import formInput from "../../components/formInput";

export default () => {
  const authInputs = [
    {
      type: "text",
      param: "login",
      name: "Логин",
      errorName: "Неверный логин",
    },
    {
      type: "password",
      param: "password",
      name: "Пароль",
      errorName: null,
    },
  ];

  return tpl({ authInputs });
};
