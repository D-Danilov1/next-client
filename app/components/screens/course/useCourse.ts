import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { CoursesService } from '@/services/courses.service'
import { LessonsService } from '@/services/lessons.service'

export const useCourse = () => {
	const { query } = useRouter()

	const { data: course } = useQuery(
		'get courses',
		() => CoursesService.findByPk(String(query?.id)),
		{
			select: ({ data }) => data.response,
			enabled: !!query.id,
		}
	)

	const { data: lesson } = useQuery(
		'get lessons',
		() => LessonsService.findAll(),
		{
			select: ({ data }) => data.response,
			enabled: !!query.id,
		}
	)

	return useMemo(
		() => ({
			course,
			lesson,
		}),
		[course, lesson]
	)
}
