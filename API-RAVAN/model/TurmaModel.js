const pool = require("../db")

async function busca() { 
    const  result = await pool.query("SELECT * FROM turmas")
    return (result.rows);
}

async function buscaByID(req,res,id) {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM turmas WHERE id_turma=$1', [id]);
    return (result.rows);
}

async function InsertTurma () {
    const sql = 'INSERT INTO turmas(apelido_turma,id_curso) VALUES ($1,$2);';
    const values = [turmas.apelido_turma, turmas.id_curso]
    pool.query(sql, values);  
    
}

async  function DeleteTurma(req){
    id= req.params.id
    await pool.query('DELETE FROM turmas where id_turma=$1;', [id]);
  
}

async function UpdateTurma(req,res, id_turma, turmas) {
    const sql = 'UPDATE turmas SET apelido_turma=$1, id_curso=$2 WHERE id_turma=$3';
    const values = [turmas.apelido_turma, turmas.id_curso, id_turma];
    return await pool.query(sql, values);
}

module.exports ={busca,buscaByID,InsertTurma,DeleteTurma , UpdateTurma}