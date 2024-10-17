// Definieer een functie genaamd uitlegBijTypeVanParameter.
// De functie accepteert één parameter, genaamd parameter.
// Controleer het type van de parameter, indien het type:
// - "boolean" is, dan print uit "De mogelijke waarden zijn: false en true"
// - "number" is, dan print uit "Mogelijke waarden zijn: 1, 69, 3.141592"
// - "string" is, dan print uit "Mogelijke waarden zijn: 'a', "Bart', '3'"
// - "object" is, dan print uit "Mogelijke waarden zijn: [1; 2], {naam: 'Bart'}, null"
// - "undefined" is, dan print uit "De waarde is: undefined"
// - "function" is, dan print uit "De waarde is een functie, bv fucntion hihi(){}"
// Indien het type niet gekend is, dan wordt er uitgeprint "Geen informatie over dit type!".

function uitlegBijTypeVanParameter(parameter) {
  if (typeof parameter === "boolean") {
    console.log("De mogelijke waarden zijn: false en true");
  } else if (typeof parameter === "number") {
    console.log("Mogelijke waarden zijn: 1, 69, 3.141592");
  } else if (typeof parameter === "string") {
    console.log("Mogelijke waarden zijn: 'a', 'Bart', '3'");
  } else if (typeof parameter === "object") {
    console.log("Mogelijke waarden zijn: [1; 2], {naam: 'Bart'}, null");
  } else if (typeof parameter === "undefined") {
    console.log("De waarde is: undefined");
  } else if (typeof parameter === "function") {
    console.log("De waarde is een functie, bv function hihi(){}");
  } else {
    console.log("Geen informatie over dit type!");
  }
}
console.log(uitlegBijTypeVanParameter(true));
console.log(uitlegBijTypeVanParameter(0));
console.log(uitlegBijTypeVanParameter("a"));
console.log(uitlegBijTypeVanParameter([1, 2]));
console.log(uitlegBijTypeVanParameter({ naam: "Bart" }));
console.log(uitlegBijTypeVanParameter(undefined));
console.log(uitlegBijTypeVanParameter(function () {}));
