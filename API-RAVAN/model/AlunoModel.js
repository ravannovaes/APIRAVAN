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
    const sql = 'INSERT INTO alunos1(nome,cpf,email, data_nascimento) VALUES ($1,$2,$3,$4);';
    const values = [alunos.nome, alunos.cpf, alunos.email, alunos.data_nascimento];
    pool.query(sql, values);  
    
}

async  function DeleteAluno(req){
    id= req.params.id
    await pool.query('DELETE FROM alunos1 where id=$1;', [id]);
  
}


async function UpdateAluno(req,res, id, alunos) {
    const sql = 'UPDATE alunos1 SET nome=$1, cpf=$2, email=$3, data_nascimento=$4 WHERE id=$5';
    const values = [alunos.nome, alunos.cpf, alunos.email,alunos.data_nascimento, id];
    return await pool.query(sql, values);
}

module.exports ={busca,buscaByID, InsertAlunos, DeleteAluno , UpdateAluno}