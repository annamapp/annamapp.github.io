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
          "jsmin/single.js" : [
            "js/jquery.min.js","js/bootstrap.min.js","js/owl.carousel.min.js",
            "js/jquery.scrollTo.min.js", "js/jquery.localScroll.min.js"]
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
    },
      cssmin: {
          options: {
              target:"unicommercechat/dist/style",
              advanced:true,
              keepSpecialComments: 0
          },
          target: {
              files: {
                  'style/css/annam.css': ['style/css/bootstrap.min.css',
                      'style/css/main.css',
                      'style/css/owl.carousel.css',
                      'style/css/owl.carousel.css',
                      'style/css/font-awesome.min.css']
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-img');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('build', ['uglify','img','cssmin']);

};
