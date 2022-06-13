import Note from "../models/Note.js";

export async function getAllNotes() {
  const notes = await Note.find();
  return notes;
}

export async function findNoteById(noteId) {
  const findNote = await Note.findById(noteId);
  return findNote;
}
