import Component from "@core/Component";
import tpl from "./tpl";
import "./form.scss";

export default class formInput extends Component {
  render() {
    return this.compile(tpl);
  }
}
