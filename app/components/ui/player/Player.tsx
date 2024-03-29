import cn from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import MaterialIcon from '../MaterialIcon'

import styles from './Player.module.scss'

interface IPlayer {
  url: string
  setVisiblePlayer: (arg: boolean) => void
}

const Player: FC<IPlayer> = ({ url, setVisiblePlayer }) => {
  const playerRef = useRef<ReactPlayer | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isRotated, setIsRotated] = useState(false)

  const toggleVideoMode = () => {
    setIsRotated(!isRotated)
  }

  let portrait = window.matchMedia('(orientation: portrait)')

  portrait.addEventListener('change', function (e) {
    if (e.matches) {
      setIsRotated(true)
    } else {
      setIsRotated(false)
    }
  })

  return (
    <div className={styles.player}>
      <div className={isRotated ? styles.containerRotated : styles.container}>
        <ReactPlayer
          id="myvideo"
          url="https://vimeo.com/773155125/9841e82c26"
          controls={true}
          width="100%"
          height="100%"
          playing={isPlaying}
          ref={playerRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsinline
        />
      </div>

      <div className={cn(styles.controls, { [styles.controlsRotated]: isRotated })}>
        <div className={styles.rotate} onClick={toggleVideoMode}>
          <MaterialIcon name="MdOutlineCropRotate" />
        </div>
        <div className={styles.close} onClick={() => setVisiblePlayer(false)}>
          <MaterialIcon name="MdClose" />
        </div>
      </div>
    </div>
  )
}

export default Player
