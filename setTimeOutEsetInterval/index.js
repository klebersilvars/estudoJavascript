//uso para controlar times

function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString( { // essa função faz retornar a hora atual no Brasil.
        hour12: false
    })
}

//agora quero criar uma função que fique atualizando a hora automaticamente usando o setInterval e o setTimeOut


const timer = setInterval( ()=> {
    console.log(mostrarHora())
},1000)

setTimeout(()=> {
    clearInterval(timer) // uso para parar o que usei no set interval depois de 10 segundos que eu passei abaixo
},10000)
