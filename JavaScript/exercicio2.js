/* Exercicio 2

2) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação
    - Média menor que 5, reprovação;
    - Média entre 5.1 a 6.9, recuperação;
    - Média igual ou superior a 7, passou de semestre;
 */

let nota1 = 9;
let nota2 = 6;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

let classificacao;
if (media < 5) {
    classificacao = "Reprovação";
} else if (media >= 5 && media <= 7) {
    classificacao = "Recuperação";
} else {
    classificacao = "Passou de semestre";
}

console.log(`Média: ${media.toFixed(1)}`);
console.log(`Classificação: ${classificacao}`);