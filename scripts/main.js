const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/first-image.webp") {
    myImage.setAttribute("src", "images/second-image.jpg");
  } else {
    myImage.setAttribute("src", "images/first-image.webp");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}
myButton.onclick = function () {
  setUserName();
};
