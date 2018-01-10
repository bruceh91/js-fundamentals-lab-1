
let myName = "Bruce";
const NumOfStates = 50;
let sum = 5 + 4;


// if first initial is after 'L' send to end of line
function lineOrder(myName) {
    if (myName.charCodeAt(0) > 76) {
        alert("Back of the  line!");
    } else {
        alert("Next!");
    }
}

lineOrder(myName);

// pop-up 'Hello World!'
function sayHello() {
    alert("Hello World!");
}

sayHello();



// age gate for page
function checkAge(name, age) {
    if (age <= 20) {
        alert("Sorry " + name + " , you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);




// logs my favorite vegitables
let favVeggies = ["broccolli", "brussel-sprouts", "carrots", "onions"];

function showVeggies(favVeggies) {
    for (let i = 0; i < favVeggies.length; i++) {
        console.log(favVeggies[i]);
    }
}

showVeggies(favVeggies);


// tells if person in array can drink
let nameAgeArr = [{ name: "john", age: 14 }, { name: "jill", age: 19 }, { name: "jack", age: 21 }, { name: "jessica", age: 26 }, { name: "jay", age: 50 }]

function canLegallyDrink(nameAgeArr) {
    tempArr = [];
    for (let i = 0; i < nameAgeArr.length; i++) {
        tempVal = checkAge(nameAgeArr[i].name , nameAgeArr[i].age)
        tempArr.push(tempVal);
    }
    console.log(tempArr);
}

canLegallyDrink(nameAgeArr);



//count characters in given word
let word = "blahhh"

function getLength(word) {
    let tempArr = word.split("");
    console.log(tempArr.length);
    return (tempArr.length);
}

getLength(word);


// tells if given word has even or odd number of chars
let hi = getLength("Hello World!");

function isEvenLength(wordLength) {
    if (wordLength % 2 == 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}

isEvenLength(hi);

