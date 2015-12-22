cs.MemberStat = MemberStat;

function MemberStat(memberName) {
  this.name = memberName;
  this.values = [];
  this.getCount = 0;
  this.setCount = 0;
}

cs.MethodStat = MethodStat;

function MethodStat(funcName) {
  this.name = funcName;
  this.callCount = 0;
}

cs.ObjectSnapshotStat = ObjectSnapshotStat;

function ObjectSnapshotStat() {
  this.members = {};
  this.methods = {};
}

cs.ObjectStat = ObjectStat;

function ObjectStat(index) {
  this.index = index;
  this.snapshots = [];
}

cs.ObjectBundle = ObjectBundle;

function ObjectBundle(object, objectStat) {
  this.object = object;
  this.objectStat = objectStat;
}