import { useMemo } from 'react'
import { useMutation } from 'react-query'

import { ICoursesCreate, IWeeks, IWeeksCreate } from '@/shared/types/request.types'

import { CoursesService } from '@/services/courses.service'
import { WeeksService } from '@/services/weeks.service'

export const useAdmin = () => {
  const { mutateAsync: createWeek } = useMutation('create week', (data: IWeeksCreate) =>
    WeeksService.create(data),
  )

  const { mutateAsync: createCourse } = useMutation('create course', (data: ICoursesCreate) =>
    CoursesService.create(data),
  )

  return useMemo(
    () => ({
      createWeek,
      createCourse,
    }),
    [createWeek, createCourse],
  )
}
