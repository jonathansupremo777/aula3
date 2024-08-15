// Declara a função que verifica se a string é um palíndromo
function ePalindromo(str) {
    // Converte a string em um array, reverte o array e une os caracteres de volta em uma string
    let strReversa = str.split('').reverse().join('');
    // Compara a string original com a string revertida
    return str === strReversa;
}

// Testa a função com alguns exemplos
let resultado1 = ePalindromo("radar"); // Exemplo de palíndromo
let resultado2 = ePalindromo("javascript"); // Exemplo de não palíndromo

// Exibe os resultados no console
console.log("A palavra 'radar' é um palíndromo? " + resultado1);
console.log("A palavra 'javascript' é um palíndromo? " + resultado2);