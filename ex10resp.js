// Declara a idade mínima necessária para comprar o ingresso
const idadeMinima = 18;

// Declara a idade do usuário
let idadeUsuario = 20; // Substitua 20 pela idade real do usuário

// Usa estruturas condicionais para verificar se o usuário pode comprar o ingresso
if (idadeUsuario >= idadeMinima) {
    console.log("Você pode comprar o ingresso. Sua idade é suficiente.");
} else {
    console.log("Você não pode comprar o ingresso. A idade mínima é " + idadeMinima + " anos.");
}