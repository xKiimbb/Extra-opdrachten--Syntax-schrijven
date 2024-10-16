// Extra informatie:
// const voornaam = "Bart".toLowerCase();
// console.log(voornaam); // "bart"
// const achternaam = "DuIsTeRs".toLowerCase();
// console.log(achternaam); // "duisters"

// Maak een functie genaamd kleineLetters.
// De functie accepteert één parameter, genaamd tekst.
// Als de parameter bestaat uit alleen kleine letters, geef true terug.
// Als de parameter niet bestaat uit alleen kleine letters, geef false terug.

// Verwacht resultaat:
// console.log(kleinLetters("bart")); // true
// console.log(kleinLetters("Bart")); // false
// console.log(kleinLetters("BaRt")); // false

// (--> Fout in de oefening gevonden in verwacht resultaat in de consolelogs. ==> kleinLetters i.p.v. kleineLetters)

function kleineLetters(tekst) {
  if (tekst == tekst.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(kleineLetters("bart"));
console.log(kleineLetters("Bart"));
console.log(kleineLetters("BaRt"));
