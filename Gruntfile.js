'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      html: {
        files: ['index.html'],
        tasks: ['copy:html']
      },
      data: {
        files: ['data/*'],
        tasks: ['copy:data']
      },
      less: {
        files: 'less/*',
        tasks: ['less:local']
      },
      img: {
        files: 'img/*',
        tasks: ['copy:img']
      }
    },

    copy: {
      html: {
        files: [
          {
            src: 'index.html',
            dest: 'dist/'
          }
        ]
      },

      img: {
        files: [
          {
            src: 'img/*',
            dest: 'dist/'
          }
        ]
      },

      data: {
        files: [
          {
            src: 'data/*',
            dest: 'dist/'
          }
        ]
      },

      bower: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/d3/',
            src: 'd3.min.js',
            dest: 'dist/js/'
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/js/',
            src: 'bootstrap.min.js',
            dest: 'dist/js/'
          },
          {
            expand: true,
            cwd: 'bower_components/underscore/',
            src: 'underscore-min.js',
            dest: 'dist/js/'
          }
        ]
      }
    },

    // Compile LESS to CSS
    less: {
      options: {
        paths: 'bower_components/bootstrap/less',
        imports: {
          reference: ['mixins.less', 'variables.less']
        }
      },
      // Compile Bootstrap's LESS
      bootstrap: {
        src: [
          'bower_components/bootstrap/less/bootstrap.less'
        ],
        dest: 'dist/css/bootstrap.css'
      },
      local: {
        src: 'less/style.less',
        dest: 'dist/css/style.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', [
    'copy',
    'less'
  ]);
};
