let value = ''
let result = 0
let operand = ''

let operations = {
	'+': function(x,y) {return x + y},
	'-': function(x,y) {return x - y},
	'%': function(x,y) {return y == 0 ? 'ERROR' : x/y},
	'X': function(x,y) {return x * y},
	'': function(x,y) {return y}
}

const updateValue = e => {
	value += e.id
	document.getElementById('display').innerHTML = value
}

const operation = e => {
	result = operations[operand](result, Number(value))
	document.getElementById('display').innerHTML = result
	value = ''
	operand = e.id
}

const equals = () => {
	result = operations[operand](result, Number(value))
	document.getElementById('display').innerHTML = result
	value = ''
	result = 0
	operand = ''
}
