import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { store } from 'store/store'

import Toast from '@/components/ui/toast/Toast'

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
          <Toast />
        </QueryClientProvider>
      </Provider>
    </HeaderProvider>
  )
}

export default MainProvider
