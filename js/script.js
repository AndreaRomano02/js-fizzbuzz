console.log("JS OK");

//# PRELIMINARI
for (let i = 1; i <= 100; i++) {
  const frizz = i % 3;
  const buzz = i % 5;
  let x;

  //! Controllo e stampa numerico
  if (!frizz && !buzz) {
    //# Controllo se è sia multiplo di 3 che di 5
    x = "Frizz" + "Buzz";
    console.log(x);
  } else if (!buzz) {
    //# Controllo se è multiplo di 3
    x = "Buzz";
    console.log(x);
  } else if (!frizz) {
    //# Controllo se è multiplo di 5
    x = "Frizz";
    console.log(x);
  } else {
    //# Stampo tutti gli altri numeri del contatore
    console.log(i);
  }
}
