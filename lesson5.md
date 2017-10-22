# Example

```javascript
function reverseString(reverseMe) {
	var reversed = "";
	for (var i = reverseMe.length - 1; i >= 0; i--) {
		reversed += reverseMe[i];
	}
	return reversed;
}


console.log(reverseString("Julia"));
```

Returns "ailuJ"

```javascript
function sayHello() {
	var message = "Hello!"
	console.log(message);
}
```

-- doesn't "print" anything on the console

```javascript
function sayHello() {
	var message = "Hello!";
	return message;
}

console.log(sayHello());
```

# Parameters vs. Arguments

parameter - always a variable name and appears in the function declaration

argument - always a value (any of the JavaScript data types, a number, string, a boolean, etc.) and always appear in the code when th fucntion is called or invoked

```
function findAverage(x, y) {
	var answer = (x + y) / 2;
	return answer;
}

var avg = findAverage(5, 9);
```

- returns 7
- x and y are parameters
- 5 and 9 are arguments

## Summary


Functions package up code so you can easily use (and reuse) a block of code. Parameters are variables that are used to store the data that's passed into a function for the function to use. Arguments are the actual data that's passed into a function when it is invoked:
```javascript
// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);
```
The function body is enclosed inside curly brackets:
```javascript
function add(x, y) {
  // function body!
}

// Return statements explicitly make your function return a value:

return sum;
````
You invoke or call a function to have it do something:
```
add(1, 2);
```
Returns: 3

## Quiz: Laugh it off 1 (5-1)

Declare a function called `laugh()` that returns `"hahahahahahahahahaha!"`. Print the value returned from the laugh() function to the console.

[Code](5-1_laugh_it_off.js)

## QuizL Laugh it of 2 (5-2)

Write a function `laugh()` that takes one parameter, `num`  that represents the number of "ha"s to return.

[Code](5-2_laugh_it_off.js)

# Return Values

```javascript
function isPrime(integer) {
	for (var x = 2; x < integer; x++) {
		if (integer % x === 0) {
			console.log(integer + " is divisible by " + x);
		}
			return false;
	}
	return true;
}
```

# Scopes

- global scope
- function scope

# Shadowing / Scope Overwriting

```
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
	bookTitle = "The Little Prince";
	console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);
```

> "Le Petit Prince"
> "The Little Prince"
> "The Little Prince"

--> The variable is replaced by the last assignment

However:
```
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
	var bookTitle = "The Little Prince";
	console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);
```

> "Le Petit Prince"
> "The Little Prince"
> "Le Petit Prince"

```
var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
```

will print out 4.

```
var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
```

will print out 2!

# Using global variables

Using global variables
So you might be wondering:

"Why wouldn't I always use global variables? Then, I would never need to use function arguments since ALL my functions would have access to EVERYTHING!"
Well... Global variables might seem like a convenient idea at first, especially when you're writing small scripts and programs, but there are many reasons why you shouldn't use them unless you have to. For instance, global variables can conflict with other global variables of the same name. Once your programs get larger and larger, it'll get harder and harder to keep track and prevent this from happening.

There are also other reasons you'll learn more about in more advanced courses. But for now, just work on minimizing the use of global variables as much as possible.

**What you've learned so far:**

If an identifier is declared in global scope, it's available everywhere.
If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.

# Hoisting

- calling a function before being declared
- all function declaration are "hoisted" to the top of their current scope, before any JavaScript is executed

ex:

```javascript
findAverage(5, 9);

function findAverage(x, y) {
	var answer = (x + y) / 2;
	return answer;
}
```

-also apply in variable declarations:

```javascript
function sayGreeting() {
	console.log(greeting);
}

sayGreeting();
```

-- results into error (reference error)

```javascript
function sayGreeting() {
  console.log(greeting);
  var greeting = "hello";
}

sayGreeting();
```

--> undefined

```javascript
function sayGreeting() {
  var greeting = "hello";
  console.log(greeting);
}

sayGreeting();
```

--> hello

# Quiz: Build a Triangle (5-3)

Create a function called `buildTriangle()` that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. 

[Code](5-3_build_a_triangle.js)




