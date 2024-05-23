//loops

let num = 2


while (num <= 100) {

    if (num % 2 === 0 && num.toString().indexOf('8') === -1) {
        console.log(num);
    } else if (num % 2 === 0) {
       
        console.log('banana')
    }
    num += 2; // Incremento para manter apenas números pares
}
