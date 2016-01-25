gulp = require 'gulp'
plugins = require('gulp-load-plugins')()


gulp.task 'jade', ->
	gulp.src ['jade/**/*.jade', '!jade/no-render/**/*.jade']
	.pipe plugins.watch ['jade/**/*.jade', '!jade/no-render/**/*.jade'], {
		verbose: true
	}
	.pipe plugins.plumber()
	.pipe plugins.jade {
		pretty: true
	}
	.pipe plugins.plumber.stop()
	.pipe gulp.dest './'

gulp.task 'stylus_bootstrap', ->
	gulp.src 'stylus/bootstrap.styl'
	.pipe plugins.watch ['stylus/bootstrap.styl'], {
		verbose: true
	}
	.pipe plugins.plumber()
	.pipe plugins.stylus()
	.pipe plugins.plumber.stop()
	.pipe gulp.dest './'

gulp.task 'coffee', ->
	gulp.src 'coffee/**/*.coffee'
	.pipe plugins.watch ['coffee/**/*.coffee'], {
		verbose: true
	}
	.pipe plugins.plumber()
	.pipe plugins.coffee {
		bare: true
	}
	.pipe plugins.plumber.stop()
	.pipe gulp.dest './js'


gulp.task 'concat_js',  ->
	gulp.src 'js/**/*.js'
	.pipe plugins.order [
		'spinner.js',
		'ajax.js',
		'toggle.js',
		'*.js'
	]
	.pipe plugins.concat 'scripts.js'
	.pipe gulp.dest './'

gulp.task 'concat_watcher', ->
	gulp.watch 'js/**/*.js', ['concat_js']

gulp.task 'build', ->
	gulp.src ['index.html']
	.pipe plugins.watch ['index.html'], {
		verbose: true
	}
	.pipe plugins.inlineSource()
	.pipe plugins.htmlmin {
		removeComments: true,
		removeCommentsFromCDATA: true,
		collapseWhitespace: true,
		collapseInlineTagWhitespace: true,
		removeRedundantAttributes: true,
		minifyJS: true
	}
	.pipe gulp.dest './build'

gulp.task 'default', ['stylus_bootstrap', 'jade', 'coffee', 'concat_watcher',  'build']