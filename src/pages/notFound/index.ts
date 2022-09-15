import Component from "@core/Component";
import tpl from "./tpl";
import "./page-error.scss";

export class NotFound extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default (): Component =>
  new NotFound("div", { attr: { class: "content-center" } });
