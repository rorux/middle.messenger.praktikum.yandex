import AuthAPI from "./auth";
import UsersAPI from "./users";
import ChatsAPI from "./chats";

export type TStatus = 200 | 400 | 401 | 403 | 404 | 500;

export type TError = {
  reason: string;
}

export type TResponse<T> = {
  status: TStatus;
  response: T;
}

export { AuthAPI, UsersAPI, ChatsAPI }