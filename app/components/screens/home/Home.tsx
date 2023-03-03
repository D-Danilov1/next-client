import { getCourseUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import Preview2 from '@/assets/images/preview2.jpg'
import Preview from '@/assets/images/preview.jpg'

import styles from './Home.module.scss'
import Players from './Players'
import { useHome } from './useHome'

const Home = () => {
  const { courses } = useHome()

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Heading title="Тренировки" />
        <Players url="/uploads/default/start2.mp4" image={Preview} />
        <SubHeading title="Выбери курс из разделов ниже и начни свою трансформацию" />
        <Tabs>
          {/* <TabList className={styles.tablist}>
            <Tab>Без подписки</Tab>
            <Tab>Challenge</Tab>
            <Tab>Дом</Tab>
            <Tab>Гантели</Tab>
          </TabList> */}
          <TabPanel>
            <Players url="/uploads/default/start.mp4" image={Preview2} />
            <p className={styles.text}>Выберите курс</p>
            <div className={styles.cards}>
              {courses &&
                courses?.length &&
                courses?.map((course) => (
                  <div className={styles.card} key={course.id}>
                    <Link href={getCourseUrl(String(course.id))}>
                      <Image
                        src={course.image}
                        width={400}
                        height={100}
                        alt="course"
                        draggable={false}
                      />
                      <div className={styles.cardWrapper}>
                        <div className={styles.content}>
                          <p>{course.name}</p>
                          <span>{course.description}</span>
                        </div>
                        <div className={styles.btn}>
                          <p>Подробнее</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Layout>
  )
}
export default Home
