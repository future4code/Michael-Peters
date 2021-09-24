//__**EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO**____

//______01) Leia o código abaixo:

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

//a) Explique o que o código faz. Qual o teste que ele realiza? 
//O código identifica se o numero é resto da divisão por 2 é igual a zero.

//b) Para que tipos de números ele imprime no console "Passou no teste"?
//Para números pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//números ímpares

//______02) O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//a) Para que serve o código acima?
//Para informação, em forma e pesquisa individual, o preço de cada fruta.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//O preço da fruta  Maçã  é  R$  2.25

/*c) c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se
 retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? */
//O preço da fruta  Pêra  é  R$  5.5; sem restrições, item C não determinado.

//______03) Leia o código abaixo:

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/


//a) O que a primeira linha está fazendo?
//Solicitando ao usuário um numero que retornará como Number, pois foi chamado como número.
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//com o número 10 - "Esse número passou no Teste". 
//com o número -10 - Uncaught SyntaxError: Unexpected identifier
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//O objeto solicita dentro do escopo local que se o numero for maior que 0 a informação "Esse número passou no teste" seja impressa, caso essa ação seja utilizada, a ação do escopo global é apenas uma frase secreta.


//____**EXERCICIO DE ESCRITA DE CÓDIGO***______


//01.Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

// const idade = Number(prompt("Qual a sua idade?"))

// // b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

// const informacaoUsuario = Number(idade)

// /* c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir",
//  caso contrário, imprima "Você não pode dirigir."*/
// if (informacaoUsuario >= 18) {
//     console.log("Você pode dirigir")
// } else if (informacaoUsuario < 18) {
//     console.log("Você não pode dirigir")
// } else {
//     console.log("idade não definida")
// }



/*02.Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
 Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else.*/
/*-DICA
* Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem "Boa Tarde!"
Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)*/
// const alunoTurno = (prompt("Qual turno você estuda? Responda com M para Matutino, V para Vespertino e N para Noturno."))
// const respostaDoAluno = alunoTurno
// if (alunoTurno === "m") {
//     console.log("Bom dia!")
// } else if (alunoTurno === "v") {
//     console.log("Boa tarde!")
// } else if (alunoTurno === "n") {
//     console.log("Boa noite!")
// } else {
//     console.log("turno não definido")
// }

//03.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
//DICA* Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (===)
// const alunoTurno = (prompt("Qual turno você estuda? Responda com M para Matutino, V para Vespertino e N para Noturno."))
// switch (alunoTurno) {
//     case 'm':
//         console.log("Bom dia!")
//         break
//     case 'v':
//         console.log("Boa tarde!")
//         break
//     case 'n':
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("turno não definido")
// }


// /*04.Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero
// fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// // e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
// // imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme*/
// const generoFilme = prompt("qual genero do filme você escolheu para assistir?")
// const valorIngresso = prompt("qual valor do ingresso?")




// const valorIngressobarato = valorIngresso <= 15

// const generoAceitavel = generoFilme === 'fantasia'



// if (true === generoAceitavel) {
//     console.log("Bom filme!")
// } else if (false === generoAceitavel) {
//     console.log(generoFilme, " UUUUUM... :/ escolha outro filme!")

// }
// if (valorIngressobarato) {
//     console.log("ótimo valor")
// } else if (false === valorIngressobarato) {
//     console.log("o valor não é tão bom", "$", Number(valorIngresso), ",00")
// }