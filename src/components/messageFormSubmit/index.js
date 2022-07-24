import Handlebars from "handlebars";
import tpl from "./messageFormSubmit.hbs";

Handlebars.registerPartial("messageFormSubmit", tpl);

export default () => tpl();
