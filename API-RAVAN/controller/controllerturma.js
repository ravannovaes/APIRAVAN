const { busca, buscaByID, InsertTurma, DeleteTurma, UpdateTurma } = require("../model/TurmaModel");

async function exibir (req,res) { 
    const  result = await busca();
    res.json(result);
};

async function exibirID (req,res,id) { 
    const result = await buscaByID(req,res,id);
    res.json(result);
};

async function  Insert(req, res) {
    turmas =req.body
    await InsertTurma(req,res,turmas);
    res.sendStatus(201); 
}

async function Delete(req,res, id){
    DeleteTurma(req,res, id)
    res.sendStatus(204);
}

async function Update (req, res) {
    id_turma= req.params.id
    await UpdateTurma(req, res, id_turma, req.body);
    res.sendStatus(200);
}

module.exports ={exibir,exibirID, Insert, Delete, Update}

