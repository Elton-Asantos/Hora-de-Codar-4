/*Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE"
o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. */

var estudantes = [];

while (true) {
  let resposta = prompt("Digite o nome do estudante:");

 
  
  if (resposta.toUpperCase() === "PARE") {
    alert( "Quantidade de estudantes:" + estudantes.length + "\nLista de estudantes: " + estudantes.join() );
  }
  
  estudantes.push(resposta);
}
