import { getAdminUrl } from 'config/url.config'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const DynamicMenuItem = dynamic(() => import('./MenuItem'), {
  ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
  const { user } = useAuth()

  return (
    <>
      {items.map((item) => (
        <DynamicMenuItem key={item.link} {...item} />
      ))}
      {/* {user?.roles.includes('ADMIN') && (
        <MenuItem icon="MdOutlineLock" link={getAdminUrl()} title="Админ панель" />
      )} */}
    </>
  )
}

export default Menu
