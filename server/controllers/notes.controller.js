import Notes from "../models/notes.model.js"

export const getAllNotes = async(req,res) => {
    try {

    const allNotes = await Notes.find();

    req.status(200).json({
        success: true,
        allNotes
    })
        
    } catch (error) {
    
    req.status(500).json({
        success:false,
        message: error.message
    }) 
    }
} 

export const createNotes = async(req,res) => {
    try {
    const {title, description} = req.body  ;
    const notes = Notes.create({
        title,
        description
    })

    req.status(200).json({
        success:true,
        message: "Note Created",
        notes
    })
    } catch (error) {
        req.status(500).json({
            success:false,
            message: error.message,
        })
    }   
}

export const deleteAllNotes = async(req,res) => {
    

}