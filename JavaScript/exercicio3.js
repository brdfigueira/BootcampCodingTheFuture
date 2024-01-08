/* Exercicio 3

3) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Foruma do IMC:
IMC = peso / (altura * altura)

Elabora um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
    - Abaixo de 18.5 = Abaixo do peso;
    - Entre 18.5 e 25 = peso normal;
    - Entre 25 e 30 = Acima do peso;
    - Entre 30 e 40 = Obeso;
    - Acima de 40 = Obsidade Grave;
*/

let peso = 72;
let altura = 1.70;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Seu imc é ' +imc.toFixed(1)+ ' e você está abaixo do peso');
} else if ( imc >= 18.5 && imc < 25) {
    console.log('Seu imc é ' +imc.toFixed(1)+ ' e você está com peso normal');
} else if ( imc >= 25 && imc < 30) {
    console.log('Seu imc é ' +imc.toFixed(1)+ ' e você está acima do peso');
} else if ( imc >= 30 && imc < 40) {
    console.log('Seu imc é ' +imc.toFixed(1)+ ' e você está obeso');
} else {
    console.log('Seu imc é ' +imc.toFixed(1)+ ' e você está com obesidade grave. Procure um médico.');
}