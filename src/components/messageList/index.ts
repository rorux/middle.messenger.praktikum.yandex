import Component from "../../core/Component";
import tpl from "./tpl";
import MessageItem from "../messageItem";
import { TChat } from "../../api/chats";
import { Actions } from "../../core/Store";
import "./messages.scss";
import connect from "../../core/Store/Connect";

export class MessageList extends Component {
  render() {
    return this.compile(tpl);
  }
}

const MessageListConnectedStore = connect(MessageList, (state) => {
  return state.chat ?? {}
})

export default () =>
  new MessageListConnectedStore("section", {
    name: (Actions.getChatState() as TChat).name,
    attr: { class: "messages" },
    messageItem1: new MessageItem("div", {
      type: "text",
      content:
        "<p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>",
      myMessage: false,
      attr: { class: "messages__friend" },
    }),
    messageItem2: new MessageItem("div", {
      type: "img",
      content: '<img src="img/message-img.jpg" alt="" />',
      myMessage: false,
      attr: { class: "messages__friend" },
    }),
    messageItem3: new MessageItem("div", {
      type: "text",
      content: "<p>Круто!</p>",
      myMessage: true,
      attr: { class: "messages__me" },
    }),
    messageItem4: new MessageItem("div", {
      type: "text",
      content: "<p>Не знал</p>",
      myMessage: true,
      attr: { class: "messages__me" },
    }),
    messageItem5: new MessageItem("div", {
      type: "text",
      content: "<p>Сам недавно прочитал</p>",
      myMessage: false,
      attr: { class: "messages__friend" },
    }),
  });
