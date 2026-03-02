import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../Controllers/NotesController.js";
const router = express.Router();

router.get("/get", getAllNotes);
router.post("/create", createNote);
router.put("/update/:id", updateNote);
router.delete("/delete", deleteNote)


export default router;