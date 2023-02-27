import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import { IDaysCreate, IWeeksCreate } from '@/shared/types/request.types'

import styles from './Admin.module.scss'
import Modal from './Modal'
import { useAdmin } from './useAdmin'

const Admin = () => {
  const { createDay, createWeek } = useAdmin()
  const {
    register: registerDays,
    formState: formStateDays,
    handleSubmit: handleSubmitDays,
    reset: resetDays,
  } = useForm<IDaysCreate>({
    mode: 'onSubmit',
  })

  const {
    register: registerWeeks,
    formState: formStateWeeks,
    handleSubmit: handleSubmitWeeks,
    reset: resetWeeks,
  } = useForm<IWeeksCreate>({
    mode: 'onSubmit',
  })

  const [modalDaysIsOpen, modalDaySetOpen] = useState(false)
  const [modalWeeksIsOpen, modalWeeksSetOpen] = useState(false)

  return (
    <Layout>
      <Heading title="Админ панель" />
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <SubHeading title="Создание дня" />
          <button onClick={() => modalDaySetOpen(true)}>Создать</button>
        </div>
        <div className={styles.block}>
          <SubHeading title="Создание недели" />
          <button onClick={() => modalWeeksSetOpen(true)}>Создать</button>
        </div>
      </div>
      <Modal
        submitData={createDay}
        handleSubmit={handleSubmitDays}
        modalIsOpen={modalDaysIsOpen}
        modalSetOpen={modalDaySetOpen}
        formState={formStateDays}
        register={registerDays}
        reset={resetDays}
      />
      <Modal
        submitData={createWeek}
        handleSubmit={handleSubmitWeeks}
        modalIsOpen={modalWeeksIsOpen}
        modalSetOpen={modalWeeksSetOpen}
        formState={formStateWeeks}
        register={registerWeeks}
        reset={resetWeeks}
      />
    </Layout>
  )
}
export default Admin
