import Handlebars from "handlebars";
import tpl from "./toolbar.hbs";
import "./toolbar.scss";

Handlebars.registerPartial("toolbar", tpl);

export default () => tpl();
