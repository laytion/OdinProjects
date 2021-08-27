// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
// content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const red = document.createElement('div');
// red.classList.add('red');
red.style.cssText = 'color: red;';
red.textContent = "Hey I'm red!";

const h3Blue = document.createElement('h3');
// h3Blue.classList.add('h3Blue');
h3Blue.style.cssText = 'color: blue';
h3Blue.textContent = "I'm a blue h3!"

const div = document.createElement('div');
// div.classList.add('div');
div.style.cssText = 'border: 1px solid black; background-color: pink';

const h1 = document.createElement('h1');
// h1.classList.add('h1');
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(red);
container.appendChild(h3Blue);
div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);
