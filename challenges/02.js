/*
  2) Descubra a lógica e complete o próximo elemento:
  a) 1, 3, 5, 7, ___
  b) 2, 4, 8, 16, 32, 64, ____
  c) 0, 1, 4, 9, 16, 25, 36, ____
  d) 4, 16, 36, 64, ____
  e) 1, 1, 2, 3, 5, 8, ____
  f) 2,10, 12, 16, 17, 18, 19, ____
*/

// a) 1, 3, 5, 7, [9] - números ímpares, sempre +2
// b) 2, 4, 8, 16, 32, 64, [128] - potências de 2, sempre ×2
// c) 0, 1, 4, 9, 16, 25, 36, [49] - quadrados perfeitos (0²,1²,2²,3²...)
// d) 4, 16, 36, 64, [100] - quadrados dos pares (2²,4²,6²,8²,10²)
// e) 1, 1, 2, 3, 5, 8, [13] - Fibonacci, soma dos dois anteriores
// f) 2, 10, 12, 16, 17, 18, 19, [200] - ordem lexicográfica
