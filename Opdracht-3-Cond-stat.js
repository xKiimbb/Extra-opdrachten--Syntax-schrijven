// Indien Opdracht-2-Cond-stat.js opgelost is met een switch, herschrijf het metif else if else.
// Indien Opdracht-2-Cond-stat.js opgelost is met een if else if else, herschrijf het met switch.

function uitlegBijTypeVanParameter(parameter) {
  switch (typeof parameter) {
    case "boolean":
      console.log("De mogelijke waarden zijn: false en true");
      break;
    case "number":
      console.log("Mogelijke waarden zijn: 1, 69, 3.141592");
      break;
    case "string":
      console.log("Mogelijke waarden zijn: 'a', 'Bart', '3'");
      break;
    case "object":
      if (parameter === null) {
        console.log("De waarde is: null");
      } else {
        console.log("Mogelijke waarden zijn: [1, 2], {naam: 'Bart'}");
      }
      break;
    case "undefined":
      console.log("De waarde is: undefined");
      break;
    case "function":
      console.log("De waarde is een functie, bv: function hihi() {}");
      break;
    default:
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
