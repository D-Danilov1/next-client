import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { CoursesService } from '@/services/courses.service'
import { DaysService } from '@/services/days.service'
import { LessonsService } from '@/services/lessons.service'
import { WeeksService } from '@/services/weeks.service'

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

	const { data: weeks } = useQuery('get weeks', () => WeeksService.findAll(), {
		select: ({ data }) => data.response,
	})

	const { data: days } = useQuery('get days', () => DaysService.findAll(), {
		select: ({ data }) => data.response,
	})

	return useMemo(
		() => ({
			course,
			lesson,
			weeks,
			days,
		}),
		[course, lesson, weeks, days]
	)
}
