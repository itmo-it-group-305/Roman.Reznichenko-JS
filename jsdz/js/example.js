/**
 * Created by romanreznicenko on 19.11.15.
 */

    var age = window.prompt("Enter your age");

    if (age > 0 && age < 10) {
        console.log("You're kid");
    }
    else if (age > 10 && age < 18){
        console.log("You're teenager");
    }
    else if (age > 18 && age <25){
        console.log("You're young adult");
    }
    else if (age > 25 && age < 65){
        console.log("You're adult");
    }
    else if (age > 65 && age < 130){
        console.log("Your're renter");
    }

    var ageNew = 18;
    var bool = (ageNew >= 18)?("ok"):("not-ok");
    console.log(bool);