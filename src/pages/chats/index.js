import tpl from "./chats.hbs";
import search from "../../components/search";
import linkToProfile from "../../components/linkToProfile";
import toolbar from "../../components/toolbar";
import chatList from "../../components/chatList";
import messageList from "../../components/messageList";
import messageForm from "../../components/messageForm";

export default () => {
  const chatItems = [
    {
      avatar: "img/avatar.png",
      name: "Андрей",
      lastMessage: "Изображение",
      time: "10:49",
      countUnread: 2,
      myMessage: false,
    },
    {
      avatar: "img/avatar.png",
      name: "Киноклуб",
      lastMessage: "Изображение",
      time: "12:00",
      countUnread: null,
      myMessage: true,
    },
    {
      avatar: "img/avatar.png",
      name: "Илья",
      lastMessage: "Друзья, у меня для вас особенный выпуск свежих новостей!",
      time: "15:12",
      countUnread: 4,
      myMessage: false,
    },
    {
      avatar: "img/avatar.png",
      name: "Вадим",
      lastMessage: "Круто!",
      time: "Пт",
      countUnread: null,
      myMessage: true,
    },
    {
      avatar: "img/avatar.png",
      name: "Day",
      lastMessage:
        "Так увлёкся работой по курсу, что совсем забыл его анонсировать.",
      time: "1 мая 2020",
      countUnread: null,
      myMessage: false,
    },
  ];

  const messages = [
    {
      type: "text",
      content:
        "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
      myMessage: false,
    },
    {
      type: "img",
      content: "img/message-img.jpg",
      myMessage: false,
    },
    {
      type: "text",
      content: "Круто!",
      myMessage: true,
    },
    {
      type: "text",
      content: "Не знал",
      myMessage: true,
    },
    {
      type: "text",
      content: "Сам недавно прочитал",
      myMessage: false,
    },
  ];

  return tpl({ chatItems, messages });
};
