var month = prompt("please enter the month (please enter the first word only capital & write the full name )");
console.log("month is", month);
if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
    console.log("month of days are 31");
}
else if (month == "April" || month == "June" || month == "May" || month == "	September" || month == "November") {
    console.log("month of days are 30");
}
else {
    console.log("month of days are 28 or 29");
}
