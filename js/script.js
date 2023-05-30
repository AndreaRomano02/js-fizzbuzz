console.log("JS OK");

//# PRELIMINARI
const elementNumber = document.getElementById("number");
let number;
let pageNumber = "";
//# Cicle
for (let i = 1; i <= 100; i++) {
  const frizz = i % 3;
  const buzz = i % 5;
  let x;

  //! Controllo e stampa numerico
  if (!frizz && !buzz) {
    //# Controllo se è sia multiplo di 3 che di 5
    x = "Frizz" + "Buzz";
    number = x;
  } else if (!buzz) {
    //# Controllo se è multiplo di 3
    x = "Buzz";
    number = x;
  } else if (!frizz) {
    //# Controllo se è multiplo di 5
    x = "Frizz";
    number = x;
  } else {
    //# Continuo con il mio contatore
    number = i;
  }

  //# Stampo in console
  console.log("Questi sono i numeri: " + number);

  pageNumber += "|" + number + "| ";
}

elementNumber.innerText = pageNumber;
