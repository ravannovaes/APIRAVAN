const { busca, buscaByID, InsertCurso, DeleteCurso, UpdateCurso } = require("../model/CursoModel");

async function exibir (req,res) { 
    const  result = await busca();
    res.json(result);
};
async function exibirID (req,res,id) { 
    const result = await buscaByID(req,res,id);
    res.json(result);
};
async function  Insert(req, res) {
        cursos =req.body

        nomecurso = req.body.nomecurso

        if ( nomecurso.length <= 2) {
            res.status(200).send("Informe um nome válido")
            return 0;
       }

        try {     
            
            await InsertCurso(req,res,cursos);
            res.sendStatus(201);
        }
        catch(error){
            console.log("Entrou no cacth", error)
            res.send(error)

        }    
 
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

module.exports ={exibir, exibirID, Insert, Delete, Update }
    