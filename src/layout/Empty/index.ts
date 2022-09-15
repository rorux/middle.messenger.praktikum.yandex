import Component from "@core/Component";
import tpl from "./tpl";

export default class EmptyLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
