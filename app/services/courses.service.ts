import axios from 'api/interceptors';
import { getCoursesUrl } from 'config/api.config';

import { ICourses } from '@/shared/types/request.types';

export const CoursesService = {
  async findAll() {
    return axios.get<{ response: ICourses[] }>(getCoursesUrl(''));
  },

  async findByPk(id: string) {
    return axios.get<{ response: ICourses }>(getCoursesUrl(id));
  },

  async findByName(name: string) {
    return axios.get<{ response: ICourses }>(getCoursesUrl(`name/${name}`));
  },

  async delete(id: string) {
    return axios.put<{ response: ICourses }>(getCoursesUrl(id));
  },
};
