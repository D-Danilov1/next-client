import { FC } from 'react'

import styles from './Heading.module.scss'

interface IHeading {
  title: string
  children?: React.ReactNode
}

const Heading: FC<IHeading> = ({ title, children }) => {
  return (
    <p className={styles.title}>
      {title} {children}
    </p>
  )
}
export default Heading
