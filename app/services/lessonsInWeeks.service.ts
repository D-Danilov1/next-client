import axios from 'api/interceptors'
import { getLessonsInWeeksUrl } from 'config/api.config'

import { ILessonsInWeeks } from '@/shared/types/request.types'

export const LessonsInWeeksService = {
	async findAll() {
		return axios.get<{ response: ILessonsInWeeks[] }>(getLessonsInWeeksUrl(''))
	},

	async findByPk(id: string) {
		return axios.get<{ response: ILessonsInWeeks }>(getLessonsInWeeksUrl(id))
	},

	async findByName(name: string) {
		return axios.get<{ response: ILessonsInWeeks }>(getLessonsInWeeksUrl(`name/${name}`))
	},

	async delete(id: string) {
		return axios.put<{ response: ILessonsInWeeks }>(getLessonsInWeeksUrl(id))
	},
}
