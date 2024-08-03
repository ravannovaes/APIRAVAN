let arrayInicial = [2024, 1981, 2018, 1998, 2019, 1971];
// as duas funções fazem a mesma coisa. 
// deixei as duas para mostrar que o mesmo problema podem serem resolvidos de formas diferentes
function meuLength(arrayRecebido) {
    let tamanho = 1;

    for(let fernando = 0; fernando < tamanho; fernando++) {
        if (arrayRecebido[fernando] === undefined) {
            return fernando;
        }
        tamanho++;
    }
}

function medeArray (arr) {
    let tamanhoArray = 0;
    let x = 1;
    for(i = 0; i < x; i++) {
        if (arr[i] !== undefined) {
            x++;
            continue;
        }
        tamanhoArray = i;
    }
    return tamanhoArray;
}

console.log("meuLength: " + meuLength(arrayInicial));
console.log("medeArray: " + medeArray(arrayInicial));