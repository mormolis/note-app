(function(exports){
  var Note = function(text){
    this._text = text;
  }

  Note.prototype = {
    getText: function(){
      return this._text;
    },
    getDescription: function() {
      return (this._text.length >= 21) ? (this._text.slice(0, 20) + " [...]") : this._text;
    }
  };


  exports.Note = Note;
})(this)
