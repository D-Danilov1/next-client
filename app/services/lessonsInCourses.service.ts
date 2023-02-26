import axios from 'api/interceptors'
import { getLessonsInCoursesUrl } from 'config/api.config'

import { ILessonsInCourses } from '@/shared/types/request.types'

export const LessonsInCoursesService = {
  async findAll() {
    return axios.get<{ response: ILessonsInCourses[] }>(getLessonsInCoursesUrl(''))
  },

  async findByPk(id: string) {
    return axios.get<{ response: ILessonsInCourses }>(getLessonsInCoursesUrl(id))
  },

  async findByCourseId(id: string) {
    return axios.get<{ response: ILessonsInCourses[] }>(getLessonsInCoursesUrl(`course/${id}`))
  },

  async getSortedCourse(id: string) {
    return axios.get<{ response: any }>(getLessonsInCoursesUrl(`course-sorted/${id}`))
  },

  async findByName(name: string) {
    return axios.get<{ response: ILessonsInCourses }>(getLessonsInCoursesUrl(`name/${name}`))
  },

  async delete(id: string) {
    return axios.put<{ response: ILessonsInCourses }>(getLessonsInCoursesUrl(id))
  },
}
