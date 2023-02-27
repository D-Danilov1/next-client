import { useMemo } from 'react'
import { useMutation } from 'react-query'

import { IDays, IWeeks } from '@/shared/types/request.types'

import { DaysService } from '@/services/days.service'
import { WeeksService } from '@/services/weeks.service'

export const useAdmin = () => {
  const { mutateAsync: createDay } = useMutation('create day', (data: IDays) =>
    DaysService.create(data),
  )

  const { mutateAsync: createWeek } = useMutation('create week', (data: IWeeks) =>
    WeeksService.create(data),
  )

  return useMemo(
    () => ({
      createDay,
      createWeek,
    }),
    [createDay, createWeek],
  )
}
