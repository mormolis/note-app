(function(exports){

var _noteList = new NoteList();

var addDiv = function(){
  var div = document.createElement("div");
  document.body.appendChild(div);
  return div;
}
var appendTextToElement = function(text, elem ){
  var docText = document.createTextNode(text);
  elem.appendChild(docText);
}

var addClass = function(className, elem){
  elem.setAttribute('class', className); 
}

var createNote = function(){
  text = document.getElementById("newNote").value
  _noteList.createNote(text);
  addNote();
}

var addNote = function (){
  var note = addDiv(); // creates div
  appendTextToElement(_noteList.getLastNoteText(), note); //adds text
  addClass("notediv", note); //adds class 
  var notediv = document.getElementsByClassName("notediv");
  notediv[notediv.length-1].innerHTML =  _noteList.getLastNoteText();
}

exports.createNote = createNote;
})(this);

