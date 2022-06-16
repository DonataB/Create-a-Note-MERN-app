import { createNote } from "../repositories/command.js";
import { getNote } from "../repositories/queries.js";

const addNewNote = async (data) => {
  const existingNote = await getNote(data.id);
  if (existingNote) {
    throw new Error("Note already exist");
  }
  return await createNote(data);
};

export default addNewNote;
