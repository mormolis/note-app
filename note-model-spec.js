describe("Note", function(){
  note = new Note("empty note");

  it("#initialization", function(){
    expect(note._text).toEqual("empty note");
  });
  
  
  it("#getText returns the note text", function(){
    expect(note.getText()).toEqual(note._text);
  });
  
  
  it("Initializes a list of notes", function(){
    noteList = new NoteList();
    expect(noteList.getList()).toBeTypeOf("Array");
  });
  
  
  it("#createNote changes the size of the array of notes", function(){
    noteList.createNote("this is a note");
    expect(noteList.getList().length).toEqual(1);
  });
  
});


