import Component from "../../core/Component";
import tpl from "./tpl";

export default class MessageFormFile extends Component {
  render() {
    return this.compile(tpl);
  }
}
