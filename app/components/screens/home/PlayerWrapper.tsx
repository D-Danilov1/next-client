import cn from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { FC, useEffect, useState } from 'react'

import Player from '@/components/ui/player/Player'

import styles from './Home.module.scss'

interface IPlayerWrapper {
  url: string
  image: StaticImageData
}

const PlayerWrapper: FC<IPlayerWrapper> = ({ url, image }) => {
  const [isVisiblePlayer, setIsVisiblePlayer] = useState(false)

  useEffect(() => {
    if (isVisiblePlayer) {
      document.body.classList.add(styles.lock)
    } else {
      document.body.classList.remove(styles.lock)
    }
  }, [isVisiblePlayer])

  return (
    <div className={styles.video}>
      {isVisiblePlayer && (
        <div className={styles.videoWrapper}>
          <Player url={url} setVisiblePlayer={setIsVisiblePlayer} />
        </div>
      )}
      <Image
        className={cn({ [styles.active]: isVisiblePlayer })}
        src={image}
        height={300}
        width={600}
        alt=""
        onClick={() => setIsVisiblePlayer(true)}
      />
    </div>
  )
}
export default PlayerWrapper
