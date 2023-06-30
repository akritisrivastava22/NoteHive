import React , {useState, useEffect} from "react";
import axios from "axios"

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        handleSubmit()
    }, [])

    const handleSubmit = async () => {
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
        <button onClick={handleSubmit}> VIEW ALL NOTES</button>
        {notes.length === 0 ? (
        <h1>No Notes found</h1>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              
            </li>
          ))}
        </ul>
      )}
        </>
    )
}

export default Notes;