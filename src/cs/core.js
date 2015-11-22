cs.Core = Core;

function Core() {
  var self = this;

  self.statistic = new cs.Statistic();
  self.classWrapper = new cs.ClassWrapper(self.statistic);
  self.stepManager = new cs.StepManager(self.statistic);

  self.wrapClasses = wrapClasses;

  init();
  return self;

  function init() {

  }

  function wrapClasses(classeNames) {
    self.classWrapper.wrapClasses(classeNames);
  }
}