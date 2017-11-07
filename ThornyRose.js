
(function (exports) {
  function ThornyRose(obj) {
    this.obj = obj
  }

  ThornyRose.prototype = {
    toEqual: function (assertion) {
      var displayToPage = new CreateDiv("toEqual")

      if (typeof this.obj === 'function') {
        if (this.obj() !== assertion) {
          
          
          displayToPage.setMessage("D'oh! " + this.obj + " does not equal to " + assertion)
          displayToPage.addClass("error");
          
          throw new Error("D'oh! "+this.obj + " does not equal to " + assertion);
        } else {
          displayToPage.setMessage("You nailed it!! " + this.obj() + " === " + assertion)
          
          console.log("You nailed it! " + this.obj() + " === " + assertion);
        }
      } else {
        if (this.obj !== assertion) {
          displayToPage.setMessage("D'oh! "+ this.obj + " does not equal to " + assertion)
          displayToPage.addClass("error");
          throw new Error("D'oh! "+ this.obj + " does not equal to " + assertion);
        } else {
          displayToPage.setMessage("You nailed it!! " + this.obj + " === " + assertion)
          
          console.log("You nailed it!! " + this.obj + " === " + assertion);
        }
      }
    },

    toBeTypeOf: function (type) {
      var displayToPage = new CreateDiv("toBeTypeOf")
      if (this._typeOf() === type) {

        displayToPage.setMessage("You nailed it!! " + this._typeOf() + " is type of " + type)
        
        console.log("Indeed! " + this._typeOf() + " is type of " + type);

      } else {
        displayToPage.setMessage("D'oh! "+this._typeOf() + " is NOT type of " + type)
        displayToPage.addClass("error");
        throw new Error(this._typeOf() + " is NOT type of " + type);

      }
    },
    _typeOf: function () {
      return Object.prototype.toString.call(this.obj).slice(8, -1);
    }
  }

  var expect = function (obj) {
    return new ThornyRose(obj);
  }

 
  exports.hope = expect;
  
})(this);

(function (exports) {
  var describe = function (text, fn) {
    var displayToPage = new CreateDiv("describe");
    displayToPage.setMessage(text);
    console.log(text);
    fn();
  }
  exports.showOff = describe;
})(this);


(function (exports) {
  var it = function (text, fn) {
    var displayToPage = new CreateDiv("it");
    displayToPage.setMessage(text);
    
    
    console.log(text);
    fn();
  }
  exports.theThingy = it;
})(this);