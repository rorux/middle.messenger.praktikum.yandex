import Handlebars from "handlebars";
import tpl from "./search.hbs";
import "./search.scss";

Handlebars.registerPartial("search", tpl);

export default () => tpl();
