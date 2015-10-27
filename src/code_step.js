function Cs() {
  var self = this;

  self.initClass = initClass;
  self.initClasses = initClasses;

  return self;

  function initClass(className) {
    var constructor = window[className];

    window[className] = function() {
      console.debug('constructor', className, arguments);

      var object = Object.create(constructor.prototype);
      constructor.apply(object, arguments);

      initObject(object);
      return object;
    };
  }

  function initClasses(classeNames) {
    for (var i = 0; i < classeNames.length; i++) {
      initClass(initClass[i]);
    }
  }

  function initObject(object) {

    function setProperty(propName) {
      console.debug('setProperty', propName);

      object.cs[propName] = object[propName];

      Object.defineProperty(object, propName, {
        get: function() {
          console.debug('get', propName, this.cs[propName]);
          return this.cs[propName];
        },
        set: function(value) {
          console.debug('set', propName, value, this.cs[propName]);
          this.cs[propName] = value;
        }
      });
    }

    function setFunction(funcName) {
      console.debug('setFunction', funcName);

      object.cs[funcName] = object[funcName];

      object[funcName] = function() {
        console.debug('call', funcName, arguments);
        object.cs[funcName].apply(object, arguments);
      };
    }

    console.debug('codeStepInit');

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

window.cs = new Cs();