class TestClass2 extends TestClass1 {

  constructor() {
    super();
    this.prop11 = 'val21';
    this.prop22 = 'val22';
  }

  func11() {
    this.super.func11();
  }

  func22() {

  }
}
