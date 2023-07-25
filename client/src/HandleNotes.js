import React , {useState} from "react";
import axios from "axios";
// import "./App.css";

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
        <hr class="h-px bg-gray-200 border-0 mt-3 dark:bg-gray-700"/>
        <h1 className="font-serif text-xl text-center pt-5 pb-4">ALL NOTES</h1>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
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
                <button className="border-slate-950 border-4	" onClick={() => handleSaveEdit(note._id)}>Save</button>
                <button className="border-slate-950 border-4	"  onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <h3 className="">{note.title}</h3>
                <p>{note.description}</p>
                <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={() => handleEdit(note._id)} >Edit</button>
                <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick ={() => handleDelete(note._id)}>Delete</button>
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