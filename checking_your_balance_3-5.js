/* https://classroom.udacity.com/courses/ud803/lessons/3ace947b-b5f6-40c1-bc11-3ec98fd1d936/concepts/03d8062f-6e1f-4f79-86e5-f49cde75e36d
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
	if (isActive && balance > 0) {
		console.log("Your balance is $" + balance.toFixed(2) + ".");
	} else if (!isActive) {
		console.log("Your account is no longer active.");
	} else if (balance === 0) {
		console.log("Your account is empty.");
	} else {console.log("Your balance is negative. Please contact bank.");
}
} else {console.log("Thank you. Have a nice day!");
	}