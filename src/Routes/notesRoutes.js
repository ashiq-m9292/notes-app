import express from "express";
const router = express.Router();
import { createNote, deleteNote, getAllNotes, updateNote } from "../Controllers/NotesController.js";

router.get("/get", getAllNotes);
router.post("/create", createNote);
router.put("/update/:id", updateNote);
router.delete("/delete", deleteNote);


export default router;