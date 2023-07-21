let h3 = document.querySelector('.h3'); //00:00:00
sec = 0;
min = 0;
hour = 0;
let intervalo;


function zeroAesquerda (digitos) { // aqui estou colocando um zero a esquerda
    if(digitos < 10) {
        return '0' + digitos
    } else{
        return digitos
    }
}

function start() {
    intervalo = setInterval(contar, 1000);
}

function pause() {
    //para pausar usamos a função clearInterval
    clearInterval(intervalo);
}

function stop() {
    clearInterval(intervalo)
    h3.innerHTML = '00:00:00';
    hour=0;
    min=0;
    sec=0;
}

function contar() {
    sec++
    
    if(sec == 60) {
        min++;
        sec = 0;
        if(min == 60) {
            hour++;
            min = 0;
            sec= 0;
        }
    }

    h3.innerHTML = zeroAesquerda(hour) + ':'+ zeroAesquerda(min) + ':'+zeroAesquerda(sec);
}