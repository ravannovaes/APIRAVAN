const pool = require("../db")

async function busca() { 
const  result = await pool.query("SELECT * FROM alunos1")
return (result.rows);
}

async function buscaByID(req,res,id) {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM alunos1 WHERE ID=$1', [id]);
    return (result.rows);
}

async function InsertAlunos () {
    const sql = 'INSERT INTO alunos1(nome,cpf,email) VALUES ($1,$2,$3);';
    const values = [alunos.nome, alunos.cpf, alunos.email];
    pool.query(sql, values);
    
}

async  function DeleteAluno(){
    id= req.params.id
    await pool.query('DELETE FROM alunos1 where id=$1;', [id]);
    res.sendStatus(204);

}


async function UpdateAluno(req,res, id, alunos) {
    id= req.params.id

    const sql = 'UPDATE alunos1 SET nome=$1, cpf=$2, email=$3 WHERE id=$4';
    const values = [alunos.nome, alunos.cpf, alunos.email, id];
    return await pool.query(sql, values);
}

module.exports ={busca,buscaByID, InsertAlunos, DeleteAluno , UpdateAluno}