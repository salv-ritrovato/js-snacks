console.log('Io odio JS')
// FUNZIONA!!

// L'UTENTE INSERISCE DUE PAROLE IN SUCCESSIONE CON DUE PROMPT. IL SOFTWARE STAMPA PRIMA LA PIU' CORTA E POI LA PIU' LUNGA.
let word1 = prompt('Enter first word');
let word2 = prompt('Enter second word');
console.log(word1, word2)

if (word2.length > word1.length) {
    console.log(word1 + " " + word2
    )
} else if (word1.length < word2.length) {
    console.log(word1 + " " + word2)
} else {
    (console.log('The words are equal'));
}
