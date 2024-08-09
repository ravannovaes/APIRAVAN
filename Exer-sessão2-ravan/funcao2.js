/*Crie um script que tenha uma variável e atribua o valor 111 nessa variável
Teste quantas divisões são exatas e quantas não são exatas usando o 2 como divisor.
Ao final imprima os valores informando a quantidade de números que possuem divisão exata e quais não possuem divisão exata.*/

function divisores(numero) {
var x , numero;
x=1;
contexata = 0 ;
contnexata = 0;
while( x <= numero ) {

   if( x%2 == 0 ) { 
     contexata++;
     console.log(x)
   } 
   else {
      contnexata++;
      console.log(x)
   }

   x ++

}
console.log("Quantidade de divisões exatas são " + contexata)
console.log("Quantidade de divisões não exatas são " + contnexata)
}

divisores(20)