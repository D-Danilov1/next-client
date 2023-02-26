import { FC } from 'react'
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

import { IAuthInput } from './auth.interface'

interface IAuthFields {
  register: UseFormRegister<IAuthInput>
  formState: FormState<FieldValues>
}

const AuthFields: FC<IAuthFields> = ({ register, formState: { errors } }) => {
  return (
    <>
      <Field
        {...register('email', {
          required: true,
          pattern: {
            value: validEmail,
            message: 'Пожалуйста, введите адрес электронной почты',
          },
        })}
        placeholder="E-Mail"
        error={errors.email}
      />
      <Field
        {...register('password', {
          required: true,
          minLength: {
            value: 8,
            message: 'Минимальная длина должна быть больше 8 символов',
          },
        })}
        placeholder="Пароль"
        type="password"
        error={errors.password}
      />
    </>
  )
}

export default AuthFields
