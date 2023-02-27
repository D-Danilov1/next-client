import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import AuthFields from './AuthFields'
import styles from './Login.module.scss'
import { IAuthInput } from './auth.interface'

const Login: FC = () => {
  useAuthRedirect()

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
    await login(data)
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
        <button>Войти</button>
      </form>
    </div>
  )
}
export default Login
