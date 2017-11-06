(function (exports) {
  function ThornyRose(obj) {
    this.obj = obj
  }

  ThornyRose.prototype.toEqual = function (assertion) {

    if (typeof this.obj === 'function') {
      if (this.obj() !== assertion) {
        throw new Error(this.obj + " does not equal to " + assertion);
      } else {
        console.log("Indeed! " + this.obj() + " === " + assertion);
      }
    } else {
      if (this.obj !== assertion) {
        throw new Error(this.obj + " does not equal to " + assertion);
      } else {
        console.log("Indeed! " + this.obj + " === " + assertion);
      }
    }
  }
  var expect = function (obj) {
    test = new ThornyRose(obj);
    return test;
  }
  exports.expect = expect;
})(this)

// var testing = function(){
//   return 5;
// }

// expect(testing).toEqual(5);

// expect(5).toEqual(5);