
import Goals from '@/components/screens/goals/Goals'
import { NextPageAuth } from '@/shared/types/auth.types'

const GoalsPage: NextPageAuth = () => {
	return <Goals />
}

GoalsPage.isOnlyUser = true

export default GoalsPage
