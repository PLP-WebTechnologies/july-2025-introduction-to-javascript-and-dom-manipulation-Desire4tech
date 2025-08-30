// 🚀 JavaScript Fundamentals Assignment
// ================================

//  Part 1: Basics (Variables & Conditionals)
// --------------------------------------------
function checkAge() {
  let age = document.getElementById("userAge").value; // variable
  let resultText = "";

  if (age >= 18) {  // conditional
    resultText = "✅ You are an adult.";
  } else if (age > 0) {
    resultText = "👶 You are still a minor.";
  } else {
    resultText = "❌ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = resultText;
}

//  Part 2: Functions
// --------------------------------------------
// Function 1: Calculate total
function calculateTotal(a, b) {
  return a + b;
}

function showTotal() {
  let total = calculateTotal(100, 250);
  document.getElementById("totalResult").textContent = "Total is: " + total;
}

// Function 2: Format Name
function formatName() {
  let name = document.getElementById("nameInput").value;
  let formatted = name.trim().toUpperCase(); // formatting string
  document.getElementById("nameResult").textContent = "Formatted Name: " + formatted;
}

//  Part 3: Loops
// --------------------------------------------
// Example 1: Countdown using while loop
function showCountdown() {
  let countdownText = "";
  let i = 5;

  while (i > 0) {
    countdownText += i + " ";
    i--;
  }

  document.getElementById("countdownResult").textContent = "Countdown: " + countdownText;
}

// Example 2: List fruits using for loop
function listFruits() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍊 Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear before adding new

  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

//  Part 4: DOM Manipulation
// --------------------------------------------
// Example 1: Change heading text
function changeHeading() {
  document.getElementById("dynamicHeading").textContent = "🌟 Heading Changed!";
}

// Example 2: Toggle Theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Example 3: Add new item dynamically
function addNewItem() {
  let list = document.getElementById("itemList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
}
