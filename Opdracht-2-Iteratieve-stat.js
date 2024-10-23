// Vertrek vanuit de oplossing van Opdracht 1.
// - De functie genaamd doortellen accepteert twee parameters:
// - De eerste parameter blijft gelijk aan Opdracht 1.
// - De tweede parameter noemt printOneven.
// - Indien de parameter printOneven de waarde true bevat, dan worden enkel de printOneven getallen uitgeprint tijdens het doortellen.
// - Indien de parameter printOneven de waarde false bevat, dan worden enkel de even getallen uitgeprint tijdens het doortellen.

// Voorbeelden:

// doortellen(89, true);
// De volgende getallen worden uitgeprint:
// 91 93 95 97 99

// doortellen(89, false);
// De volgende getallen worden uitgeprint:
// 90 92 94 96 98 100

function doortellen(getal, printOneven) {
  while (getal <= 100) {
    if (printOneven && getal % 2 !== 0) {
      console.log(getal);
    } else if (!printOneven && getal % 2 === 0) {
      console.log(getal);
    }
    getal++;
  }
}

console.log(doortellen(100, false));
console.log(doortellen(98, false));
console.log(doortellen(89, true));
