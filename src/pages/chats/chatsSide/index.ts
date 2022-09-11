import Component from "../../../core/Component";
import tpl from "./tpl";
import LinkToProfile from "../../../components/linkToProfile";
import Search from "../../../components/search";
import chatList from "../../../components/chatList";
import { ChatsAPI } from "../../../api";

export class ChatsSide extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default (): Promise<Component> =>
  (async () => {
    const resGetChats = await ChatsAPI.getChats();
    return new ChatsSide("div", {
      attr: {class: "chats-side"},
      linkToProfile: new LinkToProfile("div", {
        attr: {class: "chats-side__to-profile"},
      }),
      search: new Search("div", {
        attr: {class: "search"},
      }),
      chatList: chatList(resGetChats?.response),
    })
  })()

