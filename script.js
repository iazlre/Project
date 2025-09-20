const navLinks = document.querySelectorAll(".nav-menu .nav-link");

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle the class to show/hide the mobile menu
    document.body.classList.toggle("show-mobile-menu");
});


// Close the mobile menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 

// Close the mobile menu when any navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// make sure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rec-form");
  form.addEventListener("submit", addRecommendation);
});

function addRecommendation(event) {
  event.preventDefault();

  const text = document.getElementById("new-recommendation").value;

  if (text.trim() === "") return; // prevent empty reco

  const li = document.createElement("li");
  li.textContent = text;

  document.getElementById("recommendations-list").appendChild(li);

  alert("✅ Thank you! Your recommendation has been submitted.");

  document.getElementById("new-recommendation").value = "";
}


