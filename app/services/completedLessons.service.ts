import axios from 'api/interceptors'
import { getCompletedLessonsUrl } from 'config/api.config'

import { ICompletedLessons } from '@/shared/types/request.types'

export const CompletedLessonsService = {
	async findAll() {
		return axios.get<{ response: ICompletedLessons[] }>(
			getCompletedLessonsUrl('')
		)
	},

	async findByPk(id: string) {
		return axios.get<{ response: ICompletedLessons }>(
			getCompletedLessonsUrl(id)
		)
	},

	async findByName(name: string) {
		return axios.get<{ response: ICompletedLessons }>(
			getCompletedLessonsUrl(`name/${name}`)
		)
	},

	async delete(id: string) {
		return axios.put<{ response: ICompletedLessons }>(
			getCompletedLessonsUrl(id)
		)
	},
}
