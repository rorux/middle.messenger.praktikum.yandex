import Handlebars from "handlebars";
import tpl from "./chatList.hbs";
import chatItem from "../chatItem";
import "./chatList.scss";

Handlebars.registerPartial("chatList", tpl);

export default () => tpl();
