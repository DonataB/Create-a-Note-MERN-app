import Note from "../models/Note.js";

const createNote = async (data) => {
  const newNote = new Note({
    ...data,
  });

  try {
    await newNote.save();
    return newNote;
  } catch (error) {
    return new Error("Note wasn't created");
  }
};

export default createNote;
