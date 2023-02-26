import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
import { FC } from 'react'

interface IPlayer {
	url: string
	autoPlay?: boolean
}

const Player: FC<IPlayer> = ({ url, autoPlay = false }) => {
	const previewThumbnailsConfig = {
		src: url,
		interval: 10,
		thumbWidth: 192,
		thumbHeight: 108,
	}

	return (
		<Plyr
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
	)
}
export default Player
