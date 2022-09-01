import Component from "../../core/Component";
import tpl from "./tpl";
import "./chatItem.scss";
import { ChatsAPI } from "../../api";
import { Actions } from "../../core/Store";

export default class ChatItem extends Component {
  render() {
    return this.compile(tpl);
  }

  addEvents() {
    const activeChatBtn = this._element.querySelector("#activate-chat") as HTMLButtonElement;
    const deleteChatBtn = this._element.querySelector("#delete-chat") as HTMLButtonElement;
    const chatItemWrap = this._element.querySelector(".chat-item__wrap") as HTMLButtonElement;

    deleteChatBtn.addEventListener("click", (e) => {
      e.preventDefault();
      ChatsAPI.deleteChat({
        data: { chatId: +this._props.id },
        headers: {'Content-Type': 'application/json'}
      }).then(() => {
        chatItemWrap.style.display = "none";
        console.log(`Чат ${this._props.id} удален...`)
      }
      )
    })

    activeChatBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Actions.changeChatData({
        id: +this._props.id,
        name: this._props.name as string,
      })
      ChatsAPI.getToken(+this._props.id)
        .then(res => Actions.setTokenState(res.response.token))
    })
  }
}
