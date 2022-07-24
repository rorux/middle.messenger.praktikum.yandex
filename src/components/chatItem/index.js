import Handlebars from "handlebars";
import tpl from "./chatItem.hbs";
import "./chatItem.scss";

Handlebars.registerPartial("chatItem", tpl);

export default (avatar, name, lastMessage, time, countUnread, myMessage) => {
  return tpl({ avatar, name, lastMessage, time, countUnread, myMessage });
};
