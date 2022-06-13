import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      min: 3,
      max: 50,
    },
    content: {
      type: String,
      require: true,
      max: 5000,
    },
  }
  // {
  // 	versionKey: false,
  // }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
