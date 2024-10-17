// Definieer een functie genaamd doortellen.
// De functie accepteert één parameter getal.
// Indien het getal groter is dan 100 of gelijk is aan 100, print uit "Het getal is 100 of meer!".
// Indien het getal kleiner is dan 100, laat de functie dan doortellen tot 100.

function doortellen(getal) {
  if (getal >= 100) {
    console.log("Het getal is 100 of meer!");
  } else {
    while (getal < 100) {
      console.log(getal);
      getal++;
    }
  }
}
console.log(doortellen(100));
console.log(doortellen(98));
console.log(doortellen(89));
