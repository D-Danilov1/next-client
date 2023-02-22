import Mind from '@/components/screens/mind/Mind'

import { NextPageAuth } from '@/shared/types/auth.types'

const MindPage: NextPageAuth = () => {
	return <Mind />
}

MindPage.isOnlyUser = true

export default MindPage
