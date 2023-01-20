var nome = "André";
var idade = 28;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var somaTotal = preco + totalComprado;

console.log(somaTotal);

/*==================================================== */
// importante OBSERVE COM ESSA VARIÁVEL ABAIXO. COLOCA APENAS VIRGULA SEM PRECISAR ESCREVER "VAR"
// NOVAMENTE

var sobrenome = "Rafael",
  cidade = "Rio";

console.log(sobrenome, cidade);

// CONST
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Dezembro";
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
// data = 'Janeiro'; // erro

// Variáveis com valores constantes devem utilizar o const.

// LET
//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

//Geralmente utiliza-se o const.

// =====================

// Por qual motivo o código abaixo retorna com erros?
// Porque o const e o let estão fora de escopo, apenas o var escapa do escopo
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?

const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
