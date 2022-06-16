import express from "express";
import { createNote, getNotes, deleteNote } from "../controllers/index.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/", getNotes);
router.delete("/:id", deleteNote);

export default router;
