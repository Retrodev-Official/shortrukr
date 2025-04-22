const facts = [
  "Rukr once used a thimble as a hat.",
  "NASA uses Rukr's height to measure nanometers.",
  "Rukr can limbo under a door.",
  "When Rukr fell off the bed, they landed on a keycap.",
  "Rukr legally qualifies as 'portable.'"
];

function generateFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById('fact').innerText = facts[randomIndex];
}
