let result = document.getElementsByClassName("result");

let percentaged5 = document.getElementById("five-percentage");
let percentaged10 = document.getElementById("ten-percentage");
let percentaged15 = document.getElementById("fifteen-percentage");
let percentaged25 = document.getElementById("twentyfive-percentage");
let percentaged35 = document.getElementById("thirtyfive-percentage");
let percentaged50 = document.getElementById("fifty-percentage");
let percentaged65 = document.getElementById("sixtyfive-percentage");
let percentaged80 = document.getElementById("eighty-percentage");

let billInput = Number(document.getElementById("bill-input").value);

percentaged5.addEventListener("click", () => {
  let i = billInput * 1.05; // Add 5%
  document.getElementById("result").textContent = i; // Display result
});

// let reset = document.getElementById("reset-button");
// reset.addEventListener("click", () => {});
