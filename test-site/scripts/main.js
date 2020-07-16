let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Pandas are cool, ' + storedName;
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) setUserName();
  else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Pandas are cool, ' + myName;
  }
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/panda.jpg') {
      myImage.setAttribute ('src','images/panda2.jpg');
    } else {
      myImage.setAttribute ('src','images/panda.jpg');
    }
}

myButton.onclick = function() {
  setUserName();
}
