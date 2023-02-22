export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}`

export const getAuthUrl = (string: string) => `/auth/${string}`
export const getUsersUrl = (string: string) => `/user/${string}`
export const getCoursesUrl = (string: string) => `/courses/${string}`
export const getLessonsInCoursesUrl = (string: string) => `/lessons-in-courses/${string}`
export const getLessonsUrl = (string: string) => `/lessons/${string}`
export const getCompletedLessonsUrl = (string: string) => `/completed-lessons/${string}`
export const getLessonsInWeeksUrl = (string: string) => `/lessons-in-weeks/${string}`
export const getLessonsInDaysUrl = (string: string) => `/lessons-in-days/${string}`
export const getWeeksUrl = (string: string) => `/weeks/${string}`
export const getDaysUrl = (string: string) => `/days/${string}`
