import express from "express"
import routes from "./routes/notes.route.js"
import bodyParser from "body-parser";
const app = express()

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes)

app.get("/", (_req,res) => {
    res.send("Hello API")
})

export default app;