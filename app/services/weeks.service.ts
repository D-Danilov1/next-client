import axios from 'api/interceptors'
import { getWeeksUrl } from 'config/api.config'

import { IWeeks, IWeeksCreate } from '@/shared/types/request.types'

export const WeeksService = {
  async create(data: IWeeksCreate) {
    return axios.post<{ response: IWeeks }>(getWeeksUrl(''), data)
  },
  async findAll() {
    return axios.get<{ response: IWeeks[] }>(getWeeksUrl(''))
  },

  async findByPk(id: string) {
    return axios.get<{ response: IWeeks }>(getWeeksUrl(id))
  },

  async findByName(name: string) {
    return axios.get<{ response: IWeeks }>(getWeeksUrl(`name/${name}`))
  },

  async delete(id: string) {
    return axios.put<{ response: IWeeks }>(getWeeksUrl(id))
  },
}
