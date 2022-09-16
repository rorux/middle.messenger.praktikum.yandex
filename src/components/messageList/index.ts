import Component from "@core/Component";
import { TChat } from "@api/chats";
import { Actions } from "@core/Store";
import connect from "@core/Store/Connect";
import tpl from "./tpl";
import "./messages.scss";

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
  });
