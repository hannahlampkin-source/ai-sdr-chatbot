
const demoButton = document.getElementById("demo-btn");

const exploreButton = document.getElementById("explore-btn");

const chatResponse = document.getElementById("chat-response");

demoButton.addEventListener("click", function() {
  chatResponse.textContent =
    "Great! Let's get you connected with our sales team.";
});

exploreButton.addEventListener("click", function() {
  chatResponse.textContent =
    "Of course! What would you like to learn about?";
});
