import Link from 'next/link'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReactLoading from 'react-loading'

import { useActions } from '@/hooks/useActions'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import AuthFields from './AuthFields'
import styles from './Login.module.scss'
import { IAuthInput } from './auth.interface'

const Login: FC = () => {
  useAuthRedirect()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onSubmit',
  })

  const { login } = useActions()

  const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
    setIsLoading(true)
    await login(data)
    setIsLoading(false)
    reset()
  }

  return (
    <div className={styles.auth}>
      <h1>Вход в аккаунт</h1>
      <form className={styles.authForm} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <AuthFields formState={formState} register={registerInput} />
        <Link href="/registration" className={styles.text}>
          Нет аккаунта?
        </Link>
        <button>
          {isLoading ? (
            <ReactLoading type="spokes" color="#ffffff" height={20} width={20} />
          ) : (
            'Войти'
          )}
        </button>
      </form>
    </div>
  )
}
export default Login
