import Component from "../../../core/Component";
import tpl from "./tpl";
import Toolbar from "../../../components/toolbar";
import messageList from "../../../components/messageList";
import messageForm from "../../../components/messageForm";

export class ChatsArea extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default () =>
  new ChatsArea("div", {
    attr: { class: "chat-area" },
    toolbar: new Toolbar("header", {
      attr: { class: "toolbar" },
    }),
    messageList: messageList(),
    messageForm: messageForm(),
  });
