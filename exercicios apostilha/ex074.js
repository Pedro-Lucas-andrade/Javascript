var num = []

for ( var c = 0; c <= 10; c++){
    if ( c % 2 == 0){
        num[c] = 5
    } else {
        num[c] = 3
    }
    console.log( `Na posição ${c} -> ${num[c]}`)
}
