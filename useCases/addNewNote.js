import createNote from "../repositories/command.js";
import { findNoteById } from "../repositories/queries.js";

const addNewNote = async (data) => {
  const existingNote = await findNoteById(data.id);
  if (existingNote) {
    throw new Error("Note already exist");
  }
  return await createNote(data);
};

export default addNewNote;
