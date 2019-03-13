var elementos = document.getElementsByClassName('elemento')
 console.log(elementos)

var busca = {
	string: {}	
}

//object { 'H', 'H', 'O' }
function input(elemento){
	var e = elemento.innerText
	console.log(e)
	return e
}


function convertToString(busca){
	busca.string = input(elementos[0])+input(elementos[0])+input(elementos[33])
	console.log(busca.string)
}
convertToString(busca)