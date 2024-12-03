const { busca, buscaByID, InsertProfessor, DeleteProfessor, UpdateProfessor} = require("../model/ProfessorModel");


async function exibir (req,res) { 
    const  result = await busca();
    res.json(result);
};

async function exibirID (req,res,id) { 
    const result = await buscaByID(req,res,id);
    res.json(result);
};

async function  Insert(req, res) {
    professor =req.body
    await InsertProfessor(req,res,professor);
    res.sendStatus(201);
 
}

async function Delete(req,res, id){
    DeleteProfessor(req,res, id)
    res.sendStatus(204);
}

async function Update (req, res) {
    id_professor= req.params.id
    await UpdateProfessor(req, res, id_professor, req.body);
    res.sendStatus(200);
}



module.exports ={exibir,exibirID, Insert, Delete, Update}