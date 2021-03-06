"use strict";
showOff("Note", function() {
  var note = new Note("empty note");


  theThingy("#initialization", function() {
    hope(note._text).toEqual("empty note");
  });


  theThingy("#getText returns the note text", function() {
    hope(note.getText()).toEqual(note._text);
  });

  showOff("NoteList", function() {
    var noteList = new NoteList();

    theThingy("Initializes a list of notes", function() {
      hope(noteList.getList()).toBeTypeOf("Array");
    });

    theThingy("#createNote changes the size of the array of notes", function() {
      noteList.createNote("this is a note");
      hope(noteList.getList().length).toEqual(1);
    });

    theThingy("gets the last note", function() {
      noteList.createNote("this is another note");
      hope(noteList.getLastNote().getText()).toEqual("this is another note");
    });

    theThingy("returns the text of the latest note", function() {
      hope(noteList.getLastNoteText()).toEqual("this is another note");
    });

    showOff(".getNoteByIndex", function(){
      theThingy("should return a note object", function(){
        hope(noteList.getNoteByIndex(0)).toBeTypeOf("Note");
      });
      theThingy("should have the expected text", function(){
        hope(noteList.getNoteByIndex(0).getText()).toEqual("this is a note")
      });
    });

  });

});
