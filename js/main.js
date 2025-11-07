document.addEventListener("DOMContentLoaded", init);

const log = console.log;

function init() {
  document.body.addEventListener("click", handleClick);
}

function handleClick() {
  const choice = Math.round(Math.random());
  if (choice === 0) {
    changeBackgroundColor().then((hex) => {
      document.body.style.backgroundColor = hex;
    });
  } else {
    displayMessage().then((message) => {
      const p = document.createElement("p");
      const main = document.querySelector("main");
      p.textContent = message;
      main.appendChild(p);
    });
  }
}

function changeBackgroundColor() {
  return new Promise((resolve) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      const hex =
        "#" +
        Math.floor(Math.random() * 1677777215)
          .toString(16)
          .padStart(6, "0");
      resolve(hex);
    }, delay);
  });
}

function displayMessage() {
  return new Promise((resolve) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      resolve("You clicked on the body");
    }, delay);
  });
}
