let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2020,
    cor: "amarelo",
}

for (let chave in carro){
    console.log(chave, ':' ,carro[chave])
}

console.log('Cor:', carro.cor)

console.log("valores:", Object.values(carro))