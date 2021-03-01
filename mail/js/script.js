// verificare se email inserita da utente corrisponde a mail in un array
// 1 creo variabile x mail e array
var mailPersonale = prompt("inserisci la tua email");
var elencoMail = ["daniele@gmail.com", "paolo@gmail.com", "francescoe@gmail.com", "giuseppe@gmail.com", "piero#gmail.com"];

console.log(mailPersonale);
console.log(elencoMail);

// 2 ciclo for con if annidato per fare verifica nell'array

for (i=0; i<elencoMail.length; i++){
    if (mailPersonale == elencoMail[i]){
        console.log("sei autorizzato");
        break;
    }
}

if (i == elencoMail.length){
    console.log("la tua email non è presente");
}

// secondo metodo

var contatore = 0;

for (i=0; i<elencoMail.length; i++){
    if (mailPersonale == elencoMail[i]){
        console.log("sei autorizzato");
    }
    else{
    contatore +=1;
    // console.log("contatore" + contatore);
    // console.log("i" + i);
    }

}

if (contatore == i){
    console.log("la tua email non è presente");
}

