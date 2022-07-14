import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createNoteSchema } from "./CreateNoteInputHandler";
import {
	ErrorCard,
	Wrapper,
	AddNoteCard,
	AddNoteInput,
	AddForm,
	AddNoteButton,
	TextArea,
	BtnArea,
} from "./CreateNote.style";

const CreateNotePage = () => {
	const createNoteFormHandler = useFormik({
		initialValues: {
			title: "",
			content: "",
		},
		validationSchema: createNoteSchema,
		onSubmit:(values, {resetForm} ) => {
      resetForm( {});
    },
	});

	const onCreateHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createNoteFormHandler.handleSubmit();

		await axios({
			method: "post",
			url: "http://localhost:3000/notes/create",
			data: {
				title: createNoteFormHandler.values.title,
				content: createNoteFormHandler.values.content,
			},
		})
			.then(response => {
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
						type='text'
						id='title'
						placeholder='note title'
						value={createNoteFormHandler.values.title}
						onChange={createNoteFormHandler.handleChange}
						onBlur={createNoteFormHandler.handleBlur}
					/>
					{createNoteFormHandler.errors.title ? (
						<ErrorCard>{createNoteFormHandler.errors.title}</ErrorCard>
					) : null}

					<TextArea
						id='content'
						placeholder='note content'
						value={createNoteFormHandler.values.content}
						onChange={createNoteFormHandler.handleChange}
						onBlur={createNoteFormHandler.handleBlur}
					/>
					{createNoteFormHandler.errors.content ? (
						<ErrorCard>{createNoteFormHandler.errors.content}</ErrorCard>
					) : null}

					<BtnArea>
						<AddNoteButton type='submit' disabled={isInputInvalid()}>
              {" "}
							Add Note
						</AddNoteButton>
					</BtnArea>
				</AddForm>
			</AddNoteCard>
		</Wrapper>
	);
};

export default CreateNotePage;
