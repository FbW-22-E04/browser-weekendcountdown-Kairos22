const date = new Date();
getDayName = () => {
  return date.toLocaleDateString("en-EN", { weekday: "long" });
};
getDaysToWeekend = () => {
  const userName = document.querySelector("#userName");
  const answer = document.querySelector("#answer");
  if (userName.value === "") {
    alert("Please write your name");
  }
  answer.innerHTML = `Hello ${userName.value}! Today is ${getDayName()}, only ${
    5 - date.getDay()
  } days lef until next weekend`;
};
let button = document.querySelector("#btn");
button.addEventListener("click", getDaysToWeekend);