module.exports = function(grunt) {

  grunt.config.set('watch', {
    options: {
      livereload: 35729
    },
    patterns: {
      files: ['src/**/*'],
      tasks: ['render']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');


};