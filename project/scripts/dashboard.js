const getCount = () => {
  return Number(localStorage.getItem("reviewCount")) || 0;
};

const updateUI = () => {
  const count = getCount();

  const summary = document.getElementById("summary");

  if (count > 5) {
    summary.textContent = `High incident volume: ${count}`;
  } else {
    summary.textContent = `Normal activity: ${count}`;
  }
};

document.getElementById("refreshBtn").addEventListener("click", updateUI);

updateUI();
