function codeStepInit(object) {

  function setProperty(propName) {
    console.debug('setProperty', propName);

    object._cs[propName] = object[propName];

    Object.defineProperty(object, propName, {
      get: function() {
        console.debug('get', propName, this._cs[propName]);
        return this._cs[propName];
      },
      set: function(value) {
        console.debug('set', propName, value, this._cs[propName]);
        this._cs[propName] = value;
      }
    });
  }

  function setFunction(funcName) {
    console.debug('setFunction', funcName);

    object._cs[funcName] = object[funcName];

    object[funcName] = function() {
      console.debug('call', funcName, arguments);
      object._cs[funcName].apply(object, arguments)
    }
  }

  console.debug('codeStepInit');

  object._cs = {};

  for (var propName in object) {
    if (propName === '_cs') {
      continue;
    }

    if (typeof(object[propName]) === 'function') {
      setFunction(propName)
    } else {
      setProperty(propName);
    }
  }
}