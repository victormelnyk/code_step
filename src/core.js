cs.Core = Core;

function Core() {
  var
    self = this,
    classWrapper = new cs.ClassWrapper();

  self.wrapClasses = wrapClasses;

  init();
  return self;

  function init() {

  }

  function wrapClasses(classeNames) {
    classWrapper.wrapClasses(classeNames);
  }
}