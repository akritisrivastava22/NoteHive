import mongoose from "mongoose"
import { Schema } from "mongoose"

const notesSchema = new Schema({
    title:{
        type: String,
        maxlength: [20, "Please enter less than 20 chars"],
        required: [true, "Please enter Title for the Note"]
    },
    description: {
        type: String,
        maxlength: [200, "Please enter less than 200 chars"],
        required: [true, "Please enter Description of the Note"]
    }
}, {timestamps:true}
);

export default module.modele("NotesSchema", notesSchema);