const content = document.getElementById('content');

function appendChildElement() {
    const childElement = document.createElement('div');
    childElement.innerHTML = "I'm example code"
    content.appendChild(childElement);
}

function clickBox() {
    const box = document.getElementById('box');
    box.classList.toggle('box-active');
}


const box = document.getElementById('box');
box.addEventListener('click', clickBox)

const button = document.getElementById('button1');
button.addEventListener('click', appendChildElement);



