const { busca, buscaByID, InsertCurso, DeleteCurso, UpdateCurso } = require("../model/DisciplinaProfessor");

async function exibir (req,res) { 
    const  result = await busca();
    res.json(result);
};

/*

async function exibirID (req,res,id) { 
    const result = await buscaByID(req,res,id);
    res.json(result);
};

async function  Insert(req, res) {
    cursos =req.body
    await InsertCurso(req,res,cursos);
    res.sendStatus(201);
 
}

async function Delete(req,res, id){
    DeleteCurso(req,res, id)
    res.sendStatus(204);
}


async function Update (req, res) {
    id_curso= req.params.id
    await UpdateCurso(req, res, id_curso, req.body);
    res.sendStatus(200);
}

*/

module.exports ={exibir}
    