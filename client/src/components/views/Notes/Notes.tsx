import React, { useEffect, useState } from "react";
import Note from "./note.interface";
import { GridContainer } from "../../wrappers/GridContainer.style";
import { NoteCard, NoteTitle, NoteContent, Info, ButtonArea, BinIco, UpdateIco } from "./Notes.style";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

interface INotes {
	notes?: Note[];
}

export const Notes: React.FC<INotes> = ({ notes }) => {
	const [not, setNot] :any = useState([]);
	// const { id } = useParams();
	const handleDeleteNote = async (id: any) => {
		try {
			const data = await axios.delete(`http://localhost:3000/notes/${id}`);
			console.log('Note successfully deleted');
			window.location.reload();
			return toast.success("Note deleted!");
		} catch (error) {
			return toast.error("Upps! Note wasn't deleted");
		};
	};

	const handleRemoveNote = async (id: any) =>{
		await handleDeleteNote(id)
		const noteCopy = [...not]
		noteCopy.filter(note => note._id !== id);
		setNot(noteCopy);
	}

	return (
		<GridContainer>
			{notes &&
				notes.map(note => (
					<NoteCard key={note._id}>
						<NoteTitle>{note.title}</NoteTitle>
						<NoteContent>{note.content}</NoteContent>
						<ButtonArea >
							<UpdateIco>
							<Info>update</Info>
							</UpdateIco>
							<BinIco type='submit' onClick={() => handleRemoveNote(note._id)}>

							<Info>delete</Info>
							</BinIco>
						</ButtonArea>
						{/* <DeleteBtn type='submit' onClick={() => handleRemoveNote(note._id)}>
						</DeleteBtn> */}
					</NoteCard>
				))}
		</GridContainer>
	);
};

