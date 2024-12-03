const {busca, buscaByID , InsertAlunos , InsertAlunos2, DeleteAluno, UpdateAluno} = require("../model/AlunoModel");
const{somacpf} = require("./somacpf"); 
const{validaData} = require("./validadata")

async function exibir (req,res) { 
    const  result = await busca();
    res.json(result);
};

async function exibirID (req,res,id) { 
    const result = await buscaByID(req,res,id);
    res.json(result);
};

async function  Insert(req, res) {
    nome = req.body.nome
    cpf = req.body.cpf
    data= req.body.data_nascimento
    alunos =req.body

    try {     
                      
            /*    validacpf = somacpf(cpf)
                if ( validacpf == false) {
                    res.status(200).send("CPF Inválido")
                    return 0;
                }
                if ( nome.length <= 2) {
                    res.status(200).send("Informe um nome válido")
                    return 0;

                }

            */
            //  validaDatateste = validaData(data)
            /*
                if ( validaDatateste == false) {
                    res.status(200).send("Data invalida")
                    console.log(saiu)
                    return 0;
                    
                }
            */
               
            await InsertAlunos(alunos);
            
          // res.sendStatus(201);
          res.status(201).json(alunos);
    }
   catch (error) {
               // console.error("meu erro está aqui" , error);
              //  console.log("meu erro está aqui controller")
              console.log(error)
              //  res.status(400).send(error.Error);
               
              res.send(error)
              //  res.sendStatus(400)

              //res.status(201).json(error);
                

    }

}

async function  Insert2(req, res) {
    nome = req.body.nome
    cpf = req.body.cpf
    data= req.body.data_nascimento
    alunos =req.body
    email = req.body.email
    password = req.body.password
   await InsertAlunos2(req,res,alunos);


}

async function Delete(req,res, id){
    DeleteAluno(req,res, id)
    res.sendStatus(204);
}

async function Update (req, res) {
    id= req.params.id
    await UpdateAluno(req, res, id, req.body);
    res.sendStatus(200);
}

module.exports ={exibir, exibirID, Insert, Insert2, Delete, Update }
    
