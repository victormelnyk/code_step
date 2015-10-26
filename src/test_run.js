//log function TestClass(param1, param2) {
var testObject = new TestClass('value1', 'value2');
console.log('created testObject');

codeStepInit(testObject);

//console.clear();

testObject.propertyString = 'value updated';
var value = testObject.propertyString;

testObject.propertyNumber = 10;
var value = testObject.propertyNumber;

testObject.propertyArray[1] = 'value2 updated';
testObject.propertyArray = ['value1 new', 'value2 new', 'value3 new'];
value = testObject.propertyArray;

testObject.propertyObject.key1 = 'value1 updated';
testObject.propertyObject = {key1: 'value1 new', key2: 'value2 new'};
value = testObject.propertyObject;

//!! testObject.propertyDate = new Date();                         //! date
//!! testObject.propertyUndefined = undefined;                     //! undefined
//!! testObject.propertyNull = null;                               //! null
//!! testObject.propertyNan = NaN;                                 //! NaN

testObject.method1();
testObject.method2('value1');
testObject.method3('value1', 'value2');

console.log(testObject);

//log function TestClass(param1, param2) {
var testObject2 = new TestClass('value1', 'value2');
console.log('created testObject2');

codeStepInit(testObject2);

//console.clear();

testObject2.propertyString = 'value updated';
var value = testObject2.propertyString;

testObject2.propertyNumber = 10;
var value = testObject2.propertyNumber;

testObject2.propertyArray[1] = 'value2 updated';
testObject2.propertyArray = ['value1 new', 'value2 new', 'value3 new'];
value = testObject2.propertyArray;

testObject2.propertyObject.key1 = 'value1 updated';
testObject2.propertyObject = {key1: 'value1 new', key2: 'value2 new'};
value = testObject2.propertyObject;

//!! testObject2.propertyDate = new Date();                         //! date
//!! testObject2.propertyUndefined = undefined;                     //! undefined
//!! testObject2.propertyNull = null;                               //! null
//!! testObject2.propertyNan = NaN;                                 //! NaN

testObject2.method1();
testObject2.method2('value1');
testObject2.method3('value1', 'value2');

console.log(testObject2);