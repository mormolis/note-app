(function (exports) {
  function ThornyRose(obj) {
    this.obj = obj
  }

  ThornyRose.prototype = {

    describe: function (functionality) {
      console.log("The Following test(s) is/are regarding: " + functionality)
    },

    toEqual: function (assertion) {

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
  }
  
  var expect = function (obj) {
    test = new ThornyRose(obj);
    return test;
  }
  var describe = function (text) {
    description = new ThornyRose().describe(text);
  }
  exports.expect = expect;
  exports.describe = describe;
})(this)

// var testing = function(){
//   return 5;
// }

// expect(testing).toEqual(5);

// expect(5).toEqual(5);