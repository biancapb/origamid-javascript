var idade = 2;
console.log(idade);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// NaN (Not a Number)
// É possível verificar se uma variável é NaN ou não com a função isNaN();

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
// 5 * 2 = 10
// 10 + 10 / 2 + 20
// 10 + 5 + 20
// 35
console.log(total); // 35

// Crie duas expressões que retornem NaN
var testeNaN = "Uma frase com ";
var frase = testeNaN * 4.5;
console.log(frase);

var testeNaN = false;
var frase = testeNaN / 9;
console.log(frase);

// Somar a string '200' com o número 50 e retornar 250
var numeroString = "200";
console.log(+numeroString + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var numeroIncremente = 5;
console.log(++numeroIncremente);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois);
