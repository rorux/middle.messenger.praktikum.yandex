import Component from "../../core/Component";
import tpl from "./tpl";
import ChatItem from "../chatItem";
import formInput from "../formInput";
import selectInput from "../selectInput";
import { ChatsAPI } from "../../api";
import { TChatAPI } from "../../api/chats";
import "./chatList.scss";

export class ChatList extends Component {
    render() {
    return this.compile(tpl);
  }

  addEvents() {
    const newChatInput = this._element.querySelector<HTMLInputElement>("#new-chat");
    const addChatBtn = this._element.querySelector<HTMLButtonElement>("#add-chat-btn");

    const newUserInput = this._element.querySelector<HTMLInputElement>("#new-user");
    const newUserChatSelect = this._element.querySelector<HTMLSelectElement>("#new-user-chat");
    const addUserToChatBtn = this._element.querySelector<HTMLButtonElement>("#add-user-to-chat-btn");

    addChatBtn?.addEventListener("click", (e) => {
      e.preventDefault();

      if(newChatInput?.value) {
        (async () => {
          const newChat = await ChatsAPI.addChat({
            data: {title: newChatInput.value},
            headers: {'Content-Type': 'application/json'}
          })

          console.log('Добавлен новый чат', newChat)
        })();
      }
    })

    addUserToChatBtn?.addEventListener("click", (e) => {
      e.preventDefault();

      if(newUserInput?.value && newUserChatSelect?.value) {
        (async () => {
          await ChatsAPI.addUserToChat({
            data: { chatId: +newUserChatSelect.value, users: [ +newUserInput.value ]},
            headers: {'Content-Type': 'application/json'}
          })

          console.log(`Пользователь ${newUserInput.value} добавлен в чат ${newUserChatSelect.value}...`)
        })();
      }
    })
  }
}

export type TChat = {
  id: number;
  created_by: number;
  avatar: string | null;
  last_message: string | null;
  title: string;
  unread_count: number;
}

export default (chats: TChatAPI[]): Component => {
  let chatItem1 = null;
  let chatItem2 = null;
  let chatItem3 = null;

  let option1 = null;
  let option2 = null;
  let option3 = null;

  if(chats.length) {
    chatItem1 = new ChatItem("div", {
      avatar: "img/avatar.png",
      name: chats[0].title,
      lastMessage: "",
      time: "",
      countUnread: 0,
      myMessage: false,
      id: chats[0].id,
      attr: { class: "chat-item" },
    });
    option1 = { id: chats[0].id, name: chats[0].title };

    if(chats[1]) {
      chatItem2 = new ChatItem("div", {
        avatar: "img/avatar.png",
        name: chats[1].title,
        lastMessage: "",
        time: "",
        countUnread: 0,
        myMessage: false,
        id: chats[1].id,
        attr: { class: "chat-item" },
      });
      option2 = { id: chats[1].id, name: chats[1].title };
    }
    if(chats[2]) {
      chatItem3 = new ChatItem("div", {
        avatar: "img/avatar.png",
        name: chats[2].title,
        lastMessage: "",
        time: "",
        countUnread: 0,
        myMessage: false,
        id: chats[2].id,
        attr: { class: "chat-item" },
      });
      option3 = { id: chats[2].id, name: chats[2].title };
    }
  } else chatItem1 = "Нет чатов";

  return new ChatList("div", {
    attr: { class: "chat-list" },
    chatItem1,
    chatItem2,
    chatItem3,
    addChatInput: new formInput("div", {
      type: "text",
      param: "new-chat",
      name: "Введите название чата",
      attr: { class: "form__group" },
    }),
    addUserInput: new formInput("div", {
      type: "text",
      param: "new-user",
      name: "Введите ID пользователя",
      attr: { class: "form__group" },
    }),
    addUserChatInput: new selectInput("div", {
      param: "new-user-chat",
      option1,
      option2,
      option3
    }),
  })
}
