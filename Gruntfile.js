module.exports = function(grunt){

	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		
		watch:{
			css:{
				files: [
					'sass/*.sass',
					'sass/*.scss'
				],
				tasks: ['compass']
			},
			js:{
				files: ['js/*.js'],
				tasks: ['uglify']
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					outputStyle: 'compressed'
				}
			}
		},
		uglify: {
			options: {
				banner: "/* <%= pkg.name %> */",
				mangle: false
			},
			my_target: {
				files: {
					'js/min-jquery.js' : ['js/*.js']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('default', ['watch']);
};