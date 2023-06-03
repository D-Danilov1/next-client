import cn from 'clsx'
import { FC, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import MaterialIcon from '../MaterialIcon'

import styles from './Player.module.scss'

interface IPlayer {
  url: string
  autoPlay?: boolean
  setVisiblePlayer?: (arg: boolean) => void
}

const Player: FC<IPlayer> = ({ url, autoPlay = false, setVisiblePlayer }) => {
  const playerRef = useRef<ReactPlayer | null>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isRotated, setIsRotated] = useState(false)

  const toggleVideoMode = () => {
    setIsRotated(!isRotated)
  }

  return (
    <div className={styles.player}>
      <div className={isRotated ? styles.containerRotated : styles.container}>
        <ReactPlayer
          url={url}
          controls={true}
          width="100%"
          height="100%"
          playing={isPlaying}
          ref={playerRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
      <div className={cn(styles.controls, { [styles.controlsRotated]: isRotated })}>
        <div className={styles.rotate} onClick={toggleVideoMode}>
          <MaterialIcon name="MdOutlineCropRotate" />
        </div>
        <div className={styles.close} onClick={() => setVisiblePlayer && setVisiblePlayer(false)}>
          <MaterialIcon name="MdClose" />
        </div>
      </div>
    </div>
  )
}

export default Player
