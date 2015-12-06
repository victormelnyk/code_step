cs.Stat = Stat;

function Stat() {
  var self = this;

  self.objectStats = {};
  self.objectStatList = [];
  self.step = 0;

  self.addMemberStat = addMemberStat;
  self.getMemberStat = getMemberStat;
  self.getNextObjectStat = getNextObjectStat;
  self.takeSnapshot = takeSnapshot;

  return self;

  function addMemberStat(objectStat, memberName) {
    var memberStat = new cs.MemberStat(memberName);

    objectStat.snapshots[self.step].members[memberName] = memberStat;
    return memberStat;
  }

  function getMemberStat() {
    return objectStat.snapshots[self.step].members[memberName];
  }

  function getNextObjectStat(className) {
    var objectStat = new cs.ObjectStat(self.objectStatList.length);

    if (!self.objectStats[className]) {
      self.objectStats[className] = [];
    }

    self.objectStats[className].push(objectStat);
    self.objectStatList.push(objectStat);

    return objectStat;
  }

  function takeSnapshot(processFunc) {
    self.objectStatList.forEach(processFunc);
  }
}