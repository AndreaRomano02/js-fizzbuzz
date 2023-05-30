console.log("JS OK");

//# PRELIMINARI
const elementNumber = document.getElementById("number");
let number;

//# Cicle
for (let i = 1; i <= 100; i++) {
  const frizz = i % 3;
  const buzz = i % 5;
  let bgClass = "bg-orange";

  //# Continuo con il mio contatore
  number = i;

  //! Controllo e stampa numerico
  if (!frizz && !buzz) {
    //# Controllo se è sia multiplo di 3 che di 5
    number = "Frizz" + "Buzz";
    bgClass = "bg-success";
  } else if (!buzz) {
    //# Controllo se è multiplo di 3
    number = "Buzz";
    bgClass = "bg-info";
  } else if (!frizz) {
    //# Controllo se è multiplo di 5
    number = "Frizz";
    bgClass = "bg-danger";
  }

  //# Stampo in console
  console.log("Questi sono i numeri: " + number);

  //# Aggiungo nell'html le colonne
  elementNumber.innerHTML += `<div class="col border ${bgClass}">${number}</div>`;
}
