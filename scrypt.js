"use strict";

let billInput = document.getElementById("bill-input");
let tipButton = document.querySelectorAll(".tip-button");
let tipCustom = document.getElementById("custom-tip");
let inputPeople = document.getElementById("people-input");
let reset = document.getElementById("reset");
let totalTip = document.getElementById("tip-amount");
let totalPerson = document.getElementById("total-person");

let billValue = 0;
let tipValue = 15;
let peopleValue = 1;
let tip;

billInput.value = billInput.innerHTML;
inputPeople.value = peopleValue;
tipCustom.value = tipCustom.innerHTML;
document.getElementById("tip-15").classList.add("active");

// Takes bill input and calculates
billInput.addEventListener("input", function () {
  billValue = parseFloat(billInput.value);
  calculate();
});

// Takes input to tip buttons
tipButton.forEach((btn) =>
  btn.addEventListener("click", function () {
    tipButton.forEach((tip) => tip.classList.remove("active"));
    btn.classList.add("active");
    tipValue = btn.value;
    calculate();
  })
);

// takes input to custom tip
tipCustom.addEventListener("input", function () {
  tipButton.forEach((tipButton) => tipButton.classList.remove("active"));
  tipValue = tipCustom.value;
  if (tipValue !== 0) {
    calculate();
  }
});

// takes input of people
inputPeople.addEventListener("input", function () {
  peopleValue = parseFloat(inputPeople.value);
  if (Number.isNaN(peopleValue) || peopleValue <= 0) {
    inputPeople.classList.add("error");
  } else {
    inputPeople.classList.remove("error");
  }
  calculate();
});

// general calcuation function
function calculate() {
  let calculatedTip = (tip = ((billValue / 100) * tipValue) / peopleValue);
  let calculateTotal = (tip =
    (billValue + (billValue / 100) * tipValue) / peopleValue);

  totalTip.innerHTML = calculatedTip.toFixed(2);
  totalPerson.innerHTML = calculateTotal.toFixed(2);
  console.log(calculatedTip);
}
