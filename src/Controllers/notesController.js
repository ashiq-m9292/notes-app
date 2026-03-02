import Notes from "../Models/NotesModel.js";

// get all notes function 
export const getAllNotes = async (req, res) => {
    try {
        const notes = await Notes.find();
        res.status(200).json({ message: "Notes fetched successfully", notes });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// create note function 
export const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title.trim() && !description.trim()) return res.status(400).json({ message: "Title and description are required" });
        const note = await Notes.create({
            title,
            description,
            createdAt: new Date().toLocaleString()
        })
        res.status(200).json({
            message: "Note created successfully",
            note
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update note function 
export const updateNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title.trim() && !description.trim()) return res.status(400).json({ message: "Title and description are required" });
        const note = await Notes.findOneAndUpdate({ _id: req.params.id }, { title, description, createdAt: new Date().toLocaleString() }, { new: true });
        if (!note) return res.status(400).json({ message: "Note not found" });
        res.status(200).json({ message: "Note updated successfully", note });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete note function 
export const deleteNote = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ message: "Note id is required" });

        //    multiple delete notes 
        if (Array.isArray(id)) {
            const notes = await Notes.deleteMany({ _id: { $in: id } });
            if (notes.deletedCount === 0) return res.status(400).json({ message: "Note not found" });
            return res.status(200).json({ message: "Note deleted successfully", deletedCount: notes.deletedCount });
        }

        // single delete notes 
        const note = await Notes.findByIdAndDelete(id);
        if (!note) return res.status(400).json({ message: "Note not found" });
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};