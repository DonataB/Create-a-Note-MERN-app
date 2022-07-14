import styled from "styled-components";
import { NotesWrapper } from "../Notes/Notes.style";

export const Wrapper = styled(NotesWrapper)`
	justify-content: center;
`;

export const AddNoteCard = styled.div`
	max-width: 90vw;
	max-height: 80vh;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background-color: ${({ theme }) => theme.colors.card.secondary};
	box-shadow: ${({ theme }) => theme.colors.card.boxShadow};
	border-radius: 5px;
`;

export const AddForm = styled.form`
	width: 85%;
`;

export const AddNoteInput = styled.input`
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	margin: 20px 0;
	outline: none;
	border: 1px solid black;
	font-family: "Poppins";
	font-size: 18px;

	&::placeholder {
		opacity: 0.8;
		color: ${({ theme }) => theme.colors.input.placeholder};
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	min-height: 18vh;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 20px;
	outline: none;
	border: 1px solid black;
	font-family: "Poppins";
	font-size: 18px;

	&::placeholder {
		opacity: 0.8;
		color: ${({ theme }) => theme.colors.input.placeholder};
	}
`;
export const BtnArea = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const AddNoteButton = styled.button`
	width: 200px;
	background-color: ${({ theme }) => theme.colors.button.primary};
	color: white;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	padding: 15px;
	font-size: 18px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.button.secondary};
	}
`;

export const ErrorCard = styled.div`
	width: 280px;
	font-size: 12px;
	margin: 0 auto;
	margin-bottom: 15px;
`;
