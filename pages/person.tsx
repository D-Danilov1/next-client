import Person from '@/components/screens/person/Person'

import { NextPageAuth } from '@/shared/types/auth.types'

const PersonPage: NextPageAuth = () => {
	return <Person />
}

PersonPage.isOnlyUser = true

export default PersonPage
