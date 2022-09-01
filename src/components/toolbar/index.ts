import Component, {TpropsAndChilds} from "../../core/Component";
import tpl from "./tpl";
import { TUser } from "../../api/auth";
import { Actions } from "../../core/Store";
import "./toolbar.scss";

export default class Toolbar extends Component {
  constructor(tag: string, props: TpropsAndChilds) {
    props.firstName = (Actions.getUserState() as TUser).first_name
    super(tag, props)
  }
  render() {
    return this.compile(tpl);
  }
}
