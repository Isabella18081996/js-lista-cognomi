var cognomi = [
  "Rossi",
  "Bianchi",
  "Neri",
  "Blu",
  "Viola",
  "Gialli",
  "Azzurro",
  "Indaco",
  "Grigio",
  "Verde",
  "Bordeaux",
  "Lime",
  "Avorio",
  "Beige",
  "Carbone",
  "Bronzo",
  "Giada",
  "Prugna",
  "Zaffiro",
  "Zafferano"
]

var cognome_utente = prompt("Quale è il tuo cognome?");

cognomi.push(cognome_utente);



var elenco_ordinato = cognomi.sort();

/* console.log(cognomi);
console.log(elenco_ordinato); */



for(var i = 0; i < elenco_ordinato.length; i++){

  var elemento_lista = elenco_ordinato[i];

  var numeri_umani = i + 1;

  var contenuto_precedente = document.getElementById('lista').innerHTML; 

  document.getElementById('lista').innerHTML = contenuto_precedente + "<li>" + elemento_lista + " " +  numeri_umani + "</li>";

  console.log(i)
}

