
function contar(){
    var inicio = Number(document.getElementById('comeco').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resposta = document.getElementById('resposta')
    resposta.innerHTML = 'contando: '
    if ( passo <=0){
        alert('[ERRO] Digite um passo válido!')
    }
    if (fim > inicio){
        for (var c=inicio; c<=fim; c+=passo){
            resposta.innerHTML += `${c} &#x1F449`  
        }
    } else{
        for (var c=inicio; c>=fim; c-=passo){
            resposta.innerHTML += `${c} &#x1F449`
        }
    }
    resposta.innerHTML += `&#x1F6A9`
}