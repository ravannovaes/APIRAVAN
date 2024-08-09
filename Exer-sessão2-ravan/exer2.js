
var x ;
x=1;
contexata = 0 ;
contnexata = 0;
while( x <= 111 ) {

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
console.log("Quantidade de divisões exatas é " + contexata)
console.log("Quantidade de divisões não exatas é " + contnexata)