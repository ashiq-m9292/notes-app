import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Notes = mongoose.model("Note", NotesSchema);
export default Notes;