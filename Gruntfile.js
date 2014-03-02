module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    vendor: {
      foundation: {
        cwd: 'bower_components/foundation/scss/',
        src: '**',
        dest: 'sass/vendor/foundation'
      }
    },
    copy: {
      vendor: {
        expand: true,
        cwd: '<%= vendor.foundation.cwd %>',
        src: '<%= vendor.foundation.src %>',
        dest: '<%= vendor.foundation.dest %>',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
}
