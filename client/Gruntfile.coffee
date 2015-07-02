'use strict';

module.exports = (grunt) ->
  # Load grunt tasks automatically
  require('load-grunt-tasks')(grunt)

  appConfig =
    app: 'app'
    test: 'test'
    dist: 'dist'

  grunt.initConfig
    yeoman: appConfig

    clean:
      options:
        force: yes
      build:
        src: [
          '<%= yeoman.dist %>'
        ]

    copy:
      dist:
        files: [
          expand: yes
          cwd: '<%= yeoman.app %>'
          src: [
            '**/**/*'
            '!**/**/*.{scss,coffee}'
          ]
          dest: '<%= yeoman.dist %>'
          filter: 'isFile'
        ]

    wiredep:
      dist:
        src: [
          '<%= yeoman.dist %>/index.html'
        ]

    coffee:
      options:
        sourceMap: no
      dist:
        files: [
          {
            src: [
              '<%= yeoman.app %>/coffee/app.coffee'
              '<%= yeoman.app %>/modules/**/*.coffee'
            ]
            dest: '<%= yeoman.dist %>/app.js'
          }
        ]

    useminPrepare:
      html: '<%= yeoman.dist %>/index.html'
      options:
        dest: '<%= yeoman.dist %>'
        flow:
          steps:
            js: [
              'uglifyjs'
            ]
          post: []

    usemin:
      html: '<%= yeoman.dist %>/index.html'
      options:
        assetsDirs: [
          '<%= yeoman.dist %>'
          'bower_components'
        ]

  grunt.registerTask 'default', [
    'clean'
    'copy'
    'wiredep'
    'coffee'
    'useminPrepare'
    'uglify'
    'usemin'
  ]