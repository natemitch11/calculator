const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	console.log('Operator:', mathSymbol);
	console.log('Operand 1:', num1);
	console.log('Operand 2:', num2);
	console.log('Operand 3:', num3);

	let num1Null = Boolean(num1 === 0);
	let num2Null = Boolean(num2 === 0);
	let num3Null = Boolean(num3 === 0);

	//console output to troubleshoot logic
	/*console.log('is num1 null?:', num1Null);
	console.log('is num2 null?', num2Null);
	console.log('is num3 null?', num3Null);*/

	//addition operand logic
	if (mathSymbol === "+" & num3 === null) {
		console.log(num1 + num2);
	} else if (mathSymbol ==="+" & num3 !== null){
		console.log(num1 + num2 + num3);
	} else if (mathSymbol === "+" & num2 === null) {
		console.log(num1 + num3);
	} else if (mathSymbol === "+" & num1 === null) {
		console.log(num2 + num3);
	}

	//subtraction operand logic

	if (mathSymbol === "-" & num3 === null) {
		console.log(num1 - num2);
	} else if (mathSymbol ==="-" & num3 !== null){
		console.log(num1 - num2 - num3);
	} else if (mathSymbol === "-" & num2 === null) {
		console.log(num1 - num3);
	} else if (mathSymbol === "-" & num1 === null) {
		console.log(num2 - num3);
	}

	//multiplication operand logic

	if (mathSymbol === "*" & num3 === null) {
		console.log(num1 * num2);
	} else if (mathSymbol ==="*" & num3 !== null){
		console.log(num1 * num2 * num3);
	} else if (mathSymbol === "*" & num2 === null) {
		console.log(num1 * num3);
	} else if (mathSymbol === "*" & num1 === null) {
		console.log(num2 * num3);
	}

	//division operand logic

	if (mathSymbol === "/" & num3 === null) {
		console.log(num1 / num2);
	} else if (mathSymbol ==="/" & num3 !== null){
		console.log(num1 / num2 / num3);
	} else if (mathSymbol === "/" & num2 === null) {
		console.log(num1 / num3);
	} else if (mathSymbol === "/" & num1 === null) {
		console.log(num2 / num3);
	}

	//modulus logic

	if (mathSymbol === "mod" & num3Null === true) {
		console.log(num1 % num2);
	} else if (mathSymbol ==="mod" & num2Null === true) {
		console.log(num1 % num3);
	} else if (mathSymbol === "mod" & num1Null === true) {
		console.log(num2 % num3);
	} else if (mathSymbol === "mod" & num3Null === false) {
		console.log(num1 % num2 % num3);
	}

	// sqrt logic

	if (mathSymbol === "sqrt" &num1Null === true) {
		console.log(Math.sqrt(num2));
		console.log(Math.sqrt(num3));
	} else if (mathSymbol === "sqrt" & num2Null=== true) {
		console.log(Math.sqrt(num1));
		console.log(Math.sqrt(num3));
	} else if (mathSymbol ==="sqrt" & num3Null === true) {
		console.log(Math.sqrt(num1));
		console.log(Math.sqrt(num2));
	}else if (mathSymbol === "sqrt" & num3Null === false) {
		console.log(Math.sqrt(num1));
		console.log(Math.sqrt(num2));
		console.log(Math.sqrt(num3));
	}

	//Exponents logic

	if (mathSymbol.includes ("^") &num3Null === false) {
		strSplit = String(mathSymbol);
		powerArray = strSplit.split('^');
		power = Number(powerArray[1]);
		console.log(Math.pow(num1, power));
		console.log(Math.pow(num2, power));
		console.log(Math.pow(num3,power));
	} else if (mathSymbol.includes ("^") &num3Null === true) {
		strSplit = String(mathSymbol);
		powerArray = strSplit.split('^');
		power = Number(powerArray[1]);
		console.log(Math.pow(num1, power));
		console.log(Math.pow(num2, power));
	} else if (mathSymbol.includes ("^") &num2Null === true) {
		strSplit = String(mathSymbol);
		powerArray = strSplit.split('^');
		power = Number(powerArray[1]);
		console.log(Math.pow(num1, power));
		console.log(Math.pow(num3, power));
	} else if (mathSymbol.includes ("^") &num1Null === true) {
		strSplit = String(mathSymbol);
		powerArray = strSplit.split('^');
		power = Number(powerArray[1]);
		console.log(Math.pow(num2, power));
		console.log(Math.pow(num3, power));
	}
	// Calculator still has troubles when the 3rd operand is undefined due to no 'space' after 2nd operand
	// It performs the calculation, just outputs an empty NaN answer only when there is no 'space' after 2nd operand
	// This line closes the connection to the command line interface.
	reader.close()

});
