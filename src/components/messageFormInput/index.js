import Handlebars from "handlebars";
import tpl from "./messageFormInput.hbs";

Handlebars.registerPartial("messageFormInput", tpl);

export default () => tpl();
