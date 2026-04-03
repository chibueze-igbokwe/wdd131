// Get existing count or start at 0
let count = localStorage.getItem("reviewCount");

if (!count) {
  count = 0;
}

// Convert to number and increment
count = Number(count) + 1;

// Save back to localStorage
localStorage.setItem("reviewCount", count);

// Display on page
document.getElementById("counter").textContent = count;
