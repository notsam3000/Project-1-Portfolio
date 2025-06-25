let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let dis = document.querySelector("#output");
let clear = document.querySelector("#clear");
let btns = document.querySelectorAll("#btns button");
let log = document.querySelector("#history-log");
let clearHist = document.querySelector("#clear-history");

function loadHistory() {
  let savedHistory = localStorage.getItem("history");
  if (savedHistory) {
    savedHistory = JSON.parse(savedHistory);
    savedHistory.forEach((entry) => {
      let p = document.createElement("p");
      p.textContent = entry;
      log.prepend(p);
    });
  }
}

// Input Focus on load
console.log("Focusing");
num1.focus();

// Preventing default action with arrow keys in Number fields
[num1, num2].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  });
});

// Enter to jump & Navigate b/w Input fields with arrow keys
num1.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "ArrowDown") {
    num2.focus();
  }
});

num2.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    num1.focus();
  }
});

// Click listener
btns.forEach((button) => {
  button.addEventListener("click", calculate);
});

// logic for calculations
function calculate(event) {
  var op = event.target.innerText;
  if (op === "+") {
    addition();
  } else if (op === "-") {
    subtraction();
  } else if (op === "*") {
    multiplication();
  } else if (op === "/") {
    division();
  } else if (op === "X") {
    num1.value = null;
    num2.value = null;
    dis.innerText = null;
  }
}

// functions to calculate
function addition() {
  var val1 = Number(num1.value);
  var val2 = Number(num2.value);

  var res = val1 + val2;

  dis.innerText = res;
  updateHistory(`${val1} + ${val2}`, res);
}

function subtraction() {
  var val1 = Number(num1.value);
  var val2 = Number(num2.value);

  var res = val1 - val2;

  dis.innerText = res;
  updateHistory(`${val1} - ${val2}`, res);
}

function multiplication() {
  var val1 = Number(num1.value);
  var val2 = Number(num2.value);

  var res = val1 * val2;

  dis.innerText = res;
  updateHistory(`${val1} * ${val2}`, res);
}

function division() {
  var val1 = Number(num1.value);
  var val2 = Number(num2.value);

  var res = val1 / val2;

  dis.innerText = res;
  updateHistory(`${val1} / ${val2}`, res);
}

// keyboard inputs
document.addEventListener("keydown", (event) => {
  let val1 = num1.value;
  let val2 = num2.value;
  if (!val1 || !val2) return;

  switch (event.key) {
    case "+":
      event.preventDefault();
      addition();
      break;

    case "-":
      event.preventDefault();
      subtraction();
      break;

    case "*":
      event.preventDefault();
      multiplication();
      break;

    case "/":
      event.preventDefault();
      division();
      break;

    default:
      break;
  }
});

// updating history
function updateHistory(expression, result) {
  let entry = `${expression} = ${result}`;
  let p = document.createElement("p");
  p.textContent = entry; // (2 + 4) = 6
  log.prepend(p);

  let history = localStorage.getItem("history");
  history = history ? JSON.parse(history) : [];

  history.push(entry);
  localStorage.setItem("history", JSON.stringify(history));
}

window.addEventListener("DOMContentLoaded", loadHistory);

//Clear history detector & func
clearHist.addEventListener("click", clearHistory);

function clearHistory() {
  log.innerHTML = "";

  localStorage.removeItem("history");
}
