/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-img': "url('./src/assets/hero-image-github-profile.png')",
			},
			fontFamily: {
				vietnam: "'Be Vietnam Pro', sans-serif",
			},
			colors: {
				"blue-light": '#20293A',
			}
		},
	},
	plugins: [],
};
