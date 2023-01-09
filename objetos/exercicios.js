// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Bianca",
  sobrenome: "Barbosa",
  idade: 25,
};

console.log(
  `Meu nome é ${dadosPessoais.nome} ${dadosPessoais.sobrenome} e tenho ${dadosPessoais.idade} anos.`
);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.mostrarNome = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(
  `Meu nome é ${dadosPessoais.mostrarNome()} e tenho ${
    dadosPessoais.idade
  } anos.`
);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Au au!";
    } else {
      return "Nada";
    }
  },
};

console.log(
  `O ${cachorro.raca} que tem ${cachorro.idade} e é da cor ${
    cachorro.cor
  } fez ${cachorro.latir("mulher")}`
);
