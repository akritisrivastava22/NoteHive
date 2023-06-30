import Notes from "../models/notes.model.js"

export const getAllNotes = async(req,res) => {
    try {

    const allNotes = await Notes.find();
    res.status(200).json({
        success: true,
        allNotes
    })
        
    } catch (error) {
    
    res.status(500).json({
        success:false,
        message: error.message
    }) 
    }
} 

export const createNotes = async(req,res) => {
    try {
    const {title, description} = req.body  ;
    const notes = await Notes.create({
        title,
        description
    })
    console.log(title, description);

    res.status(200).json({
        success:true,
        message: "Note Created",
        notes
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        })
    }   
}


export const updateNotes = async(req,res) => {
    try {
    const {title, description} = req.body
    const {id: notesId} = req.params
    let updatedNotes = await Notes.findByIdAndUpdate(notesId, {
        title,
        description
    },{
        new:true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        message: "Notes Updated",
        updatedNotes
    })
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: error.message
        })
    }
}

export const deleteAllNotes = async(req,res) => {
    try {
    const {id: notesId} = req.params
    let noteToDelete = await Notes.findById(notesId)
    noteToDelete.remove();

    res.status(200).json({
        success: true,
        message: "Note deleted successfully"
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}