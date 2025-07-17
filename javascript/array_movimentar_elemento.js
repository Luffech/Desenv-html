let frutas = [ "maça", "pêra", "uva", ]

console.log("Meu Arrey inicial é: ", frutas)

// PUSH adiciona
frutas.push("laranja")
console.log("Array após o push: ", frutas)

// POP remove
let ultimaFruta = frutas.pop()
console.log("Array após o pop: ", frutas)
console.log("Fruta removida: ", ultimaFruta)

// UNSHIFT adiciona no início
frutas.unshift("banana")    
console.log("Array após o unshift: ", frutas)

// SHIFT remove do início
let primeiraFruta = frutas.shift()
console.log("Array após o shift: ", frutas)
console.log("Fruta removida do início: ", primeiraFruta)
