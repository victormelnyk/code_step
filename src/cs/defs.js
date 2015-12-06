cs.MemberStat = MemberStat;

function MemberStat(memberName) {
  this.name = memberName;
  this.value = undefined;
  this.getCount = 0;
}

cs.MethodStat = MethodStat;

function MethodStat() {

}

cs.ObjectSnapshotStat = ObjectSnapshotStat;

function ObjectSnapshotStat() {
  this.members: {},
  this.methods: {}
}

cs.ObjectStat = ObjectStat;

function ObjectStat(index) {
  this.index = index;
  this.object = null;
  this.snapshots = [];
}