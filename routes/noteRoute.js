import express from "express";
import { createNote, getNotes } from "../controllers/index.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/", getNotes);

export default router;
