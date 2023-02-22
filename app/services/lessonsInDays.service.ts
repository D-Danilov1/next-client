import axios from 'api/interceptors'
import { getLessonsInDaysUrl } from 'config/api.config'

import { ILessonsInDays } from '@/shared/types/request.types'

export const LessonsInDaysService = {
	async findAll() {
		return axios.get<{ response: ILessonsInDays[] }>(getLessonsInDaysUrl(''))
	},

	async findByPk(id: string) {
		return axios.get<{ response: ILessonsInDays }>(getLessonsInDaysUrl(id))
	},

	async findByName(name: string) {
		return axios.get<{ response: ILessonsInDays }>(
			getLessonsInDaysUrl(`name/${name}`)
		)
	},

	async delete(id: string) {
		return axios.put<{ response: ILessonsInDays }>(getLessonsInDaysUrl(id))
	},
}
