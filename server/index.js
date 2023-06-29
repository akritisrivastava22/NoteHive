import app from "./app.js"
import mongoose from "mongoose"

(async(req,res) => {
    try {

       await mongoose.connect('mongodb://127.0.0.1:27017/test');
       console.log("DB connected");
        const PORT = 4000

        app.listen(PORT, () => {
            console.log(`Server is listening  on  ${PORT}`);
          }) 


    } catch (error) {
        console.error("ERROR:", err);
        throw err
    }
})()