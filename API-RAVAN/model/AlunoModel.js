const pool = require("../db")
const bcrypt = require('bcrypt'); 

async function busca() { 
    const  result = await pool.query("SELECT * FROM alunos1")
    return (result.rows);
}

async function buscaByID(req,res,id) {
    id = req.params.id;
    const result = await pool.query('SELECT * FROM alunos1 WHERE ID=$1', [id]);
    return (result.rows);
}

async function InsertAlunos (alunos) {


        const hashedPassword = await bcrypt.hash(alunos.password, 10);

        const sql = 'INSERT INTO alunos1(nome,cpf,email, data_nascimento, password) VALUES ($1,$2,$3,$4,$5);';
        const values = [alunos.nome, alunos.cpf, alunos.email, alunos.data_nascimento,hashedPassword];
      
 try {    
      let retorno = await  pool.query(sql, values);  
        console.log("entrou na consulta")
        return retorno ;
   }
  catch(error) {
      console.error("meu erro está aqui" , error);
         throw ("Error ao inserir aluno");
       //  console.error("meu erro está aqui no model" , error)
    }
       
}

async function InsertAlunos2 (req,res,alunos) {

    const  result = await pool.query("SELECT email, password  FROM alunos1")
    return (result.rows);

    const sql = 'INSERT INTO alunos1(nome,cpf,email, data_nascimento, password) VALUES ($1,$2,$3,$4,$5);';
    const values = [alunos.nome, alunos.cpf, alunos.email, alunos.data_nascimento,alunos.password];
      
    await  pool.query(sql, values);  
  
   
}

async  function DeleteAluno(req){
    id= req.params.id
    await pool.query('DELETE FROM alunos1 where id=$1;', [id]);
  
}

async function UpdateAluno(req,res, id, alunos) {
    const sql = 'UPDATE alunos1 SET nome=$1, cpf=$2, email=$3, data_nascimento=$4, password=$5 WHERE id=$6';
    const values = [alunos.nome, alunos.cpf, alunos.email,alunos.data_nascimento, alunos.password,id];
    return await pool.query(sql, values);
}

module.exports ={busca,buscaByID, InsertAlunos, DeleteAluno , UpdateAluno,  InsertAlunos2}