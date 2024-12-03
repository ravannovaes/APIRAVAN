const pool = require("../db")

async function busca() { 
    const  result = await pool.query("SELECT * FROM disciplina_professores")
    //select t.id_turma,t.apelido_turma, c.id_curso || '-' || c.nomecurso as meucurso from turmas t inner join cursos c on t.id_curso=c.id_curso ;
    return (result.rows);
}
//select t.id_disciplina,t.id_professor as disciplina_professores from disciplina inner join id_professor  on t.id_curso=c.id_curso ;
/*
async function buscaByID(req,res,id) {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM cursos WHERE id_curso=$1', [id]);
    return (result.rows);

}

async function InsertCurso () {
    const sql = 'INSERT INTO cursos(nomecurnso) VALUES ($1);';
    const values = [cursos.nomecurso];
    pool.query(sql, values);  
    
}

async  function DeleteCurso(req){
    id= req.params.id
    await pool.query('DELETE FROM cursos where id_curso=$1;', [id]);
  
}

async function UpdateCurso(req,res, id_curso, cursos) {
    const sql = 'UPDATE cursos SET nomecurso=$1 WHERE id_curso=$2';
    const values = [cursos.nomecurso, id_curso];
    return await pool.query(sql, values);
}

*/

module.exports ={busca}