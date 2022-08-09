import Component from "../../../core/Component";
import tpl from "./tpl";
import LinkToProfile from "../../../components/linkToProfile";
import Search from "../../../components/search";
import chatList from "../../../components/chatList";

export class ChatsSide extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default () =>
  new ChatsSide("div", {
    attr: { class: "chats-side" },
    linkToProfile: new LinkToProfile("div", {
      attr: { class: "chats-side__to-profile" },
    }),
    search: new Search("div", {
      attr: { class: "search" },
    }),
    chatList: chatList(),
  });
