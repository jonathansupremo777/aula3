// Inicializa o saldo da conta bancária
let saldo = 1000.00; // saldo inicial em reais

// Declara o valor do depósito e do saque
let deposito = 200.00; // valor a ser depositado
let saque = 150.00; // valor a ser sacado

// Realiza a operação de depósito
let operacaoDeposito = saldo + deposito;

// Realiza a operação de saque
let operacaoSaque = operacaoDeposito - saque;

// Exibe os resultados finais no console
console.log("Saldo inicial:", saldo);
console.log("Valor do depósito:", deposito);
console.log("Valor do saque:", saque);
console.log("Saldo após depósito:", operacaoDeposito);
console.log("Saldo após saque:", operacaoSaque);