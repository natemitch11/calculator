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

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);
	console.log('num3', num3);

	if (mathSymbol === "+") {
		console.log(num1 + num2 + num3);
	}
	if (mathSymbol === "-" ) {
		console.log(num1 - num2 - num3);
	}
	if (mathSymbol === "/") {
		console.log(num1 / num2 / num3);
	}
	if (mathSymbol === "*") {
		console.log(num1 * num2 * num3);
	}
	if (mathSymbol === "mod"){
		console.log(num1 % num2);
		console.log(num2 % num3);
	}
	if (mathSymbol === "sqrt") {
		console.log(Math.sqrt(num1));
		console.log(Math.sqrt(num2));
		console.lot(Math.sqrt(num3));
	} 
	if (mathSymbol === "^2") {
		console.log(Math.pow(num1,2));
		console.log(Math.pow(num2,2));
		console.log(Math.pow(num3,2));
	} 
	if 
		(mathSymbol === "^3") {
		console.log(Math.pow(num1,3));
		console.log(Math.pow(num2,3));
		console.log(Math.pow(num3,3));
	
	} if (mathSymbol !== "+", "-", "/", "*", "^2", "^3", "mod") {
		strSplit = String(mathSymbol);
		abc = strSplit.split('');
		power = Number(abc[1])
		console.log(Math.pow(num1, power));
		console.log(Math.pow(num2, power));
		console.log(Math.pow(num3,power));

	}
	

	// This line closes the connection to the command line interface.
	reader.close()

});
