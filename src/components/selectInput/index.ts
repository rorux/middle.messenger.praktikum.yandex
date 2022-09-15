import Component from "@core/Component";
import tpl from "./tpl";
import "./select.scss";

export default class selectInput extends Component {
  render() {
    return this.compile(tpl);
  }
}