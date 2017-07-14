/*
Filename:	calculator.js
Description:	performs the behind-the-scenes operations
*/


/*
Object:		customFunction
Description:	allows user to create their own functions
		which are combinations of other functions.
		equation is stored through an array
		Example declaration: var name = new customFunction (expression);
*/
function customFunction (expression, createdByUser) = {
	this.createdByUser = createByUser || false;
	this.evaluate =  function () {};
	this.delete = function () {functions.splice (this.index, 1);};
	this.functions = convertToArray (expression);
	
	// add to list of functions
	functions.push (this);
	this.index = functions.length - 1;
};

// converts a written composition of functions into
// an array of functions
// no numbers involved (just functions)
var convertToArray = function (expression) {
	
}

/*
Predefined Basic Operations
*/
var add = function (a, b) {return a+b;}
var subtract = function (a, b) {return a-b;}
var multiply = function (a, b) {return a*b;}
var divide = function (a, b) {return a/b;}
var exponent = function (a, b) {return Math.pow (a, b);}
var absoluteValue = function (a) {return Math.abs (a);}
var sine = function (a, radians) {return Math.sin (a * (radians ? 1 : Math.PI / 90));}
var cosine = function (a, radians) {return Math.cos (a * (radians ? 1 : Math.PI / 90));}
var logarithm = function (base, a) {return Math.log (a) / Math.log (base);}
var factorial = function (a, ignored) {
	// incorrect input
	if (a % 1 != 0 || a <= 0)
		return -1; // to be dealt with else where
	if (a < 2)
		return 1;
	return a * factorial (a-1, ignored);
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
	logarithm,
	customFunction
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

