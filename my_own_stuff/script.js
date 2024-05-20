const content = document.querySelector(".content");

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";

content.appendChild(redText);
content.appendChild(blueHeader);

const container = document.querySelector("#container");

const newContent = document.createElement("div");

newContent.style.backgroundColor = "pink";
newContent.style.border = "4px solid black";

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";

const meTooText = document.createElement("p");
meTooText.textContent = "ME TOO!";


newContent.appendChild(divHeader);
newContent.appendChild(meTooText);

container.appendChild(newContent);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});
  



