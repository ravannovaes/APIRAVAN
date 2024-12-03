const pool = require("../db")

async function busca() { 
    const  result = await pool.query("SELECT * FROM professores")
    return (result.rows);
}

async function buscaByID(req,res,id) {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM professores WHERE id_professor=$1', [id]);
    return (result.rows);
}

async function InsertProfessor () {
    const sql = 'INSERT INTO professores(nome_disciplina,email_professor, cpf_professor) VALUES ($1,$2,$3);';
    const values = [professor.nome_disciplina, professor.email_professor, professor.cpf_professor];
    pool.query(sql, values);  
    
}

async  function DeleteProfessor(req){
    id= req.params.id
    await pool.query('DELETE FROM professores where id_professor=$1;', [id]);
  
}

async function UpdateProfessor(req,res, id_professor, professor) {
    const sql = 'UPDATE professores SET nome_disciplina=$1, email_professor=$2, cpf_professor=$3 WHERE id_professor=$4';
    const values = [professor.nome_disciplina, professor.email_professor,professor.cpf_professor, id_professor];
    return await pool.query(sql, values);
}



module.exports ={busca,buscaByID, InsertProfessor, DeleteProfessor , UpdateProfessor}