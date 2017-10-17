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
