module.exports = function (grunt) {
  "use strict";
  // Project configuration.

  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-img');
  //grunt.loadNpmTasks('grunt-prettysass');

  // Default task(s).
  grunt.registerTask('build', ['img']);

};
