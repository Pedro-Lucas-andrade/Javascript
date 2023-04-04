function tabuada(){
    var n1 = document.getElementById('n1')
    var tabuada = document.getElementById('tabuada')

    if (n1.value.length == 0){
        alert('[ERRO], porfavor digite um número!')
    } else {
        var n1 = Number(n1.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${c} x ${n1} = ${c*n1}`
            tabuada.appendChild(item)
            c++
        }
    }
}