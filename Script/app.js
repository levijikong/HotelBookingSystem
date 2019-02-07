// var, let, cost

// var firstName = 'john';
// console.log(firstName);

// firstName = 23;
// console.log(firstName);

// let goodBoy = 'John doe';

// console.log(goodBoy);

// let leviFred = true;
// console.log(leviFred);


// let val;

// // numbers to string
// val = string(555);
// val = string(4+4);


// // output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);



// // math obe
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);

// console.log(val);



// // template string
// const name = 'John';
// const age = 30;
// const job = 'web Developer';
// const city = 'Miami';
//  let html;


// //   With template strings (es6)
// wwe can use template strings on forms and tabless

// html =`
//   <ul>
//       <li>Name: ${name}</li>
//       <li>Age: ${age}</li>
//       <li>Job: ${job}</li>
//       <li>City: ${city}</li>
//       <li>${2+2}</li>
//   </ul>
//   `;



// document.body.innerHTML = html;


// ARRAYS & Methods

//  Create some arrays

// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banan', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;
// // Get array length
//  val = numbers.length;
// //  check if its an array
// val = Array.isArray(numbers);
// //  to get a single value from array
// val = numbers[3];
// val = numbers[0];
// // insert into array
// numbers[2] = 100;
// // Find idex of value or the number location
// val = numbers.indexOf(36);
// // // mutating ARRAS
// // addon to the end
// numbers.push(250);
// // add on to the front
// numbers.unshift(120);
// // take off from end
// numbers.pop();
// // take off from front 
// numbers.shift();
// // to splice value of the array means to take it off
// numbers.splice(1,1);
// numbers.splice(1,3);
// // reverse
// numbers.reverse();

// // concatenate arrays
// val = numbers.concat(numbers2);

// // sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // use the "compare function"
// val = numbers.sort(function(x,y){
//     return x -y;
// });

// // Reverse sort
// val = numbers.sort(function(x,y){
//     return y - x;
// });

// FIND numbers as u want 
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50);


// console.log(numbers);
// console.log(val);


// // Oject Literals


// const person = {
//     firstName: 'steve',
//     lastName:'smith',
//     age:36,
//     email:'steve@aol.com',
//     hobbies:['music', 'sports'],
//     address:{
//         city:'miami',
//         state:'FL'
//     },
//     getBirthYear: function(){
//         return 2017 - this.age;
//     }
// }

// let val;

// val = person;
// // Get specific value 
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: ' john', age:30},
//     {name: ' Mike', age:23},
//     {name: 'Nancy', age:40}
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].age);
// }
// // this is just object literals and it will be used when its been
// // needed. and we will get more explaination very soon.


// // // Dates and Times

// // these are just the prosidures in which you can write a time programm.

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('september 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

//  IF STATEMNET & COMPARISON OPERATORS

// if(something){
//     do something
// } else {
//     do something else
// }

//  const id = 100;

// //  EQUAL TO
// if(id == 100){
//     console.log('CORRECT');
//  } else {
//      console.log('INCORRECT');
//  }

// //  NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
//  } else {
//      console.log('INCORRECT');
//  }

// //  EQUAL TO VALUE & TYPE 
// if(id === 100){
//     console.log('CORRECT');
//  } else {
//      console.log('INCORRECT');
//  }

// // NOT EQUAL TO VALUE & TYPE
// if(id !== 100){
//     console.log('CORRECT');
//  } else {
//      console.log('INCORRECT');
//  }

// test to check if the id is difined or undedifined 
// if(typeof id !== 'underfined'){
//     console.log(`The ID is $(id)`);
// } else {
//     console.log('NO ID');
// }

// GREATER OR LESS THAN
// WITH THIS YOU CHECK WITH THE > AS WELL TO SEE BY JUST CHANGING THE ID U,,
// if(id <= 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // IF ELSE 

// const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red');
// }else if(color === 'blue'){
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue');
// }

// // LOGICAL OPERATORS

// const name = 'steve';
// const age = 20;

// // AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child1`);
// } else if (age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// // OR ||

// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// //  WITHOUT BRACES
// if(id === 100)
//   console.log('COORECT');
// else
//   console.log('INCORRECT');

// if(id === 100)
//   console.log('CORRECT');
// else
//   console.log('INCORRECT'); 

// SWITCHES  

// const color = 'blue';

// switch(color){
//     case 'red':
//       console.log('color is red');
//       break;
//     case 'blue':
//       console.log('color is blue');
//       break;
//     default:
//       console.log('color is not red or blue');
//       break; 
// }

// let day;

// switch(new Date().getDay()){
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tueday';
//     break;
//   case 3:
//     day = 'wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }
// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
// console.log(toCelsius(77));

// let even = 24;

// if(24 / 2 === 12){
//     console.log('even');

// }else if(24 / 2 === 13 ){
//      console.log(odd);  
// }

// console.log(`Today is ${day}`);

// // FUNCTION DECLARATIONS 

// function greet(firstName = 'john', lastName = 'Doe'){
//     return 'Hello' + firstName + ' ' + lastName;
// }

// console.log(greet());

// // FUNCTION EXPRESIONS

// const square = function(x = 3){
//     return x*x;
// };
//    console.log(square());

// IMMIDIATLEY INVOCABLE FUNCTION EXPRESIONS - IIFES

// (function(){
//     console.log('IIFGE Ran');  
// })();

// (function(name){
//     console.log('Hello' + name);  
// })('Brad');

//  PROPERTY METHODS

// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edidt: function(id){
//         console.log(`Edit todo ${id} `);
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo...');
// }

// todo.add();
// todo.edidt(22);
// todo.delete();


// GENERAL LOOPS

// // FOR LOOP

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favorite number')
//         continue;
//     }

//     if(i === 5) {
//         console.log('stop the loop');
//         break;
//     }

//     console.log('number '+ i);
// }

// // WHILE LOOP

//   let i = 0;

//   while(i < 10){
//       console.log('number '+ i);
//       i++;
//   }

// // DO WHILE

// let i = 100;

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);

//  LOOP THROUGH ARRAY
const cars = ['Ford','Chevy','Honda','Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(cars, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// // MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'John'},
//     {id: 3, name: 'John'},
//     {id: 4, name: 'John'},
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// FOR IN LOOP

// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
//     age: 40
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

// var TAX_RATE = 0.08;
// var amount = 99.99;
// amount = amount * 2;
// amount = amount + (amount * TAX_RATE);

//  console.log(amount);
//  console.log(amount.toFixed(2));


var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
    console.log("i want to buy this phone!")
}
