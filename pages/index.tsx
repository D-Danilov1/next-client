import Home from '@/components/screens/home/Home'

import { NextPageAuth } from '@/shared/types/auth.types'

const HomePage: NextPageAuth = () => {
	return <Home />
}

HomePage.isOnlyUser = true

export default HomePage
