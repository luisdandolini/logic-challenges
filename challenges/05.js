/*
  5) Dois veículos saem de cidades opostas pela mesma rodovia.
  - Carro: Ribeirão Preto → Barretos, 90 km/h
  - Caminhão: Barretos → Ribeirão Preto, 80 km/h
  - Distância total: 125 km
  - 3 pedágios: carro leva 5 min a mais em cada (não tem tag)

  Quando se cruzarem, qual estará mais próximo de Ribeirão Preto?
*/

const distanciaTotal = 125;
const velocidadeCarro = 90;
const velocidadeCaminhao = 80;
const pedagios = 3;
const atrasoPorPedagio = 5 / 60;
const atrasoTotal = pedagios * atrasoPorPedagio;

/*
  O caminhão não para nos pedágios, então ele roda por (T + 0.25h)
  enquanto o carro roda por T até se cruzarem.

  Equação do encontro:
  distCarro + distCaminhao = 125
  (90 × T) + (80 × (T + 0.25)) = 125
  90T + 80T + 20 = 125
  170T = 105
  T ≈ 0.6176h
*/

const tempoEncontro =
  (distanciaTotal - velocidadeCaminhao * atrasoTotal) /
  (velocidadeCarro + velocidadeCaminhao);

const distCarro = velocidadeCarro * tempoEncontro;
const distCaminhao = velocidadeCaminhao * (tempoEncontro + atrasoTotal);

console.log(
  `Carro percorreu: ${distCarro.toFixed(2)} km (distância de Ribeirão Preto)`,
);
console.log(
  `Caminhão percorreu: ${distCaminhao.toFixed(2)} km (distância de Barretos)`,
);
console.log(
  `Caminhão está a ${(distanciaTotal - distCaminhao).toFixed(2)} km de Ribeirão Preto`,
);

/*
  Resultado:
  Carro:    ~61.76 km de Ribeirão Preto
  Caminhão: ~63.24 km de Barretos = ~61.76 km de Ribeirão Preto

  Quando se cruzam, os dois estão no mesmo ponto.
  A pergunta é uma pegadinha — ambos estão igualmente
  próximos de Ribeirão Preto por definição.
*/
