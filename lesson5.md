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















