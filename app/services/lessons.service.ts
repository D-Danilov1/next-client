import axios from 'api/interceptors'
import { getLessonsUrl } from 'config/api.config'

import { ILessons } from '@/shared/types/request.types'

export const LessonsService = {
  async findAll() {
    return axios.get<{ response: ILessons[] }>(getLessonsUrl(''))
  },

  async findByPk(id: string) {
    return axios.get<{ response: ILessons }>(getLessonsUrl(id))
  },

  async findByName(name: string) {
    return axios.get<{ response: ILessons }>(getLessonsUrl(`name/${name}`))
  },

  async delete(id: string) {
    return axios.put<{ response: ILessons }>(getLessonsUrl(id))
  },
}
