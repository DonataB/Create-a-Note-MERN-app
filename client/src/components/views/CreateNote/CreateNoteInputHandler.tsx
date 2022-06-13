import * as Yup from "yup";

export const createNoteSchema = Yup.object({
  title: Yup.string().required("Note title is required"),
  content: Yup.string().required("Content is required"),
});
