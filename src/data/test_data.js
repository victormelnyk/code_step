window.TestClass = function(param1, param2) {
  //! main
  this.propertyString = 'value';                          //! string
  this.propertyNumber = 17;                               //! number
  this.propertyArray = ['value1', 'value2', 'value3'];    //! array
  this.propertyObject = {                                 //! object
    key1: 'value1',
    key2: 'value2'
  };

  /*!!
  this.propertyBoolean = true;                            //! boolean
  this.propertyDate = new Date();                         //! date
  this.propertyUndefined = undefined;                     //! undefined
  this.propertyNull = null;                               //! null
  this.propertyNan = NaN;                                 //! NaN*/
};

window.TestClass.prototype.method1 = function() {
  console.info('call method1');
};

window.TestClass.prototype.method2 = function(param1) {
  console.info('call method2', param1);
};

window.TestClass.prototype.method3 = function(param1, param2) {
  console.info('call method3', param1, param2);
};