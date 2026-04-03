const products = [
  { id: "1", name: "Fire Incident" },
  { id: "2", name: "Chemical Spill" },
  { id: "3", name: "Injury" }
];

const select = document.getElementById("product");

products.forEach(p => {
  const option = document.createElement("option");
  option.value = p.id;
  option.textContent = p.name;
  select.appendChild(option);
});
