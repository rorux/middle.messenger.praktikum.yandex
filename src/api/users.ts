import {HTTP, TOptions} from '../core/HTTP';
import { BASE_URL_API } from "./constants";
import { TSignUp, TUser } from "./auth";
import { TError, TResponse, TStatus } from "./";

const httpInstance = new HTTP;

export type TEditPassword = {
  data : {
    oldPassword: string,
    newPassword: string,
  },
  headers: {
    [index: string]: string
  }
}

const UsersAPI = {
  editProfile: async (data: TSignUp): Promise<TResponse<TUser | TError>> => {
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/user/profile`, data)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  editPassword: async (data: TEditPassword): Promise<TResponse<string>> => {
    console.log(data)
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/user/password`, data)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },

  changeAvatar: async (data: TOptions): Promise<TResponse<string>> => {
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/user/profile/avatar`, data)
      return {
        status: <TStatus>res.status,
        response: JSON.parse(res.response)
      }
    } catch (error) {
      return error;
    }
  },
}

export default UsersAPI;