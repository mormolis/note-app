"use strict";
showOff("Note", function(){
  var note = new Note("empty note");
  var noteList = new NoteList();

  theThingy("#initialization", function(){
    hope(note._text).toEqual("empty note");
  });
  
  
  theThingy("#getText returns the note text", function(){
    hope(note.getText()).toEqual(note._text);
  });
  
  
  theThingy("Initializes a list of notes", function(){
    hope(noteList.getList()).toBeTypeOf("Array");
  });
  
  theThingy("#createNote changes the size of the array of notes", function(){
    noteList.createNote("this is a note");
    hope(noteList.getList().length).toEqual(1);
  });
  
});

