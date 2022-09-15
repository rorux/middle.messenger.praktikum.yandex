import Component from "@core/Component";
import tpl from "./tpl";
import { ChatsAPI } from "../../api";
import { Actions } from "@core/Store";
import "./chatItem.scss";

export default class ChatItem extends Component {
  render() {
    return this.compile(tpl);
  }

  addEvents() {
    const activeChatBtn = this._element.querySelector<HTMLButtonElement>("#activate-chat");
    const deleteChatBtn = this._element.querySelector<HTMLButtonElement>("#delete-chat");
    const chatItemWrap = this._element.querySelector(".chat-item__wrap") as HTMLDivElement;

    deleteChatBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      (async () => {
        await ChatsAPI.deleteChat({
          data: { chatId: +this._props.id },
          headers: {'Content-Type': 'application/json'}
        })
        chatItemWrap.style.display = "none";
        console.log(`Чат ${this._props.id} удален...`)
      })();
    })

    activeChatBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      Actions.changeChatData({
        id: +this._props.id,
        name: this._props.name as string,
      });
      (async () => {
        const res = await ChatsAPI.getToken(+this._props.id)
        Actions.setTokenState(res.response.token)
      })();
    })
  }
}
