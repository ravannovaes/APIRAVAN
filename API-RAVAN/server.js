
const express = require("express")
const app = express()
const pool = require("./db")
const selectalunos = require("./db")
app.use(express.json())

app.get("/", (req, res) => {

    res.send("Rota Raiz 100")
})

app.get('/alunos/', async (req, res) => { 

    const  result = await pool.query("SELECT * FROM alunos1")
    res.json(result.rows);
})

app.get("/alunos/:id", async (req, res, id) => {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM alunos1 WHERE ID=$1', [id]);
    res.json(result.rows);

})

   
async function insertalunos(alunos) {
        const sql = 'INSERT INTO alunos1(nome,cpf,email) VALUES ($1,$2,$3);';
        const values = [alunos.nome, alunos.cpf, alunos.email];
        return await pool.query(sql, values);
}

    
app.post('/alunos/', async (req, res) => {
    await insertalunos(req.body);
    res.sendStatus(201);
});


app.delete("/alunos/:id", async (req, res) => {
        async function deleteAluno(id) {
            return await pool.query('DELETE FROM alunos1 where id=$1;', [id]);
        }
        await deleteAluno(req.params.id);
        res.sendStatus(204);
    
})

 
async function updatealunos(id, alunos) {
    const sql = 'UPDATE alunos1 SET nome=$1, cpf=$2, email=$3 WHERE id=$4';
    const values = [alunos.nome, alunos.cpf, alunos.email, id];
    return await pool.query(sql, values);
}

app.patch('/alunos/:id', async (req, res) => {
    await updatealunos(req.params.id, req.body);
    res.sendStatus(200);
})

app.listen(3000,()=>{
    console.log("servidor rodando")
})


console.log("Primeiro Servidor Node")
