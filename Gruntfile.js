module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    vendor: {
      foundation: {
        sass: {
          cwd: 'bower_components/foundation/scss/',
          src: '**',
          dest: 'sass/vendor/foundation'
        },
        js: {
          src: [
            'bower_components/foundation/js/foundation/foundation.js',
            'bower_components/foundation/js/foundation/foundation.topbar.js'
          ],
          dest: 'source/javascripts/libs/foundation.min.js'
        }
      },
      fastclick: {
        cwd: 'bower_components/fastclick/lib/',
        src: 'fastclick.js',
        dest: 'source/javascripts/libs/'
      }
    },
    copy: {
      sass: {
        expand: true,
        cwd: '<%= vendor.foundation.sass.cwd %>',
        src: '<%= vendor.foundation.sass.src %>',
        dest: '<%= vendor.foundation.sass.dest %>',
      },
      fastclick: {
        expand: true,
        cwd: '<%= vendor.fastclick.cwd %>',
        src: '<%= vendor.fastclick.src %>',
        dest: '<%= vendor.fastclick.dest %>'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      foundation: {
        files: {
          '<%= vendor.foundation.js.dest %>': '<%= vendor.foundation.js.src %>'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy', 'uglify']);
}
