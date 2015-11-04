cs.ClassWrapper = ClassWrapper;

function ClassWrapper() {
  var
    self = this,
    fObjectNumber = 0;

  self.wrapClasses = wrapClasses;

  return self;

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

      fObjectNumber++;
      wrapObject(object, fObjectNumber);
      return object;
    };
  }

  function wrapClasses(classeNames) {
    for (var i = 0; i < classeNames.length; i++) {
      wrapClasse(classeNames[i]);
    }
  }

  function wrapObject(object, objectNumber) {

    function setProperty(propName) {
      console.debug(objectNumber, 'setProperty', propName);

      object.cs[propName] = object[propName];

      Object.defineProperty(object, propName, {
        get: function() {
          console.debug(objectNumber, 'get', propName, this.cs[propName]);
          return this.cs[propName];
        },
        set: function(value) {
          console.debug(objectNumber, 'set', propName, value, this.cs[propName]);
          this.cs[propName] = value;
        }
      });
    }

    function setFunction(funcName) {
      console.debug(objectNumber, 'setFunction', funcName);

      object.cs[funcName] = object[funcName];

      object[funcName] = function() {
        console.debug(objectNumber, 'call', funcName, arguments);
        object.cs[funcName].apply(object, arguments);
      };
    }

    console.debug(objectNumber, 'codeStepInit');

    object.cs = {};

    for (var propName in object) {
      if (propName === 'cs') {
        continue;
      }

      if (typeof(object[propName]) === 'function') {
        setFunction(propName);
      } else {
        setProperty(propName);
      }
    }
  }
}