import Cookies from 'js-cookie'

import { IResponse } from '@/store/user/user.interface'

export const saveTokensStorage = (data: IResponse) => {
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: IResponse) => {
  saveTokensStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
}
