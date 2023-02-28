import { FC } from 'react'
import {
  Control,
  Controller,
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form'
import Modal from 'react-modal'
import { UseMutateAsyncFunction } from 'react-query'

import MaterialIcon from '@/components/ui/MaterialIcon'
import Field from '@/components/ui/form-elements/Field'
import UploadField from '@/components/ui/form-elements/UploadField/UploadFields'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import { ICourses, ICoursesCreate, IWeeksCreate } from '@/shared/types/request.types'

import styles from './Admin.module.scss'

const customStyles = {
  overlay: {
    zIndex: 50,
    backgroundColor: 'rgba(150, 150, 150, .5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1c1c1e',
    border: 'none',
  },
}

interface IModal {
  modalIsOpen: boolean
  modalSetOpen: (arg: boolean) => void
  register: UseFormRegister<any>
  formState: FormState<FieldValues>
  handleSubmit: UseFormHandleSubmit<IWeeksCreate>
  submitData: any
  reset: UseFormReset<any>
  isCourse?: boolean
  title: string
  control?: Control<ICoursesCreate, any>
}

const ModalWrapper: FC<IModal> = ({
  modalIsOpen,
  modalSetOpen,
  register,
  formState: { errors },
  handleSubmit,
  submitData,
  reset,
  isCourse,
  title,
  control,
}) => {
  const onSubmit: SubmitHandler<IWeeksCreate | ICoursesCreate> = async (data) => {
    await submitData(data)
    modalSetOpen(false)
    reset()
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={() => modalSetOpen(false)}
      ariaHideApp={false}
    >
      <form className={styles.modal} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <SubHeading title={title} />
        <span onClick={() => modalSetOpen(false)}>
          <MaterialIcon name="MdClose" />
        </span>
        <Field
          {...register('name', {
            required: true,
            minLength: {
              value: 2,
              message: 'Длина должна быть больше 2 символов',
            },
          })}
          placeholder="Имя"
          error={errors.name}
        />
        {isCourse && (
          <>
            <span onClick={() => modalSetOpen(false)}>
              <MaterialIcon name="MdClose" />
            </span>

            <Field
              {...register('description', {
                required: true,
                minLength: {
                  value: 2,
                  message: 'Длина должна быть больше 2 символов',
                },
              })}
              placeholder="Описание"
              error={errors.description}
            />
            <Controller
              control={control}
              name="image"
              render={({ field: { onChange } }) => (
                <UploadField onChange={onChange} folder="courses" />
              )}
            />
          </>
        )}
        <button>Создать</button>
      </form>
    </Modal>
  )
}
export default ModalWrapper
