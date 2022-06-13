import React from "react";
import Note from "./note.interface";
import { GridContainer } from "../../wrappers/GridContainer.style";
import { NoteCard, NoteTitle, NoteContent } from "./Notes.style";

interface INotes {
	notes?: Note[];
}

export const Notes = () => {
	return (
		<GridContainer>
			<NoteCard>
				<NoteTitle>title</NoteTitle>
				<NoteContent>content</NoteContent>
			</NoteCard>
			;
		</GridContainer>
	);
};

// export const Notes: React.FC<INotes> = ({ notes }) => {
// 	return (
// 		<GridContainer>
// 			{notes &&
// 				notes.map(note => {
// 					<NoteCard key={note._id}>
// 						<NoteTitle>{note.title}</NoteTitle>
// 						<NoteContent>{note.content}</NoteContent>
// 					</NoteCard>;
// 				})}
// 		</GridContainer>
// 	);
// };
