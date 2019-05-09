'use strict'

const input = require('readline-sync')

class FuncaoOrganica {
  constructor() {
    this.prefixo = {
      '1': 'met',
			'2': 'et',
			'3': 'prop',
			'4': 'but',
			'5': 'pent',
			'6': 'hex',
			'7': 'hept',
			'8': 'oct',
			'9': 'non',
			'10': 'dec',
    }

    this.infixo = {
      'simples': 'an',
			'dupla': 'en',
			'tripla': 'in',
			'duas duplas': 'dien',
    }

    this.sufixo = {'hidrocarboneto': 'o',}
  }

  mostrarPrefixo() {
    for(let i in this.prefixo)
      console.log(i, '-',  this.prefixo[i])
  }

  mostrarInfixo() {
    for(let i in this.infixo)
      console.log(i + '- ' + this.infixo[i])
  }

  mostrarSufixo() {
    for(let i in this.sufixo)
      console.log(i + '- ' + this.sufixo[i])
  }
}


let carb = new FuncaoOrganica

let p = input.question('Digite a quantidade de carbonos: ')
let i = input.question('Digite o tipo de ligacao: \"simples\", \"dupla\", \"tripla\" ou \"duas duplas\": ')
let s = 'hidrocarboneto'

console.log(carb.prefixo[p] + carb.infixo[i] + carb.sufixo[s])

carb.mostrarPrefixo()
carb.mostrarInfixo()
carb.mostrarSufixo()
