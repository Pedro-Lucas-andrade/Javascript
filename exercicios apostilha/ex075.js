var fibo = []

fibo[0] = 1
fibo[1] = 1
console.log(fibo[0])
console.log(fibo[1])

for ( var c = 2; c <= 15; c++){
    fibo[c]= fibo[c-2] + fibo[c-1]
    console.log(fibo[c])
}
