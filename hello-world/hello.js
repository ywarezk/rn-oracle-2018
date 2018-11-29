// hello world with js
// insert h1 tag inside the container div

// grab the container div
const containerDiv = document.getElementById('container');

// create the h1
const h1Tag = document.createElement('h1');
h1Tag.textContent = 'hello world from js';

// connect h1 to container
containerDiv.appendChild(h1Tag);



