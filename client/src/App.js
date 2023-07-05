import React, {useState, useEffect} from "react"
import Notes from "./notes.js"
import NewNote from "./NewNote.js"
import axios from "axios";


const App = () => {

  useEffect(() => {
    getAllNotes()
  }, [])

  const [notes, setNotes] = useState([]);
  const getAllNotes = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/getallnotes')
        console.log(response.data)
        setNotes(response.data.allNotes);
      } catch (error) {
        console.error(error);
      }
}
  return(
      <>
      <NewNote notes={notes} setNotes={setNotes} />
      <Notes notes= {notes} />
      </>
  );
}

export default App;

