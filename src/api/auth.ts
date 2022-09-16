import { HTTP } from '../core/HTTP';
import { BASE_URL_API } from "./constants";
import Store from "../core/Store/Store";
import { TResponse, TStatus } from "./";

const httpInstance = new HTTP;

export type TUser = {
  id: number,
  display_name: string,
  avatar: string,
} & Omit<TSignUpData, 'password'>;

export type TSignUpData = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export type TLoginData = {
  login: string,
  password: string,
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
  signUp: async (data: TSignUp): Promise<TResponse<string>> => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/auth/signup`, data)
      return {
        status: <TStatus>res.status,
        response: res.response
      }
    } catch (error) {
      return error;
    }
  },

  login: async (data: TLogin): Promise<TResponse<string>> => {
    try {
      const res = await httpInstance.post(`${BASE_URL_API}/api/v2/auth/signin`, data)
      return {
        status: <TStatus>res.status,
        response: res.response
      }
    } catch (error) {
      return error;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await httpInstance.post(`${BASE_URL_API}/api/v2/auth/logout`);
      localStorage.removeItem(Store.STORE_NAME);
    } catch (error) {
      return error;
    }
  },

  getUserInfo: async (): Promise<TResponse<TUser>> => {
    try {
      const res = await httpInstance.get(`${BASE_URL_API}/api/v2/auth/user`)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  }
}

export default AuthAPI;