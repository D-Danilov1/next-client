import Link from 'next/link'

import Layout from '@/components/layout/Layout'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Heading from '@/components/ui/heading/Heading'

import styles from './Goals.module.scss'

const Goals = () => {
  return (
    <Layout>
      <Heading title="Цели" />
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <p>Новый список</p>
          <MaterialIcon name="MdAdd" />
        </div>
        <Link href="/goal/1">
          <div className={styles.card}>
            <p>1</p>
          </div>
        </Link>
      </div>
    </Layout>
  )
}
export default Goals
