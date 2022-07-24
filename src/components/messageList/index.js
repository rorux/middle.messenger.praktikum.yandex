import Handlebars from "handlebars";
import tpl from "./messageList.hbs";
import messageItem from "../messageItem";
import "./messages.scss";

Handlebars.registerPartial("messageList", tpl);

export default () => tpl();
