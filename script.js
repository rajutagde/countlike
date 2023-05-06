// Get references to the button and the count div
const likeBtn = document.getElementById("like-btn");
const countDiv = document.getElementById("count-div");

// Retrieve the count value from localStorage
let count = localStorage.getItem("count") || 0;

// Update the text of the count div with the retrieved count value
countDiv.textContent = count;

// Add a click event listener to the button
likeBtn.addEventListener("click", function() {
  // Increase or decrease the count based on whether the button has the "clicked" class or not
  if (likeBtn.classList.contains("clicked")) {
    count--;
    likeBtn.classList.remove("clicked");
  } else {
    count++;
    likeBtn.classList.add("clicked");
  }

  // Save the updated count value to localStorage
  localStorage.setItem("count", count);

  // Update the text of the count div with the updated count value
  countDiv.textContent = count;

  // Change the background color of the button
  if (likeBtn.classList.contains("clicked")) {
    likeBtn.style.backgroundColor = "red";
  } else {
    likeBtn.style.backgroundColor = "";
  }
});
