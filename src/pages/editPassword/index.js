import tpl from "./editPassword.hbs";
import formInputEdit from "../../components/formInputEdit";

export default () => {
  const editPasswordInputs = [
    {
      type: "password",
      param: "old-password",
      name: "Старый пароль",
      value: "123456",
      disabled: false,
    },
    {
      type: "password",
      param: "new-password",
      name: "Новый пароль",
      value: "",
      disabled: false,
    },
    {
      type: "password",
      param: "new-password-repeat",
      name: "Повторите новый пароль",
      value: "",
      disabled: false,
    },
  ];

  return tpl({ editPasswordInputs });
};
