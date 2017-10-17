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

