let xp = JSON.parse(localStorage.getItem("xpData")) || {};

document.getElementById("xpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const skill = document.getElementById("skill").value;
  const points = parseInt(document.getElementById("points").value);

  if (!xp[skill]) xp[skill] = 0;
  xp[skill] += points;

  localStorage.setItem("xpData", JSON.stringify(xp));
  function updateDisplay() {
  const display = document.getElementById("xpDisplay");
  display.innerHTML = "<h2>XP Totals</h2>";
  for (const skill in xp) {
    const level = Math.floor(xp[skill] / 100);
    const xpToNext = 100 - (xp[skill] % 100);
    display.innerHTML += `
      <div>
        <strong>${skill}</strong>: Level ${level} (${xp[skill]} XP)
        <div style="background:#333; border-radius:4px; overflow:hidden; margin:4px 0;">
          <div style="width:${(xp[skill] % 100)}%; background:#4caf50; height:10px;"></div>
        </div>
        <small>${xpToNext} XP to next level</small>
      </div>
    `;
  }
}
();
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
