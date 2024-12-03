const express = require("express")
const router = express.Router();
const alunos = require("../controller/controlleralunos.js")


router.get("alunos/", alunos.exibir)

router.get("alunos/:id", alunos.exibirID)

router.post("alunos/",alunos.Insert)

router.delete("alunos/:id", alunos.Delete)

router.patch("alunos/:id", alunos.Update)

module.express = router