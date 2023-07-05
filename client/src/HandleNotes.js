import React , {useState, useEffect} from "react";
import axios from "axios"

const HandleNotes = ({notes}) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputdescription, setInputDescription] = useState('');
  const handleEdit = async (notesId) => {
     try {
      const response = await axios.put('http://localhost:4000/api/update', {
        title: inputTitle,
        description: inputdescription
      });
     } catch (error) {
      console.error(error);
     }
  }

  const handleDelete = (noteId) =>{

  }

    return(
        <>
        <h1>ALL NOTES</h1>
        {notes.length === 0 ? (
        <h1>No Notes found</h1>
      ) : (
        <div>
          {notes.map((note) => (
            <div key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <button onClick={() => handleEdit(note._id)}>EDIT</button>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
        </>
    )
}

export default HandleNotes;