import styled from "styled-components";
import NotePageBackground from "../../../assets/NotesPagePhoto.jpg";
import { HomePageWrapper } from "../HomePage/HomePage.style";

export const NotesWrapper = styled(HomePageWrapper)`
  background-image: url(${NotePageBackground});
  justify-content: flex-start;
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
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  font-size: ${({ theme }) => theme.size.desktop.mdl}px;
  align-items: center;
  justify-content: center;
`;