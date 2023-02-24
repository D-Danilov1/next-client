const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			blue: '#48B9B7',
			gray: '#646466',
			dark: '#141416',
		},
		extend: {
			screens: {
				xxl: { max: '1185px' },
				xxl2: { max: '1000px' },
				sm: { max: '768px' },
				sm15: { max: '550px' },
				sm2: { max: '450px' },
				sm3: { max: '420px' },
				sm4: { max: '350px' },
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
			},
			transition: {
				base: 'all 0.3s ease',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [],
}
