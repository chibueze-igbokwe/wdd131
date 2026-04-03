let count = localStorage.getItem("reviewCount");

if (!count) count = 0;

count = Number(count) + 1;

localStorage.setItem("reviewCount", count);

const counter = document.getElementById("counter");

if (counter) {
  counter.textContent = count;
}
