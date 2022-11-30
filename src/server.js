import express, { application } from "express"
import axios from "axios"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())

let contador = 0

app.get("/numero", (req, res) => {
    contador += 1
    res.status(200).send(contador.toString())
})

app.listen(5000)