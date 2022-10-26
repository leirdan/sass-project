const text = document.getElementById("text");
const btnContinue = document.getElementById("btn-continue");
const div = document.getElementById("form-texts");
const button = document.createElement(`button`);
button.classList = "btn";
const textButton = document.createTextNode(`Do you wanna re-roll?`);
const attributes = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

const renderTextContinue = () => {
  for (let i = 0; i < 6; i++) {
    text.innerHTML += `Your value for ${attributes[i]} is... <br>`;
  }
  button.appendChild(textButton);
  div.appendChild(button);
  btnContinue.disabled = true;
};
