import addNewNote from "../useCases/addNewNote.js";
import validateCreateNote from "../models/NoteValidation.js";
import { getAllNotes } from "../repositories/queries.js";
import { deleteNoteWithId } from "../useCases/deleteNote.js";

export const createNote = async (req, res) => {
	const { error } = validateCreateNote(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	try {
		await addNewNote(req.body);
		return res.status(201).send("Note was added");
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

export const getNotes = async (req, res) => {
	try {
		const allNotes = await getAllNotes();
		if (!allNotes) return res.status(404).send("No notes found");
		return res.status(200).send(allNotes);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

export const deleteNote = async (req, res) => {
	try {
		const { deletedCount } = await deleteNoteWithId(req.params.id);
		if (!deletedCount) return res.status(404).send("There is no note found");
	} catch (error) {
		return res.status(500).send(error.message);
	}
	return res.status(200).send(`Note with id ${req.params.id} was deleted`);
};
