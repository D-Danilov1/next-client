import { IUser } from '@/shared/types/user.types'

export interface IUserState {
  roles: string[]
  email: string
  id: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IInitialState {
  user: IUserState | null
  isLoading: boolean
}

export interface IAuthUser {
  email: string
  password: string
}

export interface IAuthResponse {
  response: {
    accessToken: string
    refreshToken: string
    user: IUser
  }
}

export interface IResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}
