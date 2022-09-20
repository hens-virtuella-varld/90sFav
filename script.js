let content = document.getElementById('content');

function appendChildElement() {
    let childElement = document.createElement('div');
    childElement.innerHTML = "I'm example code"
    content.appendChild(childElement);
}


let button = document.getElementById('button1');
button.addEventListener('click', appendChildElement);