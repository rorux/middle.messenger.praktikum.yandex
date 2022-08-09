import Component from "../../core/Component";
import tpl from "./tpl";
import "./toolbar.scss";

export default class Toolbar extends Component {
  render() {
    return this.compile(tpl);
  }
}
