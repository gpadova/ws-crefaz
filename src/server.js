import express, { application } from "express"
import axios from "axios"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

let contador = 0

app.get("/numero", (req, res) => {
    contador += 1
    res.status(200).send(contador.toString())
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});