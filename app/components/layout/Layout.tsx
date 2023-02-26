import { FC } from 'react'

import styles from './Layout.module.scss'
import MenuContainer from './Navigation/MenuContainer'

interface ILayout {
  children: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <MenuContainer />
      <div className={styles.center}>{children}</div>
    </div>
  )
}

export default Layout
