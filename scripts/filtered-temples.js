// Temple Array (9+ items including 3 added)
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Utah, USA",
    dedicated: "1893",
    area: 253000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Hawaii, USA",
    dedicated: "1919",
    area: 42100,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005",
    area: 11500,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017",
    area: 44000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Utah, USA",
    dedicated: "1888",
    area: 74792,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980",
    area: 52590,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple.jpg"
  },
  {
    name: "Lagos Nigeria Temple",
    location: "Lagos, Nigeria",
    dedicated: "2024",
    area: 12000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple.jpg"
  }
];

// DOM elements
const container = document.getElementById("temple-container");

// Function to display temples
const displayTemples = (templeList) => {
  container.innerHTML = "";

  templeList.forEach(t => {
    container.innerHTML += `
      <div class="card">
        <h2>${t.name}</h2>
        <p>${t.location}</p>
        <p>Dedicated: ${t.dedicated}</p>
        <p>Area: ${t.area.toLocaleString()} sq ft</p>
        <img src="${t.image}" alt="${t.name}" loading="lazy">
      </div>
    `;
  });
};

// FILTERING
const filterTemples = (type) => {
  let filtered = [];

  if (type === "old") {
    filtered = temples.filter(t => Number(t.dedicated) < 1900);
  } else if (type === "new") {
    filtered = temples.filter(t => Number(t.dedicated) > 2000);
  } else if (type === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (type === "small") {
    filtered = temples.filter(t => t.area < 10000);
  } else {
    filtered = temples;
  }

  displayTemples(filtered);
};

// Event listeners
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    filterTemples(btn.dataset.filter);
  });
});

// Initial load
displayTemples(temples);

// Footer
document.getElementById("footer-text").textContent =
  `© ${new Date().getFullYear()} | Last Modified: ${document.lastModified}`;
