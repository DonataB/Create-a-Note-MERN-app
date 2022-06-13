import styled from "styled-components";
import { NotesWrapper, NoteCard } from "../Notes/Notes.style";

export const Wrapper = styled(NotesWrapper)`
  justify-content: center;
`;

export const AddNoteCard = styled(NoteCard)`
  width: 600px;
  height: 400px;
`;

export const AddForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddNoteInput = styled.input`
  width: 80%;
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
  width: 80%;
  min-height: 15vh;
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

export const AddNoteButton = styled.button`
  width: 200px;
  background-color: ${({ theme }) => theme.colors.navigationBar.primary};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 15px;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navigationBar.secondary};
  }
`;

export const ErrorCard = styled.div`
  width: 280px;
  font-size: 12px;
  margin: 0 auto;
  margin-bottom: 15px;
`;