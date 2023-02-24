import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

import { ICompletedLessons } from '@/shared/types/request.types'

import { CompletedLessonsService } from '@/services/completedLessons.service'
import { CoursesService } from '@/services/courses.service'
import { LessonsInCoursesService } from '@/services/lessonsInCourses.service'

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

	const { data: courseLessons } = useQuery(
		'get course lessons',
		() => LessonsInCoursesService.findByCourseId(String(query?.id)),
		{
			select: ({ data }) => data.response,
			enabled: !!query.id,
		}
	)

	const { data: completedLesson, isLoading } = useQuery(
		'get completed lesson',
		(id) => CompletedLessonsService.findBySchedule(id),
		{
			select: ({ data }) => data.response,
		}
	)

	const { data: courseSortedLessons } = useQuery(
		'get sorted course lessons',
		() => LessonsInCoursesService.getSortedCourse(String(query?.id)),
		{
			select: ({ data }) => data.response,
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'create completed lessons',
		(data: ICompletedLessons) => CompletedLessonsService.create(data)
	)

	return useMemo(
		() => ({
			course,
			courseLessons,
			courseSortedLessons,
			mutateAsync,
			completedLesson,
			isLoading,
		}),
		[
			course,
			courseLessons,
			courseSortedLessons,
			mutateAsync,
			completedLesson,
			isLoading,
		]
	)
}
