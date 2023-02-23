import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
import { FC } from 'react'

interface IPlayer {
	url: string
}

const Player: FC<IPlayer> = ({ url }) => {
	return (
		<Plyr
			source={{
				type: 'video',
				sources: [
					{
						src: url,
						type: 'video/mp4',
						size: 1080,
					},
				],
			}}
		/>
	)
}
export default Player
