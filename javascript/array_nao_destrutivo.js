const animais = ["gato", "cachorro", "coelho", "cobra", "pato", "girafa"];

//SLICE
const animaisMeio = animais.slice(1, 4);
console.log("Slice: ", animaisMeio)

//INCLUDES
console.log("Includes GATO: ", animais.includes("gato"))
console.log("Includes ELEFANTE: ", animais.includes("elefante"))

//INDEXOF
console.log("IndexOf PATO: ", animais.indexOf("cachorro"))
console.log("Includes ELEFANTE: ", animais.indexOf("elefante"))
