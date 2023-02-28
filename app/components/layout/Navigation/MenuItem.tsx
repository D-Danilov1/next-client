import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<IMenuItem> = ({ icon, link, title }) => {
  const { asPath } = useRouter()
  return (
    <li
      className={cn({
        [styles.active]: asPath === link,
      })}
    >
      <Link href={link}>
        <Image src={icon} width={20} height={20} alt="icon" />
        <span>{title}</span>
      </Link>
    </li>
  )
}
export default MenuItem
