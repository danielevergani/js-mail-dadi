// inizializzo variabili x entrambi i giocatori

var mioNumero = Math.floor(Math.random()*6) + 1;
console.log(mioNumero);
var numeroSfidante = Math.floor(Math.random()*6) + 1;
console.log(numeroSfidante);

if (mioNumero>numeroSfidante){
    console.log("hai vinto");
}
else if (mioNumero<numeroSfidante){
    console.log("hai perso");
}
else {
    console.log("pareggio");
}