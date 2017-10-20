var price = 15.00; // price of hammer
var money = 20.00; // how much money i have

if(money >= price) {
	console.log("buy the hammer")
} else {
	console.log("don't buy the hammer")
}

If...else statements
If...else statements allow you to execute certain pieces of code based on a condition, or set of conditions, being met.
```
if (/* this expression is true */) {
  // run this code
} else {
  // run this code
}
```
This is extremely helpful because it allows you to choose which piece of code you want to run based on the result of an expression. For example,
```
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}
```

Prints: "a is less than or equal to b"
A couple of important things to notice about if...else statements.

The value inside the if statement is always converted to true or false. Depending on the value, the code inside the if statement is run or the code inside the else statement is run, but not both. The code inside the if and else statements are surrounded by curly braces {...} to separate the conditions and indicate which code should be run.

TIP: When coding, sometimes you may only want to use an if statement. However, if you try to use only an else statement, then you will receive the error SyntaxError: Unexpected token else. You’ll see this error because else statements need an if statement in order to work. You can’t have an else statement without first having an if statement.

n some situations, two conditionals aren’t enough. Consider the following situation.

You're trying to decide what to wear tomorrow. If it is going to snow, then you’ll want to wear a coat. If it's not going to snow and it's going to rain, then you’ll want to wear a jacket. And if it's not going to snow or rain, then you’ll just wear what you have on.

![](what-to-wear-cropped.jpg)

Else if statements
In JavaScript, you can represent this secondary check by using an extra if statement called an else if statement.

```
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}
```

Prints: Wear what you have on.
By adding the extra else if statement, you're adding an extra conditional statement.

If it’s not going to snow, then the code will jump to the else if statement to see if it’s going to rain. If it’s not going to rain, then the code will jump to the else statement.

The else statement essentially acts as the "default" condition in case all the other if statements are false.

Quiz:

```
var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}
```

```
/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if (/* your conditional goes here */) {
    
} else {

}

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 20;

// your code goes here
if (musicians <=  0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}
```


```
/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
    var weapon = "knife";
    if (suspect === "Mr. Parkes") {
        var solved = true;
    } else {console.log("Mystery is not solved.");
    }
} else if (room === "gallery") {
    var weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        var solved = true;
    } else {console.log("Mystery is not solved.");
    }
} else if (room === "ballroom") {
    var weapon = "poison";
    if  (suspect === "Mr. Kalehoff") {
        var solved = true;
    } else {console.log("Mystery is not solved.");
    }
} else if (room === "billiards room") {
    var weapon = "pool stick";
    if  (suspect === "Mrs. Sparr") {
        var solved = true;
    } else {console.log("Mystery is not solved.");
    }
} else {console.log("Mystery is not solved.");
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
```

# Logical Operators

```
var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}
```

The `&&` symbol is the logical AND operator and it is used to combine two logical expressions into one larger logical expression. If both samller expressions are tue, then the netires exression evaluates to true. It either one of the samller expressions is false, thent he whole logicla expression is false.

## Logical expressions

- similar to mathematical expressions, except logical expressions evaluate to true or false.

```
11 != 12
```

- returns true


|Operator | Meaning | Example | How it works |
|----|-----|-----|-----|
| && | Logical AND | `value1 && value2` | Returns `true` if both `value1` and `value2` evaluate to `true`. |
|  | Logical OR | `value1  value2` | Returns `true` if either `value1` and `value2` (or even both!) evaluate to `true`.|
| ! | Logical NOT | `!value1` | Returns the opposite of `value1`. If `value1` is `true`, then `!value1` is `false`. |


Code before:
```
var colt = "not busy";
var weather = "nice";

if (colt === "not busy") {
  if (weather === "nice") {
    console.log("go to the park");
  }
}
```

TIP: Logical expressions are evaluated from left to right. Similar to mathematical expressions, logical expressions can also use parentheses to signify parts of the expression that should be evaluated first.

Q1L

```
!(4 === 4) && "STRing" === "STRing"
```
- returns false

### Quiz 3-5 Checking your Balance

Using the flowchart below, write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console.

Use the following variables in your solution:

balance - the account balance
isActive - if account is active
checkBalance - if you want to check balance
Hint: The variable balance could be a value less than, greater than, or equal to 0. The variables isActive and checkBalance are booleans that can be set to true or false.

TIP: To print out the account balance with decimal points (i.e. 325.00), use the .toFixed() method and pass it the number of decimal points you want to use. For example, balance.toFixed(2) returns 325.00.
TIP: Make sure to test your code with different values. For example,

If checkBalance equals true and isActive equals false, then Your account is no longer active. should be printed to the console.

![](check-your-balance-flowchart.png)

[Answer](checking_your_balance_3-5.js)

### Quiz 3-6 Ice Cream

Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:

- if flavor is set to vanilla or chocolate and
- if vessel is set to cone or bowl and
- if toppings is set to springkles or peanuts

If the above conditions are true, then print out:

`I'd like two scoops of ___ ice cream in a __ with ___.`

Tips: Make sure to test your code with different values.

[Answer](ice_cream_3-6.js)

### Quiz: What do I Wear? (3-7)

Use the sizing chart, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...
```
var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)
```
Then print L to the console.

Hint: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve. For example, if the shirt's width is at least 20", but no more than 22", then the t-shirt should be medium (M) — as long as the other values for the shirt's length and sleeve measurements match up.

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print N/A to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

TIP: Make sure to test your code with different values. For example,

If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21, then S should be printed to the console.
If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63, then 2XL should be printed to the console.
If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47, then N/A should be printed to the console.

[Answer](3-7_what_do_i_wear.js)

# Truthy and Falsy

Every value in JavaScript has an inherent boolean value. When that value is evaluated in the context of a boolean expression, the value will be transformed into that inherent boolean value.

## Falsy values

A value is falsy if it converts to false when evaluated in a boolean context. For example, an empty String "" is falsy because, "" evaluates to false. You already know if...else statements, so let's use them to test the truthy-ness of "".
```
if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
```

Returns: "the value is falsy"

Here’s the list of all of the falsy values:
- the Boolean value false
- the null type
- the undefined type
- the number 0
- the empty string ""
- the odd value NaN (stands for "not a number", check out the NaN MDN article)

That's right, there are only six falsy values in all of JavaScript!

## Truthy values
A value is truthy if it converts to true when evaluated in a boolean context. For example, the number 1 is truthy because, 1 evaluates to true. Let's use an if...else statement again to test this out:

```
if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
```
Returns: "the value is truthy"
Here are some other examples of truthy values:

- true
- 42
- "pizza"
- "0"
- "null"
- "undefined"
- {}
- []

Essentially, if it's not in the list of falsy values, then it's truthy!

# Ternary Operators

Sometimes, you might find yourself with the following type of conditional.
```
var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);
```

Prints: "green"

In this example, the variable color is being assigned to either "green" or "red" based on the value of isGoing. This code works, but it’s a rather lengthy way for assigning a value to a variable. Thankfully, in JavaScript there’s another way.

TIP: Using if(isGoing) is the same as using if(isGoing === true). Alternatively, using if(!isGoing) is the same as using if(isGoing === false).

## Ternary operator

The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.
```
conditional ? (if condition is true) : (if condition is false)
```

To use the ternary operator, first provide a conditional statement on the left-side of the ?. Then, between the ? and : write the code that would run if the condition is true and on the right-hand side of the : write the code that would run if the condition is false. For example, you can rewrite the example code above as:

```
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);
```
Prints: "green"
This code not only replaces the conditional, but it also handles the variable assignment for color.

If you breakdown the code, the condition isGoing is placed on the left side of the ?. Then, the first expression, after the ?, is what will be run if the condition is true and the second expression after the, :, is what will be run if the condition is false.

### Quiz question

What will be printed to the console if the following code is run:

```
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");
```

"It will cost $40 to attend the concert. Pick up your tickets at the will call."

# Quiz: Navigating the food chain (3-8)

From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.

- Animals that eat only plants are called herbivores
- Animals that eat only other animals are called carnivores
- Animals that eat both plants and animals are called omnivores

Directions:

Write a series of ternary statements that sets the variable category equal to:

- "herbivore" if an animal eats plants
- "carnivore" if an animal eats animals
- "omnivore" if an animal eats plants and animals
- undefined if an animal doesn't eat plants or animals

Use the eatsPlants and eatsAnimals variables to test your code.

TIP: Make sure to test your code with different values. For example,

If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console.

[Answer](3-8_navigating_the_food_chain.js)

# Switch Statement

- another way to chain multiple `else if` statements that are based on the same value without using conditional statements. Instead, you just switch which piece of code is run based on a value.

```javascript
if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}
```

```javascript
switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");

}
```

*Falling-through* happens in case where `break` is not used.

Here, falling-throuh is prevented:

```javascript
switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
}
```

`break` is not needed in the last case.

Case where falling-through is used:

```javascript
var tier = "nsfw deck";
var output = "You'll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
```

Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.

Note: You can add a default case to a switch statement and it will be executed when none of the values match the value of the switch expression.

## Quiz: Back to School (3-9)

[Answer](3-9_back_to_school.js)

```
no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
```

Directions:

Write a switch statement to set the average salary of a person based on their type of completed education.

Afterwards, print the following to the console.

`In 2015, a person with __________ earned an average of __________/year.`

Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement. For help, refer to the findings above.

`In 2015, a person with a Bachelor's degree earned an average of $59,124/year.`

TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").

TIP: Make sure to test your code with different values. For example,

If education equals "an Associate's degree", then In 2015, a person with an Associate's degree earned an average of $41,496/year. should be printed to the console.
