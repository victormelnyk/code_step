cs.Stat = Stat;

function Stat() {
  var self = this;

  self.objectStats = {};
  self.objectBundles = [];
  self.step = 0;

  self.addMemberStat = addMemberStat;
  self.getMemberStat = getMemberStat;
  self.getNextObjectStat = getNextObjectStat;
  self.takeSnapshot = takeSnapshot;

  return self;

  function addMemberStat(objectStat, memberName) {
    var memberStat = new cs.MemberStat(memberName);

    getSnapshot(objectStat).members[memberName] = memberStat;
    return memberStat;
  }

  function getMemberStat(objectStat, memberName) {
    return objectStat.snapshots[self.step].members[memberName];
  }

  function getNextObjectStat(className, object) {
    var objectStat = new cs.ObjectStat(self.objectBundles.length);

    if (!self.objectStats[className]) {
      self.objectStats[className] = [];
    }

    self.objectStats[className].push(objectStat);
    self.objectBundles.push(new cs.ObjectBundle(object, objectStat));

    return objectStat;
  }

  function getSnapshot(objectStat) {
    if (!objectStat.snapshots[self.step]) {
      objectStat.snapshots[self.step] = new cs.ObjectSnapshotStat();
    }
    return objectStat.snapshots[self.step];
  }

  function takeSnapshot(processFunc) {
    self.step++;
    self.objectBundles.forEach(processFunc);
  }
}