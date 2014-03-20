module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
      },
      fontawesome: {
        scss: {
          cwd: 'bower_components/fontawesome/scss/',
          src: '**',
          dest: 'sass/vendor/fontawesome'
        },
        fonts: {
          cwd: 'bower_components/fontawesome/fonts/',
          src: '**',
          dest: 'source/fonts'
        }
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
      },
      "fontawesome-scss": {
        expand: true,
        cwd: '<%= vendor.fontawesome.scss.cwd %>',
        src: '<%= vendor.fontawesome.scss.src %>',
        dest: '<%= vendor.fontawesome.scss.dest %>'
      },
      "fontawesome-fonts": {
        expand: true,
        cwd: '<%= vendor.fontawesome.fonts.cwd %>',
        src: '<%= vendor.fontawesome.fonts.src %>',
        dest: '<%= vendor.fontawesome.fonts.dest %>'
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
    },
    compress: {
      dist: {
        options: {
          archive: 'dist/octozurb-v<%= pkg.version %>.zip',
          mode: 'zip'
        },
        expand: true,
        src: [
          'sass/**/*',
          'source/**/*',
          '*.md'
        ],
        dest: 'octozurb'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['copy', 'uglify']);
  grunt.registerTask('dist', ['copy', 'uglify', 'compress']);
}
