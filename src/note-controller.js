(function (exports) {

  exports.NoteController = function () {
    var _noteList = new NoteList();
    var _noteListView = new NoteListView(_noteList);

    var addDiv = function () {
      var div = document.createElement("div");
      // document.body.appendChild(div);
      document.getElementById("abbrv").appendChild(div)
      return div;
    }

    var openNoteFunction = function (index) {
      var wholeNote = _noteList.getNoteByIndex(index).getText();
      document.getElementById("wholeNote").innerHTML = wholeNote;
    }

    var refreshNodeListView = function () {
      document.getElementById("abbrv").innerHTML = _noteListView.noteListToHTML();
    }

    var addNoteToPage = function () {
      text = document.getElementById("newNote").value;
      _noteList.createNote(text);
      refreshNodeListView();
    }
    var clearForm = function(){
      var frm = document.getElementById('noteForm');
      
      frm.reset();  // Reset
      // return false; // Prevent page refresh
    }
    var addEventListenerToPage = function(id) {
      document.getElementById(id).addEventListener("click", function (e) {
        addNoteToPage();
        clearForm();
        e.preventDefault();
      });
    }


    return {
      addNoteToPage: addNoteToPage,
      openNoteFunction: openNoteFunction,
      addEventListenerToPage: addEventListenerToPage
    }
    // exports.openNoteFunction = openNoteFunction;
  }
})(this);

(function (exports) {
  window.onload = function () {
    noteController = new NoteController();
    noteController.addEventListenerToPage("notebtn");
    
  }
})(this)