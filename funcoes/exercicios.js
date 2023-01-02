// Crie uma função para verificar se um valor é Truthy
function verifyTruthy(valor) {
  return !!valor;
}

console.log(verifyTruthy(false));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(ladoA, ladoB, ladoC, ladoD) {
  return ladoA + ladoB + ladoC + ladoD;
}

console.log(`O perímetro do quadro é ${perimetroQuadrado(30, 40, 50, 60)}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

console.log(nomeCompleto("Bianca", "Barbosa"));

// Crie uma função que verifica se um número é par
function verificarPar(valor) {
  if (valor % 2 === 0) {
    return "É par";
  } else {
    return "É impar";
  }
}

console.log(verificarPar(7));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoArgumento(valor) {
  return typeof valor;
}

console.log(`O argumento é do tipo ${tipoArgumento(8)}`);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Bianca Barbosa");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
