let num = [5, 8, 2, 9, 3]

num.push(1) //acrescentar um numero
num.sort() // ordenar valores
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) // mostra a posição do array
if (pos == -4) {
    console.log('O valor  não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}













/*
let num = [5, 8, 4]
num[3] = 6 //cria mais uma casinha
num.push(7)// acresenta mais um numero
num.length //comprimento do vetor 
num.sort() //coloca todos os elementos em ordem crescente
console.log(num)
*/