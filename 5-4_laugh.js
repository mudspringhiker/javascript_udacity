/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(max) {
    var text = "";
    for (var i = 1; i <= max; i++) {
        text += "ha";
    }
    text += "!";
    return text;
};

console.log(laugh(10));
