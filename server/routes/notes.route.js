import {Router} from "express"  
import {getAllNotes, createNotes, updateNotes, deleteAllNotes} from "../controllers/notes.controller.js"

const router = Router()
router.get("/getallnotes", getAllNotes)
router.post("/create", createNotes)
router.put("/update/:id", updateNotes)
router.delete("/delete/:id",deleteAllNotes)

export default router;