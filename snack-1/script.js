console.log('Io odio JS')
// FUNZIONA!!

// L'UTENTE INSERISCE DUE NUMERI IN SUCCESSIONE CON DUE PROMPT. IL SOFTWARE STAMPA IL MAGGIORE.
let number1 = prompt('Enter first number'); // potevo usare Number(prompt(Enter first number)) per convertire subito la stringa in numeri
let number2 = prompt('Enter second number');
console.log(number1, number2)

if (number1 > number2) {
    console.log(number1)
} else if (number2 > number1) {
    console.log(number2)
} else {
    console.log('Numbers are =')
    }