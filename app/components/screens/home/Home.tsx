import Image from 'next/image'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
// import 'react-tabs/style/react-tabs.css'
import YouTube, { YouTubeProps } from 'react-youtube'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import CourseImg from '@/assets/images/course.jpg'

import styles from './Home.module.scss'

const Home = () => {
	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo()
	}

	const optsMain: YouTubeProps['opts'] = {
		height: '330px',
		width: '100%',
	}

	return (
		<Layout>
			<Heading title="Тренировки" />
			<YouTube
				videoId="UpvF16UhaFo"
				opts={optsMain}
				onReady={onPlayerReady}
				className={styles.video}
			/>
			<SubHeading title="Выбери курс из разделов ниже и начни свою трансформацию" />
			<Tabs>
				<TabList className={styles.tablist}>
					<Tab>Без подписки</Tab>
					<Tab>Challenge</Tab>
					<Tab>Дом</Tab>
					<Tab>Гантели</Tab>
				</TabList>
				<TabPanel>
					<YouTube
						videoId="UpvF16UhaFo"
						opts={optsMain}
						onReady={onPlayerReady}
						className={styles.video}
					/>
					<p className={styles.text}>Выберите курс</p>
					<div className={styles.cards}>
						<div className={styles.card}>
							<Image
								src={CourseImg}
								width={400}
								height={100}
								alt="course"
								draggable={false}
							/>
							<p>Средний про уровень</p>
							<div className={styles.btn}>
								<p>Подробнее</p>
							</div>
						</div>
						<div className={styles.card}>
							<Image
								src={CourseImg}
								width={400}
								height={100}
								alt="course"
								draggable={false}
							/>
							<p>Средний про уровень</p>
							<div className={styles.btn}>
								<p>Подробнее</p>
							</div>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<YouTube
						videoId="UpvF16UhaFo"
						opts={optsMain}
						onReady={onPlayerReady}
						className={styles.video}
					/>
				</TabPanel>
				<TabPanel>
					<YouTube
						videoId="UpvF16UhaFo"
						opts={optsMain}
						onReady={onPlayerReady}
						className={styles.video}
					/>
				</TabPanel>
				<TabPanel>
					<YouTube
						videoId="UpvF16UhaFo"
						opts={optsMain}
						onReady={onPlayerReady}
						className={styles.video}
					/>
				</TabPanel>
			</Tabs>
		</Layout>
	)
}
export default Home
