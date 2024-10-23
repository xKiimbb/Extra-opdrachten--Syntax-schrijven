// Gebruik de oplossing van Opdracht 1 als basis:
// - Definieer een functie genaamd berekenTotaal:
//  -- De functie bevat in het codeblok, de code van Opdacht 1.
//  -- Verwijder de console.log in de while loop.
//  -- De functie geeft het berekende totaal terug (na de while loop).
// - Initialiseer een variabele resultaat, roep de functie berekenTotaal aan en ken het resultaat toe aan de variable resultaat.
// - Voeg een consolelog toe, die uitprint "Het totaal is: " met daarachter de waarde van de variabele resultaat.

function berekenTotaal() {
  let totaal = 0;
  let i = 0;
  while (i < 10) {
    totaal += i;
    i++;
  }
  return totaal;
}

let resultaat = berekenTotaal();
console.log("Het totaal is: " + resultaat);
