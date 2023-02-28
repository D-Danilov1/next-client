import axios from 'api/interceptors'
import { getCoursesUrl } from 'config/api.config'

import { ICourses, ICoursesCreate } from '@/shared/types/request.types'

export const CoursesService = {
  async create(data: ICoursesCreate) {
    return axios.post<{ response: ICourses }>(getCoursesUrl(''), data)
  },

  async findAll() {
    return axios.get<{ response: ICourses[] }>(getCoursesUrl(''))
  },

  async findByPk(id: string) {
    return axios.get<{ response: ICourses }>(getCoursesUrl(id))
  },

  async findByName(name: string) {
    return axios.get<{ response: ICourses }>(getCoursesUrl(`name/${name}`))
  },

  async delete(id: string) {
    return axios.put<{ response: ICourses }>(getCoursesUrl(id))
  },
}
