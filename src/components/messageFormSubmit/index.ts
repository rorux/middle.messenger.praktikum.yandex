import Component from "../../core/Component";
import tpl from "./tpl";

export default class MessageFormSubmit extends Component {
  render() {
    return this.compile(tpl);
  }
}
