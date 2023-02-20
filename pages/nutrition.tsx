import Nutrition from '@/components/screens/nutrition/Nutrition'

import { NextPageAuth } from '@/shared/types/auth.types'

const NutritionPage: NextPageAuth = () => {
	return <Nutrition />
}

NutritionPage.isOnlyUser = true

export default NutritionPage
