/* Exercicio 1

1)Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveos, sendo elas:
1. Preço do etanol;
2. Preço da gasolina;
3. O tipo de combutível que está no seu carro;
4. Gasto médio de combustível do carro por KM;
5. Distância em KM da viagem;

Imprima no console o valor que será gasto de combusível para realizar esta viagem. */

let precoEtanol = 4.85;
let precoGasolina = 6.19;
let combustivelCarro = 'Etanol';
let kmPorLitro = 8;
let distanciaEmKm = 380;

let litrosTotal = distanciaEmKm / kmPorLitro;

if (combustivelCarro === 'Etanol') {
    let combustivel = ("Etanol");
    let valorGasto = litrosTotal * precoEtanol;
    console.log("O valor em " + combustivel +  " para esta viagem é $" + valorGasto.toFixed(2) + ", e são necessários " + litrosTotal.toFixed(2) + " litros!");
} else {
    let valorGasto = litrosTotal * precoGasolina;
    let combustivel = ("Gasolina");
    console.log("O valor em " + combustivel +  " para esta viagem é $" + valorGasto.toFixed(2) + ", e são necessários " + litrosTotal.toFixed(2) + " litros!");
}

