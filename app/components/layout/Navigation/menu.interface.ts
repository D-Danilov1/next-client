import { StaticImageData } from 'next/image'

export interface IMenuItem {
  icon: StaticImageData
  link: string
  title: string
}

export interface IMenu {
  items: IMenuItem[]
}
