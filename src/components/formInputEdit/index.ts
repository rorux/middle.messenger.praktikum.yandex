import Component from "@core/Component";
import tpl from "./tpl";
import "./form-edit.scss";

export default class formInputEdit extends Component {
  render() {
    return this.compile(tpl);
  }
}
