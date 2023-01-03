function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Eu gosto do céu";
  } else if (cor === "Amarelo") {
    return "Eu gosto do sol";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita("Azul"));

//função anonima function()  não tem nome
// addEventListener("click", function () {
//   console.log("eae");
// });

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  return imc2;
}

console.log(imc2(80, 6.5));

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe sua idade";
  } else if (idade >= 60) {
    return "Está na terceira idade";
  } else {
    return "Não está na terceira idade";
  }
}

console.log(terceiraIdade(68));

function faltaVisitar(paisesJaVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesJaVisitados} países`;
}

console.log(faltaVisitar(6));

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//console.log(outrosDados()); // retorna um erro

// HOISTING >>
//Antes de executar uma função, o JS move todas as funções declaradas para a memória
