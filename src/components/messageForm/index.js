import Handlebars from "handlebars";
import tpl from "./messageForm.hbs";
import messageFormFile from "../messageFormFile";
import messageFormInput from "../messageFormInput";
import messageFormSubmit from "../messageFormSubmit";
import "./messageForm.scss";

Handlebars.registerPartial("messageForm", tpl);

export default () => tpl();
