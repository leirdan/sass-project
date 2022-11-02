const textResult = document.getElementById("text-result");
const btnStart = document.getElementById("btn-start");
const div = document.getElementById("form-texts");
const btnReroll = document.createElement(`button`);
const textBtnReroll = document.createTextNode(`Yes, I'm insecure..`);
const btnContinue = document.createElement(`button`);
const textBtnContinue = document.createTextNode(`No, I'm ready.`);
const btnSubmitName = document.createElement(`button`);
const label = document.getElementById("label");
const input = document.createElement("input");
const question = document.getElementById("question");
input.id = "name";
input.nodeType = "text";
btnContinue.classList = "btn btn-primary";
btnReroll.classList = "btn btn-warning";
btnSubmitName.classList = "btn btn-secondary mt-3 text-center";
btnSubmitName.textContent = "Send";

const attributes = [
  "Strength",
  "Dexterity",
  "Constituion",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

const rollDices = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let values = [];
let number = 0;
for (let i = 0; i < attributes.length; i++) {
  number = rollDices(3, 18);
  values.push(number);
}

const renderTextContinue = () => {
  label.innerHTML = `Wait... first tell me your name.`;
  div.appendChild(input);
  div.appendChild(btnSubmitName);
};

btnSubmitName.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  if (name) {
    renderDices(name);
  } else {
    alert("Insert your name!");
  }
  btnReroll.onclick = renderDices(name);
});

const renderDices = (name) => {
  div.removeChild(label);
  div.removeChild(input);
  div.removeChild(btnSubmitName);
  textResult.innerHTML += `${name}, here are your attributes: <br> `;
  for (let i = 0; i < 6; i++) {
    textResult.innerHTML += `Your ${attributes[i]} is ${values[i]}. <br>`;
  }
  question.innerHTML = `Do you wanna re-roll?`;
  btnReroll.appendChild(textBtnReroll);
  btnContinue.appendChild(textBtnContinue);
  div.appendChild(btnReroll);
  div.appendChild(btnContinue);
  btnStart.disabled = true;
};
