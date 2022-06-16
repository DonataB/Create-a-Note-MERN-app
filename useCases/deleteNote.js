import { deleteNote } from "../repositories/command.js";

export const deleteNoteWithId = (id) => {
    return deleteNote(id);
};