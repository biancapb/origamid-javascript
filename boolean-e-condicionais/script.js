var graduacao = true;
var doutorado = true;

if (graduacao) {
  console.log("E graduado");
} else if (doutorado) {
  console.log("Doutorado");
} else {
  console.log("Não possui");
}

var nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome inválido");
}

//Operador lógico de Negação
//O operador ! nega uma operação booleana.

if (!graduacao) {
  console.log("Nao possui graduação");
} else {
  console.log("Possui graduação");
}

/* 
<= menor igual
>= maior igual
== igual
=== igual estritamente
!= diferente
!== diferente estritamente
*/

//OPERADORES LÓGICOS &&
/* Retorna o valor, não o resultado como operador lógico

true && true; //true
true && false; // false
false && true; // false
"gato" && "cão"; // 'cão'
(5 - 5) && (5 + 5) // 0
"gato" && false // false
(5 >= 5) && (3 < 6) // true

*/

//OPERADORES LÓGICOS ||
/* Retorna o valor, não o resultado como operador lógico

true || true; //true
true || false; // true
false || true; // true
"gato" || "cão"; // 'gato'
(5 - 5) || (5 + 5) // 10
"gato" || false // gato
(5 >= 5) || (3 < 6) // true

*/

var condicional = false;
var teste = 0;
var soma = condicional || teste;

console.log(soma);
