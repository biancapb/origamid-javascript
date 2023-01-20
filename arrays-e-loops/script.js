var videoGames = ["Switch", "PS4", "XBOX", "PC"];

console.log(videoGames[2]);

videoGames.pop(); //remove o último item da array

console.log(videoGames);

videoGames.push("3ds"); //insere no final da array

console.log(videoGames);

videoGames.length; //retorna a quantidade de itens na array

console.log(videoGames.length);

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

var videoGames = ["Switch", "PS4", "XBOX", "PC"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(`Item nº ${item + 1} é o ${videoGames[item]}`);
}

for (var item = 0; item < videoGames.length; item++) {
  if (videoGames[item] === "PS4") {
    console.log(`${videoGames[item]}`);
    break;
  }
}

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
videoGames.forEach(function (item, index, array) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
// Podemos passar os seguintes parâmetros item, index e array
