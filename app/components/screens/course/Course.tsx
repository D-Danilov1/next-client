import Image from 'next/image'
import Link from 'next/link'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import styles from './Course.module.scss'
import { useCourse } from './useCourse'

const Course = () => {
	const { course, lesson } = useCourse()
	console.log(lesson)
	if (!course) return null

	return (
		<Layout>
			<Heading title={course.name} />
			<Tabs>
				<TabList className={styles.tablist}>
					<Tab>1 неделя</Tab>
				</TabList>
				<TabPanel>
					<Tabs>
						<TabList className={styles.days}>
							<Tab className={styles.day}>
								<span>День 1</span>
								<p>Грудь</p>
							</Tab>
						</TabList>
						<TabPanel>
							{lesson &&
								lesson.map((lesson) => (
									<Link
										href={lesson.link}
										target="_blank"
										key={lesson.id}
										className={styles.lesson}
									>
										<Image
											src={lesson.image}
											width={200}
											height={100}
											alt="lesson"
										/>
										<p>{lesson.name}</p>
									</Link>
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
