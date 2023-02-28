import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import { ICoursesCreate, IWeeksCreate } from '@/shared/types/request.types'

import styles from './Admin.module.scss'
import Modal from './Modal'
import { useAdmin } from './useAdmin'

const Admin = () => {
  const { createWeek, createCourse } = useAdmin()

  const {
    register: registerWeeks,
    formState: formStateWeeks,
    handleSubmit: handleSubmitWeeks,
    reset: resetWeeks,
  } = useForm<IWeeksCreate>({
    mode: 'onSubmit',
  })

  const {
    register: registerCourses,
    formState: formStateCourses,
    handleSubmit: handleSubmitCourses,
    reset: resetCourses,
    control: controlCourses,
  } = useForm<ICoursesCreate>({
    mode: 'onSubmit',
  })

  const [modalWeeksIsOpen, modalWeeksSetOpen] = useState(false)
  const [modalCoursesIsOpen, modalCoursesSetOpen] = useState(false)

  return (
    <Layout>
      <Heading title="Админ панель" />
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <SubHeading title="Создание курса" />
          <button onClick={() => modalCoursesSetOpen(true)}>Создать</button>
        </div>
        <div className={styles.block}>
          <SubHeading title="Создание недели" />
          <button onClick={() => modalWeeksSetOpen(true)}>Создать</button>
        </div>
      </div>
      <Modal
        submitData={createWeek}
        handleSubmit={handleSubmitWeeks}
        modalIsOpen={modalWeeksIsOpen}
        modalSetOpen={modalWeeksSetOpen}
        formState={formStateWeeks}
        register={registerWeeks}
        reset={resetWeeks}
        title="Создание недель"
      />
      <Modal
        isCourse
        title="Создание курса"
        submitData={createCourse}
        handleSubmit={handleSubmitCourses}
        modalIsOpen={modalCoursesIsOpen}
        modalSetOpen={modalCoursesSetOpen}
        formState={formStateCourses}
        register={registerCourses}
        reset={resetCourses}
        control={controlCourses}
      />
    </Layout>
  )
}
export default Admin
