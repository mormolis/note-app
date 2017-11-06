describe("Note initialization");
note = new Note("empty note");
expect(note._text).toEqual("empty note");

describe("#getText returns the note text");
expect(note.getText()).toEqual(note._text);