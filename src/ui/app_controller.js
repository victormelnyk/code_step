angular
  .module('appModule')
  .controller('AppController',
    ['$window', '$interval', AppController]);

function AppController($window, $interval) {
  var self = this;

  self.tic = 0;
  self.cs = $window.cs;

  self.ni = ni;

  init();
  return self;

  function init() {
    $interval(function() {
      self.tic++;
    }, 1000);
  }

  function ni() {
    console.error('Not Implemented');
  }
}