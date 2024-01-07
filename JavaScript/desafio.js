/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveos, sendo elas:
1. Preço do combutével;
2. Gasto médio de combustível do carro por KM;
3. Distância em KM da viagem;
 
  Imprima no console o valor que será gasto de combusível para realizar esta viagem. */

let precoCombustivel = 4.85;
let kmPorLitro = 11;
let distanciaEmKm = 100;

let litrosTotal = (distanciaEmKm / kmPorLitro);
litrosTotal = litrosTotal.toFixed(2);
let valorGasto = litrosTotal * precoCombustivel;
valorGasto = valorGasto.toFixed(2);
console.log("O valor em combustivel para está viagem é " + valorGasto + ", e necessários " + litrosTotal + " litros!");