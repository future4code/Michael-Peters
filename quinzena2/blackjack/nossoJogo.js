/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
*/










// const confirme = prompt("Quer iniciar uma nova rodada ? digite sim ou não para puxar uma carta.")
// const mensagemDeBoasVindas = "Bem vindo ao jogo de Blackjack!"
// const mensagemAcabou = "O jogo acabou"
// const cancel = confirme === "não"
// const ok = confirme === "sim"
// const confirme2 = prompt("digite sim ou não para puxar uma 2ª e ultima carta.")

// console.log(mensagemDeBoasVindas)



// function comecarJogo1() {


//     const confirmaçãoNao = confirme2 === "não"
//     const confirmaçãoSim = confirme2 === "sim"
//     if (ok) {
//         if (confirmaçãoSim) {
//             const carta = comprarCarta()
//             console.log("cartas do usuario:")
//             console.log(carta.texto, carta.valor)
//             return valor1 = Number(carta.valor)
//         }
//         if (confirmaçãoNao) {
//             console.log("o jogo acabou")
//         }
//     }
// }
// if (cancel) {
//     console.log(mensagemAcabou)

// }



// function comecarJogo2() {


//     const confirmaçãoNao = confirme2 === "não"
//     const confirmaçãoSim = confirme2 === "sim"
//     if (ok) {
//         if (confirmaçãoSim) {
//             const carta = comprarCarta()
//             console.log("cartas do computador:")
//             console.log(carta.texto, carta.valor)
//             return valor2 = Number(carta.valor)
//         }
//         if (confirmaçãoNao) {
//             console.log("o jogo acabou")
//         }
//     }
// }
// if (cancel) {
//     console.log(mensagemAcabou)

// }






// comecarJogo2
// const resultado1 = comecarJogo1() + comecarJogo1()
// const resultado2 = comecarJogo2() + comecarJogo2()
// const maiorPontuação = resultado1 > resultado2
// const igualPontuação = resultado1 === resultado2
// const menorPontuação = resultado1 < resultado2
// if (maiorPontuação) {

//     console.log("você venceu, com:", resultado1, "pontos")
// }
// if (igualPontuação) {
//     console.log("temos um empate!.     usuário:", resultado1, "pontos.", "computador:", resultado2, "pontos.")
// }
// if (menorPontuação) {

//     console.log("você perdeu!")
//     console.log("usuário:", resultado1, "computador:", resultado2)

// }