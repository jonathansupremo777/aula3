// Declara uma variável numérica
let numero = 123;

// Declara uma variável string
let texto = "456";

// Converte a variável numérica para string
let numeroParaString = numero.toString();

// Converte a variável string para número
let textoParaNumero = parseInt(texto, 10); // Usando parseInt para converter string para número

// Exibe os tipos de dados resultantes no console
console.log("Tipo de dado de 'numeroParaString':", typeof numeroParaString);
console.log("Tipo de dado de 'textoParaNumero':", typeof textoParaNumero);