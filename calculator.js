/*
Filename:		calculator.js
Description:	performs the behind-the-scenes operations
*/


/*
Object:			customFunction
Description:	allows user to create their own functions
				which are combinations of other functions.
				equation is stored through an array
*/
var customFunction = {
	//type: value,
	functions: [],
	createdByUser: false,
	evalute: function () {}
};


var add = function (a, b) {
	return a+b;
}

var subtract = function (a, b) {
	return a-b;
}

var multiply = function (a, b) {
	return a*b;
}

var divide = function (a, b) {

}

var factorial = function (a, ignored) {
	if (a % 1 != 0)
		return -1;
	return a * factorial (a-1, ignored);
}

var exponent = function (a, b) {
	return Math.pow (a, b);
}

var absoluteValue = function (a) {
	return Math.abs (a);
}

var sine = function (a, radians) {
	return Math.sin (a * (radians ? 1 : Math.PI / 90)); 
}

var cosine = function (a, radians) {
	return Math.cos (a * (radians ? 1 : Math.PI / 90));
}

var logarithm = function (base, a) {
	return Math.log (a) / Math.log (base);
}
var functions = [
	add,
	subtract,
	multiply,
	divide,
	factorial,
	exponent,
	absoluteValue,
	sine,
	cosine,
	logarithm
];


/*
Function:		adjustExpression
Description:	standardizes the expression from human input
				to a more simplistic version
				ie, sqrt() is converted to () ^ 0.5 because
				the ^ operation is already defined. This eliminates
				the need for a separate sqrt() function to be defined
*/
var adjustExpression = function (expression) {
	
}


/*
Function:		calculate
Description:	utilizes a stack to contain the expression
				pops through the stack and pushes to a new stack
				in order to evaluate the expression
*/
var calculate = function (expression) {
	
}

