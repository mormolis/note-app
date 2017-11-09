(function (exports) {
  var NoteList = function () {
    this._list = [];
  };

  NoteList.prototype = {
    getList: function () {
      return this._list;
    },

    createNote: function (text) {
      this._list.push(new Note(text));
    },

    getLastNote: function(){
      return this._list[this._list.length - 1];
    },

    getLastNoteText: function(){
      return this.getLastNote().getText();
    },

    getNoteByIndex: function(index){
      return this._list[index];
    }


  };

  exports.NoteList = NoteList;
})(this);
