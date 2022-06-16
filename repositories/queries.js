import Note from "../models/Note.js";

export async function getNote(noteId) {
  const note = await Note.findById(noteId);
  return note;
};

export const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  return notes;
};


