const pool = require("../db")

async function busca() { 
    const  result = await pool.query("SELECT * FROM disciplinas")
    return (result.rows);
}

async function buscaByID(req,res,id) {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM disciplinas WHERE id_disciplina=$1', [id]);
    return (result.rows);
}

async function InsertDisciplina (req,res,nome_disciplina) {
    const sql = 'INSERT INTO disciplinas(nome_disciplina) VALUES ($1);';
    const values = [disciplinas.nome_disciplina];

    try {  
  
        await pool.query(sql, values);
    }
    catch(error) {
        throw ("Error ao inserir Disciplina");
    }
        
    
}

async  function DeleteDisciplina(req){
    id= req.params.id
    await pool.query('DELETE FROM disciplinas where id_disciplina=$1;', [id]);
  
}

async function UpdateDisciplina(req,res, id_disciplina, disciplinas) {
    const sql = 'UPDATE disciplinas SET nome_disciplina=$1 WHERE id_disciplina=$2';
    const values = [disciplinas.nome_disciplina, id_disciplina];
    return await pool.query(sql, values);
}

module.exports ={busca,buscaByID, InsertDisciplina, DeleteDisciplina , UpdateDisciplina}