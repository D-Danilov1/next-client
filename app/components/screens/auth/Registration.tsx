import Link from 'next/link'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReactLoading from 'react-loading'

import { useActions } from '@/hooks/useActions'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import AuthFields from './AuthFields'
import styles from './Login.module.scss'
import { IAuthInput } from './auth.interface'

const Registration: FC = () => {
  useAuthRedirect()

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onSubmit',
  })
  const [isLoading, setIsLoading] = useState(false)

  const { registration, login } = useActions()

  const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
    setIsLoading(true)
    const response: any = await registration(data)
    if (!response?.error) {
      await login(data)
    }
    setIsLoading(false)
    reset()
  }

  return (
    <div className={styles.auth}>
      <h1>Зарегистрируйтесь</h1>
      <form className={styles.authForm} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <AuthFields formState={formState} register={registerInput} />
        <Link href="/login" className={styles.text}>
          Есть аккаунт?
        </Link>
        <button>
          {isLoading ? (
            <ReactLoading type="spokes" color="#ffffff" height={20} width={20} />
          ) : (
            'Зарегистрироваться'
          )}
        </button>
      </form>
    </div>
  )
}
export default Registration
