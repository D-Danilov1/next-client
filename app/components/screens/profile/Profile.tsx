import Layout from '@/components/layout/Layout'
import MaterialIcon from '@/components/ui/MaterialIcon'
import UploadField from '@/components/ui/form-elements/UploadField/UploadFields'
import Heading from '@/components/ui/heading/Heading'

import styles from './Profile.module.scss'

const Profile = () => {
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
					<p>123@mail.ru</p>
				</div>
				<p>Фотографии</p>
				<div className={styles.img}>
					{/* <UploadField />
					<UploadField /> */}
				</div>
			</div>
		</Layout>
	)
}
export default Profile
