"use strict";
// Personal Message
// Start of question 1
const userName1 = "Ghayour";
console.log(`Answer 1: Hello ${userName1}, would you like to learn some Python today?`);
// End of question 1
// Name Cases
// Start of question 2
const personName2 = "Ghayour Rafiq";
console.log(`Answer 2: Lowercase: ${personName2.toLowerCase()}`);
console.log(`Answer 2: Uppercase: ${personName2.toUpperCase()}`);
console.log(`Answer 2: Titlecase: ${personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase()}`);
// End of question 2
// Famous Quote
// Start of question 3
const quote3 = "A person who never made a mistake never tried anything new.";
const author3 = "Albert Einstein";
console.log(`Answer 3: ${author3} once said, "${quote3}"`);
// End of question 3
// Famous Quote 2
// Start of question 4
const famousPerson4 = "Albert Einstein";
const message4 = `${famousPerson4} once said, "${quote3}"`;
console.log(`Answer 4: ${message4}`);
// End of question 4
// Stripping Names
// Start of question 5
const personNameWithWhitespace5 = "\t\t John Doe \n";
console.log(`Answer 5: With whitespace: ${personNameWithWhitespace5}`);
console.log(`Answer 5: Stripped whitespace: ${personNameWithWhitespace5.trim()}`);
// End of question 5
// Number Eight
// Start of question 6
console.log(`Answer 6: ${5 + 3}`);
console.log(`Answer 6: ${10 - 2}`);
console.log(`Answer 6: ${4 * 2}`);
console.log(`Answer 6: ${16 / 2}`);
// End of question 6
// Favorite Number
// Start of question 7
const favoriteNumber7 = 8;
console.log(`Answer 7: My favorite number is ${favoriteNumber7}.`);
// End of question 7
// Adding Comments
// Start of question 8
// Program to print personal message
console.log(`Answer 8: Hello ${personName2}, would you like to learn some Python today?`);
// Program to convert name to lowercase, uppercase, and titlecase
console.log(`Answer 8: Lowercase: ${personName2.toLowerCase()}`);
console.log(`Answer 8: Uppercase: ${personName2.toUpperCase()}`);
console.log(`Answer 8: Titlecase: ${personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase()}`);
// End of question 8
// Names
// Start of question 9
const names9 = ["Alice", "Bob", "Charlie"];
names9.forEach((name, index) => console.log(`Answer 9-${index + 1}: ${name}`));
// End of question 9
// Greetings
// Start of question 10
const greeting10 = "Hello";
names9.forEach(name => console.log(`Answer 10: ${greeting10}, ${name}!`));
// End of question 10
// Your Own Array
// Start of question 11
const vehicles11 = ["car", "motorcycle", "bicycle"];
vehicles11.forEach((vehicle, index) => console.log(`Answer 11-${index + 1}: I would like to own a ${vehicle}.`));
// End of question 11
// Guest List
// Start of question 12
const guests12 = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
guests12.forEach((guest, index) => console.log(`Answer 12-${index + 1}: Dear ${guest}, you are invited to dinner.`));
// End of question 12
// Changing Guest List
// Start of question 13
console.log("Answer 13: Unfortunately, Albert Einstein can't make it to dinner.");
guests12[0] = "Nikola Tesla";
guests12.forEach((guest, index) => console.log(`Answer 13-${index + 1}: Dear ${guest}, you are invited to dinner.`));
// End of question 13
// More Guests
// Start of question 14
console.log("Answer 14: Good news! We found a bigger dinner table.");
guests12.unshift("Leonardo da Vinci");
guests12.splice(Math.floor(guests12.length / 2), 0, "Galileo Galilei");
guests12.push("Ada Lovelace");
guests12.forEach((guest, index) => console.log(`Answer 14-${index + 1}: Dear ${guest}, you are invited to dinner.`));
// End of question 14
// Shrinking Guest List
// Start of question 15
console.log("Answer 15: Unfortunately, the new dinner table won't arrive in time.");
console.log("Answer 15: We can only invite two people for dinner.");
while (guests12.length > 2) {
    const removedGuest = guests12.pop();
    console.log(`Answer 15: Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
guests12.forEach((guest, index) => console.log(`Answer 15-${index + 1}: Dear ${guest}, you are still invited to dinner.`));
guests12.length = 0;
console.log("Answer 15: Guests list after shrinking:", guests12);
// End of question 15
// Seeing the World
// Start of question 16
const placesToVisit16 = ["Paris", "Tokyo", "Rome", "Bora Bora", "Sydney"];
console.log("Answer 16-1: Original order:", placesToVisit16.join(", "));
console.log("Answer 16-2: Alphabetical order:", placesToVisit16.slice().sort().join(", "));
console.log("Answer 16-3: Original order:", placesToVisit16.join(", "));
console.log("Answer 16-4: Reverse alphabetical order:", placesToVisit16.slice().sort().reverse().join(", "));
console.log("Answer 16-5: Original order:", placesToVisit16.join(", "));
placesToVisit16.reverse();
console.log("Answer 16-6: Reversed order:", placesToVisit16.join(", "));
placesToVisit16.reverse();
console.log("Answer 16-7: Original order:", placesToVisit16.join(", "));
console.log("Answer 16-8: Sorted order:", placesToVisit16.slice().sort().join(", "));
console.log("Answer 16-9: Reverse sorted order:", placesToVisit16.slice().sort().reverse().join(", "));
// End of question 16
// Dinner Guests
// Start of question 17
// Start with the original guest list
let guests = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print a message saying you can invite only two people for dinner
console.log("Sorry, I can only invite two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    // Pop a name from the list and print a message to that person
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
// Print a message to each of the two remaining people, letting them know they're still invited
for (const guest of guests) {
    console.log(`Hey ${guest}, you're still invited to dinner.`);
}
// Remove the last two names from the list to have an empty list
guests.pop();
guests.pop();
// Print the list to ensure it's empty
console.log("Updated guest list:", guests);
// End of question 17
// Array of items
// Start of question 18
// Seeing the World
// Think of at least five places in the world you’d like to visit.
const placesToVisit = ['Tokyo', 'Paris', 'Rio de Janeiro', 'Sydney', 'Istanbul'];
// Store the locations in an array. Make sure the array is not in alphabetical order.
console.log("Answer 18:");
console.log("\nOriginal Order:");
console.log(placesToVisit);
// Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());
// Show that your array is still in its original order by printing it.
console.log("\nStill in Original Order:");
console.log(placesToVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("\nStill in Original Order:");
console.log(placesToVisit);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReversed Order:");
console.log(placesToVisit.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original Order:");
console.log(placesToVisit.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());
console.log(" End Answer 18");
// End of question 18
// Question 19
console.log("\nQuestion 19:");
// Assuming you have a list of guests stored in an array
let guestsinvite = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print a message indicating the number of people you are inviting to dinner
console.log(`You are inviting ${guestsinvite.length} people to dinner.`);
// Question 20
console.log("\nQuestion 20:");
// Create an array containing items related to different categories
let items = [
    "Mount Everest", // Mountain
    "Amazon River", // River
    "Japan", // Country
    "New York City", // City
    "English", // Language
    "Grand Canyon" // Natural Landmark
];
// Print the array
console.log("Items Array:", items);
// Question 21
console.log("\nQuestion 21:");
// Define TypeScript objects containing items related to different categories
let objects = [
    { mountain: "Mount Everest" },
    { river: "Amazon River" },
    { country: "Japan" },
    { city: "New York City" },
    { language: "English" },
    { landmark: "Grand Canyon" }
];
// Print the objects
console.log("Objects:", objects);
// Question 22
console.log("\nQuestion 22:");
// Define an array
let number = [1, 2, 3, 4, 5];
// Try to access an index that is out of bounds
try {
    console.log(number[10]); // This will produce an array index error
}
catch (error) {
    console.error("Error:", toString()); // Print the error message
}
// Correct the error
console.log("Corrected access:", number[2]); // Access a valid index
// Question 23
console.log("\nQuestion 23:");
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Prediction: True
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // Prediction: False
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // Prediction: True
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // Prediction: False
console.log("Is car.toLowerCase() === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru'); // Prediction: True
console.log("Is car.toLowerCase() === 'Subaru'? I predict False.");
console.log(car.toLowerCase() === 'Subaru'); // Prediction: False
console.log("Is car === 'subaru' && car.length === 6? I predict True.");
console.log(car === 'subaru' && car.length === 6); // Prediction: True
console.log("Is car === 'subaru' || car.length === 6? I predict True.");
console.log(car === 'subaru' || car.length === 6); // Prediction: True
console.log("Is car === 'toyota' && car.length === 6? I predict False.");
console.log(car === 'toyota' && car.length === 6); // Prediction: False
console.log("Is car !== 'subaru' || car.length !== 6? I predict False.");
console.log(car !== 'subaru' || car.length !== 6); // Prediction: False
// Question 24
console.log("\nQuestion 24:");
// Tests for equality and inequality with strings
const string1 = "hello";
const string2 = "world";
const string3 = "hello";
console.log("Equality test with strings:");
console.log(string1 === string2); // false
console.log(string1 === string3); // true
console.log("\nInequality test with strings:");
console.log(string1 !== string2); // true
console.log(string1 !== string3); // false
// Tests using the lower case function
const testString = "Hello World";
console.log("\nLowercase function test:");
console.log(testString.toLowerCase() === "hello world"); // true
console.log(testString.toLowerCase() === "HELLO WORLD"); // false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 5;
const num2 = 10;
console.log("\nNumerical tests:");
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true
// Tests using "and" and "or" operators
const bool1 = true;
const bool2 = false;
console.log("\nTests using 'and' and 'or' operators:");
console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true
// Test whether an item is in an array
const myArray = [1, 2, 3, 4, 5];
console.log("\nTest whether an item is in an array:");
console.log(myArray.indexOf(3) !== -1); // true
console.log(myArray.indexOf(6) !== -1); // false
// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(myArray.indexOf(3) === -1); // false
console.log(myArray.indexOf(6) === -1); // true
// Question 25
console.log("\nQuestion 25:");
// Version 1 (Passes the if test)
let alien_color_pass = 'green';
if (alien_color_pass === 'green') {
    console.log("Version 1: The player just earned 5 points.");
}
// Version 2 (Fails the if test)
let alien_color_fail = 'red';
if (alien_color_fail === 'green') {
    console.log("Version 2: The player just earned 5 points.");
}
// Question 26
console.log("\nQuestion 26:");
// First version of the program (if block)
const alienColorIf = "green";
if (alienColorIf === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Second version of the program (else block)
const alienColorElse = "red"; // For example, assuming the alien's color is not green
if (alienColorElse === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Question 27
console.log("\nQuestion 27:");
const alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor1 === "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
const alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor2 === "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
const alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor3 === "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
// Question 28
console.log("\nQuestion 28:");
const age = 30; // Example age, change this value as needed
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29
console.log("\nQuestion 29:");
// Array of favorite fruits
const favoriteFruits = ["apple", "banana", "orange", "grapes"];
// Check if each fruit is in the array
// Check if each fruit is in the array
if (favoriteFruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
if (favoriteFruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
if (favoriteFruits.indexOf("orange") !== -1) {
    console.log("You really like orange!");
}
if (favoriteFruits.indexOf("grapes") !== -1) {
    console.log("You really like grapes!");
}
// Question 30
console.log("\nQuestion 30:");
// Array of usernames
const usernames = ["admin", "eric", "john", "alice", "sarah"];
// Loop through the array and print greetings
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Question 31
console.log("\nQuestion 31:");
// Array of usernames
let adminnames = ["admin", "eric", "john", "alice", "sarah"];
// Check if the list of users is not empty
if (adminnames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (const adminname of adminnames) {
        if (adminname === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${adminname}, thank you for logging in again.`);
        }
    }
}
// Empty the array of usernames
adminnames = [];
// Check if the list of users is not empty
if (adminnames.length === 0) {
    console.log("We need to find some users!");
}
// Question 32
console.log("\nQuestion 32:");
// List of current users
const current_users = ["john", "alice", "eric", "sarah", "mike"];
// List of new users
const new_users = ["John", "Alice", "Tom", "sarah", "Mike"];
// Loop through new users to check for uniqueness
for (const new_user of new_users) {
    // Check if the username is already in use (case insensitive)
    const usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
// Question 33
console.log("\nQuestion 33:");
// Array of numbers from 1 to 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (const number of numbers) {
    // Determine the proper ordinal ending
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Print the ordinal number
    console.log(`${number}${ordinalEnding}`);
}
// Question 34
console.log("\nQuestion 34:");
// Array of favorite pizza names
const favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Print the name of each pizza
console.log("My favorite pizzas are:");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}
// Print a sentence using the name of each pizza
console.log("\nAnd here's why I like them:");
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
// Now, you can use these functions without errors
// Question 35
console.log("\nQuestion 35:");
// Array of animals with a common characteristic
const animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
console.log("\nCharacteristics of these animals:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Print a sentence stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");
// Question 36
console.log("\nQuestion 36:");
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
// Call the function
make_shirt("Large", "I love TypeScript!");
// Question 37
console.log("\nQuestion 37:");
function made_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
// Make a large shirt with the default message
made_shirt();
// Make a medium shirt with the default message
made_shirt("Medium");
// Make a shirt of any size with a different message
made_shirt("Small", "Keep coding!");
// Question 38
console.log("\nQuestion 38:");
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("New York"); // This will use the default country
// Question 39
console.log("\nQuestion 39:");
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs and print the returned values
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("New York", "USA"));
// Question 40
console.log("\nQuestion 40:");
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
const album1 = make_album("Artist1", "Album1", 10);
const album2 = make_album("Artist2", "Album2");
const album3 = make_album("Artist3", "Album3", 15);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// Question 41
console.log("\nQuestion 41:");
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to show the names of magicians
show_magicians(magicians);
// Question 42
console.log("\nQuestion 42:");
function show_items(items) {
    for (const item1 of items) {
        console.log(item1);
    }
}
function enhance_items(items) {
    const enhanced_items = [];
    for (const item1 of items) {
        enhanced_items.push(`the Great ${item1}`);
    }
    return enhanced_items;
}
// Array of item names
const items1 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Modify the array to add "the Great" to each item's name
const great_items = enhance_items(items);
// Call the function to show the names of items
show_items(great_items);
// question 43
console.log("Answer: 43");
function show_magicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Original array of magician's names
const original_magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Make a copy of the array and add "the Great" to each magician's name
const great_magicians = make_great([...original_magicians]);
// Call the function to show the names of original magicians
console.log("Original magicians:");
show_magicians1(original_magicians);
// Call the function to show the names of great magicians
console.log("\nGreat magicians:");
show_magicians1(great_magicians);
// question 44
console.log("Answer 44:");
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly", "Banana");
// Question 45
console.log("Answer 45:");
function createCar(manufacturer, model, ...extras) {
    const vehicle = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(extra => {
        const key = Object.keys(extra)[0];
        vehicle[key] = extra[key];
    });
    return vehicle;
}
// Call the function with the required information and two additional name-value pairs
const vehicle = createCar("Toyota", "Camry", { color: "blue" }, { year: 2022 });
// Print the Object to verify all information was stored correctly
console.log(vehicle);
