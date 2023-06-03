import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { CoursesService } from '@/services/courses.service'

export const useHome = () => {
  const { data: courses, isLoading } = useQuery('get courses', () => CoursesService.findAll(), {
    select: ({ data }) => data.response,
  })

  return useMemo(
    () => ({
      courses,
      isLoading,
    }),
    [courses, isLoading],
  )
}
