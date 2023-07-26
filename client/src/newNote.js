import React, {useState} from "react"
import axios from "axios"

const NewNote = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputdescription, setInputDescription] = useState('');
    const [noteCreated, setNoteCreated] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:4000/api/create', {
            title: inputTitle,
            description: inputdescription
          });
      
          console.log(response.data);
          
          const updatedNotes = [...props.notes, response.data.notes];
          props.setNotes(updatedNotes);

          setInputTitle('')
          setInputDescription('')
          setNoteCreated(true)
        } catch (error) {
          console.error(error);
        }
      };      
    return(
        <>
        {/* <button> Go To Notes </button> <br /> */}
        <form onSubmit={handleSubmit} className="mx-5 mt-3">
        <input type="text" value={inputTitle} placeholder="Please enter your Notes Title"  onChange={(e) => setInputTitle(e.target.value)}  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" /> <br/> 
        <textarea name="message" value={inputdescription} placeholder="Please enter your Notes Description"  onChange={(e) => setInputDescription(e.target.value)} rows="4" cols="50" className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"></textarea> <br/>
        <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block mx-auto"> ADD NOTE</button>
        </form>

        {noteCreated && <h1 className="font-serif text-lg text-center pt-5">Note Created successfully</h1>}
        </>
        
    )
}
export default NewNote;

