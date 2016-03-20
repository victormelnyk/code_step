cs.Core = Core;

function Core() {
  var self = this;

  self.stat = new cs.Stat();
  self.classWrapper = new cs.ClassWrapper(self.stat);
  self.stepManager = new cs.StepManager(self.stat);

  self.wrapClasses = wrapClasses;

  init();
  return self;

  function init() {

  }

  function wrapClasses(classNames) {
    self.classWrapper.wrapClasses(classNames);
  }
}
