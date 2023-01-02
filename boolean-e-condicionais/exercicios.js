// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 25;
var idadeParente = 20;

if (minhaIdade > idadeParente) {
  console.log("É maior");
} else if (minhaIdade === idadeParente) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
3 && 5 - " " && 3;
3;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // truly
var idade = 28; // truly retorna 28
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy retorna undefined
var dinheiroNaConta = 0; // falsy retorna 0

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais");
} else {
  console.log("Brasil tem menos");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} //Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
} //Cão
