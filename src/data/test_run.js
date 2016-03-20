cs.runTest = function() {
  cs.run();
  cs.wrapClasses(['TestClass']);
  runTestObject();
  // todo runTestObject();
};

function runTestObject() {
  console.log(1);
}

function runTestObject2() {
  //log function TestClass(param1, param2) {
  var testObject = new window.TestClass('value1', 'value2');
  console.log('Created testObject');

  //console.clear();

  var value = testObject.propertyString;
  console.log('Get propertyString');
  testObject.propertyString = 'value updated1';
  testObject.propertyString = 'value updated2';
  console.log('Set propertyString');

  /*
  value = testObject.propertyNumber;
  console.log('Get propertyNumber');
  testObject.propertyNumber = 10;
  console.log('Set propertyNumber');

  value = testObject.propertyArray;
  console.log('Get propertyArray');
  testObject.propertyArray = ['value1 new', 'value2 new', 'value3 new'];
  console.log('Set propertyArray');
  testObject.propertyArray[1] = 'value2 updated';
  console.log('Set propertyArray one item');

  value = testObject.propertyObject;
  console.log('Get propertyObject');
  testObject.propertyObject = {
    key1: 'value1 new',
    key2: 'value2 new'
  };
  console.log('Set propertyObject');
  testObject.propertyObject.key1 = 'value1 updated';
  console.log('Set propertyObject one prop');

  //!! testObject.propertyDate = new Date();                         //! date
  //!! testObject.propertyUndefined = undefined;                     //! undefined
  //!! testObject.propertyNull = null;                               //! null
  //!! testObject.propertyNan = NaN;                                 //! NaN
  */
  testObject.method1();
  console.log('Call method1');

  value = testObject.propertyString;
  console.log('Get propertyString');
  testObject.propertyString = 'value updated3';
  console.log('Set propertyString');

  testObject.method1();
  console.log('Call method1');

  /*
  testObject.method2('value1');
  console.log('Call method2');
  testObject.method3('value1', 'value2');
  console.log('Call method3');*/

  console.log(testObject);
}
