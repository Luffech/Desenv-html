const numeros = [42, 17, 8, 99, 23, 56];

// Primeiro número (índice 0)
const primeiro = numeros[0];

// Último número (índice total - 1)
const ultimo = numeros[numeros.length - 1];

// Maior e menor número
const maior = Math.max(...numeros);
const menor = Math.min(...numeros);

// Quantidade de elementos
const quantidade = numeros.length;

// Exibindo no console
console.log("Primeiro número:", primeiro);
console.log("Último número:", ultimo);
console.log("Maior número:", maior);
console.log("Menor número:", menor);
console.log("Quantidade de elementos:", quantidade);