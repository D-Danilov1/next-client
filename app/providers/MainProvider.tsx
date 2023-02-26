import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'store/store'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import AuthProvider from './AuthProvider/AuthProvider'
import HeaderProvider from './HeadProvider/HeaderProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
  return (
    <HeaderProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider Component={Component}>{children}</AuthProvider>
        </QueryClientProvider>
      </Provider>
    </HeaderProvider>
  )
}

export default MainProvider
