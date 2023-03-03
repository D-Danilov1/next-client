import Image from 'next/image'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
import { FC, useState } from 'react'
import ReactLoading from 'react-loading'

import styles from './Player.module.scss'

interface IPlayer {
  url: string
  autoPlay?: boolean
}

const Player: FC<IPlayer> = ({ url, autoPlay = false }) => {
  const [isLoading, setIsLoading] = useState(true)
  const previewThumbnailsConfig = {
    src: url,
    interval: 10,
    thumbWidth: 192,
    thumbHeight: 108,
  }

  const handleLoadStart = () => {
    setIsLoading(true)
  }

  const handleLoadedData = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <div className={styles.loading}>
          <ReactLoading type="balls" color="#ffffff" height={40} width={40} />
        </div>
      )}
      <Plyr
        onLoadStart={handleLoadStart}
        onLoadedData={handleLoadedData}
        options={{
          previewThumbnails: previewThumbnailsConfig,
          controls: [
            'play-large',
            'play',
            'progress',
            'duration',
            'mute',
            'volume',
            'captions',
            'fullscreen',
          ],
        }}
        source={{
          type: 'video',
          sources: [
            {
              src: url,
              type: 'video/mp4',
              size: 1080,
            },
          ],
          // @ts-ignore
          autoplay: autoPlay,
        }}
      />
    </>
  )
}
export default Player
