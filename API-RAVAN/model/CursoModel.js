const pool = require("../db")

async function busca() { 
    const  result = await pool.query("SELECT * FROM cursos")
    //select t.id_turma,t.apelido_turma, c.id_curso || '-' || c.nomecurso as meucurso from turmas t inner join cursos c on t.id_curso=c.id_curso ;
    return (result.rows);
}

async function buscaByID(req,res,id) {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM cursos WHERE id_curso=$1', [id]);
    return (result.rows);
}

async function InsertCurso (req,res,cursos) {
    const sql = 'INSERT INTO cursos(nomecurso) VALUES ($1);';
    const values = [cursos.nomecurso];
    
   try {   
        
            await pool.query(sql, values);  
    }
   catch(error) {
                
                console.log("catch do model", error)
                throw ("Error ao inserir curso");
     }
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

module.exports ={busca,buscaByID, InsertCurso, DeleteCurso , UpdateCurso}