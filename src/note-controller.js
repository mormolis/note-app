(function(exports) {

  exports.NoteController = function() {
    console.log(NoteList)
  var _noteList = new NoteList();
  var _noteListView = new NoteListView(_noteList);

  var addDiv = function() {
    var div = document.createElement("div");
    // document.body.appendChild(div);
    document.getElementById("abbrv").appendChild(div)
    return div;
  }

  var openNoteFunction = function(index) {
    var wholeNote = _noteList.getNoteByIndex(index).getText();
    document.getElementById("wholeNote").innerHTML = wholeNote;
  }

  var refreshNodeListView = function() {
    document.getElementById("abbrv").innerHTML = _noteListView.noteListToHTML();
  }

  var addNoteToPage = function() {
    text = document.getElementById("newNote").value;
    _noteList.createNote(text);
    refreshNodeListView();
  }

  return {addNoteToPage: addNoteToPage,
          openNoteFunction: openNoteFunction}
  // exports.openNoteFunction = openNoteFunction;
  }
})(this);

(function(exports){
window.onload = function () {
  exports.noteController = new NoteController();
}
}
)(this)
