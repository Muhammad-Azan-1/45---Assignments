"use strict";
// Task 2 : Personal Message: Store a person’s name in a variable,
//and print a message to that person. Your message should be simple, such as,
//“Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
//  let fullName : string = "Eric";
//  let message : string = (`"Hello ${fullName},would you like to learn some python today?"`); //using template
//  console.log(message);
// Task 3 : Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase.
//  let str : string = "Azan";
//  // coverting string to Upper and Lower case
//  console.log("Uppercase =",str.toLocaleUpperCase(),"Lowercase =",str.toLocaleLowerCase());
//  // Now using snippet to converet string to Tittlecase
//  console.log("Title case = ",str.replace(/\b\w/g,c=> c.toLocaleUpperCase()));
// Task 4 Famous Quote: Find a quote from a famous person you admire.
//Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//let fullName : string = "PROPHET MUHAMMAD (ﷺ)";
//let quote : string = (`${fullName} said, "The example of a believer is that of a fresh tender plant, which the wind bends lt sometimes and some other time it makes it straight. And the example of a hypocrite is that of a pine tree which keeps straight till once it is uprooted suddenly."`)
//console.log(quote)
// Task 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
//let famous_person : string = "PROPHET MUHAMMAD (ﷺ)";
//let message : string = (`${famous_person} once said,${quote}`)
//console.log(message);
// Task 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let str1 : string = "\tMuhammad Azan\n";
// console.log("with white spaces = ",str1);//without strim
// console.log("stripping = ",str1.trim());//with strim
//Task 7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
// let number : number = 8;
// //Addition for 8
// let addition : number = 6 + 2;
// console.log("6 + 2 = ",addition)
// //subtraction for 8
// let subtraction : number = 14 - 6;
// console.log("14 - 6 = ",subtraction)
// //multiplication for 8
// let multiplication : number = 4 * 2;
// console.log("4 * 2 = ",multiplication)
// //division for 8
// let division : number = 32 / 4 ;
// console.log("32 / 4  = ",division)
//Task 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
// Print that message.
// let favoriteNum : string = "0";
// let message : string = (`My favorite number is ${favoriteNum}`);
// console.log(message);
//Task 11 Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
// let names : string [] = ["AZAN","HUZAIF","ANUS","BILAWAL","AMAAN",]
// for(let i = 0; i<names.length; i++){      // using for loop
//     console.log(names[i])
// }
//Task 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//print a message to them. The text of each message should be the same, but each message should be personalized
//with the person’s name.
// let namess : string [] = ["AZAN","HUZAIF","ANUS","BILAWAL","AMAAN",]
// for(let i = 0; i<names.length; i++){
//     console.log(`Assalamualikum brother ${names[i]} how are you doing?`)
// }
//Task 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
//  let favorite_Transporte : string [] = ["Honda CB 150 F-SE","Mercedes Benz car","Aqua hybrid car"]
// for (let i = 0; i<favorite_Transporte.length; i++){
//     console.log(`"I would like to own ${favorite_Transporte[i]}"`);
// }
//Task 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.
// let listOfGuest : string[] = ["Sahil Adeem","Muhammad Ali","Mufti Ismail Menk"]
// for (let val of listOfGuest){   // using for of loop
//     console.log(`Assalamualikum dear respected ${val} I would like to invite you to dinner`)
// }
// Task 15 Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// let Guest : string [] = ["Sahil Adeem","Muhammad Ali","Mufti Ismail Menk"]
// console.log(Guest)
// console.log(`\n${Guest[2]} is not be able to come at dinner due to some reasons.\n`)
// // Replacing Guest at index 2 from current Arry.
// Guest.pop()
// Guest.push("Mufti Tariq Masood")
// console.log(Guest)
// for (let val of Guest){   // using for of loop
//     console.log(`Assalamualikum dear respected ${val} I would like to invite you to dinner.`)
// }
//Task 16 More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.
// let moreGuest : string [] = ["Sahil Adeem","Muhammad Ali","Mufti Tariq masood"]
// console.log(moreGuest,"\n")
// for(let val of moreGuest){
// console.log(`Dear ${val} our table size is increased so we are inviting more memebers.`)
// }
// //Adding new memebers to current arry
// moreGuest.unshift("Noman Ali Khan") // adding at the start
// moreGuest.push("Engineer Ali Mirza") // adding at the end
// moreGuest.splice(2,0,"Sheikh Usama") // adding at the middle
// // Added memebrs
// console.log("\n",moreGuest,"\n")
// for(let val of moreGuest){
//     console.log(`Assalamualikum dear respected ${val} I would like to invite you all to dinner,`)
//     }
// Task 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
// let shrinkingGuest : string [] = ["Sahil Adeem","Muhammad Ali","Mufti Tariq masood","Noman Ali khan",
// "Engineer Ali Mirza","Sheikh Usama"]
// console.log(shrinkingGuest)
//  for(let val of shrinkingGuest){
//  console.log(`Dear ${val} we are sorry our table size is decreasd so we can only invite two memebers.`)
//  }
//  // Removing all memebers except 2
// let removedGuest = shrinkingGuest.splice(1,4)
// console.log(removedGuest)
// for(let val of removedGuest){
//     console.log(`Dear ${val} we can not invite you we are sory.`)
//     }
// // sending invitation to remaning two
// console.log("\n",shrinkingGuest)
// for(let val of shrinkingGuest){
//     console.log(`Dear ${val} you both are invited to dinner`)
// }
//  // removing remainig 2 and emptying the list
//  shrinkingGuest.splice(0,2)
//  console.log("\n",shrinkingGuest)
//  console.log(`The list is empty`)
// Task 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// //• Print your array in its original order.
// let favoritePlaces : string [] = ["Makkah","Al-Quads","Medina","Karbala","East-Turkestan"]
// console.log("Original Arry =",favoritePlaces)
// //  Print your array in alphabetical order without modifying the actual list.
// let alphabaticalOrder : string [] = favoritePlaces.slice(0,5)
// console.log("\n","Arry in Alphabatical order =",alphabaticalOrder .sort())
// //Show that your array is still in its original order by printing it.
// console.log("\n","Original Arry =",favoritePlaces)
// //Print your array in reverse alphabetical order without changing the order of the original list.
// let reverseAlphabatic : string [] = favoritePlaces.slice(0,5).sort().reverse()
// console.log("\n","reverse Arry =",reverseAlphabatic)
// //• Show that your array is still in its original order by printing it again.
// console.log("\n","Original Arry =",favoritePlaces)
// // Reverse the order of your list. Print the array to show that its order has changed.
//  favoritePlaces.reverse()
//  console.log("\n","Reveresd Original Arry",favoritePlaces)
//  //reverse the order of your list again. Print the list to show it’s back to its original order.
// favoritePlaces.reverse()
// console.log("\n","Agian Reveresd to get Original Order =",favoritePlaces)
// //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// favoritePlaces.sort()
// console.log("\n","Original Arry to Alphabatical order =",favoritePlaces)
// //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// favoritePlaces.sort().reverse()
// console.log("\n"," Original Arry to Reverse Alphabtic Order = ",favoritePlaces)
//Task 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
//Task no 16;
// let dinnerGuest : string [] = ["Sahil Adeem","Noman Ali khan","Mufti tariq Masood","Engineer Ali Mirza","Muhammad Ali","Sheikh Azan",]
// let message : string = (`I am inviting ${dinnerGuest.length} number of people at dinner`)
// console.log(message);
// Task 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities,
//languages, or anything else you’d like. Write a program that creates a list containing these items.
// let countries :  string [] = ["Saudia Arabia","Palestine","Iran","Turkey","India",]
// console.log("The countires I wanted to visit:",countries)
// Task 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// const countires = {
//     country1 : "Palestine", // key : value
//     country2 : "Iran",
//     country3 : "India",
//     country4 : "Iraq",
// }
// console.log("The countries I wanted to visit = ",countires)
// Task 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.
//  let num :  number [] = [1, 2, 3, 4, 5 ,6]
//  // intentionally creating idx error
//  console.log(num[6])
//  // correcting error
//  console.log(num[5])
// Task 23 Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car  : string = "subaru"
// //To evaluates value True
// //1
// console.log("Is car == subaru? I predicted true")
// console.log(car == "subaru")
// //2
// console.log("Is car === subaru? I predicted true")
// console.log(car === "subaru")
// //3
// console.log("Is car.length == 6? I predicted true")
// console.log(car.length == 6)
// //4
// console.log("Is car.lowercase == subaru? I predicted true")
// console.log(car.toLocaleLowerCase() == "subaru")
// //5
// console.log("Is car != Subaru? I predicted true")
// console.log(car != "Subaru")
// //To evaluates value false
// //1
// console.log("Is car == Subaru? I predicted false")
// console.log(car == "Subaru)")
// //2
// console.log("Is car.toUpperCase() == subaru? I predicted false")
// console.log(car.toLocaleUpperCase() == "subaru)")
// //3
// console.log("Is car != subaru? I predicted false")
// console.log(car != "subaru")
// //4
// console.log("Is car != subaru? I predicted false")
// console.log(car != "subaru")
// //5
// console.log("IS car.length == 5 I predicted false")
// console.log(car.length == 5)
//Task24 More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//1  Tests for equality and inequality with strings
//let name : string = ("Muhammad Azan")
// //testing for equality
// console.log("name == Muhammad Azan? I predicted true")
// console.log(name == "Muhammad Azan")
//testing for un equality
// console.log(" Is name != Muhammad Azan? I predicted false")
// console.log(name != "Muhammad Azan")
// //2 Test  using the lower case function
// console.log("Is name.toLowerCase() == Muhammad Azan? i predicted false")
// console.log(name.toLocaleLowerCase() == "Muhammad Azan")
// //3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
//let x = 5;
// //for equality
// console.log("Is x == 5 ? , I predicted true")
// console.log(x == 5)
// //for un equality
// console.log("Is x != 5 ? I predicted false")
// console.log(x != 5)
// //for greater then
// console.log("Is x > 6 ? I predicted false")
// console.log(x > 6)
// //for less then
// console.log("Is x < 6 ? I predicted true")
// console.log(x < 6)
// //for greater then equal to
// console.log("Is x >= 6 ? I predicted true")
// console.log(x >= 5)
// //for less then equal to
// console.log("Is x <= 6 ? I predicted true")
// console.log(x <= 6)
//4  Tests using "and" and "or" operators
//For End &&
//  console.log("x == 5 && x < 6? I predicted true")
//  console.log(x == 5 && x < 6)
//  //for OR ||
//  console.log(" x > 6 || x == 5? I predicted true")
//  console.log(x > 6 || x == 5)
// 5 Test whether an item is in a array
//  let arry : number [] = [1, 2, 3, 4]
//  let item = 3;
//  console.log("arry.includes(item == 3)? I predicted true")
//  console.log(arry.includes(item))
// // //Test whether an item is not in a array
//  let item2 = 5;
//  console.log("arry.includes(item == 5)? I predicted false")
//  console.log(arry.includes(item2))
//Task 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//1
// let alien_color: string = "green";
// if(alien_color === "green"){
//     console.log("You have earned 5 points")
// }
//2
// let alien_color : string = "red";
// if(alien_color === "green"){
//     console.log("You have earned 5 points")
// }
// //Task 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//1
//  let alien_color : string = "green";
//  if(alien_color === "green"){
//     console.log("You have earned 5 points")
//  }else{
//     console.log("You have earned 10 points")
//  }
//2
// let alien_color = "red";
// if(alien_color === "green"){
// console.log("You have earned 5 points")
// }else{
//     console.log("You have earned 10 points")
// }
//Task 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//1
// let alien_color : String = "green";
// if(alien_color === "green"){
//     console.log("You have earned 5 points")
// }else{
//     console.log("you have not earned 5 points")
// }
//2
// let alien_color : String = "red";
// if(alien_color === "red"){
//     console.log("You have earned 10 points")
// }else{
//     console.log("you have not earned 10 points")
// }
//3
// let alien_color : String = "yellow";
// if(alien_color === "yello"){
//     console.log("You have earned 15 points")
// }else{
//     console.log("you have not earned 15 points")
// }
//Task 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// let personAge : number = 200;
// if(personAge < 2){// 0-1
//     console.log("The person is a baby")
// }else if (personAge == 2 || personAge < 4){ //2 -3
//     console.log("The person is a Toddler")
// }else if(personAge == 4 || personAge < 13){ // 4 -12
//     console.log("The person is Kid")
// }else if(personAge == 13 || personAge < 20){// 13 - 19
//     console.log("The person is  Teenager")
// }else if(personAge == 20 || personAge < 65){//20-64
//     console.log("The person is Adult ")
// }else if(personAge == 65 || personAge > 65){// 65 - onwards
//     console.log("The person is Elder")
// } else if(personAge == 4 || personAge < 13){
//     console.log("The person is Kid")
// }else if(personAge == 13 || personAge < 20){
//     console.log("The person is  Teenager")
// }else if(personAge == 20 || personAge < 65){
//     console.log("The person is Adult ")
// }else if(personAge == 65 || personAge > 65){
//     console.log("The person is Elder")
// }
//Tak 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// let favorite_fruits : string[] = ["Apple","Orange","Mango"]
// if(favorite_fruits[0] == "Apple"){
//     console.log("I really like Apple")
// }
// if(favorite_fruits[1] === "Mango"){
//     console.log("I really like Mangos")
// }
// if(favorite_fruits[1] == "Orange"){
//                                              // compairing arry indexs with strings
//     console.log("I really love Orange")
// }
// if(favorite_fruits[2] == "Mango"){
//     console.log("I really like Mango")
// }
// if (favorite_fruits[3] == "Kewe"){
//     console.log("I really like kewe")
// }
//Task 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// let UserNameArry : string[] = ["Azan14","Imran66","Anus12","Huzaif16","Admin"]
// for(let i = 0; i < arry.length ; i++){
//     if(UserNameArry[i] === "Admin"){
//         console.log(`Hello ${UserNameArry[i]},would like to see a status report`)
//     }else{
//         console.log(`Hello ${UserNameArry[i]}, thank you for logging in again`)
//     }
// }
//Task 31 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.
// let user : string[] = ["Azan14","Imran66","Anus12","Huzaif16","Admin"]
// user.splice(0,5)
// console.log(user)
// if(user.length !== 0){
// console.log("The list of user is not empty")
// }else if(user.length == 0){
// console.log("We need to find some users!")
// }
//Task 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// let curr_users : string[] = ["Ayesha2","Admin","Azan14","Eric","John"]
// let new_users : string[] = ["Huzaif","Anus","Admin","Ali","Ayesha12","JOHN"]
// new_users.forEach((newer_one_user : string)=>{
// let CheckingUsers = curr_users.some((curr_one_user : string) => curr_one_user.toLocaleLowerCase() === newer_one_user.toLocaleLowerCase()) /// some arry ko iterate kry ga or jo condition some ke adr hay os condition ke hisssab say har element ko check kry ga jaha true hu ga waha print kry ga agr false hu ga to chalta rahy ga
//     if(CheckingUsers){
//         console.log(`The username ${newer_one_user} has already taken`)
//     }else{
//         console.log(`The username ${newer_one_user} is available`)
//     }
// });
//Task 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3
// let ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ordinalNum.forEach((num : number) =>{
// if(num == 1){
//     console.log(`${num}st`)
// }else if (num == 2){
//     console.log(`${num}nd`)
// }else if (num == 3){
//     console.log(`${num}rd`)
// }else if (num == 4){
//     console.log(`${num}th`)
// }else if (num == 5){
//     console.log(`${num}th`)
// }else if (num == 6){
//     console.log(`${num}th`)
// }else if (num == 7){
//     console.log(`${num}th`)
// }else if (num == 8){
//     console.log(`${num}th`)
// }else if (num == 9){
//     console.log(`${num}th`)
// }
// })
// Task 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// let pizza = ["Fajita","Pepperoni","BBQ"]
// for(let i = 0 ; i<pizza.length ; i++){
//     console.log(`I like ${pizza[i]} pizza`)
// }
// console.log(`\n 1.Pepperoni pizza is a classic favorite with its savory pepperoni slices and gooey melted cheese.
// \n 2.Fajita pizza offers a delightful fusion of flavors, combining tender chicken, colorful bell peppers, and zesty onions
// \n 3.BBQ pizza tantalizes the taste buds with its smoky barbecue sauce, tender meat toppings, and a perfect blend of tangy
//  \n \t \t \t \t \tI really like Pizza!`)
//Task 35
// let animals = ["Horse","cat","parrot"]
// for(let i = 0 ; i<animals.length; i++){
// if(animals[i]==="Horse"){
//     console.log(`A ${animals[i]} is a strong and majestic animal`)
// }else if(animals[i]==="cat"){
//     console.log(`A ${animals[i]} is independent and agile, making it a great companion`)
// }else if(animals[i]==="parrot"){
//     console.log(`A ${animals[i]} is intelligent and can be taught to mimic human speech`)
// }
// }
// console.log(`\n \t \tThese Animals could make a great pet!`)
//Task 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size:string,text:string){
// let s =`size of the shirt is ${size} , and Text on the shirt is  ${text}`
// console.log(s)
// }
//  make_shirt("medium","I love Typescript")
//Task 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirts(size:string ,text: string =  "I love Typescript"){
// console.log(`Size of shirt is ${size} and text on shirt is ${text}`)
// }
// make_shirts("large")
// make_shirts("Medium")
// make_shirts("Small","I love Coding")
//Task 38
// const describe_city = (nameOfCity : string , nameOfCountry : string = "Pakistan") => {
//     console.log(`${nameOfCity} is in ${nameOfCountry}`)
// }
// describe_city("Karachi")
// describe_city("Islamabad")
// describe_city("Jeruselam","Palestine")
//Task 39
// function city_country(city:string,country:string){
// return(`"${city},${country}"`)
// }
// console.log(city_country("Lahore","Pakistan"))
// console.log(city_country("Karachi","Pakistan"))
// console.log(city_country("jeruselam","Palestine"))
//Task 40
// function make_Album(
//   artist_name: string,
//   album_title: string,
//   number_track: number
// ) {
//   let music_Album = {
//     artist: artist_name,
//     Album : album_title,
//     number_Of_Album : number_track,
//   };
//   return music_Album
// }
// console.log(make_Album("Taylor Swift", "Fearless", 1));
// console.log(make_Album("Ed Sheeran", " ÷ (Divide)", 2));
// console.log(make_Album("Lemonade", " Beyoncé", 3));
//Task 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magicians_name: string[] = ["Houdini", "Copperfield","Penn","Angel"]
// function show_magician(magician: string[]){
//     magician.forEach((names:string) =>console.log(names))
//     }
//show_magician(magician_name)
//Task 42 
// let magicians_name: string[] = ["Houdini", "Copperfield","Penn","Angel"]
// function show_magician(magician: string[]){
//     magician.forEach((names:string) =>console.log(names))
//     }
//     function make_great(newMagician : string[]){
//         return newMagician.map((name:string) => `The Great ${name}`)
//     }
//    let newArry =  make_great(magicians_name)
// console.log(newArry)
// show_magician(newArry)
//Task 43
// let magicians_name: string[] = ["Houdini", "Copperfield","Penn","Angel"]
// function show_magician(magician: string[]){
//      return magician.map((names:string) =>names);
//       }
//     function make_great(newMagician : string[]){
//         return newMagician.map((name:string) => `The Great ${name}`)
//     }
// let copyArry =  magicians_name.slice(0) // is use to copy the array
// let newArry =  make_great(copyArry)
// console.log(newArry)
// // original Array
// let originalArry = show_magician(magicians_name)
// console.log(originalArry)
//Task 44
// function  Items(...items:string[]){
//    console.log("\n",`The Items customer wants on their sandwich are as follow :`,"\n")
//   console.log(items,"\n")
//    console.log(`"A delectable sandwich featuring ${items.join(" , ")}o on whole wheat bread."`) 
// }
// Items(["Chicken patty","cheese","garlic mayo",])
// Items(["beef","Onion","Mashroom","Cucumber"])
// Items(["Chicken","Tomato","Onion","Chesse","Egg","Chipolte sauce","ketchup"])
//Task 45
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
