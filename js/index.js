console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Mark";
const hacker2 = "Emily";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1
let capitalisedName = "";

for (let i = 0; i < hacker1.length; i++) {
  capitalisedName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalisedName);

// Al principio puse el console.log dentro del bucle y me imprimía letra por letra hasta llegar al resultado.
// Al fijarme bien lo saqué y ya me dio el resultado que buscaba.

// 3.2

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// Cometí el mismo error pero me di cuenta rápido porque me acababa de pasar en el 3.1.
// Al escribir el código además escribí un "1" en lugar de una "i" por inercia, lo cual hacía que no funcionase.

// 3.3

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}




// BONUS

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra purus tempus felis euismod, sed volutpat lectus hendrerit. Morbi aliquam sit amet eros eget varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur dictum est ipsum, id pharetra neque dictum quis. Vivamus nec cursus tellus, quis faucibus libero. Aenean sed lacinia augue, vitae congue eros. Nullam aliquam, justo vestibulum interdum ullamcorper, erat orci volutpat quam, at accumsan nisi neque et justo. Aenean mollis, nibh non lacinia mattis, nibh magna aliquet elit, in euismod mi diam quis nunc. Nulla molestie felis quis pulvinar tincidunt. Cras tortor neque, posuere eget vulputate ut, dapibus non massa."

let wordsCounter = 0; 
let etCounter = 0;

for (let i = 0; i < longText.length; i++)
{
    if (longText[i] === " ")
    {
        wordsCounter++;
    }
    if (longText[i] === "e" && longText[i+1] === "t")
    {
        etCounter++;
    }
}
console.log(wordsCounter+1); // 105 
console.log(etCounter); // 10


// El ejercicio me daba error con tres párrafos, no es lo más adecuado pero quería al menos probar a hacerlo con una frase larga.
// Para conseguir contar los "et" me acordé del ejercicio de encontrar smilies del pre-work. 
// No conocía ningún método para contar palabras así que pensé en usar espacios ya que habrá una palabra por espacio más una extra.