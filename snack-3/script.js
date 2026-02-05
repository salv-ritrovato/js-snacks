console.log('Io odio JS')
// FUNZIONA!!

// IL SOFTWARE DEVE CHIEDERE PER 10 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO. IL PROGRAMMA STAMPA LA SOMMA DI TUTTI I NUMERI INSERITI.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    let numbers = Number(prompt('Insert a number')); // utilizzo Number per convertire stringa in numeri
    console.log(i);
    sum = sum + numbers;
}
console.log(sum);

