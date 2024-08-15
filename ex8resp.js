// Declara variáveis booleanas para simular as condições
let usuarioLogado = true; // Simula se o usuário está logado
let usuarioAdministrador = false; // Simula se o usuário tem permissão de administrador

// Usa o operador AND para verificar se ambas as condições são verdadeiras
let acessoAutorizado = usuarioLogado && usuarioAdministrador;

// Exibe o resultado da verificação no console
if (acessoAutorizado) {
    console.log("Acesso concedido. O usuário está logado e tem permissão de administrador.");
} else {
    console.log("Acesso negado. O usuário não está logado ou não tem permissão de administrador.");
}