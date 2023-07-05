import React , {useState, useEffect} from "react";
import axios from "axios"

const Notes = ({notes}) => {
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
            </div>
          ))}
        </div>
      )}
        </>
    )
}

export default Notes;