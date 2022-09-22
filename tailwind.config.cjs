const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				'reverse-spin': 'reverse-spin 1s linear infinite'
			},
			keyframes: {
				'reverse-spin': {
					from: {
						transform: 'rotate(360deg)'
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
