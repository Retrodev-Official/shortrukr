const facts = [
  "Rukr once got mistaken for a LEGO minifig.",
  "When Rukr sits on a chair, their legs dangle like a toddler.",
  "The ants asked Rukr to please stop blocking their tunnels.",
  "If Rukr fell in a puddle, they might need scuba gear.",
  "Rukr’s shadow is taller than they are.",
  "You could fit Rukr in your pocket. Twice.",
  "Rukr gets lost in tall grass—at the park.",
  "Rukr walks under tables and doesn’t duck.",
  "Rukr uses a thimble as a helmet.",
  "Rukr wears toddler-sized Crocs.",
  "Rukr got ID’d at the bounce house.",
  "Birds try to nest in Rukr's hair thinking it’s a shrub.",
  "Rukr once got stuck in a vending machine coin return.",
  "Rukr can't ride half the rides at a kids' amusement park.",
  "Rukr uses a cereal box as a desk.",
  "Rukr's hoodie is actually a sock with sleeves.",
  "Rukr once tripped on a pebble and disappeared for 3 minutes.",
  "Rukr uses a toothpick as a sword in Minecraft cosplay.",
  "Rukr asked for a booster seat at a fast food place.",
  "Rukr’s high five hits most people in the shin.",
  "Rukr gets winded climbing up a curb.",
  "Rukr can use an iPhone as a full-body mirror.",
  "Rukr once got caught in a hamster wheel.",
  "Rukr gets confused for a Funko Pop.",
  "Rukr's footprints are mistaken for cat tracks.",
  "Rukr rides in shopping carts for fun. And necessity.",
  "Rukr was once mistaken for a garden gnome decoration.",
  "Rukr has to jump to reach the doorbell.",
  "Rukr’s favorite ride is the Roomba.",
  "When Rukr goes swimming, floaties come standard.",
  "Rukr wears toddler jeans as full-length pants.",
  "Rukr uses shoeboxes as storage lockers.",
  "Rukr can't reach the top shelf of a mini fridge.",
  "Rukr is the only person who uses the bottom bunk as a loft.",
  "Rukr needs GPS to navigate grass blades.",
  "Rukr once asked an ant for directions.",
  "Rukr gets mistaken for a lost plushie.",
  "Rukr once drowned in a bowl of cereal.",
  "Rukr sits cross-legged inside a teacup.",
  "A squirrel challenged Rukr to a height contest... and won.",
  "Rukr is the reason ladders exist in 2D platformers.",
  "Rukr uses a pizza slice as a blanket.",
  "Rukr gets carried by balloons accidentally.",
  "Rukr has to climb stairs to get into a toy car.",
  "Rukr once got denied access to a toddler-only playground.",
  "Rukr uses a ruler as a selfie stick.",
  "Rukr’s biggest fear? Escalators.",
  "Rukr once got locked in a drawer. Accidentally.",
  "Rukr’s mirror only reflects from the chin down.",
  "Even AI thinks Rukr’s short. And we don’t judge."
];

function generateFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factText = document.getElementById('fact');
  factText.classList.remove('fade');
  void factText.offsetWidth; // Re-trigger animation
  factText.textContent = facts[randomIndex];
  factText.classList.add('fade');
}
