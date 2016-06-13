module.exports = {
  all: {
    files: [
      {
        expand: true,
        cwd: 'src/',
        src: ['*/**/*.html'],
        dest: 'dist/',
        filter: 'isFile'
      }
    ]
  },

  dev: {
    options: {
      process: function(content, srcpath) {
        return '\'use strict\';\n' +
          content + '\n';
          //'})();';
      }
    },
    files: [
      {
        expand: true,
        cwd: 'src/',
        src: '**/*.js',
        dest: 'dist/',
        filter: 'isFile'
      }
    ]
  },

  devLibs: {
    files: [
      {
        src: 'bower_components/angular/angular.js',
        dest: 'dist/libs/angular/angular.js'
      },
      {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: [
          'css/bootstrap.css',
          'css/bootstrap-theme.css',
          'fonts/*'
        ],
        dest: 'dist/libs/bootstrap/',
        filter: 'isFile'
      }
    ]
  },

  prodLibs: {
    files: [
      {
        src: 'bower_components/angular/dist/angular.min.js',
        dest: 'dist/libs/angular/angular.min.js'
      },
      {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: [
          'css/bootstrap.min.css',
          'css/bootstrap-theme.min.css',
          'fonts/*'
        ],
        dest: 'dist/libs/bootstrap/',
        filter: 'isFile'
      }
    ]
  }
};
