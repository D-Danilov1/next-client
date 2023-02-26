import Course from '@/components/screens/course/Course'

import { NextPageAuth } from '@/shared/types/auth.types'

const CoursePage: NextPageAuth = () => {
	return <Course />
}
CoursePage.isOnlyUser = true

export default CoursePage
