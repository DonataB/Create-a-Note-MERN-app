import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GridContainer } from "../../wrappers/GridContainer.style";
import { createNoteSchema } from "./CreateNoteInputHandler";
import {
  ErrorCard,
  Wrapper,
  AddNoteCard,
  AddNoteInput,
  AddForm,
  AddNoteButton,
  TextArea,
} from "./CreateNote.style";

const CreateNotePage = () => {
  const createNoteFormHandler = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: createNoteSchema,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  const onCreateHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createNoteFormHandler.handleSubmit;

    await axios({
      method: "post",
      url: "http://localhost:3000/notes/create",
      // url: BASE_URL + "/notes/create-note",
      data: {
        title: createNoteFormHandler.values.title,
        content: createNoteFormHandler.values.content,
      },
    })
      .then((response) => {
        return toast.success("Note added!");
      })
      .catch(() => {
        return toast.error("Upps! Note wasn't added");
      });
  };

  const noFieldsAreTouched = () => {
    return (
      !createNoteFormHandler.touched.title &&
      !createNoteFormHandler.touched.content
    );
  };

  const allFieldsAreTouched = () => {
    return (
      createNoteFormHandler.touched.title &&
      createNoteFormHandler.touched.content
    );
  };

  const anyFieldInputIsInvalid = () => {
    return (
      !!createNoteFormHandler.errors.title ||
      !!createNoteFormHandler.errors.content
    );
  };

  const isInputInvalid = () => {
    return (
      noFieldsAreTouched() ||
      (allFieldsAreTouched() && anyFieldInputIsInvalid())
    );
  };

  return (
    <Wrapper>
      <AddNoteCard>
        <AddForm onSubmit={onCreateHandler}>
          <AddNoteInput
            type="text"
            id="title"
            placeholder="note title"
            value={createNoteFormHandler.values.title}
            onChange={createNoteFormHandler.handleChange}
            onBlur={createNoteFormHandler.handleBlur}
          />
          {createNoteFormHandler.errors.title ? (
            <ErrorCard>{createNoteFormHandler.errors.title}</ErrorCard>
          ) : null}

          <TextArea
            id="content"
            placeholder="note content"
            value={createNoteFormHandler.values.content}
            onChange={createNoteFormHandler.handleChange}
            onBlur={createNoteFormHandler.handleBlur}
          />
          {createNoteFormHandler.errors.content ? (
            <ErrorCard>{createNoteFormHandler.errors.content}</ErrorCard>
          ) : null}

          <AddNoteButton type="submit" disabled={isInputInvalid()}>
            Add Note
          </AddNoteButton>
        </AddForm>
      </AddNoteCard>
    </Wrapper>
  );
};

export default CreateNotePage;
