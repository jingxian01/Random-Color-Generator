const complexColor = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");
const button = document.querySelector("#btn");
const hash = document.querySelector("#hash");

function getRandomNumber() {
  return Math.floor(Math.random() * complexColor.length);
}

function hexToRgb(hexString) {
  const rgbString = hexString.match(/.{1,2}/g);
  const rgbNum = [
    parseInt(rgbString[0], 16),
    parseInt(rgbString[1], 16),
    parseInt(rgbString[2], 16),
  ];
  return rgbNum;
}

button.addEventListener("click", () => {
  let hexText = "";

  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomNumber();
    hexText += complexColor[randomNumber];
  }

  let hash_hexText = "#";
  hash_hexText += hexText;
  document.body.style.backgroundColor = hash_hexText;

  hash.style.color = hash_hexText;
  hex.style.color = hash_hexText;
  hex.textContent = hexText;

  rgbText = hexToRgb(hexText);
  rgb.style.color = hash_hexText;
  rgb.textContent = rgbText;
});
