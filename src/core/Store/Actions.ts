import Store from './Store';
import { TUser } from "@api/auth";
import { TChat } from "@api/chats";

const store = new Store();

const getUserState = (): TUser | {} => {
  const state = store.getState();
  return state.user ?? {};
}

const changeUserData = (user: TUser) => {
  store.set('user', user);
}

const getChatState = (): TChat | {} => {
  const state = store.getState();
  return state.chat ?? {};
}

const changeChatData = (chat: TChat) => {
  store.set('chat', chat);
}

const getTokenState = (): string | null => {
  const state = store.getState();
  return state.token ?? null;
}

const setTokenState = (token: string) => {
  store.set('token', token);
}

export {
  getUserState,
  changeUserData,
  getChatState,
  changeChatData,
  setTokenState,
  getTokenState
}