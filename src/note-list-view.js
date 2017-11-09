(function(exports){
  function NoteListView (noteList){
    this._noteList = noteList;
  }


  NoteListView.prototype.noteListToHTML = function() {
    // return "<a onclick='openNoteFunction()'>" + text + "</a>";
    
    return this._noteList.getList().map(function(noteObj, index){ 
      return "<div class='note-abrv' id='note"+index+"'>" + 
      "<a href='javascript:openNoteFunction(" + index + ")'>"+noteObj.getText()+"</a></div>";}).join("");
   //open note function should add note in front of the index index and that will be the element id
  }
  exports.NoteListView = NoteListView;
})(this);


