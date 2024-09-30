//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 
var planeta = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]
var nomeDoPlaneta = prompt("Digite o nome de um planeta: ");

if (planeta.includes(nomeDoPlaneta)) { // Verifica se a informação digitada pelo o usuário está dentro da array
    alert("Achamos o planeta " + nomeDoPlaneta);
} 
else{
    alert("Nenhum planeta foi encontrado");
}



