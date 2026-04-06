export default function renderFront() {
  const content = document.querySelector('#content');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('bgImgToMeet');
  content.appendChild(mainContainer);
}

