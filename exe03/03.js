/* Vamos criar uma lista de compras. 

Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 

Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 

Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 

Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada". */
//###########################################################################################//

// Cria um array chamado "frutas" com as frutas da lista de compras
var frutas = ["Maçã", "Banana", "Laranja", "Uva", "Melão"];

// Exibe a lista de compras inicial para o usuário
alert("Lista de compras inicial:\n" + frutas.join("\n")); 

// Loop que continua enquanto houver frutas na lista
while (frutas.length > 0) {
  /* Pede ao usuário para digitar o nome da fruta a ser removida.
     A função prompt() exibe um pop-up pedindo a entrada do usuário. */
  var frutaRemovida = prompt("Digite o nome da fruta a ser removida:");

  // Verifica se a fruta digitada está na lista
  if (frutas.includes(frutaRemovida)) { 
    // Se a fruta estiver na lista:
    // Encontra o índice da fruta no array
    var index = frutas.indexOf(frutaRemovida); 
    // Remove a fruta do array usando o índice
    frutas.splice(index, 1);  
    // Informa ao usuário que a fruta foi removida
    alert("Fruta foi retirada da lista."); 
  } else {
    // Se a fruta não estiver na lista:
    // Informa ao usuário que a fruta não está disponível
    alert("Fruta indisponível no nosso mercado.");
  }

  // Exibe a lista de compras atualizada
  alert("\nLista de compras atual:\n" + frutas.join("\n")); 
}

// Quando a lista estiver vazia, exibe a mensagem de finalização
alert("Lista de compras finalizada.");