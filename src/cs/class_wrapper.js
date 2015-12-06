cs.ClassWrapper = ClassWrapper;

function ClassWrapper(stat) {
  var self = this;

  self.wrapClasses = wrapClasses;

  return self;

  function processObject(object, objectStat) {
    console.debug(objectStat.index, 'processObject');

    objectStat.object = object;

    if (object.cs) {
      object.cs = {};
    }

    for (var propName in object) {
      if (propName === 'cs') {
        continue;
      }

      if (typeof(object[propName]) === 'function') {
        if (object.cs[propName] === undefined) {
          wrapMethod(object, objectStat, propName);
        }
      } else {
        if (object.cs[propName] === undefined) {
          wrapMember(object, objectStat, propName);
        }
        takeMemberSnapshot(object, objectStat, propName);
      }
    }
  }

  function takeMemberSnapshot(object, objectStat, memberName) {
    var memberStat = stat.addMemberStat(objectStat, memberName);

    memberStat.value = object.cs[propName];
  }

  function takeObjectSnapshot(objectStat) {
    processObject(objectStat.object, objectStat);
  }

  function wrapClasse(className) {
    var constructor = window[className];

    if (!constructor) {
      console.error('Class not exist', className);
      return;
    }

    window[className] = function() {
      console.debug('constructor', className, arguments);

      var object = Object.create(constructor.prototype);
      constructor.apply(object, arguments);

      processObject(object, stat.getNextObjectStat(className));
      return object;
    };
  }

  function wrapClasses(classeNames) {
    for (var i = 0; i < classeNames.length; i++) {
      wrapClasse(classeNames[i]);
    }
  }

  function wrapMember(object, objectStat, memberName) {
    console.debug(objectStat.index, 'wrapMember', memberName);

    stat.addMemberStat(objectStat, memberName);

    object.cs[memberName] = object[memberName];

    Object.defineProperty(object, memberName, {
      get: function() {
        console.debug(objectStat.index, 'get', memberName, this.cs[memberName]);
        var memberStat = getMemberStat(objectStat, memberName);
        memberStat.getCount++;
        return this.cs[memberName];
      },
      set: function(value) {
        console.debug(objectStat.index, 'set', memberName, value, this.cs[memberName]);
        this.cs[memberName] = value;
      }
    });
  }

  function wrapMethod(object, objectStat, methodName) {
    console.debug(objectStat.index, 'wrapMethod', methodName);

    object.cs[methodName] = object[methodName];

    object[methodName] = function() {
      console.debug(objectStat.index, 'call', methodName, arguments);
      object.cs[methodName].apply(object, arguments);
      stat.takeSnapshot(takeObjectSnapshot);
    };
  }

}