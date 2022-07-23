import Handlebars from "handlebars";
import tpl from "./linkToProfile.hbs";

Handlebars.registerPartial("linkToProfile", tpl);

export default () => tpl();
