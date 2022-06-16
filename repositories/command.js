import Note from "../models/Note.js";

export const createNote = async (data) => {
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

export const deleteNote = async (id) => {
	return await Note.deleteOne({ _id: id });
};
