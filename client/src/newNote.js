import React, {useState} from "react"
import axios from "axios"

const NewNote = () => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputdescription, setInputDescription] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:4000/api/create', {
            title: inputTitle,
            description: inputdescription
          });
      
          console.log(response.data);
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
        </>
    )
}
export default NewNote;

