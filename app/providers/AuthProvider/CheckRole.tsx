import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser },
}) => {
  const { user } = useAuth()

  const router = useRouter()

  const Children = () => <>{children}</>

  if (!isOnlyAdmin && !isOnlyUser) return <Children />

  if (user?.roles.includes('ADMIN')) return <Children />

  if (isOnlyAdmin) {
    router.pathname !== '/404' && router.replace('/login')
    return null
  }

  const isUser = user && !user.roles.includes('ADMIN')

  if (isUser && isOnlyUser) return <Children />
  else {
    router.pathname !== '/login' && router.replace('/login')
    return null
  }
}

export default CheckRole
