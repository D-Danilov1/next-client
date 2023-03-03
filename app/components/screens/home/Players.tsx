import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import Player from '@/components/ui/player/Player'

import Preview from '@/assets/images/preview.jpg'

import styles from './Home.module.scss'

interface IPlayers {
  url: string
  image: any
}

const Players: FC<IPlayers> = ({ url, image }) => {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className={styles.video}>
      <Player url={url} autoPlay={showPreview} />
      <Image
        className={cn({ [styles.active]: showPreview })}
        src={image}
        height={300}
        width={600}
        alt=""
        onClick={() => setShowPreview(true)}
      />
    </div>
  )
}
export default Players
