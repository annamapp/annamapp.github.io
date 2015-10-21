module.exports = function (grunt) {
  "use strict";
  // Project configuration.

  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
        //compress : false,
        //beautify : true
      },
      my_target: {
        options: {
          footer: ""
        },
        files: {
          "jsmin/single.js" : ["js/**/*.js","!js/main.js"]
        }
      },
      main: {
        options: {
          footer: ""
        },
        files: {
          "jsmin/main.js" : ["js/main.js"]
        }
      }
    },
    img: {
      // recursive extension filter with output path
      task2: {
        src: ['img-src/*'],
        dest: 'img'
      },
      task3: {
        src: ['img-src/banner/*'],
        dest: 'img/banner'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-img');

  // Default task(s).
  grunt.registerTask('build', ['uglify','img']);

};
