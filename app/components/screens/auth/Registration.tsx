import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import AuthFields from './AuthFields'
import styles from './Login.module.scss'
import { IAuthInput } from './auth.interface'
import Link from 'next/link'

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

	const { registration } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
		await registration(data)
		reset()
	}

	return (
		<div className={styles.auth}>
			<h1>Зарегистрируйтесь</h1>
			<form
				className={styles.authForm}
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}
			>
				<AuthFields formState={formState} register={registerInput} />
				<Link href='/login' className={styles.text}>Нет аккаунта?</Link>
				<button>Зарегистрироваться</button>
			</form>
		</div>
	)
}
export default Registration
