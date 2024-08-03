// variaveis
// constantes
// estruturas de controle / fluxo
// estruturas de repetição / loop
var variavel = 1;
let variavelLet = 1;

if (variavel == variavelLet) {
    let novaVariavelLet;
    novaVariavelLet = 9;
    var novaVariavelVar = 3;
    variavel = 4
    console.log("variavel dentro do if : " + variavel)
    console.log("variavelLet dentro do if : " + variavelLet)
    console.log("novaVariavelLet dentro do if : " + novaVariavelLet)
    console.log("novaVariavelVar dentro do if : " + novaVariavelVar)
    novaVariavelVar = 8
}

console.log("variavel fora do if : " + variavel)
console.log("variavelLet fora do if : " + variavelLet)
console.log("novaVariavelVar fora do if : " + novaVariavelVar)
// console.log("novaVariavelLet fora do if : " + novaVariavelLet)
// a linha acima foi comentada para não gerar erro. se descomentar vai gerar erro e entender o escopo de variável declarado com var ou let


const CONSTANTE = "fernando";
console.log(CONSTANTE);