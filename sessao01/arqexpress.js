const express = require('express');
const app = express();

const porta = 4008;

app.get("/", (req, res) => {
    console.log("Meu endpoint");
    res.status(201).send("teste");
})

app.listen(porta, () => {
    console.log("Meu servidor node com express na porta " + porta)
})