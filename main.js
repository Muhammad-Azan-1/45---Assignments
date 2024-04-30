"use strict";
// Task 1 : Personal Message: Store a person’s name in a variable,
//and print a message to that person. Your message should be simple, such as,
//“Hello Eric, would you like to learn some Python today?”
let fullName = "Eric";
let message = `"Hello ${fullName},would you like to learn some python today?"`; //using template
console.log(message);
// Task 2 : Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase.
let str = "Azan";
// coverting string to Upper and Lower case
console.log("Uppercase =", str.toLocaleUpperCase(), "Lowercase =", str.toLocaleLowerCase());
// Now using snippet to converet string to Tittlecase
console.log("Title case = ", str.replace(/\b\w/g, (c) => c.toLocaleUpperCase()));
// Task 3 Famous Quote: Find a quote from a famous person you admire.
//Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let fullName1 = "PROPHET MUHAMMAD (ﷺ)";
let quote = `${fullName} said, "The example of a believer is that of a fresh tender plant, which the wind bends lt sometimes and some other time it makes it straight. And the example of a hypocrite is that of a pine tree which keeps straight till once it is uprooted suddenly."`;
console.log(quote);
// Task 4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "PROPHET MUHAMMAD (ﷺ)";
let message1 = `${famous_person} once said,${quote}`;
console.log(message);
// Task 5 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let str1 = "\tMuhammad Azan\n";
console.log("with white spaces = ", str1); //without strim
console.log("stripping = ", str1.trim()); //with strim
//Task 6 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
let number = 8;
//Addition for 8
let addition = 6 + 2;
console.log("6 + 2 = ", addition);
//subtraction for 8
let subtraction = 14 - 6;
console.log("14 - 6 = ", subtraction);
//multiplication for 8
let multiplication = 4 * 2;
console.log("4 * 2 = ", multiplication);
//division for 8
let division = 32 / 4;
console.log("32 / 4  = ", division);
//Task 7 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
// Print that message.
let favoriteNum = "0";
let messages = `My favorite number is ${favoriteNum}`;
console.log(messages);
// Task 8 Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let names = ["AZAN", "HUZAIF", "ANUS", "BILAWAL", "AMAAN"];
for (let i = 0; i < names.length; i++) {
    // using for loop
    console.log(names[i]);
}
//Task 9 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//print a message to them. The text of each message should be the same, but each message should be personalized
//with the person’s name.
let namess = ["AZAN", "HUZAIF", "ANUS", "BILAWAL", "AMAAN"];
for (let i = 0; i < names.length; i++) {
    console.log(`Assalamualikum brother ${names[i]} how are you doing?`);
}
//Task 10 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let favorite_Transporte = [
    "Honda CB 150 F-SE",
    "Mercedes Benz car",
    "Aqua hybrid car",
];
for (let i = 0; i < favorite_Transporte.length; i++) {
    console.log(`"I would like to own ${favorite_Transporte[i]}"`);
}
//Task 11 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.
let listOfGuest = [
    "Sahil Adeem",
    "Muhammad Ali",
    "Mufti Ismail Menk",
];
for (let val of listOfGuest) {
    // using for of loop
    console.log(`Assalamualikum dear respected ${val} I would like to invite you to dinner`);
}
// Task 12 Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 11. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let Guest = ["Sahil Adeem", "Muhammad Ali", "Mufti Ismail Menk"];
console.log(Guest);
console.log(`\n${Guest[2]} is not be able to come at dinner due to some reasons.\n`);
// Replacing Guest at index 2 from current Arry.
Guest.pop();
Guest.push("Mufti Tariq Masood");
console.log(Guest);
for (let val of Guest) {
    // using for of loop
    console.log(`Assalamualikum dear respected ${val} I would like to invite you to dinner.`);
}
//Task 13 More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.
// Start with your program from Exercise 12. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array.
// Use append() to add one new guest to the end of your list.
//Print a new set of invitation messages, one for each person in your list.
let moreGuest = ["Sahil Adeem", "Muhammad Ali", "Mufti Tariq masood"];
console.log(moreGuest, "\n");
for (let val of moreGuest) {
    console.log(`Dear ${val} our table size is increased so we are inviting more memebers.`);
}
//Adding new memebers to current arry
moreGuest.unshift("Noman Ali Khan"); // adding at the start
moreGuest.push("Engineer Ali Mirza"); // adding at the end
moreGuest.splice(2, 0, "Sheikh Usama"); // adding at the middle
// Added memebrs
console.log("\n", moreGuest, "\n");
for (let val of moreGuest) {
    console.log(`Assalamualikum dear respected ${val} I would like to invite you all to dinner,`);
}
// Task 14 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
// Start with your program from Exercise 13. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let shrinkingGuest = [
    "Sahil Adeem",
    "Muhammad Ali",
    "Mufti Tariq masood",
    "Noman Ali khan",
    "Engineer Ali Mirza",
    "Sheikh Usama",
];
console.log(shrinkingGuest);
for (let val of shrinkingGuest) {
    console.log(`Dear ${val} we are sorry our table size is decreasd so we can only invite two memebers.`);
}
// Removing all memebers except 2
let removedGuest = shrinkingGuest.splice(1, 4);
console.log(removedGuest);
for (let val of removedGuest) {
    console.log(`Dear ${val} we can not invite you we are sory.`);
}
// sending invitation to remaning two
console.log("\n", shrinkingGuest);
for (let val of shrinkingGuest) {
    console.log(`Dear ${val} you both are invited to dinner`);
}
// removing remainig 2 and emptying the list
shrinkingGuest.splice(0, 2);
console.log("\n", shrinkingGuest);
console.log(`The list is empty`);
// Task 15 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// //• Print your array in its original order.
let favoritePlaces = [
    "Makkah",
    "Al-Quads",
    "Medina",
    "Karbala",
    "East-Turkestan",
];
console.log("Original Arry =", favoritePlaces);
let alphabaticalOrder = favoritePlaces.slice(0, 5);
console.log("\n", "Arry in Alphabatical order =", alphabaticalOrder.sort());
console.log("\n", "Original Arry =", favoritePlaces);
let reverseAlphabatic = favoritePlaces.slice(0, 5).sort().reverse();
console.log("\n", "reverse Arry =", reverseAlphabatic);
console.log("\n", "Original Arry =", favoritePlaces);
favoritePlaces.reverse();
console.log("\n", "Reveresd Original Arry", favoritePlaces);
favoritePlaces.reverse();
console.log("\n", "Agian Reveresd to get Original Order =", favoritePlaces);
favoritePlaces.sort();
console.log("\n", "Original Arry to Alphabatical order =", favoritePlaces);
favoritePlaces.sort().reverse();
console.log("\n", " Original Arry to Reverse Alphabtic Order = ", favoritePlaces);
//Task 16 Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
let dinnerGuest = [
    "Sahil Adeem",
    "Noman Ali khan",
    "Mufti tariq Masood",
    "Engineer Ali Mirza",
    "Muhammad Ali",
    "Sheikh Azan",
];
let messagess = `I am inviting ${dinnerGuest.length} number of people at dinner`;
console.log(messagess);
// Task 17 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities,
//languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries = [
    "Saudia Arabia",
    "Palestine",
    "Iran",
    "Turkey",
    "India",
];
console.log("The countires I wanted to visit:", countries);
// Task 18 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const countires = {
    country1: "Palestine", // key : value
    country2: "Iran",
    country3: "India",
    country4: "Iraq",
};
console.log("The countries I wanted to visit = ", countires);
// Task 19 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.
let num = [1, 2, 3, 4, 5, 6];
// intentionally creating idx error
console.log(num[6]);
// correcting error
console.log(num[5]);
// Task 20 Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru";
//To evaluates value True
//1
console.log("Is car == subaru? I predicted true");
console.log(car == "subaru");
//2
console.log("Is car === subaru? I predicted true");
console.log(car === "subaru");
//3
console.log("Is car.length == 6? I predicted true");
console.log(car.length == 6);
//4
console.log("Is car.lowercase == subaru? I predicted true");
console.log(car.toLocaleLowerCase() == "subaru");
//5
console.log("Is car != Subaru? I predicted true");
console.log(car != "Subaru");
//To evaluates value false
//1
console.log("Is car == Subaru? I predicted false");
console.log(car == "Subaru)");
//2
console.log("Is car.toUpperCase() == subaru? I predicted false");
console.log(car.toLocaleUpperCase() == "subaru)");
//3
console.log("Is car != subaru? I predicted false");
console.log(car != "subaru");
//4
console.log("Is car != subaru? I predicted false");
console.log(car != "subaru");
//5
console.log("IS car.length == 5 I predicted false");
console.log(car.length == 5);
//Task21 More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let myName = ("Muhammad Azan");
//1 testing for equality
console.log("name == Muhammad Azan? I predicted true");
console.log(myName == "Muhammad Azan");
// testing for unequality
console.log(" Is name != Muhammad Azan? I predicted false");
console.log(myName != "Muhammad Azan");
//2 Test  using the lower case function
console.log("Is name.toLowerCase() == Muhammad Azan? i predicted false");
console.log(myName.toLocaleLowerCase() == "Muhammad Azan");
//3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
let x = 5;
//for equality
console.log("Is x == 5 ? , I predicted true");
console.log(x == 5);
//for un equality
console.log("Is x != 5 ? I predicted false");
console.log(x != 5);
//for greater then
console.log("Is x > 6 ? I predicted false");
console.log(x > 6);
//for less then
console.log("Is x < 6 ? I predicted true");
console.log(x < 6);
//for greater then equal to
console.log("Is x >= 6 ? I predicted true");
console.log(x >= 5);
//for less then equal to
console.log("Is x <= 6 ? I predicted true");
console.log(x <= 6);
// 4  Tests using "and" and "or" operators
// For End &&
console.log("x == 5 && x < 6? I predicted true");
console.log(x == 5 && x < 6);
//  for OR ||
console.log(" x > 6 || x == 5? I predicted true");
console.log(x > 6 || x == 5);
// 5 Test whether an item is in a array
let arry = [1, 2, 3, 4];
let item = 3;
console.log("arry.includes(item == 3)? I predicted true");
console.log(arry.includes(item));
//Test whether an item is not in a array
let item2 = 5;
console.log("arry.includes(item == 5)? I predicted false");
console.log(arry.includes(item2));
//Task 22 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
1;
let alien_colors = "green";
if (alien_colors === "green") {
    console.log("You have earned 5 points");
}
2;
let alien_color = "red";
if (alien_color === "green") {
    console.log("You have earned 5 points");
}
//Task 23 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
1;
let alien_colorss = "green";
if (alien_colorss === "green") {
    console.log("You have earned 5 points");
}
else {
    console.log("You have earned 10 points");
}
2;
let aliens_Color = "red";
if (aliens_Color === "green") {
    console.log("You have earned 5 points");
}
else {
    console.log("You have earned 10 points");
}
// Task 24 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
1;
let Alien_color = "green";
if (Alien_color === "green") {
    console.log("You have earned 5 points");
}
else {
    console.log("you have not earned 5 points");
}
2;
let alienColor = "red";
if (alienColor === "red") {
    console.log("You have earned 10 points");
}
else {
    console.log("you have not earned 10 points");
}
3;
let aliencolor = "yellow";
if (aliencolor === "yello") {
    console.log("You have earned 15 points");
}
else {
    console.log("you have not earned 15 points");
}
//Task 25 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let personAge = 200;
if (personAge < 2) { // 0-1
    console.log("The person is a baby");
}
else if (personAge == 2 || personAge < 4) { //2 to 3
    console.log("The person is a Toddler");
}
else if (personAge == 4 || personAge < 13) { // 4 to 12
    console.log("The person is Kid");
}
else if (personAge == 13 || personAge < 20) { // 13 to 19
    console.log("The person is  Teenager");
}
else if (personAge == 20 || personAge < 65) { //20 to 64
    console.log("The person is Adult ");
}
else if (personAge == 65 || personAge > 65) { // 65 to onwards
    console.log("The person is Elder");
}
//Tak 26 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favorite_fruits = ["Apple", "Orange", "Mango"];
if (favorite_fruits[0] == "Apple") {
    console.log("I really like Apple");
}
if (favorite_fruits[1] === "Mango") {
    console.log("I really like Mangos");
}
if (favorite_fruits[1] == "Orange") {
    // compairing arry indexs with strings
    console.log("I really love Orange");
}
if (favorite_fruits[2] == "Mango") {
    console.log("I really like Mango");
}
if (favorite_fruits[3] == "Kewe") {
    console.log("I really like kewe");
}
//Task 27 Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let UserNameArry = ["Azan14", "Imran66", "Anus12", "Huzaif16", "Admin"];
for (let i = 0; i < arry.length; i++) {
    if (UserNameArry[i] === "Admin") {
        console.log(`Hello ${UserNameArry[i]},would like to see a status report`);
    }
    else {
        console.log(`Hello ${UserNameArry[i]}, thank you for logging in again`);
    }
}
//Task 28 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.
let user = ["Azan14", "Imran66", "Anus12", "Huzaif16", "Admin"];
user.splice(0, 5);
console.log(user);
if (user.length !== 0) {
    console.log("The list of user is not empty");
}
else if (user.length == 0) {
    console.log("We need to find some users!");
}
//Task 29 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let curr_users = ["Ayesha2", "Admin", "Azan14", "Eric", "John"];
let new_users = ["Huzaif", "Anus", "Admin", "Ali", "Ayesha12", "JOHN"];
new_users.forEach((newer_one_user) => {
    let CheckingUsers = curr_users.some((curr_one_user) => curr_one_user.toLocaleLowerCase() === newer_one_user.toLocaleLowerCase()); /// some arry ko iterate kry ga or jo condition some ke adr hay os condition ke hisssab say har element ko check kry ga jaha true hu ga waha print kry ga agr false hu ga to chalta rahy ga
    if (CheckingUsers) {
        console.log(`The username ${newer_one_user} has already taken`);
    }
    else {
        console.log(`The username ${newer_one_user} is available`);
    }
});
//Task 30 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
let ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinalNum.forEach((num) => {
    if (num == 1) {
        console.log(`${num}st`);
    }
    else if (num == 2) {
        console.log(`${num}nd`);
    }
    else if (num == 3) {
        console.log(`${num}rd`);
    }
    else if (num == 4) {
        console.log(`${num}th`);
    }
    else if (num == 5) {
        console.log(`${num}th`);
    }
    else if (num == 6) {
        console.log(`${num}th`);
    }
    else if (num == 7) {
        console.log(`${num}th`);
    }
    else if (num == 8) {
        console.log(`${num}th`);
    }
    else if (num == 9) {
        console.log(`${num}th`);
    }
});
// Task 31 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
let pizza = ["Fajita", "Pepperoni", "BBQ"];
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza`);
}
console.log(`\n 1.Pepperoni pizza is a classic favorite with its savory pepperoni slices and gooey melted cheese.
\n 2.Fajita pizza offers a delightful fusion of flavors, combining tender chicken, colorful bell peppers, and zesty onions
\n 3.BBQ pizza tantalizes the taste buds with its smoky barbecue sauce, tender meat toppings, and a perfect blend of tangy
 \n \t \t \t \t \tI really like Pizza!`);
//Task 32  Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let animals = ["Horse", "cat", "parrot"];
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "Horse") {
        console.log(`A ${animals[i]} is a strong and majestic animal`);
    }
    else if (animals[i] === "cat") {
        console.log(`A ${animals[i]} is independent and agile, making it a great companion`);
    }
    else if (animals[i] === "parrot") {
        console.log(`A ${animals[i]} is intelligent and can be taught to mimic human speech`);
    }
}
console.log(`\n \t \tThese Animals could make a great pet!`);
//Task 33 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    let s = `size of the shirt is ${size} , and Text on the shirt is  ${text}`;
    console.log(s);
}
make_shirt("medium", "I love Typescript");
//Task 34 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size, text = "I love Typescript") {
    console.log(`Size of shirt is ${size} and text on shirt is ${text}`);
}
make_shirts("large");
make_shirts("Medium");
make_shirts("Small", "I love Coding");
//Task 35 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as
//Karachi is in Pakistan. Give the parameter for the country a default value.Call your function for three different cities, at least one of which is not in the
//default country.
const describe_city = (nameOfCity, nameOfCountry = "Pakistan") => {
    console.log(`${nameOfCity} is in ${nameOfCountry}`);
};
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Jeruselam", "Palestine");
// //Task 36 City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    return (`"${city},${country}"`);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("jeruselam", "Palestine"));
//Task 37 Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of 
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_Album(artist_name, album_title, number_track) {
    let music_Album = {
        artist: artist_name,
        Album: album_title,
        number_Of_Album: number_track,
    };
    return music_Album;
}
console.log(make_Album("Taylor Swift", "Fearless", 1));
console.log(make_Album("Ed Sheeran", " ÷ (Divide)", 2));
console.log(make_Album("Lemonade", " Beyoncé", 3));
//Task 38 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians_name = ["Houdini", "Copperfield", "Penn", "Angel"];
function show_magician(magician) {
    magician.forEach((names) => console.log(names));
}
show_magician(magicians_name);
//Task 39 Great Magicians: Start with a copy of your program from Exercise 38.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let magiciansName = ["Houdini", "Copperfield", "Penn", "Angel"];
function showMagician(magician) {
    magician.forEach((names) => console.log(names));
}
function make_great(newMagician) {
    return newMagician.map((name) => `The Great ${name}`);
}
let newArry = make_great(magicians_name);
console.log(newArry);
showMagician(newArry);
//Task 40 Unchanged Magicians: Start with your work from Exercise 39. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magicians_Name = ["Houdini", "Copperfield", "Penn", "Angel"];
function show_Magician(magician) {
    return magician.map((names) => names);
}
function make_Great(newMagician) {
    return newMagician.map((name) => `The Great ${name}`);
}
let copyArry = magicians_name.slice(0); // is use to copy the array
let new_Arry = make_Great(copyArry);
console.log(new_Arry);
// original Array
let originalArry = show_Magician(magicians_Name);
console.log(originalArry);
//Task 41 Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function Items(...items) {
    console.log("\n", `The Items customer wants on their sandwich are as follow :`, "\n");
    console.log(items, "\n");
    console.log(`"A delectable sandwich featuring ${items.join(" , ")}o on whole wheat bread."`);
}
Items(["Chicken patty", "cheese", "garlic mayo",]);
Items(["beef", "Onion", "Mashroom", "Cucumber",]);
Items(["Chicken", "Tomato", "Onion", "Chesse", "Egg", "Chipolte sauce", "ketchup",]);
//Task 45Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function car_info(Manufacturer, make_model, ...moreInf) {
    const car = {
        Manufacturer: Manufacturer,
        make_model: make_model,
    };
    moreInf.forEach((info) => {
        let [Key, value] = info.split(":"); // user can add  any key and value in the argument list
        car[Key] = value;
    });
    return car;
}
console.log(car_info("Bugatti", "veyron", "color:Blue", "Speed:256.37 MPH"));
