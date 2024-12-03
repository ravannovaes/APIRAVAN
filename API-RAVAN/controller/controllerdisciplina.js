const { busca, buscaByID, InsertDisciplina, DeleteDisciplina, UpdateDisciplina } = require("../model/DisciplinaModel");

async function exibir (req,res) { 
    const  result = await busca();
    res.json(result);
};

async function exibirID (req,res,id) { 
    const result = await buscaByID(req,res,id);
    res.json(result);
};

async function  Insert(req, res) {
            disciplinas =req.body
        try {
            await InsertDisciplina(req,res,disciplinas);
            res.sendStatus(201);
        }
        catch(error) {
            res.send(error)

        }
 
}

async function Delete(req,res, id){
    DeleteDisciplina(req,res, id)
    res.sendStatus(204);
}


async function Update (req, res) {
    id_disciplina = req.params.id
    await UpdateDisciplina(req, res, id_disciplina, req.body);
    res.sendStatus(200);
}

module.exports ={exibir, exibirID, Insert, Delete, Update }
    