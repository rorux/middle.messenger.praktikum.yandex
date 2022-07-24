import Handlebars from "handlebars";
import tpl from "./formInputEdit.hbs";
import "./form-edit.scss";

Handlebars.registerPartial("formInputEdit", tpl);

export default (type, param, name, value, disabled) => {
  return tpl({ type, param, name, value, disabled });
};
