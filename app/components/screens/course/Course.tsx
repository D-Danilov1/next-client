import Image from 'next/image'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
import { Fragment, useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Layout from '@/components/layout/Layout'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Heading from '@/components/ui/heading/Heading'

import styles from './Course.module.scss'
import { useCourse } from './useCourse'

const Course = () => {
	const { course, lesson, weeks, days } = useCourse()
	const [isVisiblePlayer, setVisiblePlayer] = useState(false)

	useEffect(() => {
		if (isVisiblePlayer) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [isVisiblePlayer])

	if (!course) return null

	return (
		<Layout>
			<Heading title={course.name} />
			<Tabs>
				<TabList className={styles.tablist}>
					{weeks?.map((week, i) => (
						<Tab key={i}>{week.name}</Tab>
					))}
				</TabList>
				<TabPanel>
					<Tabs>
						<TabList className={styles.days}>
							{days?.map((day, i) => (
								<Tab className={styles.day} key={i}>
									<span>День {i + 1}</span>
									<p>{day.name}</p>
								</Tab>
							))}
						</TabList>
						<TabPanel>
							{lesson &&
								lesson.map((lesson) => (
									<Fragment key={lesson.id}>
										<div className={styles.lesson}>
											<Image
												src={lesson.image}
												width={200}
												height={100}
												alt="lesson"
											/>
											<p>{lesson.name}</p>
											<button onClick={() => setVisiblePlayer(true)}>
												Смотреть
											</button>
										</div>
										{isVisiblePlayer && (
											<div className={styles.video}>
												<div
													className={styles.close}
													onClick={() => setVisiblePlayer(false)}
												>
													<MaterialIcon name="MdClose" />
												</div>
												<Plyr
													autoPlay
													source={{
														type: 'video',
														sources: [
															{
																src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
																type: 'video/mp4',
																size: 1080,
															},
														],
													}}
													// @ts-ignore
													controls={[
														'play-large', // The large play button in the center
														'rewind', // Rewind by the seek time (default 10 seconds)
														'play', // Play/pause playback
														'fast-forward', // Fast forward by the seek time (default 10 seconds)
														'progress', // The progress bar and scrubber for playback and buffering
														'duration', // The full duration of the media
														'mute', // Toggle mute
														'volume', // Volume control
														'captions', // Toggle captions
														'pip', // Picture-in-picture (currently Safari only)
														'airplay', // Airplay (currently Safari only)
														'fullscreen', // Toggle fullscreen
														'quality',
													]}
												/>
											</div>
										)}
									</Fragment>
								))}
							<button className={styles.btn}>Завершить день</button>
						</TabPanel>
					</Tabs>
				</TabPanel>
			</Tabs>
		</Layout>
	)
}
export default Course
