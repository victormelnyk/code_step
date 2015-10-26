function TestClass(param1, param2) {
  //! main
  this.propertyString = 'value';                          //! string
  this.propertyNumber = 17;                               //! number
  this.propertyArray = ['value1', 'value2', 'value3'];    //! array
  this.propertyObject = {key1: 'value1', key2: 'value2'}; //! object

  this.propertyDate = new Date();                         //! date
  this.propertyUndefined = undefined;                     //! undefined
  this.propertyNull = null;                               //! null
  this.propertyNan = NaN;                                 //! NaN
}

TestClass.prototype.method1 = function() {
  console.log('call method1');
}

TestClass.prototype.method2 = function(param1) {
  console.log('call method2', param1);
}

TestClass.prototype.method3 = function(param1, param2) {
  console.log('call method3', param1, param2);
}