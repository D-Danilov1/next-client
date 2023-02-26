import cn from 'clsx'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

import Layout from '@/components/layout/Layout'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Heading from '@/components/ui/heading/Heading'
import Player from '@/components/ui/player/Player'

import { useAuth } from '@/hooks/useAuth'

import { ISortedLessonsInCourses } from '@/shared/types/request.types'

import styles from './Course.module.scss'
import { useCourse } from './useCourse'

const Course = () => {
	const [isVisiblePlayer, setVisiblePlayer] = useState(false)
	const [activeTabId, setActiveTabId] = useState(0)
	const [activeTabDayId, setActiveTabDayId] = useState(0)

	const {
		course,
		courseLessons,
		courseSortedLessons,
		mutateAsync,
		completedLessons,
	} = useCourse()

	const { user } = useAuth()
	useEffect(() => {
		if (isVisiblePlayer) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [isVisiblePlayer])

	if (
		!course ||
		!courseLessons ||
		!courseSortedLessons ||
		!courseLessons.length
	)
		return null

	const handleComplete = async () => {
		if (user) {
			for (let key of courseSortedLessons[activeTabId][activeTabDayId]) {
				await mutateAsync({
					lesson_schedule_id: key.id,
					user_id: user.id,
				})
			}
		}
	}

	return (
		<Layout>
			<Heading title={course.name} />
			<div className={styles.tablist}>
				{courseSortedLessons.map((_: ISortedLessonsInCourses, i: number) => {
					return (
						<div
							key={i}
							onClick={() => setActiveTabId(i)}
							className={i === activeTabId ? styles.activeTab : ''}
						>
							Неделя {i + 1}
						</div>
					)
				})}
			</div>
			<div className={styles.days}>
				{courseSortedLessons[activeTabId]?.map(
					(el: ISortedLessonsInCourses[], i: number) => {
						return (
							<div
								className={cn(styles.day, {
									[styles.activeDay]: i == activeTabDayId,
								})}
								key={i}
								onClick={() => setActiveTabDayId(i)}
							>
								<span>День {i + 1}</span>
								<p>{el[0].day.name}</p>
							</div>
						)
					}
				)}
			</div>
			{courseSortedLessons &&
				courseSortedLessons.length &&
				courseSortedLessons[activeTabId][activeTabDayId].map(
					(el: ISortedLessonsInCourses, i: number) => {
						const { lesson } = el
						return (
							<Fragment key={i}>
								<div className={styles.lesson}>
									<Image
										src={lesson.image}
										width={200}
										height={100}
										priority
										alt="lesson"
										draggable={false}
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
										<Player url={lesson.link} />
									</div>
								)}
							</Fragment>
						)
					}
				)}
			{completedLessons?.some((val: number) =>
				courseSortedLessons[activeTabId][activeTabDayId]
					.map((val: ISortedLessonsInCourses) => val.id)
					.includes(val)
			) ? (
				<p className={styles.text}>День завершен</p>
			) : (
				<button className={styles.btn} onClick={handleComplete}>
					Завершить день
				</button>
			)}
		</Layout>
	)
}

export default Course
