(function(exports) {

  var _noteList = new NoteList();

  var addDiv = function() {
    var div = document.createElement("div");
    // document.body.appendChild(div);
    document.getElementById("abbrv").appendChild(div)
    return div;
  }
  var addClass = function(className, elem) {
    elem.setAttribute('class', className);
  }

  var addHTMLtoNoteText = function(text, index) {
    // return "<a onclick='openNoteFunction()'>" + text + "</a>";
    return "<a href='javascript:openNoteFunction(" + index + ")'>" + text + "</a>";
  }

  var openNoteFunction = function() {
    alert("hello")
  }

  var addNote = function() {
    var note = addDiv(); // creates div
    addClass("notediv", note); //adds class
    var notediv = document.getElementsByClassName("notediv");
    notediv[notediv.length - 1].innerHTML = addHTMLtoNoteText(_noteList.getLastNoteText());
    console.log(_noteList);
  }

  var createNote = function() {
    text = document.getElementById("newNote").value
    _noteList.createNote(text);
    addNote();
  }

  exports.createNote = createNote;
  exports.openNoteFunction = openNoteFunction;

})(this);
