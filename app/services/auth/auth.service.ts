import { getContentType } from 'api/api.helpers'
import axios, { axiosClassic } from 'api/interceptors'
import Cookies from 'js-cookie'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
  async register(email: string, password: string) {
    const { data } = await axios.post<IAuthResponse>('/registration', {
      email,
      password,
    })

    if (data.response.accessToken) {
      saveToStorage(data.response)
    }

    return data
  },

  async login(email: string, password: string) {
    const { data } = await axios.post<IAuthResponse>('/login', {
      email,
      password,
    })
    if (data.response.accessToken) {
      saveToStorage(data.response)
    }
    return data
  },

  async logout() {
    removeTokensStorage()
    localStorage.removeItem('user')
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const { data } = await axiosClassic.put<IAuthResponse>(
      '/refresh',
      { refreshToken },
      { headers: getContentType() },
    )

    if (data.response.accessToken) {
      saveToStorage(data.response)
    }

    return data
  },
}
