import axios from 'api/interceptors';
import { getWeeksUrl } from 'config/api.config';

import { IWeeks } from '@/shared/types/request.types';

export const WeeksService = {
  async findAll() {
    return axios.get<{ response: IWeeks[] }>(getWeeksUrl(''));
  },

  async findByPk(id: string) {
    return axios.get<{ response: IWeeks }>(getWeeksUrl(id));
  },

  async findByName(name: string) {
    return axios.get<{ response: IWeeks }>(getWeeksUrl(`name/${name}`));
  },

  async delete(id: string) {
    return axios.put<{ response: IWeeks }>(getWeeksUrl(id));
  },
};
