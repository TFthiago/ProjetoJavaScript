const calculadora = require("../../src/calculadora.js");

test('somar 5 + 4', () => {
    const numA = 5
    const numB = 4
    resultadoEsperado = 9
    
    const somarDoisNumeros = calculadora.somarDoisNumeros
    const resultadoAtual = calculadora.somarDoisNumeros(numA, numB)

    expect(resultadoAtual).toEqual(resultadoEsperado)
})

test('subtrair 10 - 5', () => {
    const numA = 10
    const numB = 5
    resultadoEsperado = 5

    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros
    const resultadoAtual = subtrairDoisNumeros(numA, numB)

    expect(resultadoAtual).toEqual(resultadoEsperado)
})

test('multiplicar 2 * 4', () => {
    const numA = 2
    const numB = 4
    resultadoEsperado = 8

    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros
    const resultadoAtual = multiplicarDoisNumeros(numA, numB)

    expect(resultadoAtual).toEqual(resultadoEsperado)
})

test('dividir 20 / 4', () => {
    const numA = 20
    const numB = 4
    resultadoEsperado = 5

    const DividirDoisNumeros = calculadora.dividirDoisNumeros
    expect(calculadora.dividirDoisNumeros(numA, numB)).toBe(resultadoEsperado)
})

//DDT 
//Lista, Array ou massa de teste
const massaDivisao = [
    [15,3,5],
    [10,5,2],
    [50,2,25],
    [-40,-20,2],
    [-81,9,-9]
]

test.each(massaDivisao)("Dividir %f / %f", (numA, numB, resultadoEsperado) => {

    //const dividirDoisNumeros = calculadora.dividirDoisNumeros
    expect(calculadora.dividirDoisNumeros(numA, numB)).toEqual(resultadoEsperado)
})


const massaDivisaoJSON = require("../../vendors/massaUnidade.js")

test.each(massaDivisaoJSON.array.map(elemento => [
    elemento.numA,
    elemento.numB,
    elemento.resultadoEsperado
]))('divida %f / %f', (numA,numB,resultadoEsperado) => {
    //const dividirDoisNumeros = calculadora.dividirDoisNumeros
    expect(calculadora.dividirDoisNumeros(numA, numB)).toEqual(resultadoEsperado)
})
