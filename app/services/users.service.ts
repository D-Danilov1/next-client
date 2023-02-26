import axios from 'api/interceptors'
import { getUsersUrl } from 'config/api.config'

import { IUser } from '@/shared/types/user.types'

export const UsersService = {
  async findAll() {
    return axios.get<{ response: IUser[] }>(getUsersUrl(''))
  },

  async delete(id: string) {
    return axios.put<string>(getUsersUrl(id))
  },
}
