const simpleColor = [
  "brown",
  "blue",
  "cyan",
  "grey",
  "green",
  "magenta",
  "orange",
  "purple",
  "red",
  "yellow",
];

const color = document.querySelector("#color");
const button = document.querySelector("#btn");

function getRandomNumber() {
  return Math.floor(Math.random() * simpleColor.length);
}

button.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = simpleColor[randomNumber];
  color.style.color = simpleColor[randomNumber];
  color.textContent = simpleColor[randomNumber];
});
