import Component from "@core/Component";
import Toolbar from "@components/toolbar";
import messageList from "@components/messageList";
import messageForm from "@components/messageForm";
import { Actions } from "@core/Store";
import { TChat } from "@api/chats";
import tpl from "./tpl";

export class ChatsArea extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default () =>
  new ChatsArea("div", {
    name: (Actions.getChatState() as TChat).name,
    attr: { class: "chat-area" },
    toolbar: new Toolbar("header", {
      attr: { class: "toolbar" },
    }),
    messageList: messageList(),
    messageForm: messageForm(),
  });
