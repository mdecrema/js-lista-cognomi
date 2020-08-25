// Richiesta cognome utente
var cognome = prompt("Inserisci il tuo cognome");
// Array contenente tutti i cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// Aggiungo il cognome inserito dall'utente alla lista di cognomi
listaCognomi.push(cognome);
listaCognomi.sort();

for (i=0;i<listaCognomi.length;i++) {
  var contenuto = document.getElementById("listaOrdinata").innerHTML;
  contenuto += "<li>" + listaCognomi[i] + "</li>";
  document.getElementById("listaOrdinata").innerHTML=contenuto;
}
