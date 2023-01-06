// OBJETOS ==>
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos
// Servem para organizar o código em pequenas partes reutilizáveis

var pessoa = {
  nome: "Bianca",
  idade: 25,
  profissao: "Desenvolvedora",
  possuiFaculdade: true,
};

console.log(pessoa.nome);
console.log(pessoa.possuiFaculdade);

// MÉTODOS ==>
// É uma proprieade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
40;

//DOT NOTATION GET ==>
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

// Possível adicionar novas propriedades e métodos

menu.color = "blue";

console.log(menu.backgroundColor);
console.log(menu.color);

var menu = {
  width: 800,
};

menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("height"); // false
