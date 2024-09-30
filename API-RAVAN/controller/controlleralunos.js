const pool = require("../db");
const {busca, buscaByID , InsertAlunos , DeleteAluno, UpdateAluno} = require("../model/AlunoModel");

async function exibir (req,res) { 
    const  result = await busca();
    res.json(result);
};

async function exibirID (req,res,id) { 
   const result = await buscaByID(req,res,id);
    res.json(result);
};

async function  Insert(req, res) {
    alunos =req.body
    await InsertAlunos(req,res,alunos);
    res.sendStatus(201);
 
}

async function Delete(req,res, id){
    DeleteAluno(req,res, id)
    res.sendStatus(204);
}


async function Update (req, res) {
    await UpdateAluno(req, res, req.params.id, req.body);
    res.sendStatus(200);
}

module.exports ={exibir, exibirID, Insert, Delete, Update }
    
