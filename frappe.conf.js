 module.exports = {
	staticPath: './static',
    distPath: './dist',
	dev: {
		srcDir: './src',
		outputDir: './dist',
		assetsPublicPath: '/',
		devServerPort: 8000,
		entryHtml: './src/index.html',
		entry: {
			app: './src/main.js'
		},
		env: {
			PORT: process.env.PORT || 8000
		}
  	},
	node: {
		paths: {
			main: 'server/index.js'
		}
	}
}