import Layout from '@/components/layout/Layout'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Heading from '@/components/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import styles from './Profile.module.scss'

const Profile = () => {
  const { user } = useAuth()
  return (
    <Layout>
      <Heading title="Профиль">
        <span>
          <MaterialIcon name="MdSettings" />
        </span>
      </Heading>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <MaterialIcon name="MdPerson" />
          <p>{user?.email}</p>
        </div>
        <p>Фотографии</p>
      </div>
    </Layout>
  )
}
export default Profile
