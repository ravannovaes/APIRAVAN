const express = require("express")
const app = express()
const curso = require("./controller/controllercurso.js")
const disciplina = require("./controller/controllerdisciplina.js")
const professor = require("./controller/controllerprofessor.js")
const turma = require("./controller/controllerturma.js")
const alunos = require("./controller/controlleralunos.js")
const dispro = require("./controller/controllerdisciplinaprofessor.js")
//const routes = require("./Rotas/alunosrotas.js");
const pool = require("./db")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Rota Raiz")
})

//app.use("/",routes)

app.get("/disciplina_professor/", dispro.exibir)

app.get("/alunos/", alunos.exibir)

app.get("/alunos/:id", alunos.exibirID)



app.delete("/alunos/:id", alunos.Delete)

app.patch("/alunos/:id", alunos.Update)

app.post("/alunos/login", alunos.Insert2)

let myscret = "ravan"

app.post ("/login/", async (req, res) => {
 
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM alunos1 WHERE email = $1', [email]);
        const alunos1 = result.rows[0];
        console.log(alunos1)
        if (!alunos1) return res.status(404).json({ message: 'alunos1 not found' });

        const isValidPassword = await bcrypt.compare(password, alunos1.password);
        console.log(isValidPassword )
        console.log(alunos1.password)
        console.log(password)
        if (!isValidPassword) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: alunos1.id, email: alunos1.email }, myscret, {
            expiresIn: '1m',
        });
        res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


const  auth  = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token not provided' });

    try {
        const decoded = jwt.verify(token.split(' ')[1], myscret );
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

app.post("/alunos/", auth, alunos.Insert)

app.get("/turma/", turma.exibir)

app.get("/turma/:id", turma.exibirID)

app.post("/turma/",turma.Insert)

app.patch("/turma/:id",turma.Update)

app.delete('/turma/:id',turma.Delete)


app.get("/professor/", professor.exibir)

app.get("/professor/:id", professor.exibirID)

app.post("/professor/",professor.Insert)

app.delete("/professor/:id", professor.Delete)

app.patch("/professor/:id", professor.Update)



app.get("/curso/", curso.exibir)

app.get("/curso/:id", curso.exibirID)

app.post("/curso/",curso.Insert)

app.delete("/curso/:id", curso.Delete)

app.patch("/curso/:id", curso.Update)


app.get("/disciplina/", disciplina.exibir)

app.get("/disciplina/:id", disciplina.exibirID)

app.post("/disciplina/",disciplina.Insert)

app.delete("/disciplina/:id", disciplina.Delete)

app.patch("/disciplina/:id",disciplina.Update)


app.listen(3000,()=>{
    console.log("servidor rodando")
})



