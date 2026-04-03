// Product array (provided by assignment)
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Automated Coffee Maker" },
  { id: "jj-1969", name: "Jetpack Jacket" }
];

// Populate select menu
const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name; // value = product name (as required)
  option.textContent = product.name;
  productSelect.appendChild(option);
});
