// const date = new Date();
// getDayName = () => {
//   return date.toLocaleDateString("en-EN", { weekday: "long" });
// };
// getDaysToWeekend = () => {
//   const userName = document.querySelector("#userName");
//   const answer = document.querySelector("#answer");
//   if (userName.value === "") {
//     alert("Please write your name");
//   }
//   answer.innerHTML = `Hello ${userName.value}! Today is ${getDayName()}, only ${
//     5 - date.getDay()
//   } days lef until next weekend`;
// };
// let button = document.querySelector("#btn");
// button.addEventListener("click", getDaysToWeekend);

console.log('----------------------------------------');

const form = document.querySelector("form");
const p = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");
let date = new Date();
// console.log(date);
const weekday = date.getDay();
let daysArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const today = daysArray[weekday - 1];
console.log(today);
const remaining = 5 - weekday;
console.log(remaining);