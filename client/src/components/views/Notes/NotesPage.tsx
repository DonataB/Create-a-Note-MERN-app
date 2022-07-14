import Note from "./note.interface";
import { Method } from "axios";
import { Notes } from "./Notes";
import {
	NotesWrapper,
	ErrorMessage,
} from "./Notes.style";
import useFetchData from "../../../hooks/UseFetch";

const NotesPage = () => {
	const params = {
		url: "http://localhost:3000/notes",
		method: "GET" as Method,
		headers: {
			accept: "*/*",
		},
	};

	const { response, error } = useFetchData<Note[]>({
		url: params.url,
		method: params.method,
	});

	const notes: Note[] = response ? response : [];

	const displayNotes = () => {
		if (notes.length === 0) {
			return <ErrorMessage>0 results found for your search.</ErrorMessage>;
		} else if (!error) {
			return <Notes notes={notes} />;
		} else {
			return <ErrorMessage> Cannot load offers</ErrorMessage>;
		}
	};
	return (
		<NotesWrapper>
			{displayNotes()}
		</NotesWrapper>
	);
};

export default NotesPage;
