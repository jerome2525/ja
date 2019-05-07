module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		}, // compass

		watch: {
			options: { livereload: true },
			sass: {
				files: ['sass/*.scss', 'sass/partials/*.scss'],
				tasks: ['compass:dev']
			}, // sass
			php: {
				files: ['*.php', 'lib/*.php']
			} // html
		} // watch


	}); // initConfig

	grunt.registerTask('default', 'watch');

} // exports