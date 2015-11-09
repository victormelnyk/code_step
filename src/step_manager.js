cs.StepManager = StepManager;

executionItem = {
  func: null,
  params: null,
  self: null

  execut()
}

function StepManager(core) {
  var self = this;

  self.objectNumber = 0;
  self.executionQueue = [];

  self.getNewObjectNumber = getNewObjectNumber;

  return self;

  function getNewObjectNumber() {
    self.objectNumber++;
    return self.objectNumber;
  }
}