import React, {useState} from "react"
import axios from "axios"

const NewNote = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputdescription, setInputDescription] = useState('');
    // const [notes, setNotes] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:4000/api/create', {
            title: inputTitle,
            description: inputdescription
          });
      
          console.log(response.data);
          // setNotes(true)

          props.notes.push(response.data.notes)
          const updatedNotes = props.notes
          console.log(updatedNotes);
          props.setNotes([])

          

        } catch (error) {
          console.error(error);
        }
      };      
    return(
        <>
        {/* <button> Go To Notes </button> <br /> */}
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputTitle} placeholder="Please enter your Notes Title"  onChange={(e) => setInputTitle(e.target.value)}  className="bg-black" /> <br/> 
        <textarea name="message" value={inputdescription} placeholder="Please enter your Notes Description"  onChange={(e) => setInputDescription(e.target.value)} rows="4" cols="50"></textarea> <br/>
        <button> ADD NOTE</button>
        </form>

        {/* {notes === true ? console.log("New Note Created"):console.log("You can create New Note")} */}
        </>
        
    )
}
export default NewNote;

