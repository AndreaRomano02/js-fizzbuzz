console.log("JS OK");

//# PRELIMINARI
const elementNumber = document.getElementById("number");
let number;
let pageNumber = "";
//# Cicle
for (let i = 1; i <= 100; i++) {
  const frizz = i % 3;
  const buzz = i % 5;

  //! Controllo e stampa numerico
  if (!frizz && !buzz) {
    //# Controllo se è sia multiplo di 3 che di 5
    number = "Frizz" + "Buzz";
  } else if (!buzz) {
    //# Controllo se è multiplo di 3
    number = "Buzz";
  } else if (!frizz) {
    //# Controllo se è multiplo di 5
    number = "Frizz";
  } else {
    //# Continuo con il mio contatore
    number = i;
  }

  //# Stampo in console
  console.log("Questi sono i numeri: " + number);

  //# Aggiungo nell'html le colonne
  elementNumber.innerHTML += `<div class="col border">${number}</div>`;
}

// elementNumber.innerText = pageNumber;
