// Declara uma variável com uma string
let textoOriginal = "Olá, Mundo!";

// Converte a string para letras maiúsculas
let textoMaiusculo = textoOriginal.toUpperCase();

// Converte a string para letras minúsculas
let textoMinusculo = textoOriginal.toLowerCase();

// Extrai uma parte da string (do índice 4 até o final)
let textoFatiado = textoOriginal.slice(4);

// Extrai uma parte da string (do índice 0 até o índice 3, excluindo o índice 4)
let textoSubstracao = textoOriginal.slice(0, 4);

// Exibe os resultados finais no console
console.log("Texto original:", textoOriginal);
console.log("Texto em maiúsculas:", textoMaiusculo);
console.log("Texto em minúsculas:", textoMinusculo);
console.log("Texto fatiado a partir do índice 4:", textoFatiado);
console.log("Texto extraído do início até o índice 3:", textoSubstracao);