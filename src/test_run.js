function runTest() {
  cs.wrapClasses(['TestClass']);
  runTestObject();
  runTestObject();
}

function runTestObject() {
  //log function TestClass(param1, param2) {
  var testObject = new window.TestClass('value1', 'value2');
  console.log('created testObject');

  //console.clear();

  testObject.propertyString = 'value updated';
  var value = testObject.propertyString;

  testObject.propertyNumber = 10;
  value = testObject.propertyNumber;

  testObject.propertyArray[1] = 'value2 updated';
  testObject.propertyArray = ['value1 new', 'value2 new', 'value3 new'];
  value = testObject.propertyArray;

  testObject.propertyObject.key1 = 'value1 updated';
  testObject.propertyObject = {
    key1: 'value1 new',
    key2: 'value2 new'
  };
  value = testObject.propertyObject;

  //!! testObject.propertyDate = new Date();                         //! date
  //!! testObject.propertyUndefined = undefined;                     //! undefined
  //!! testObject.propertyNull = null;                               //! null
  //!! testObject.propertyNan = NaN;                                 //! NaN

  testObject.method1();
  testObject.method2('value1');
  testObject.method3('value1', 'value2');

  console.log(testObject);
}

window.onload = runTest;