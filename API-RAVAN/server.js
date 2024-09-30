const express = require("express")
const app = express()
const pool = require("./db")
const alunos = require("./controller/controlleralunos.js")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Rota Raiz")
})

app.get("/alunos/", alunos.exibir)

app.get("/alunos/:id", alunos.exibirID)

app.post("/alunos/", alunos.Insert)

app.delete("/alunos/:id", alunos.Delete)

app.patch("/alunos/:id", alunos.Update)

app.listen(3000,()=>{
    console.log("servidor rodando")
})



