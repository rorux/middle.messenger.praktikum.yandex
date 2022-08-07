import Component from "../../core/Component";
import tpl from "./tpl";
import ChatItem from "../chatItem";
import "./chatList.scss";

export class ChatList extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default (): Component =>
  new ChatList("div", {
    attr: { class: "chat-list" },
    chatItem1: new ChatItem("div", {
      avatar: "img/avatar.png",
      name: "Андрей",
      lastMessage: "Изображение",
      time: "10:49",
      countUnread: 2,
      myMessage: false,
      attr: { class: "chat-item" },
    }),
    chatItem2: new ChatItem("div", {
      avatar: "img/avatar.png",
      name: "Киноклуб",
      lastMessage: "Изображение",
      time: "12:00",
      countUnread: null,
      myMessage: true,
      attr: { class: "chat-item" },
    }),
    chatItem3: new ChatItem("div", {
      avatar: "img/avatar.png",
      name: "Илья",
      lastMessage: "Друзья, у меня для вас особенный выпуск свежих новостей!",
      time: "15:12",
      countUnread: 4,
      myMessage: false,
      attr: { class: "chat-item" },
    }),
    chatItem4: new ChatItem("div", {
      avatar: "img/avatar.png",
      name: "Вадим",
      lastMessage: "Круто!",
      time: "Пт",
      countUnread: null,
      myMessage: true,
      attr: { class: "chat-item" },
    }),
    chatItem5: new ChatItem("div", {
      avatar: "img/avatar.png",
      name: "Day",
      lastMessage:
        "Так увлёкся работой по курсу, что совсем забыл его анонсировать.",
      time: "1 мая 2020",
      countUnread: null,
      myMessage: false,
      attr: { class: "chat-item" },
    }),
  });
