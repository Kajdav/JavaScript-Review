	var threeItems = [1,2,3];
	//create a function named 'last' that returns the last item from 'threeItems'
	//alert the result of your function

	var last = function(array) {
		var last = array.length - 1;
		return array[last];
	}
	alert(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

function makeComplete(array) {
	for(var i = 0; i < array.length; i++) {
		if (i !== array[i]) {
			array.splice(i, 0, i)
		}
	}
}
makeComplete(dicedArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function removeOdds(array) {
	for(var i = 0; i < array.length; i++) {
		if(array[i] % 2 !== 0) {
			array.splice(i, 1);
			i--;
		}
	}
}
removeOdds(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
function randomTest(array) {
    var randomNumber = getRandomArbitrary();
    var test = false;
    for (var i = 0; i < array.length; i++) {
        if (randomNumber === array[i]) {
            alert(true);
            test = true;
        }
    }
    if (test === false) {
        alert(false);
    }
}
randomTest(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;
second = first.slice(0);
second.push(6, 7);
alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(string) {
    var longest;
    var length = 0;
    var stringToArray = string.split(" ");
    for (var i = 0; i < stringToArray.length; i++) {
        if (stringToArray[i].length > length) {
            length = stringToArray[i].length;
            longest = stringToArray[i];
        }
    }
    return longest;
}
alert(longest(sentence));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capital(string) {
	var stringToArray = string.split(" ");
	for(var i = 0; i < stringToArray.length; i++) {
		stringToArray[i] = stringToArray[i].charAt(0).toUpperCase() + stringToArray[i].slice(1)
	}
	myPoem = stringToArray.join(" ");
}
capital(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(string) {
	var counter = 0;
	for(var i = 0; i < string.length; i++) {
		if ("aeiou".indexOf(string[i]) != -1) {
			counter++;
		}
	}
	return counter;
}
alert(vowelCounter(theOdyssey));