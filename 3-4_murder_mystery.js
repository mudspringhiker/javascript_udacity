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
