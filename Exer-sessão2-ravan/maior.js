

function maior(n1,n2, n3, n4, n5) {
    var n1,n2, n3, n4 , n5;
    var maior=0;
   

    if (  n1 > n2 ) { 
         maior = n1 
    } 
    else if (n2 > n3) { 
         maior = n2
    } 
    else if ( n3 > n4) 
        maior = n3
    else if (n4 > n5) 
        maior= n4
    else { 
         maior=n5
    }
        
    console.log(maior)
}

   


maior(10,20,45,3,1)