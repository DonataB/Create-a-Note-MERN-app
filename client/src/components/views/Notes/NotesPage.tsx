import React, { useEffect, useState } from "react";
import Note from "./note.interface";
import axios, { Method } from "axios";
import { Notes } from "./Notes";
import { GridContainer } from "../../wrappers/GridContainer.style";
import { toast } from "react-toastify";
import {
	NotesWrapper,
	ErrorMessage,
	NoteCard,
	NoteTitle,
	NoteContent,
} from "./Notes.style";
import useFetchData from "../../../hooks/UseFetch";

const NotesPage = () => {
	const [note, setNote] = useState([{}]);
	const getNotes = () => {
		axios
			.get("http://localhost:3000/notes")
			.then(res => {
				console.log(res.data[9]);
				// setNote(res.data)
			})
			.catch(err => {
				console.log(err);
			});
	};

	const defaultParams = {
		url: "http://localhost:3000/notes",
		method: "GET" as Method,
		headers: {
			accept: "*/*",
		},
	};

	const params = defaultParams;

	const { response, error } = useFetchData<Note[]>({
		url: params.url,
		method: params.method,
	});

	const notes: Note[] = response ? response : [];

	const displayNotes = () => {
		if (notes.length === 0) {
			return <ErrorMessage>0 results found for your search.</ErrorMessage>;
		} else if (!error) {
			return <Notes  />;
			// return <Notes notes={notes} />;
		} else {
			return <ErrorMessage> Cannot load offers</ErrorMessage>;
		}
	};
	return (
		<NotesWrapper>
			{displayNotes()}
			<button onClick={getNotes}>Get notes</button>
		</NotesWrapper>
	);
};

export default NotesPage;
