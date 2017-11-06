note = new Note("empty note");

describe("Note initialization");
expect(note._text).toEqual("empty note");

describe("#getText returns the note text");
expect(note.getText()).toEqual(note._text);

noteList = new NoteList();
describe("Initializes a list of notes");
expect(noteList.getList()).toBeTypeOf("Array");
