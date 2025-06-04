let xp = JSON.parse(localStorage.getItem("xpData")) || {};

document.getElementById("xpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const skill = document.getElementById("skill").value;
  const points = parseInt(document.getElementById("points").value);

  if (!xp[skill]) xp[skill] = 0;
  xp[skill] += points;

  localStorage.setItem("xpData", JSON.stringify(xp));
  updateDisplay();
  e.target.reset();
});

function updateDisplay() {
  const display = document.getElementById("xpDisplay");
  display.innerHTML = "<h2>XP Totals</h2>";
  for (const skill in xp) {
    display.innerHTML += `<p><strong>${skill}</strong>: ${xp[skill]} XP</p>`;
  }
}

updateDisplay();
