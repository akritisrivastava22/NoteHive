import React , {useState} from "react";
import axios from "axios"

const HandleNotes = ({notes, getAllNotes}) => {
  const [editNote, setEditNote] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');


  //to find the note which is needed to be updated and setting up new title and description
  const handleEdit =  (notesId) => {
    setEditNote(notesId)
    const findNote = notes.find((note) => note._id === notesId)
    setUpdatedTitle(findNote.title)
    setUpdatedDescription(findNote.description)
  }

  // to 
  const handleCancelEdit = () => {
    setEditNote('')
    setUpdatedTitle('')
    setUpdatedDescription('')
  }

  const handleSaveEdit = async (id) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/update/${id}`, {
        title: updatedTitle,
        description: updatedDescription
      });

      console.log("Note updated",response.data);
      getAllNotes();
      handleCancelEdit();
    } catch (error) {
      console.error("Unable to save edited note", error)
    }
  }


  const handleDelete = async (id) => {
    try {

      const response = await axios.delete(`http://localhost:4000/api/delete/${id}`)
      console.log(response.data);
      getAllNotes();
    } catch (error) {
      console.error("Unable to delete note", error)
    }
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
            {editNote === note._id ? (
              <>
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <textarea
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                ></textarea>
                <button onClick={() => handleSaveEdit(note._id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <button onClick={() => handleEdit(note._id)}>Edit</button>
                <button onClick ={() => handleDelete(note._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    )}
  </>
);
};
export default HandleNotes;