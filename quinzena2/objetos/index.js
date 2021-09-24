// EXERCICIO DA AULA 7

//____________________interpretação:

//1) será impresso no console: 
// Matheus Nachtergaele
//  Virginia Cavendish
// {canal: 'Globo', horario: '14h'}canal: "Globo"horario: "14h"

// 2 a){nome: 'Juca', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juca"
// raca: "SRD"
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juba"
// raca: "SRD"
// {nome: 'Jubo', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Jubo"
// raca: "SRD"

// b) a sintaxe dos 3 pontos(...) tráz a estrutura do objeto sitado qual neste caso foi cachorro.

// 3
// a)false e undefined

// b) isso pois a forma qual foi retornada para fora da 
//função foi errada, assim ainda ainda não dando acesso ao escopo da função no contexto global.



//_________________________escrita:
//1a) 
// function apelidoPessoa() {
//     const pessoa = {
//         nome: `Michael Peters`,
//         apelidos: [`Will Smith`, `Blade`, `Homem de preto`],
//     }

//     const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]} , ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`
//     return frase

// }
// const frase = (apelidoPessoa)
// console.log(apelidoPessoa())


// //b)
// const apelidos = [`Will Smith`, `Blade`, `Homem de preto`]

// const novosApelidos = [...apelidos, `Negão`, `Modelo`, `Deus preto`]
// console.log(novosApelidos)


//2...a)
// const primeiraPessoa = {
//     nome: "michael",
//     idade: 30,
//     profissão: "Tec Automação Telecom"
// }
// const segundaPessoa = {
//     ...primeiraPessoa,
//     profissao: "Administradora"
// }



// //b) 
// function funçãoPessoas(primeiraPessoa, segundaPessoa) {
//     const minhaArray = [primeiraPessoa.nome, primeiraPessoa.nome.length, primeiraPessoa.idade, primeiraPessoa.profissão, primeiraPessoa.profissão.length]
//     return minhaArray
// }
// console.log(funçãoPessoas(primeiraPessoa, segundaPessoa))
//
// 
// ________________________________3 questão
// 
// a)
// b)
//c) 
//d) 
// 
// 
// 
// 
// 
//