/*4- Faça uma função que receba 4 parâmetros, sendo 3 notas e uma letra. Se a letra for A, a função deve calcular a média aritmética entre as 3 notas. Se a letra informada for P a média ponderada com pesos 5, 3 e 2. Imprima o resultado.*/

 

function media(letra, n1, n2, n3) {
    var  n1, n2,n3;
    var letra;

    if (letra == "A" ) {
         media = (n1 + n2 + n3) /3
         console.log(media)
    }
    if (letra == "P") {
        media = ( 5*n1 + 3*n2 + 2*n3)/10 
        console.log(media)
     
    }
    
}

media("A",3,3,2)