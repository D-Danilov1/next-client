export interface ICompletedLessons {
	id: number
	lesson_id: number
	user_id: string
}

export interface ILessons {
	id: number
	name: string
	image: string
	link: string
}

export interface ILessonsInCourses {
	id: number
	lesson_id: number
	course_id: number
}
export interface ICourses {
	id: number
	name: string
	image: string
	description: string
}
export interface ILessonsInWeeks {
	id: number
	lesson_id: number
	week: string
}
export interface ILessonsInDays {
	id: number
	lesson_id: number
	day: number
}
export interface IWeeks {
	id: number
	name: string
}

export interface IDays {
	id: number
	name: string
}
