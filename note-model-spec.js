note = new Note("empty note");

describe("Note initialization");
expect(note._text).toEqual("empty note");

describe("#getText returns the note text");
expect(note.getText()).toEqual(note._text);

describe("Initializes a list of notes");
noteList = new NoteList();
expect(noteList.getList()).toBeTypeOf("Array");


describe("#createNote changes the size of the array of notes");
noteList.createNote("this is a note");
expect(noteList.getList().length).toEqual(1);

