module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
	 
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['./src/scripts/es6.js'],
				tasks: ['babel'],
				options: {
					interrupt: true
				},
			},
			sass: {
				files: ['./src/scss/*.scss'],
				tasks: ['sass'],
				options: {
					interrupt: true
				}
			}
		},
	    babel: {
	        dist: {
	            files: {
	                './src/scripts/script.js': './src/scripts/es6.js'
	            }
	        }
	    },
	    sass: {                              
	        dist: {                            
				options: {     
					sourcemap: 'none',                  
					style: 'expanded'
				},
				files: {                         
					'./src/styles.css': './src/scss/main.scss'
				}
	        }
	      }
	});

	 
	grunt.registerTask('default', ['babel']);
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};