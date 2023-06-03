import cn from 'clsx'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import Layout from '@/components/layout/Layout'
import MaterialIcon from '@/components/ui/MaterialIcon'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import Player from '@/components/ui/player/Player'

import { useAuth } from '@/hooks/useAuth'

import { ISortedLessonsInCourses } from '@/shared/types/request.types'

import styles from './Course.module.scss'
import { useCourse } from './useCourse'

const Course = () => {
  const [isVisiblePlayer, setVisiblePlayer] = useState<boolean>(false)

  useEffect(() => {
    if (isVisiblePlayer) {
      document.body.classList.add(styles.lock)
    } else {
      document.body.classList.remove(styles.lock)
    }
  }, [isVisiblePlayer])

  const [activeTabId, setActiveTabId] = useState<number>(0)
  const [activeTabDayId, setActiveTabDayId] = useState<number>(0)
  const [videoLink, setVideoLink] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handlePlay = (url: string) => {
    setVisiblePlayer(true)
    setVideoLink(url)
  }

  const { course, courseSortedLessons, mutateAsync, completedLessons, isLoadingSortedLessons } =
    useCourse()
  const { user } = useAuth()

  const weeksIsCompleted: boolean[] = []

  if (courseSortedLessons) {
    for (let key of courseSortedLessons) {
      const ids = key.flatMap((lessonArray: any) => lessonArray.map((lesson: any) => lesson.id))
      weeksIsCompleted.push(ids?.every((id: number) => completedLessons?.includes(id)))
    }
  }

  const handleComplete = async () => {
    if (user) {
      setIsLoading(true)
      const promises = courseSortedLessons[activeTabId][activeTabDayId].map(({ id }: any) => {
        return mutateAsync({
          lesson_schedule_id: id,
          user_id: user.id,
        })
      })
      await Promise.all(promises)
      setIsLoading(false)
    }
  }

  let activeId = 0

  return (
    <Layout>
      <Heading title={course ? course?.name : 'Загрузка...'} />
      <div className={styles.tablist}>
        {isLoadingSortedLessons ? (
          <SkeletonLoader
            count={3}
            className={styles.skeletonLoaderWeeks}
            containerClassName={styles.containerLoaderWeeks}
          />
        ) : (
          courseSortedLessons?.map((_: ISortedLessonsInCourses, i: number) => {
            return (
              <div
                key={i}
                onClick={() => setActiveTabId(i)}
                className={i === activeTabId ? styles.activeTab : ''}
              >
                Неделя {i + 1}
              </div>
            )
          })
        )}
      </div>
      <div className={styles.days}>
        {isLoadingSortedLessons ? (
          <SkeletonLoader
            count={5}
            className={styles.skeletonLoaderDays}
            containerClassName={styles.containerLoaderDays}
          />
        ) : (
          courseSortedLessons &&
          courseSortedLessons[activeTabId]?.map((el: ISortedLessonsInCourses[], i: number) => {
            const isCompleted = el.some((item) => completedLessons?.includes(item.id))

            if (isCompleted) {
              activeId = i + 1
            }

            const isLock =
              activeId !== i ||
              !(activeTabId === 0
                ? true
                : weeksIsCompleted[activeTabId === 0 ? activeTabId : activeTabId - 1])

            return (
              <div
                className={cn(styles.day, {
                  [styles.activeDay]: i == activeTabDayId,
                })}
                key={i}
                onClick={() => setActiveTabDayId(i)}
              >
                {isLock &&
                  (isCompleted ? <MaterialIcon name="MdCheck" /> : <MaterialIcon name="MdLock" />)}
                <span>День {i + 1}</span>
                <p className={cn({ [styles.lock]: isLock && !isCompleted })}>{el[0].name}</p>
              </div>
            )
          })
        )}
      </div>
      {isLoadingSortedLessons ? (
        <SkeletonLoader
          count={2}
          className={styles.skeletonLoaderLessons}
          containerClassName={styles.containerLoaderLessons}
        />
      ) : (
        courseSortedLessons &&
        courseSortedLessons[activeTabId][activeTabDayId]?.map(
          (el: ISortedLessonsInCourses, i: number) => {
            const { lesson } = el
            const isLock = activeTabDayId > activeId
            return (
              <Fragment key={i}>
                {isLock ||
                !(activeTabId === 0
                  ? true
                  : weeksIsCompleted[activeTabId === 0 ? activeTabId : activeTabId - 1]) ? (
                  <div className={styles.lessonLock}>
                    <span>Этот день будет доступен, когда ты закончишь текущий</span>
                  </div>
                ) : (
                  <div className={styles.lesson}>
                    <Image
                      className={styles.img}
                      src={lesson?.image}
                      width={200}
                      height={100}
                      priority
                      unoptimized
                      alt="lesson"
                      draggable={false}
                    />
                    <p>{lesson.name}</p>
                    <button onClick={() => handlePlay(lesson.link)}>Смотреть</button>
                  </div>
                )}

                {lesson.link === videoLink && isVisiblePlayer && (
                  <div className={styles.video}>
                    <Player url={videoLink} setVisiblePlayer={setVisiblePlayer} />
                  </div>
                )}
              </Fragment>
            )
          },
        )
      )}
      {activeTabDayId <= activeId &&
        (activeTabId === 0
          ? true
          : weeksIsCompleted[activeTabId === 0 ? activeTabId : activeTabId - 1]) &&
        (completedLessons?.some(
          (val: number) =>
            courseSortedLessons &&
            courseSortedLessons[activeTabId][activeTabDayId]
              ?.map((val: ISortedLessonsInCourses) => val.id)
              .includes(val),
        ) ? (
          <p className={styles.text}>День завершен</p>
        ) : (
          <button className={styles.btn} onClick={handleComplete}>
            {isLoading ? (
              <ReactLoading type="spokes" color="#ffffff" height={20} width={20} />
            ) : (
              'Завершить день'
            )}
          </button>
        ))}
    </Layout>
  )
}

export default Course
