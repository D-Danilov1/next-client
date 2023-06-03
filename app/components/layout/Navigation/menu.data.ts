import Logo from '@/assets/images/logo.png'

import { IMenu } from './menu.interface'

export const navMenu: IMenu = {
  items: [
    {
      title: 'На главную',
      icon: Logo,
      link: '/',
    },
    // {
    // 	title: 'Цели',
    // 	icon: 'MdListAlt',
    // 	link: '/goals',
    // },
    // {
    // 	title: 'Питание',
    // 	icon: 'MdFoodBank',
    // 	link: '/nutrition',
    // },
    // {
    // 	title: 'Разум',
    // 	icon: 'MdUpgrade',
    // 	link: '/mind',
    // },
    // {
    // 	title: 'Профиль',
    // 	icon: 'MdPerson',
    // 	link: '/profile',
    // },
  ],
}
