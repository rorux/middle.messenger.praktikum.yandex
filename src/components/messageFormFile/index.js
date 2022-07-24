import Handlebars from "handlebars";
import tpl from "./messageFormFile.hbs";

Handlebars.registerPartial("messageFormFile", tpl);

export default () => tpl();
