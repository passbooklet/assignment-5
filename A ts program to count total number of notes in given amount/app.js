var amount = prompt("please enter you amount");
var amount0 = parseInt(amount);
console.log("your value is", amount);
while (amount0 > 0) {
    if (amount0 >= 2000) {
        console.log("no of 2000 notes", amount0 / 2000);
        amount0 = amount0 % 2000;
    }
    else if (amount0 >= 500) {
        console.log("no of 500 notes", amount0 / 500);
        amount0 = amount0 % 500;
    }
    else if (amount0 >= 200) {
        console.log("no of 200 notes", amount0 / 200);
        amount0 = amount0 % 200;
    }
    else if (amount0 >= 100) {
        console.log("no of 100 notes", amount0 / 100);
        amount0 = amount0 % 100;
    }
    else if (amount0 >= 50) {
        console.log("no of 50 notes", amount0 / 50);
        amount0 = amount0 % 50;
    }
    else if (amount0 >= 20) {
        console.log("no of 20 notes", amount0 / 20);
        amount0 = amount0 % 50;
    }
    else if (amount0 >= 10) {
        console.log("no of 10 notes", amount0 / 10);
        amount0 = amount0 % 10;
    }
    else if (amount0 >= 5) {
        console.log("no of 5 notes", amount0 / 5);
        amount0 = amount0 % 5;
    }
    else if (amount0 >= 2) {
        console.log("no of 2 notes", amount0 / 2);
        amount0 = amount0 % 2;
    }
    else if (amount0 >= 1) {
        console.log("no of 1 notes", amount0 / 1);
        amount0 = amount0 % 1;
    }
}
