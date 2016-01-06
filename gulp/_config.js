module.exports = {
	scss: {
		src: 'app/scss/sitcon2016.scss',
		dst: 'build/',
		watch: 'app/scss/**/*'
	},
	image: {
		src: 'app/image/**/*',
		dst: 'build/image/',
		watch: 'app/image/**/*'
	},
	cfp: {
		src: ['app/cfp/landingpage.scss', 'app/cfp/CFP.scss'],
		dst: 'build/cfp/',
		watch: ['app/cfp/landingpage.scss', 'app/cfp/CFP.scss']
	}
};