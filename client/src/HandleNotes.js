import React, { useState } from "react";
import axios from "axios";
// import "./App.css";

const HandleNotes = ({ notes, getAllNotes }) => {
  const [editNote, setEditNote] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  //to find the note which is needed to be updated and setting up new title and description
  const handleEdit = (notesId) => {
    setEditNote(notesId);
    const findNote = notes.find((note) => note._id === notesId);
    setUpdatedTitle(findNote.title);
    setUpdatedDescription(findNote.description);
  };

  // to
  const handleCancelEdit = () => {
    setEditNote("");
    setUpdatedTitle("");
    setUpdatedDescription("");
  };

  const handleSaveEdit = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/update/${id}`,
        {
          title: updatedTitle,
          description: updatedDescription,
        }
      );

      console.log("Note updated", response.data);
      getAllNotes();
      handleCancelEdit();
    } catch (error) {
      console.error("Unable to save edited note", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/delete/${id}`
      );
      console.log(response.data);
      getAllNotes();
    } catch (error) {
      console.error("Unable to delete note", error);
    }
  };

  return (
    <>
      <hr class="h-px text-cyan-700	 border-0 mt-3 dark:bg-gray-700" />
      <h1 className="font-serif text-xl text-center pt-5 pb-4">ALL NOTES</h1>
      <hr class="h-px text-cyan-700	 border-0 dark:bg-gray-700" />
      {notes.length === 0 ? (
        <h1>No Notes found</h1>
      ) : (
        <div>
          {notes.map((note) => (
            <div key={note._id}>
              {editNote === note._id ? (
                <>
                  <div className="mx-5 mt-3">
                    <input
                      type="text"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-amber-50	border-2 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <textarea
                      value={updatedDescription}
                      onChange={(e) => setUpdatedDescription(e.target.value)}
                      className="flex w-full rounded-md border border-amber-50	border-2 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                    <div className="text-center mt-3">
                      <button
                        className="rounded-md bg-zinc-400	text-zinc-700	font-bold	 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => handleSaveEdit(note._id)}
                      >
                        Save
                      </button>
                      <button
                        className="rounded-md ml-2 bg-zinc-400 text-zinc-700	font-bold px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black	"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                {/* <div className="grid grid-cols-2 gap-1 mt-3 w-full"> */}
                  <div className="px-8">
                <div className="mt-3  w-full rounded-md border border-amber-50	border-2 bg-transparent px-2  py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                  <h3 className="text-xl font-semibold">{note.title}</h3>
                  <p className="text-lg">{note.description}</p>
                  
                  <button
                    className="mt-2 rounded-md bg-zinc-400	text-zinc-700	font-bold px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => handleEdit(note._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-md ml-2 mt-2 bg-zinc-400	text-zinc-700 font-bold	 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </button>
                  </div>
                  </div>
                {/* </div> */}
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
