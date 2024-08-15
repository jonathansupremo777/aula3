// Declara a função que recebe a idade e retorna se é maior de idade
function verificarMaiorIdade(idade) {
    return idade >= 18 ? "A pessoa é maior de idade." : "A pessoa é menor de idade.";
}

// Chama a função com uma idade de exemplo e armazena o resultado em uma variável
let resultado = verificarMaiorIdade(20);

// Exibe o resultado no console
console.log(resultado);