import express from "express"
import routes from "./routes/notes.route.js"
import bodyParser from "body-parser";
import cors from "cors";
const app = express()

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your desired origin
  };

app.use(cors(corsOptions));

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes)

app.get("/", (_req,res) => {
    res.send("Hello API")
})

export default app;