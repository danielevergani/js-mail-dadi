// inizializzo variabili x entrambi i giocatori

condizione = "";

for (i=0; i<100; i++) {

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

    condizione = prompt("vuoi smettere di giocare? scivi 'si' se vuoi smettere");

    if (condizione == "si"){
        break;
    }
    else{
        continue;
    }

}