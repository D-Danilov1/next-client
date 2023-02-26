import { FC } from 'react'
import Modal from 'react-modal'

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
		border: 'none'
	},
}

interface IModal {
	modalIsOpen: boolean
	modalSetOpen: (arg: boolean) => void
}

const ModalWrapper: FC<IModal> = ({ modalIsOpen, modalSetOpen }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			style={customStyles}
			onRequestClose={() => modalSetOpen(false)}
			ariaHideApp={false}
		>
			<div className={styles.modal}></div>
		</Modal>
	)
}
export default ModalWrapper
