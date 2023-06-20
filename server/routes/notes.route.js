import {Router} from "express"  
import {getAllNotes, createNotes} from "../controllers/notes.controller.js"

const router = Router()
router.get("/getallnotes", getAllNotes)
router.post("/create", createNotes)

export default router;