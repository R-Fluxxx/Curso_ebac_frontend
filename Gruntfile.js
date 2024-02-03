module.exports = function (grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            paths: ['styles']
          },
          files: {
            'styles/main.css': 'styles/main.less'
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'dist/app.min.js': ['src/*.js']
          }
        }
      },
      watch: {
        styles: {
          files: ['styles/*.less'],
          tasks: ['less']
        },
        scripts: {
          files: ['src/*.js'],
          tasks: ['uglify']
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['less', 'uglify', 'watch']);
  };
  