# Objects

Example:

```javascript
var umbrella = {
	color: "pink", 
	isOpen: false,
	open: function() {
		if (umbrella.isOpen === true) {
			return "The umbrella is already opened!";
		} else {
			umbrella.isOpen = true;
			return "Julia opens the umbrella"
		}
}
}
```

Determining the type of data:
```
typeof "hell0" // returns "string"
typeof true // returns "boolean"
typeof [1,2,3] // returns "object" (arrays are a type of object)
typeof function hello() {} // returns "function"
```

# Quiz: Umbrella (7-1)

Create the close() method below:

```javascript
var umbrella = {
	color: "pink",
	isOpen: false,
	open: function() {
		if (umbrella.isOpen === true) {
			return "The umbrella is already opened!";
		} else {
			umbrella.isOpen = true;
			return "Julia opens the umbrella!";
		}
	}
	close: function() {
		if (umbrella.isOpen === false) {
			return "The umbrella is already closed!";
		} else {
			umbrella.isOpen = false;
			return "Julia closes the umbrella!";
		}
	}
};
```

# Objects

Primitive datatypes: strings, numbers, booleans, undefined, null

Objects - a data structure in JavaScript that lets you store data about a particular thing, and helps you keep track of that data using a "key"

Example:

```
var sister = {
	name: "Sarah",
	age: 23,
	parents: ["Alice", "Andy"],
	siblings: ["Julia"],
	favoriteColor: "purple",
	pets: true
};
```

## Object-literal notation

The syntax above is called object-literal notation. There are some important things you need to remember when you're structuring an object literal:

- The "key" (representing a property or method name) and its "value" are separated from each other by a colon
- The key: value pairs are separated from each other by commas
- The entire object is wrapped inside curly braces { }.

And, kind of like how you can look up a word in the dictionary to find its definition, the key in a key:value pair allows you to look up a piece of information about an object. Here's are a couple examples of how you can retrieve information about my sister's parents using the object you created.
```
// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]
```
Using sister["parents"] is called bracket notation (because of the brackets!) and using sister.parents is called dot notation (because of the dot!).

## Methods

```
var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture(); // returns "Sarah paints!"

sister.name // returns "Sarah"
```

## Naming Conventions

- avoid using number as first letter of key.
- avoid spaces and hypens - also don't work in using dot notations

Camelcasing is more appropriate to use in naming properties.

Example:

```
var user = {
  email: "user@example.com",
  firstName: "first",
  lastName: "last"
};

// To access email propery:

console.log(user.email);
console.log(user["email"])

```

# Quiz: Bank Accounts (7-3)

```javascript
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
  printAccountBalance: function() {
  	return ("Your balance is currently $" + savingsAccount["balance"] + " and your interest rate is " + savingsAccount["interestRatePercent"]) + "%.");
  }
};


