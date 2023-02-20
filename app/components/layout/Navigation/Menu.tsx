import { getAdminUrl } from 'config/url.config'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const DynamicMenuItem = dynamic(() => import('./MenuItem'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<>
			{items.map((item) => (
				<DynamicMenuItem key={item.link} {...item} />
			))}
		</>
	)
}

export default Menu
