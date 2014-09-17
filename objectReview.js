//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThing = {
  band: "The Beatles",
  food: "Sushi",
  person: "Jason",
  book: "Enders Game",
  movie: "The Restoration",
  holiday: "Christmas"
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

 favoriteThing.car = "Subaru Impreza";
 favoriteThing["Brand"] = "Sans Nam";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThing.food = 'Lettuce';
favoriteThing['book'] = '50 ways of yuck';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThing.person);
alert(favoriteThing.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.
for (key in user) {
    if (!user[key]) {
        delete user[key];
    }
}

//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Jacob Turner';
user.username = 'j.israel.turner';

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = [];

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {
  alert('Hello!');
}
methodCollection.logHello = function() {
  console.log('Hello!');
}

//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler(string) {
  var counter = 0;
  var vowelObject = [];
  for(var i = 0; i < string.length; i++) {
    if ("aeiou".indexOf(string[i]) != -1) {
      vowelObject[string[i]] = {};
      vowelObject[string[i]] = string.split(string[i]).length-1;
    }
  }
  return vowelObject;
}