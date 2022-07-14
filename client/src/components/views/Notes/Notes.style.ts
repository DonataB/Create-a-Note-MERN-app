import styled from "styled-components";
import NotePageBackground from "../../../assets/NotesPagePhoto.jpg";
import Bin from "../../../assets/trash.svg";
import Update from "../../../assets/update.svg";
import { HomePageWrapper } from "../HomePage/HomePage.style";

export const NotesWrapper = styled(HomePageWrapper)`
	background-image: url(${NotePageBackground});
	justify-content: flex-start;
`;

export const NoteCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	width: 250px;
	height: 280px;
	background-color: ${({ theme }) => theme.colors.card.secondary};
	box-shadow: ${({ theme }) => theme.colors.card.boxShadow};
	border-radius: 5px;
`;

export const NoteTitle = styled.div`
	padding: 10px;
	font-weight: ${({ theme }) => theme.weight.bold};
	border-bottom: 1px solid;
`;

export const NoteContent = styled.div`
	padding: 10px;
`;

export const ErrorMessage = styled.div`
	display: flex;
	width: 100%;
	height: 20vh;
	font-size: ${({ theme }) => theme.size.desktop.xs};
	align-items: center;
	justify-content: center;
`;

export const ButtonArea = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid;
	width: 100%;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.card.secondary};
`;

export const BinIco = styled.button`
	position: relative;
	background-image: url(${Bin});
	background-repeat: no-repeat;
	background-position: center;
	background-color: ${({ theme }) => theme.colors.card.secondary};
	border: none;
	width: 20px;
	padding: 15px;
	cursor: pointer;
`;

export const UpdateIco = styled(BinIco)`
	background-image: url(${Update});
`;

// export const UpdateIco = styled.button`
// 	position: relative;
// 	background-image: url(${Update});
// 	background-repeat: no-repeat;
// 	background-position: center;
// 	background-color: ${({ theme }) => theme.colors.card.secondary};
// 	border: none;
// 	width: 20px;
// 	padding: 15px;
// 	cursor: pointer;
// `;

// export const DeleteBtn = styled.button`
// position: relative;
// 	background-image: url(${Bin});
// 	background-repeat: no-repeat;
// 	background-position: center;
// 	width: 20px;
// 	height: 20px;
// 	align-self: flex-end;
// 	border: none;
// 	padding: 15px;
// 	background-color: ${({ theme }) => theme.colors.card.secondary};

// 	cursor: pointer;
// `;

export const Info = styled.div`
	position: absolute;
  top: 1px;
	color: black;
  padding: 1px;
	background-color: white;
	width: 35px;
	height: 14px;
	font-size: 11px;
	opacity: 0;

	&:hover {
		opacity: 1;
	}
`;
