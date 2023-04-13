alert("BENVENUTO IN TRENIBOOLEAN");

alert("Si prega di inserire tutti i campi per un accurato calcolo del costo del biglietto");

alert("Prezzo biglietto 0.21$ al Km, 20% sconto per minorenni, 40% sconto per over 65");

//prezzo per KM 
let kmUtente = prompt("Km che si vogliono percorrere?");
// trasformare stringhe in numeri!
let prezzoKm = ((kmUtente)*0.21);
console.log(prezzoKm);

let sconto = null

let etaUtente = prompt("Si prega di inserire l'età");
if(etaUtente < 18) {
    let sconto = 
}