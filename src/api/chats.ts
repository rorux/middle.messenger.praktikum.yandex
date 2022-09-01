import { HTTP } from '../core/HTTP';
import { BASE_URL_API } from "./constants";

const httpInstance = new HTTP;

export type TChat = {
  id: number;
  name: string;
};

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

const ChatsAPI = {

  getChats: async () => {
    try {
      const res = await httpInstance.get(`${BASE_URL_API}/api/v2/chats`)
      return {
        status: res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  addChat: async (data: TAddChat) => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/chats`, data)
      return {
        status: res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  deleteChat: async (data: TAddUserToChat) => {
    try {
      const res = await httpInstance.delete(`${BASE_URL_API}/api/v2/chats`, data)
      return {
        status: res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  addUserToChat: async (data: TAddUserToChat) => {
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/chats/users`, data)
      return {
        status: res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  getToken: async (chatId: number) => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/chats/token/${chatId}`)
      return {
        status: res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },
}

export default ChatsAPI;