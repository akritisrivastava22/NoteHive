import React, {useState} from "react"
import axios from "axios"
const NewNote = () => {
    const [inputText, setInputText] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('/api/notes', {
            text: inputText,
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
        <input type="text" value={inputText} placeholder="Please enter your new Note"  onChange={(e) => setInputText(e.target.value)}  className="bg-black" /> <br/>
        <button> ADD NOTE</button>
        </form>
        </>
    )
}
export default NewNote;

