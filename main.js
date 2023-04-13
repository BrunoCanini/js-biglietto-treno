alert("BENVENUTO IN TRENIBOOLEAN");

alert("Si prega di inserire tutti i campi per un accurato calcolo del costo del biglietto");

alert("Prezzo biglietto 0.21$ al Km, 20% sconto per minorenni, 40% sconto per over 65");


const kmUtente = prompt("Km che si vogliono percorrere?");
const prezzoKm = ((kmUtente)*0.21);
document.getElementById("kmCorsa").innerText = kmUtente + "Km";
console.log(prezzoKm);

let sconto = 0

const etaUtente = prompt("Si prega di inserire l'età");
document.getElementById("etaPasseggero").innerText = etaUtente;

if (etaUtente < 18) {
    sconto = 20;
} else if (etaUtente > 65) {
    sconto = 40;
}

let prezzoBiglietto = prezzoKm - (prezzoKm * sconto /100);
prezzoBiglietto = Math.floor(prezzoBiglietto * 100) / 100;
// let prezzoBigliettoFinale = prezzoBiglietto.toFixed(2);
alert(prezzoBiglietto + "Euro")
document.getElementById("prezzo").innerText = prezzoBiglietto + "Euro";

console.log(prezzoBiglietto, sconto)