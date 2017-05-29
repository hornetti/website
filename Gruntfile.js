module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'source/sass/',
					src: '*.scss',
					dest: 'build/css/',
					ext: '.css'
				}]
			}
		},
		twig: {
			twig_task : {
				files: {
					'build/index.html': [
						'source/twig/**/*.twig'
					]
				}
			}			
		},
		autoprefixer: {
			compile: {
				files: {
				  'build/css/style.css': 'build/css/style.css'
				},
			},
		},
		cssmin: {
			clean: {
				files: {
				  'build/css/style.css': 'build/css/style.css'
				}
			}
		},
		/*uglify: {
			my_target: {
				files: {
					'build/output.min.js': [
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/angular/angular.min.js'
					],
					'build/js/myoutput.min.js': [
						'build/js/app.js'
					]
				}
			}
		},*/
		watch: {
			sass: {
				files: [ 'source/sass/*.scss' ],
				tasks: ['sass', 'autoprefixer', 'cssmin']
			}/*,
			jade: {
				files: [ 'source/jade/*.jade' ],
				tasks: ['jade']
			},*/
		},
		browserSync: {
			bsFiles: {
				src: ['build/css/*.css', 'build/*.html']
			},
			options: {
				watchTask: true,
				server: {
					baseDir: 'build'
				},
			},
		},
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-twig');

	grunt.registerTask('start', ['browserSync', 'watch']);
	grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'twig' /*, 'uglify'*/]);
};