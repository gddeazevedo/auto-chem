var elementos = document.getElementsByClassName('elemento')
 console.log(elementos)

var busca = {
	elementos: []
}

//object { 'H', 'H', 'O' }
function input(elemento){
	var e = elemento.innerText
	console.log(e)
	return e
}


function convertToString(busca){
	busca.elementos.push(input(elementos[0]),input(elementos[0]),input(elementos[33]))
	console.log(busca.elementos)
}
convertToString(busca)