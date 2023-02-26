import { useState } from 'react'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import styles from './Admin.module.scss'
import Modal from './Modal'

const Admin = () => {
  // const {
  // 	register: registerInput,
  // 	handleSubmit,
  // 	formState,
  // 	reset,
  // } = useForm<IAuthInput>({
  // 	mode: 'onSubmit',
  // })

  const [modalIsOpen, modalSetOpen] = useState(false)

  return (
    <Layout>
      <Heading title="Админ панель" />
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <SubHeading title="Создание недели" />
          <button onClick={() => modalSetOpen(true)}>Создать</button>
        </div>
        <div className={styles.block}>
          <SubHeading title="Создание дня" />
          <button>Создать</button>
        </div>
      </div>
      <Modal modalIsOpen={modalIsOpen} modalSetOpen={modalSetOpen} />
    </Layout>
  )
}
export default Admin
