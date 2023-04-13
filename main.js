alert("BENVENUTO IN TRENIBOOLEAN");

alert("Si prega di inserire tutti i campi per un accurato calcolo del costo del biglietto");

alert("Prezzo biglietto 0.21$ al Km, 20% sconto per minorenni, 40% sconto per over 65");


const kmUtente = prompt("Km che si vogliono percorrere?");
// trasformare stringhe in numeri!
const prezzoKm = ((kmUtente)*0.21);
console.log(prezzoKm);

let sconto = null

const etaUtente = prompt("Si prega di inserire l'età");

if (etaUtente < 18) {
    let sconto = 20%;
} else if (etaUtente > 65) {
    let sconto = 40%;
} else {
    let sconto = 0%; 
}

const prezzoBiglietto = prezzoKm - sconto