 
/*3- Faça uma função que receba um parâmetro chamado segundos e transforme esses segundos em minutos e em horas. Imprima o resultado.
*/
function minutos(segundos) {
    var sengundos, horas, minutos ;
    horas = segundos/3600 ;
 
    minutos = (segundos%3600)/60 ;
     horas = horas.toFixed(0)
     minutos = minutos.toFixed(0)
    

    console.log( "Horas "+horas +" Minutos "+ minutos)
}

minutos(5000)

