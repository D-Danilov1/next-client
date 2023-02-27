import { FC } from 'react'
import { FieldValues, FormState, SubmitHandler, UseFormRegister } from 'react-hook-form'
import Modal from 'react-modal'

import Field from '@/components/ui/form-elements/Field'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import { IDaysCreate, IWeeksCreate } from '@/shared/types/request.types'

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
  handleSubmit: any
  submitData: any
  reset: any
}

const ModalWrapper: FC<IModal> = ({
  modalIsOpen,
  modalSetOpen,
  register,
  formState: { errors },
  handleSubmit,
  submitData,
  reset,
}) => {
  const onSubmit: SubmitHandler<IDaysCreate | IWeeksCreate> = async (data) => {
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
        <SubHeading title="Введите имя" />
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
        <button>Создать</button>
      </form>
    </Modal>
  )
}
export default ModalWrapper
