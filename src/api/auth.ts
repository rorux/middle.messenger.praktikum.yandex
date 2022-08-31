import { HTTP } from '../core/HTTP';
import { BASE_URL_API } from "./constants";
import Store from "../core/Store/Store";

const httpInstance = new HTTP;

export type TUser = {
  "id": number,
  "display_name": "string",
  "avatar": "string",
} & Omit<TSignUpData, 'password'>;

export type TSignUpData = {
  "first_name": "string",
  "second_name": "string",
  "login": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}

export type TLoginData = {
  "login": "string",
  "password": "string",
} | {}

export type TSignUp = {
  data : TSignUpData,
  headers: {
    [index: string]: string
  }
}

type TLogin = {
  data : TLoginData,
  headers: {
    [index: string]: string
  }
}

const AuthAPI = {
  signUp: async (data: TSignUp) => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/auth/signup`, data)
      return {
        status: res.status,
        response: typeof res.response === 'object' ? JSON.parse(res.response) : res.response
      }
    } catch (error) {
      return error;
    }
  },

  login: async (data: TLogin) => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/auth/signin`, data)
      return {
        status: res.status,
        response: typeof res.response === 'object' ? JSON.parse(res.response) : res.response
      }
    } catch (error) {
      return error;
    }
  },

  logout: async () => {
    try {
      await httpInstance.post(`${BASE_URL_API}/api/v2/auth/logout`);
      localStorage.removeItem(Store.STORE_NAME);
    } catch (error) {
      return error;
    }
  },

  getUserInfo: async () => {
    try {
      const res = await httpInstance.get(`${BASE_URL_API}/api/v2/auth/user`)
      return {
        status: res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  }
}

export default AuthAPI;