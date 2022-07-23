import Handlebars from "handlebars";
import tpl from "./messageItem.hbs";

Handlebars.registerHelper("isImg", function (value) {
  return value === "img";
});

Handlebars.registerPartial("messageItem", tpl);

export default (type, content, myMessage) => {
  return tpl({ type, content, myMessage });
};
