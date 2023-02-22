import { getCoursesUrl } from 'config/api.config'
import Image from 'next/image'
import Link from 'next/link'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
// import 'react-tabs/style/react-tabs.css'
import YouTube, { YouTubeProps } from 'react-youtube'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import CourseImg from '@/assets/images/course.jpg'

import styles from './Home.module.scss'
import { useHome } from './useHome'
import { getCourseUrl } from 'config/url.config'

const Home = () => {
	const { courses } = useHome()

	console.log(courses)
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
						{courses?.map((course) => (
							<div className={styles.card}>
								<Link href={getCourseUrl(String(course.id))} key={course.id}>
									<Image
										src={course.image}
										width={400}
										height={100}
										alt="course"
										draggable={false}
									/>
									<div className={styles.content}>
										<p>{course.name}</p>
										<span>{course.description}</span>
									</div>
									<div className={styles.btn}>
										<p>Подробнее</p>
									</div>
								</Link>
							</div>
						))}
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
