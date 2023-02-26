import { FC } from 'react'

import styles from './SubHeading.module.scss'

interface ISubHeading {
  title: string
}

const SubHeading: FC<ISubHeading> = ({ title }) => {
  return <p className={styles.title}>{title}</p>
}
export default SubHeading
