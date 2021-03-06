cs.ClassWrapper = ClassWrapper;

function ClassWrapper(stat) {
  var self = this;

  self.wrapClasses = wrapClasses;

  return self;

  function processObject(object, objectStat) {
    console.debug(objectStat.index, 'processObject');

    if (!object.cs) {
      object.cs = {};
    }

    for (var propName in object) {
      if (propName === 'cs') {
        continue;
      }

      var propType = object.cs[propName] ? typeof (object.cs[propName]) :
        typeof (object[propName]);

      if (propType === 'function') {
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

    memberStat.values.push(object.cs[memberName]);
  }

  function takeObjectSnapshot(objectBundle) {
    processObject(objectBundle.object, objectBundle.objectStat);
  }

  function wrapClass(className) {
    var constructor = window[className];

    if (!constructor) {
      console.error('Class not exist', className);
      return;
    }

    window[className] = function() {
      console.debug('constructor', className, arguments);

      var object = Object.create(constructor.prototype);
      constructor.apply(object, arguments);

      processObject(object, stat.getNextObjectStat(className, object));
      return object;
    };
  }

  function wrapClasses(classNames) {
    for (var i = 0; i < classNames.length; i++) {
      wrapClass(classNames[i]);
    }
  }

  function wrapMember(object, objectStat, memberName) {
    console.debug(objectStat.index, 'wrapMember', memberName);

    stat.addMemberStat(objectStat, memberName);

    object.cs[memberName] = object[memberName];

    Object.defineProperty(object, memberName, {
      get: function() {
        console.debug(objectStat.index, 'get', memberName, this.cs[memberName]);
        var memberStat = stat.getMemberStat(objectStat, memberName);
        memberStat.getCount++;
        return this.cs[memberName];
      },
      set: function(value) {
        console.debug(objectStat.index, 'set', memberName, value, this.cs[memberName]);
        var memberStat = stat.getMemberStat(objectStat, memberName);
        memberStat.setCount++;
        memberStat.values.push(value);
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
