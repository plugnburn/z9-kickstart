module.exports = {
	modules: false,
	files: {
		templates: {
			joinTo: 'js/app.js',
			root: 'app/templates/',
			order: {
				before: ['app/startup.js']
			}
		},
		javascripts: {
			joinTo: {
				'js/app.js': /^app/,
				'js/vendor.js': /^(vendor|bower_components)/
			}
		},
		stylesheets: {
			root: 'app/css/',
			joinTo: {
				'css/app.css': /^app/,
				'css/vendor.css': /^(vendor|bower_components)/
			}
		}
	}
}
