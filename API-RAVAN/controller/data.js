let  dataEspecifica , dataatual , anos ;

//let data_americana = "19-07-2024";
//let data_brasileira = data_americana.split('-').reverse().join('-');

//console.log(data_brasileira)

dataEspecifica = new Date("1994-07-19");

 dataatual = new Date("2024-11-02");

 dataEspecifica.getTime();

 dataatual.getTime();

datafinal = dataatual.getTime() - dataEspecifica.getTime();

datafinal = datafinal/1000

anos = datafinal/31536000

anos = anos.toFixed()

//console.log(Meses=(datafinal%31536000)/ 2592000 )

if ( anos < 18) {
    console.log("menor que 18")
    return false ; 
}
else {
    console.log("maior que 18")
}
