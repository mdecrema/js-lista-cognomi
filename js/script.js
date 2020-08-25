var nome = prompt("Inserisci il tuo nome");
var listaNomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
listaNomi.push(nome);

for (var i=0; i<=listaNomi.length; i++) {
  var contenuto = "";
  contenuto += listaNomi[i];
  alert(contenuto);
};
