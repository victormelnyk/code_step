cs.Core = Core;

function Core() {
  var self = this;

  self.classWrapper = new cs.ClassWrapper(self);
  self.stepManager = new cs.StepManager(self);

  self.wrapClasses = wrapClasses;

  init();
  return self;

  function init() {

  }

  function wrapClasses(classeNames) {
    self.classWrapper.wrapClasses(classeNames);
  }
}