import styled from 'styled-components';
import NotePageBackground from '../../../assets/NotesPagePhoto.jpg';
import Bin from '../../../assets/trash.svg';
import Update from '../../../assets/update.svg';

export const NotesWrapper = styled.div`
	background-image: url(${NotePageBackground});
	background-size: cover;
	background-position: center;
	min-height: 100vh;
`;

export const NoteCard = styled.div`
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
	overflow: auto;
	flex: auto;
	height: 170px;
`;

export const ErrorMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 20vh;
	padding: 2rem;
	margin: 0 auto;
	color: ${({ theme }) => theme.colors.navigationBar.primary};
	font-size: ${({ theme }) => theme.size.desktop.xs};
	background-color: ${({ theme }) => theme.colors.card.primary}

`;

export const ButtonArea = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 35px;
	margin-top: 10px;
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
