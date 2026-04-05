import "./style.css";

function toMeet() {
  const content = document.querySelector('#content');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('bgImgToMeet');
  content.appendChild(mainContainer);

}

toMeet();