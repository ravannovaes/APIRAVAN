function somacpf(cpf, res) {
    var  soma=0,soma2=0, digito1;
    var mult = [1,2,3,4,5,6,7,8,9];
    var mult2 = [0,1,2,3,4,5,6,7,8,9];

    cpf = cpf.replaceAll("-", "").replaceAll(".","")

    
    for( i=0; i <=8; i++) {
        soma = soma + (cpf[i]*mult[i])
    }

    digito1 = soma%11;
    if (digito1 == 10 ) {
        digito1 = 0 ;
    }
    for( i=0; i <=9; i++) {
        
        soma2 = soma2 + (cpf[i]*mult2[i])
    }
  
    digito2 = soma2%11;
   
    if (digito1 != cpf[9] || digito2 != cpf[10] || cpf.length != 11 ) {
                return false;
    }
    else        
    {
        return true ;
    }
}
module.exports = {somacpf}