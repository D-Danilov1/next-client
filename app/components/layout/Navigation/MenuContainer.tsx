import cn from 'clsx'
import { FC } from 'react'

import Menu from './Menu'
import styles from './Menu.module.scss'
import { navMenu } from './menu.data'

const MenuContainer: FC = () => {
  return (
    <div className={cn(styles.menu)}>
      <ul className={styles.ul}>
        <Menu menu={navMenu} />
      </ul>
    </div>
  )
}
export default MenuContainer
