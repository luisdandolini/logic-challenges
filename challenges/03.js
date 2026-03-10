/*
  3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora
  de todos os dias de um ano, calcule e retorne:
  - O menor valor de faturamento ocorrido em um dia do ano;
  - O maior valor de faturamento ocorrido em um dia do ano;
  - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.
*/

const faturamentoDiario = [0, 1500, 3200, 0, 4100, 2800, 0];

function analisarFaturamento(faturamento) {
  const diasComFaturamento = faturamento.filter((dia) => dia > 0);

  const menor = Math.min(...diasComFaturamento);
  const maior = Math.max(...diasComFaturamento);
  const media =
    diasComFaturamento.reduce((acc, dia) => acc + dia, 0) /
    diasComFaturamento.length;
  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia > media,
  ).length;

  return { menor, maior, media, diasAcimaDaMedia };
}

console.log(analisarFaturamento(faturamentoDiario));
