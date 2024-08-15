// Declara a função que recebe três números e determina o maior entre eles
function encontrarMaiorNumero(num1, num2, num3) {
    let maior;

    // Compara os números usando estruturas condicionais
    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    // Retorna o maior número
    return maior;
}

// Testa a função com alguns exemplos
let maiorNumero = encontrarMaiorNumero(10, 25, 15);

// Exibe o maior número no console
console.log("O maior número é: " + maiorNumero);