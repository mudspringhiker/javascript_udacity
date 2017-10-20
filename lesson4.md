# Loops

## Parts of a While Loop

1. When to start (define starting value of a variable, for example.)
2. When to stop (logical condition to test whether the loop should continue)
3. How to get to the next item: (incrementing or decrementing)

Example

```javascript
var start = 0; // when to start
while (start < 10) { //when to stop
	console.log(start);
	start = start + 2; // how to get to the next item
}
```

> Prints
> 0
> 2
> 4
> 6
> 8

Never ending loops happen when there stop condition is missing. For example:

```javascript
// Don't run this code!
while (true) {
	console.log("true is never false, so I will never stop!");
}
```

## Quiz: JuliaJames (4-1)

*Based on FizzBuzz*

Write a while loop that:

- Loop through the numbers 1 to 20
- If the number is divisible by 3, print "Julia"
- If the number is divisible by 5, print "James"
- If the number is divisible by 3 and 5, print "JuliaJames"
- If the number is not divisible by 3 or 5, print the number

[Answer](4-1_juliajames.js)

## Quiz: 99 Bottles of Juice (4-2)

Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

```
99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
```
Some Notes:

Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
Your text editor may try to autocorrect your ellipses ... to the ellipses character … Do not use the ellipses character for this quiz.

[Answer](4-2_99_bottles_of_juice.js)

## Quiz: Countdown, Liftoff! (4-3)

Write a while loop that counts down from 60 seconds and:
- if there's a task to be completed, it prints out the task
- if there is no task being completed, it prints out the time as T-x seconds

Output should look like:
```
T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
```

[Code](4-3_countdown_liftoff.js)

# For Loops

Example:
```javascipt
for (var i = 0; i < 6; i = i + 1) {
	console.log("Printing out i = " + i);
}
```

The for loop explicitly forces you to define the start point, stop point, and each step of the loop. In fact, you'll get an Uncaught SyntaxError: Unexpected token ) if you leave out any of the three required pieces.

```javascript
for ( start; stop; step ) {
	// do this thing
}
```

## Nested Loops

Example:
```javascript
for (var x = 0; x < 5; x = x + 1) {
	for (var y = 0; y < 3; y = y + 1) {
		console.log(x + "," + y);
	}
}
```
```
Prints:
0, 0
0, 1
0, 2
1, 0
1, 1
1, 2
2, 0
2, 1
2, 2
3, 0
3, 1
3, 2
4, 0
4, 1
4, 2
```

# Increment and decrement

Shortcuts for doing arithmetic:

```
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
```


## Quiz: Changing the Loop (4-4)

[Code](4-4_changing_the_loop.js)

## Quiz: Fix the error 1 (4-5)

Here is a for loop that's supposed to print the numbers 5 through 0. Fix the error!

```javascript
for (x < 10; x++) {
	console.log(x);
}
```

[Code](4-5_fix_the_error.js)

## Quiz: Fix the error 2 (4-6)

The for loop below has an error. Fix it!

```javascript
for (var k = 0 k < 200 k+++) {
	console.log(k);
}
```

[Code](4-6_fix_the_error.js)








