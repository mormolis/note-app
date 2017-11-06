(function (exports) {
  var NoteList = function () {
    this._list = [];
  }

  NoteList.prototype = {
    getList: function () {
      return this._list;
    },

    createNote: function (text) {
      this._list.push(new Note(text));
    }
  }

  exports.NoteList = NoteList;
})(this);