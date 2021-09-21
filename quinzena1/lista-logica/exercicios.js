// Exemplos
//  _______________________________________________________ OBS: O ARQUIVO "TEST" DA AUTOMAÇÃO NÃO ESTÁ FUNCIONANDO DEVIDAMENTE,ESTOU FAZENDO AS CEGAS!
// Exercício 0A
function soma() {
    // escreva seu código aqui
    const num1 = prompt('Digite o primeiro número')
    const num2 = prompt('Digite o segundo número')

    console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
    // escreva seu código aqui
    const mensagem = prompt('Digite sua mensagem')

    console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
// Exercício 1
function calculaAreaRetangulo() {
    // escreva seu código aqui
    const alt = Number(prompt("qual altura do retangulo?"))
    const larg = Number(prompt("qual largura do retangulo?"))
    let area = Number(alt) * Number(larg)
    console.log(Number(area))
}

// Exercício 2
function imprimeIdade() {
    // escreva seu código aqui
    const anoNasc = promp("qual ano você nasceu?")
    const anoAtual = promp("qual ano estamos?")
    const idade = Number(anoAtual) - Number(anoNasc)
    console.log(Number(idade))

}
// Exercício 3
function calculaIMC() {
    // escreva seu código aqui
    const peso = promp("qual seu peso?")
    const altura = promp("qual sua altura?")
    const alturapor2 = Number(altura) * Number(altura)
    const pesoPorAltura = Number(peso) / Number(alturapor2)
    console.log(pesoPorAltura)
}
// Exercício 4
function imprimeInformacoesUsuario() {
    // escreva seu código aqui
    const nome = promp("qual seu nome?")
    const idade = promp("qual sua idade?")
    const email = promp("qual seu e-mail?")

    console.log = `meu nome é, ${ nome }, tenho ", ${ idade },anos de idade", "e meu e-mail é, ${ email}`
}

// Exercício 5
function imprimeTresCoresFavoritas() {
    // escreva seu código aqui

    const cor1 = prompt("digite a 1° tarefa do seu dia.")
    const cor2 = prompt("digite a 2° tarefa do seu dia.")
    const cor3 = prompt("digite a 3° tarefa do seu dia.")
    const listaDeCores = [cor1, cor2, cor3]

    console.log("minhas 3 cores favoritas são:", listaDeCores)

}

// Exercício 6
function retornaStringEmMaiuscula() {
    // escreva seu código aqui
    const frase = "aqui estou mais um dia!"
    const fraseMaiuscula = frase.toUpperCase()
    console.log(fraseMaiuscula)


}

// Exercício 7
function calculaIngressosEspetaculo() {
    // escreva seu código aqui
    const valorTotal = prompt("qual o valor total investido no espetaculo?")
    const valorIngresso = prompt("qual o valor do ingresso único?")
    const volorDeVenda = Number(valorTotal) / Number(valorIngresso)
    console.log(volorDeVenda)
}

// Exercício 8
function checaStringsMesmoTamanho() {
    // escreva seu código aqui
    const mensagem1 = prompt("digite uma linda mensagem")
    const mensagem2 = prompt("digite mais uma linda mensagem")
    const tamanhomens1 = mensagem1.length
    const tamanhomens2 = mensagem2.length
    console.log = ("as mesagens tem as mesmas quantidades de caracteris", tamanhomens1 === tamanhomens2)
}
// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
    // escreva seu código aqui
    const frase1 = prompt("digite uma frase qualquer")
    const frase2 = prompt("digite mail uma frase qualquer")
    const fraseMinuscula = frase1.toLowerCase()
    const fraseMaiuscula = frase2.toUpperCase()
    console.log('a sua primeira frase é igual a segunda frase', fraseMinuscula === fraseMaiuscula)


}

// Exercício 10
function checaRenovacaoRG() {
    _________________________________________________________________ //_AINDA TERMINANDO,(INCOMPLETO)
    // escreva seu código aqui

    // para menores de 20 anos
    const anoatual = prompt("em que ano estamos?")
    const anodenascimento = prompt("em qual ano você nasceu?")
    const anodeemissaodoRG = prompt("qual a data de emissão do seu RG?")

    const idade = Number(anoatual) - Number(anodenascimento)
    const menorou20 = Number(idade) <= 20
    const quantoTempoDeRG = Number(anoatual) - Number(anodeemissaodoRG)
    const limiteParaRenovar = 5
    console.log(quantoTempoDeRG) ____________________________________________________________________ //   AINDA TERMINANDO,(INCOMPLETO)
    console.log("você é mais novo ou tem 20 anos", menorou20)
    console.log("você tem", limiteParaRenovar, "anos para renovar seu RG, fique atento")
        //////
        /* const anodenascimento = prompt("em qual ano você nasceu?")
    const anodeemissaodoRG = prompt("qual a data de emissão do seu RG?")

    const idade = Number(anoatual) - Number(anodenascimento)
    const menorou20 = Number(idade) <= 20
    const quantoTempoDeRG = Number(anoatual) - Number(anodeemissaodoRG)
    const limiteParaRenovar = 5
    console.log(quantoTempoDeRG)
    console.log("você é mais novo ou tem 20 anos", menorou20)
    console.log("você tem", limiteParaRenovar, "anos para renovar seu RG, fique atento")

*/

}

// Exercício 11
function checaAnoBissexto() {
    // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
    // escreva seu código aqui
}