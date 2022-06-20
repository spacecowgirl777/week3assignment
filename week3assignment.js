//create ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//programatically subtract
a = ages[ages.length-1] - ages[0]
console.log(a);

//check if dynamic
ages.push(49);
a = ages[ages.length-1] - ages[0]
console.log(a);

//average age loop
var total = 0;
for (var i = 0; i<=ages.length; i++) {
    value = ages[i]
    total = total + value;
    if (i == ages.length-1) {
        console.log(total/ages.length);
    }
}

//create names array
let names = ["Sam","Tommy", "Tim", "Sally", "Buck", "Bob"];

//avg letters per name
let lengths = names.map(function(element) {
    return element.length
});
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum/names.length);

//concatenate names
console.log(names.join(" "));

//creating new array nameLengths
let nameLengths =  [];
for (var i = 0; i<=names.length; i++) {
    nameLengths = names.map(element => element.length);
}

//summing nameLengths
var sumLengths = 0;
for (var i = 0; i<=nameLengths.length; i++) {
    sum = nameLengths[i];
    sumLengths = sumLengths + sum;
    if (i == nameLengths.length-1) {
        console.log(sumLengths);
    }

}

//concatenating function
var repeat = "";
function concat(word,n) {
    for (var i=1; i<=n; i++) {
        repeat = repeat + word;
    }
    return repeat;
}

//full name function
function fullName(firstName,lastName) {
    return (firstName + " " + lastName);
}

//checking array sum function
function checkSum(...array) {
    var holder=0;
    for (var i=0; i<array.length; i++) {
        holder += parseInt(array[i]);
    }
    if (holder>100) {
        return true;
    } else {
        return false; 
    }
}

//returning average function
function giveAverage(...array) {
    var holder=0;
    for (var i=0; i<array.length; i++ ) {
        holder += parseInt(array[i]);
    }
    return holder/array.length;
}

//comparing averages function
function compareAverage(array,array2){
    var holder=0;
    var holder2=0;
    for (var i=0; i<array.length; i++) {
        holder += parseInt(array[i]);
    }
    for (var i=0; i<array2.length; i++) {
        holder2 += parseInt(array2[i]);
    }
    avg1 = holder/array.length;
    avg2 = holder2/array2.length;
    if (avg1 > avg2) {
        return true;
    } else {
        return false;
    }
}

//buying drink function
function willBuyDrink(isHotOutside,moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

//function to check inventory, passes array of wine bottle inventory and returns if any is out of stock
function checkBottles(...array) {
    for (var i=0; i<array.length; i++) {
        if (array[i] == 0) {
            return "Missing bottles, check inventory";
        }
    }
    return "Everything in stock!"
    
}



 

