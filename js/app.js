/*
Istruzioni:
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
    nome : "Alex",
    cognome: "Vod",
    eta: 22
};

console.log(studente);

for (var key in studente) {
    var datiStudente = studente[key];
    $(".studente").append(`${key} : ${datiStudente} `);
}

//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

var studenti = [
    {
        nome : "Alessio",
        cognome: "Gin",
        eta: 23
    },
    {
        nome : "Marco",
        cognome: "Tequ",
        eta: 28
    },
    {
        nome : "Luca",
        cognome: "Moji",
        eta: 21
    },
];

// Soluzione ES6
// studenti.forEach(element => console.log(element));

// Soluzione ciclo for
for (var i = 0; i < studenti.length; i++) {
   var datiStudenti = studenti[i];
   console.log(datiStudenti.nome + " " +  datiStudenti.cognome);
   $(".studenti").append(`nome: ${datiStudenti.nome} cognome: ${datiStudenti.cognome} || `);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studenteUtente = {
    nome : prompt("Inserisci Il nome dello studente"),
    cognome : prompt("Inserisci Il cognome dello studente"),
    eta : Number(prompt("Inserisci l'età dello studente"))
}

// inserimento nuovo elemento in array
studenti.push(studenteUtente);
// log nuovo elemento 
console.log(studenti);

// for di stampa
for (var i = 0; i < studenti.length; i++) {
    var datiStudenti = studenti[i];
    console.log(` ${datiStudenti.nome} ${datiStudenti.cognome} ${datiStudenti.eta}`);
    $(".studenti-utente").append(`nome: ${datiStudenti.nome} cognome: ${datiStudenti.cognome} eta: ${datiStudenti.eta} || `);
 }
