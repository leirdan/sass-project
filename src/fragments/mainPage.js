const text = document.getElementById("text");
const btnContinue = document.getElementById("btn-continue");
const div = document.getElementById("form-texts");
const button = document.createElement(`button`);
const label = document.getElementById("label");
button.classList = "btn-primary";
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
  label.innerHTML += `Wait... first tell me your name.`;
  for (let i = 0; i < 6; i++) {
    text.innerHTML += `Your value for ${attributes[i]} is... <br>`;
  }
  button.appendChild(textButton);
  div.appendChild(button);
  btnContinue.disabled = true;
};
