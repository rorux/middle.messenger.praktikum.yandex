import EventBus from '../EventBus';
import { TUser } from "../../api/auth";
import { TChat } from "../../api/chats";

export type TStore = {
  user?: TUser;
  chat?: TChat;
  token?: string;
}

export default class Store extends EventBus {

  static EVENT_UPDATE = 1;
  static _instance: Store;
  static STORE_NAME = 'myAppStore';

  _state: TStore = {};

  constructor() {

    if(Store._instance)
      return Store._instance;

    super();

    const savedState = localStorage.getItem(Store.STORE_NAME);

    this._state = savedState ? (JSON.parse(savedState) ?? {}) : {}

    Store._instance = this;

    this.on(
      Store.EVENT_UPDATE,
      () => { localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state)); }
    );

    //@ts-ignore
    window._store = this;
  }

  getState() {
    return this._state;
  }

  removeState() {
    this._state = {};
    this.emit(Store.EVENT_UPDATE);
  }

  set(id, value) {
    this._state[id] = value;
    this.emit(Store.EVENT_UPDATE);
    return this;
  }
}