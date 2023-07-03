const bgColor = ["4d412a", "4d2a3d", "4d2f2a", "2a4d37", "0a4b65"];

const randomIndex = Math.floor(Math.random() * bgColor.length);
const randomColor = bgColor[randomIndex];

const body = document.querySelector("#main-body");
body.style.backgroundColor = `#${randomColor}`;
