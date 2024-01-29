var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");
var storyText =
  "On a chilly day, :insertx: decided to explore :inserty:. As they reached their destination, a peculiar event unfolded — :insertz:. Bob witnessed the entire incident, but it took him by surprise — :insertx: had a collection of rare artifacts, and the day was unusually cool.";
var insertX = ["Albert Einstein", "Cleopatra", "Batman"];
var insertY = ["an ancient library", "a hidden cave", "a magical realm"];
var insertZ = [
  "unleashed a swarm of fireflies",
  "discovered a hidden portal",
  "summoned a gentle breeze",
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function replacePlaceholder(originalString, placeholder, replacement) {
  return originalString.split(placeholder).join(replacement);
}

function generateStory() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = replacePlaceholder(newStory, ":insertx:", xItem);
  newStory = replacePlaceholder(newStory, ":inserty:", yItem);
  newStory = replacePlaceholder(newStory, ":insertz:", zItem);

  if (customName.value.trim() !== "") {
    newStory = replacePlaceholder(newStory, "Bob", customName.value.trim());
  }

  if (document.getElementById("metric").checked) {
    var weight = (300 * 0.453592).toFixed(2);
    newStory = replacePlaceholder(
      newStory,
      "300 pounds",
      weight + " kilograms"
    );

    var temp = (((94 - 32) * 5) / 9).toFixed(2);
    newStory = replacePlaceholder(
      newStory,
      "94 fahrenheit",
      temp + " celsius"
    );
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}

randomize.addEventListener("click", generateStory);
