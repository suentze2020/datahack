/* 1) Simple Data Type */

// let i = 123;
// let f = 123.45;
// let s = "I am at CUHK.";
// let b = true;
// console.log(typeof (d));

/* 2) Object Data Type */

// let n = null;
// let d = new Date(1988, 1, 21);
// let a = [1, 2, 3, 4, 5];
// let o = {
//     'id': 1111,
//     'fname': 'David',
//     'lname': 'Chang',
//     'email': 'dchang@cuhk.edu.hk'
// };
// console.log(typeof (o));

/* 3) Conditional */

// let age = 39;
// let teacher = "John";

// if (age < 40) {
//     console.log(teacher + " is younger than " + age + " years old.");
// } else {
//     console.log(teacher + " is older than " + age + " years old.");
// }

/* 4) Ternary operators for conditional */

// let s = "";
// age < 40
//   ? (s = teacher + " is younger than " + age + " years old.")
//   : (s = teacher + " is older than " + age + " years old.");
// console.log(s);

/* 5) Backtick template literal */

// age < 40
//   ? (s = `${teacher} is younger than ${age} years old.`)
//   : (s = `${teacher} is older than ${age} years old.`);

/* 6) Query Selector and css styling in JS */

// Create HTML elements in code and assign a name to represent it.
// const body = document.body;
// const container = document.querySelector(".container");
// const div = document.createElement("div");
// const btn = document.createElement("button");
// const btn_label = document.createTextNode("Change Background Color");

// Setting up properties or attributes for the elements.

// div.setAttribute("id", "firstLine");
// div.classList.add("alert");
// div.style.marginTop = "20px";
// div.style.marginLeft = "20px";
// div.style.marginRight = "20px";
// div.style.fontSize = "30px";
// div.innerHTML = "Press the button ";
// btn.setAttribute("id", "setColor");
// btn.classList.add(
//   "mdl-button",
//   "mdl-js-button",
//   "mdl-button--raised",
//   "mdl-button--colored"
// );

// Placing the elements created in the above section on the DOM.

// container.append(div);
// div.append(btn);
// btn.appendChild(btn_label);

/* 7) Function and Event Listener (high order function) and Event Handler (callback function) */

// function setColor() {
//     div.style.background === 'orange' ? div.style.background = 'silver' : div.style.background = 'orange';
// }

// btn.addEventListener('click', setColor);

/* 8) Anonymous Function - function as variable */

// let setColor = function () {
//     div.style.background === 'orange' ? div.style.background = 'silver' : div.style.background = 'orange';
// }

// btn.addEventListener('click', setColor);

/* 9) Arrow Function */

// let setColor = () => {
//     div.style.background === 'orange' ? div.style.background = 'silver' : div.style.background = 'orange';
// }

// btn.addEventListener('click', setColor);

// btn.addEventListener("click", () =>
//   div.style.background === "orange"
//     ? (div.style.background = "silver")
//     : (div.style.background = "orange")
// );

/* 10) Loop and High Order Function  */

// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (i = 0; i < ages.length; i++) {
//   console.log(`Age is ${ages[i]}.`);
// }

// for (i = 0; i < companies.length; i++) {
//   // console.log(`company: ${companies[i].name}`);
// }

// companies.forEach((company) => {
//   console.log(`${company.name} is a ${company.category} company.`);
// });

// for (i = 0; i < companies.length; i++) {
//   if (companies[i].category == "Retail") {
//     console.log(`${companies[i].name} is a ${companies[i].category} company.`);
//   }
// }

// filtered_companies = companies.filter(
//   (company) => company.category === "Retail"
// );

// filtered_companies.forEach((company) => {
//   console.log(`${company.name} is a ${company.category} company.`);
// });

// company_names = [];
// for (i = 0; i < companies.length; i++) {
//   company_names.push(companies[i].name);
// }
// console.log(company_names);

// let company_names = companies.map((company) => company.name);
// console.log(company_names);

/* 11) Class */

// class Animal {
//   constructor(name, numofLegs, isMamal) {
//     this.name = name;
//     this.numofLegs = numofLegs;
//     this.isMamal = isMamal ? "a mamal" : "not a mamal";
//   }

//   displayAnimal() {
//     return `A ${this.name} has ${this.numofLegs} legs. It is ${this.isMamal}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, numofLegs, isCat, hasTail) {
//     super(name, numofLegs);
//     this.isCat = isCat ? "a cat" : "not a cat";
//     this.hasTail = hasTail ? "has tail" : "does not have a tail";
//   }

//   displayCat() {
//     return `A ${this.name} has ${this.numofLegs} legs. It is ${this.isCat}. It ${this.hasTail}.`;
//   }
// }

// Instantiate an object based on the class definition.
// const animal1 = new Animal("dog", 4, true);
// const animal2 = new Animal("crocodile", 4, false);
// const animal3 = new Animal("cat", 4, true);
// const persian = new Cat("Persian", 4, true, true);

// console.log(animal1.displayAnimal());
// console.log(animal2.displayAnimal());
// console.log(animal3.displayAnimal());
// console.log(persian.displayCat());

/* 12) Import Module */

// import { message, sendMessage } from "./module.js";
// console.log(`Default message is ${message}.`);
// console.log(`Return "${sendMessage("Good morning!")}".`);
