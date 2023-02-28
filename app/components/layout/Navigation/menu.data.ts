import Logo from '@/assets/images/logo.jpg'

import { IMenu } from './menu.interface'

export const navMenu: IMenu = {
  items: [
    {
      title: 'Next',
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
