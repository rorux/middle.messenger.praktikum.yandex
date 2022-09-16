import Component from "@core/Component";
import MessageFormFile from "@components/messageFormFile";
import MessageFormInput from "@components/messageFormInput";
import MessageFormSubmit from "@components/messageFormSubmit";
import tpl from "./tpl";
import "./messageForm.scss";

export class MessageForm extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default () =>
  new MessageForm("message-form", {
    attr: { class: "message-form" },
    messageFormFile: new MessageFormFile("button", {
      attr: { class: "message-form__file" },
    }),
    messageFormInput: new MessageFormInput("div", {
      attr: { class: "message-form__input" },
    }),
    messageFormSubmit: new MessageFormSubmit("button", {
      attr: { class: "message-form__submit button-circle" },
    }),
  });
