import Handlebars from "handlebars";
import tpl from "./formInput.hbs";
import "./form.scss";

Handlebars.registerPartial("formInput", tpl);

export default (type, param, name, errorName) => {
  return tpl({ type, param, name, errorName });
};
