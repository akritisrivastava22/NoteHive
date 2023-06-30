import React from "react";
import axios from "axios"

const Notes = () => {
    const handleSubmit = async () => {

        try {
            const response = await axios.get('http://localhost:4000/api/getallnotes')
        
            console.log(response.data);
          
          } catch (error) {
            console.error(error);
          }
    }

    return(
        <>
        <button onClick={handleSubmit}> VIEW ALL NOTES</button>
        </>
    )
}

export default Notes;