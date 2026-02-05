console.log('Io odio JS')
// FUNZIONA!!

// CREA UN ARRAY VUOTO. CHIEDI PER 6 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO, SE è DISPARI, INSERISCILO NELL'ARRAY
const numbers = []
for (let i = 1; i <= 6; i++) {
    let userinput = Number(prompt('Insert a number here'));
    console.log(i);
    if (userinput % 2) {
    numbers.push(userinput);
}}
console.log(numbers);
