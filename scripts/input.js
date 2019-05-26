// var elementos = document.getElementsByClassName('elemento')
//  console.log(elementos)

// var busca = {
// 	elementos: []
// }

// //object { 'H', 'H', 'O' }
// function input(elemento){
// 	var e = elemento.innerText
// 	console.log(e)
// 	return e
// }


// function convertToString(busca){
// 	busca.elementos.push(input(elementos[0]),input(elementos[0]),input(elementos[33]))
// 	console.log(busca.elementos)
// }
// convertToString(busca)
function queryInput() {
	clearCanvas()
	prefixo = {
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
	let input_text = document.getElementById('input').value
	console.log(input_text)
	for(let indexI = 1; indexI<10; indexI++){
		valuePrefix = prefixo[indexI]
		if(input_text.indexOf(valuePrefix)!= -1){
			console.log(indexI)
			drawCanvas(pre = indexI)
		}
					
		
	}
	
}
