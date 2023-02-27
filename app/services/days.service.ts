import axios from 'api/interceptors'
import { getDaysUrl } from 'config/api.config'

import { IDays } from '@/shared/types/request.types'

export const DaysService = {
  async create(data: IDays) {
    return axios.post<{ response: IDays }>(getDaysUrl(''), data)
  },

  async findAll() {
    return axios.get<{ response: IDays[] }>(getDaysUrl(''))
  },

  async findByPk(id: string) {
    return axios.get<{ response: IDays }>(getDaysUrl(id))
  },

  async findByName(name: string) {
    return axios.get<{ response: IDays }>(getDaysUrl(`name/${name}`))
  },

  async delete(id: string) {
    return axios.put<{ response: IDays }>(getDaysUrl(id))
  },
}
