(function(exports) {

  var _noteList = new NoteList();
  var _noteListView = new NoteListView(_noteList);

  var addDiv = function() {
    var div = document.createElement("div");
    // document.body.appendChild(div);
    document.getElementById("abbrv").appendChild(div)
    return div;
  }

 

  var openNoteFunction = function(index) {
    
    
    
  }

  var refreshNodeListView = function() {
    document.getElementById("abbrv").innerHTML = _noteListView.noteListToHTML();
  }

  var createNote = function() {
    text = document.getElementById("newNote").value
    _noteList.createNote(text);
    refreshNodeListView();
  }

  exports.createNote = createNote;
  // exports.openNoteFunction = openNoteFunction;

})(this);
