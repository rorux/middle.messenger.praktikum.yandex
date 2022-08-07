import Component from "../../core/Component";
import tpl from "./tpl";
import "./chatItem.scss";

export default class ChatItem extends Component {
  render() {
    return this.compile(tpl);
  }
}
