import Component, { TpropsAndChilds } from "../../core/Component";
import tpl from "./tpl";
import { Actions } from "../../core/Store";
import { TUser } from "../../api/auth"
import { TChat } from "../../api/chats";

const addNewMessage = (className: string, text: string): void => {
  const messageListWrap = document.querySelector<HTMLDivElement>("#message-list");

  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  const div = document.createElement('div');
  div.className = className;

  div.appendChild(paragraph);
  messageListWrap?.appendChild(div);
}

export default class MessageFormSubmit extends Component {
  constructor(tagName: string, props: TpropsAndChilds) {
    const userId = (Actions.getUserState() as TUser).id;
    const chatId = (Actions.getChatState() as TChat).id;
    const token = Actions.getTokenState()
    props.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`)
    super(tagName, props);
  }
  render() {
    return this.compile(tpl);
  }
  addEvents() {
    const sendMessageBtn = this._element.querySelector<SVGElement>("#send-message");

    sendMessageBtn?.addEventListener("click", () => {
      const messageInput = document.querySelector<HTMLInputElement>("#message");

      if(messageInput?.value) {
        const socket = this._props.socket;
        (socket as WebSocket).send(JSON.stringify({
          content: messageInput.value,
          type: 'message',
        }));
        messageInput.value = '';
      }
    });

    (this._props.socket as WebSocket).addEventListener('message', event => {
      const messageFromServer = JSON.parse(event.data);
      const className = messageFromServer.user_id === (Actions.getUserState() as TUser).id
          ? 'messages__me'
          : 'messages__friend';

      addNewMessage(className, JSON.parse(event.data).content)
    });

    (this._props.socket as WebSocket).addEventListener('close', event => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    (this._props.socket as WebSocket).addEventListener('error', event => {
      //@ts-ignore
      console.log('Ошибка', event.message);
    });
  }
}
