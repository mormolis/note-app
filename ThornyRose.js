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
    },

    toBeTypeOf: function(type) {
      if (this._typeOf() === type ){
        console.log("Indeed! " + this._typeOf() + " is type of " + type);
        
      } else {
        throw new Error(this._typeOf() + " is NOT type of " + type);
        
      }
    },
    _typeOf: function(){
      return Object.prototype.toString.call(this.obj).slice(8, -1);

    }

  }
  
  var expect = function (obj) {
    return new ThornyRose(obj);
  }
  var describe = function (text) {
    return new ThornyRose().describe(text);
  }

  exports.expect = expect;
  exports.describe = describe;

})(this)