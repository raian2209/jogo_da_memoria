// script.js
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const highScoresButton = document.getElementById("highScoresButton");
    const optionsButton = document.getElementById("optionsButton");
    const aboutButton = document.getElementById("aboutButton");
    const menu = document.getElementById("menu");
    const mainContent = document.querySelector("main");
  
    startButton.addEventListener("click", function () {
      mainContent.innerHTML = "<h2>Game Started! Have fun!</h2>";
    });
  
    highScoresButton.addEventListener("click", function () {
      mainContent.innerHTML = "<h2>High Scores</h2><ul><li>Player 1: 1000</li><li>Player 2: 800</li></ul>";
    });
  
    optionsButton.addEventListener("click", function () {
      mainContent.innerHTML = "<h2>Options</h2><p>You can customize your settings here.</p>";
    });
  
    aboutButton.addEventListener("click", function () {
      mainContent.innerHTML = "<h2>About</h2><p>Welcome to our Game Zone. Enjoy!</p>";
    });
  });
  