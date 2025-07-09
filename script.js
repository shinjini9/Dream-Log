const form = document.getElementById("dreamForm");
const board = document.getElementById("dreamBoard");

let dreams = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const mood = document.getElementById("mood").value;
  const theme = document.getElementById("theme").value;
  const summary = document.getElementById("summary").value.trim();

  if (summary) {
    const dream = {
      id: Date.now(),
      mood,
      theme,
      summary,
      timestamp: new Date()
    };

    dreams.push(dream);
    displayDreams();
    form.reset();
  }
});

function displayDreams() {
  board.innerHTML = "";
  dreams.forEach(dream => {
    const card = document.createElement("div");
    card.className = `dream-card ${dream.mood}`;
    card.innerHTML = `
      <strong>Mood:</strong> ${dream.mood}<br>
      <strong>Theme:</strong> ${dream.theme}<br>
      <em>${dream.summary}</em>
    `;
    board.appendChild(card);
  });
}
