import axios from 'api/interceptors'
import { getCompletedLessonsUrl } from 'config/api.config'

import { ICompletedLessons } from '@/shared/types/request.types'

export const CompletedLessonsService = {
  async create(data: ICompletedLessons) {
    return axios.post<{ response: ICompletedLessons }>(getCompletedLessonsUrl(''), data)
  },

  async findAll() {
    return axios.get<{ response: ICompletedLessons[] }>(getCompletedLessonsUrl(''))
  },

  async findByPk(id: string) {
    return axios.get<{ response: ICompletedLessons }>(getCompletedLessonsUrl(id))
  },

  async findBySchedule(id: number) {
    return axios.get<{ response: ICompletedLessons }>(getCompletedLessonsUrl(`schedule/${id}`))
  },

  async findAllBySchedule() {
    return axios.get<{ response: number[] }>(getCompletedLessonsUrl(`all-schedule`))
  },

  async findByName(name: string) {
    return axios.get<{ response: ICompletedLessons }>(getCompletedLessonsUrl(`name/${name}`))
  },

  async delete(id: string) {
    return axios.put<{ response: ICompletedLessons }>(getCompletedLessonsUrl(id))
  },
}
