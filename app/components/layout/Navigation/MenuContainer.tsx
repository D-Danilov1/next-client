import cn from 'clsx'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './Menu.module.scss'
import { navMenu } from './menu.data'

const DynamicMenu = dynamic(() => import('./Menu'), {
  ssr: false,
})

const MenuContainer: FC = () => {
  return (
    <div className={cn(styles.menu)}>
      <ul className={styles.ul}>
        <DynamicMenu menu={navMenu} />
      </ul>
    </div>
  )
}
export default MenuContainer
