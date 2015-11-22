cs.Statistic = Statistic;

function Statistic() {
  var self = this;

  self.objectStatistics = [];

  self.getNextObjectStatistic = getNextObjectStatistic;

  return self;

  function getNextObjectStatistic() {
    var
      index = self.objectStatistics.length,
      objectStatistic = new cs.ObjectStatistic(index);

    self.objectStatistics.push(objectStatistic);

    return objectStatistic;
  }
}

cs.ObjectStatistic = ObjectStatistic;

function ObjectStatistic(index) {
  this.index = index;
}