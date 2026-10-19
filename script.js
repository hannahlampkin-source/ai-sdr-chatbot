
document.addEventListener("DOMContentLoaded", function () {

  // Find the elements on our webpage
  const demoButton = document.getElementById("demo-btn");
  const exploreButton = document.getElementById("explore-btn");
  const chatResponse = document.getElementById("chat-response");
  const options = document.getElementById("qualification-options");
  const leadForm = document.getElementById("lead-form");
  // This variable will store the visitor's team size
  let teamSize = "";
  let selectedChallenge = "";
  // Start the qualification conversation
  function askTeamSize() {

    chatResponse.textContent =
      "Great! How many sales reps are on your team?";

    // Clear any previous buttons
    options.innerHTML = "";

    // Create our three choices
    const teamSizes = [
      "1–10 reps",
      "11–50 reps",
      "51+ reps"
    ];

    // Create a button for each choice
    teamSizes.forEach(function (size) {

      const button = document.createElement("button");

      button.textContent = size;

            button.addEventListener("click", function () {

        teamSize = size;
        askChallenge();

      });

          options.appendChild(button);

    }); // End the team-size loop
  } // End askTeamSize

   
  
    // Ask the visitor about their main challenge
  function askChallenge() {

    chatResponse.textContent =
      "What's your biggest challenge?";

    options.innerHTML = "";

    const challenges = [
      "Lead qualification",
      "Booking meetings",
      "Sales productivity"
    ];

    challenges.forEach(function (challenge) {

      const button = document.createElement("button");

      button.textContent = challenge;

      button.addEventListener("click", function () {

       selectedChallenge = challenge;
        showRecommendation();

      });

      options.appendChild(button);

    });
  }  // Recommend a next step using the visitor's answers
  function showRecommendation() {
        leadForm.hidden = false;
    const lead = {
      teamSize: teamSize,
      challenge: selectedChallenge
    };

      console.log(lead);

    const leadJSON = JSON.stringify(lead);
    console.log(leadJSON);

    options.innerHTML = "";

    if (teamSize === "1–10 reps") {

      chatResponse.textContent =
        "For your team of " + teamSize +
        ", we recommend our self-service resources to help with " +
        selectedChallenge + ".";

    } else {

      chatResponse.textContent =
        "For your team of " + teamSize +
        ", we recommend a sales demo focused on " +
        selectedChallenge + ".";

    }
  }
    leadForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const visitorName =
      document.getElementById("visitor-name").value.trim();
    const visitorEmail =
      document.getElementById("visitor-email").value.trim();
      const submittedLead = {
      name: visitorName,
            email: visitorEmail,
      teamSize: teamSize,
      challenge: selectedChallenge
    };

    console.log("Submitted lead:", submittedLead);

  });
  // Start when someone clicks Book a demo
  demoButton.addEventListener("click", askTeamSize);

  // Keep the Explore solutions button working
  exploreButton.addEventListener("click", function () {

    chatResponse.textContent =
      "Explore how PipelineIQ helps sales teams grow.";

    options.innerHTML = "";

  });

  }); // End DOMContentLoaded