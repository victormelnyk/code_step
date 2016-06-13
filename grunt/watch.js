module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'src/**/*.js'
    ],
    tasks: [
      'newer:copy:dev'
    ]
  },

  styles: {
    files: [
      'src/**/*.less'
    ],
    tasks: [
      'newer:less:dev'
    ]
  },

  html: {
    files: [
      'src/index.html'
    ],
    tasks: [
      'includeSource'
    ]
  }
};
