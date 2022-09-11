import { HTTP } from '../core/HTTP';
import { BASE_URL_API } from "./constants";
import { TError, TResponse, TStatus } from "./";

const httpInstance = new HTTP;

export type TChat = {
  id: number;
  name: string;
};

export type TChatAPI = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number,
  last_message: {
    user: {
      first_name: string;
        second_name: string;
        avatar: string;
        email: string;
        login: string;
        phone: string;
    },
    time: string;
    content: string;
  }
}

export type TChatDelete = {
  userId: number,
  result: {
    id: number,
    title: string,
    avatar: string
  }
}

export type TAddChatData = {
  title: string;
}

export type TAddChat = {
  data : TAddChatData,
  headers: {
    [index: string]: string
  }
}

export type TAddUserToChatData = {
  chatId: number;
  users?: number[];
}

export type TAddUserToChat = {
  data : TAddUserToChatData,
  headers: {
    [index: string]: string
  }
}

export type TToken = {
  token: string;
}

const ChatsAPI = {

  getChats: async (): Promise<TResponse<TChatAPI[]>> => {
    try {
      const res = await httpInstance.get(`${BASE_URL_API}/api/v2/chats`)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  addChat: async (data: TAddChat): Promise<TResponse<{ id: string } | TError>> => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/chats`, data)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  deleteChat: async (data: TAddUserToChat): Promise<TResponse<TChatDelete | string>> => {
    try {
      const res = await httpInstance.delete(`${BASE_URL_API}/api/v2/chats`, data)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  addUserToChat: async (data: TAddUserToChat): Promise<TResponse<string | TError>> => {
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/chats/users`, data)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  getToken: async (chatId: number): Promise<TResponse<TToken>> => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/chats/token/${chatId}`)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },
}

export default ChatsAPI;