var span = document.getElementsByTagName('span')[0];
span.textContent = 'interactive'; // change DOM text content
span.style.display = 'inline';  // change CSSOM property
// create a new element, style it, and append it to the DOM
var loadTime = document.createElement('p');
loadTime.textContent = 'You loaded this page on: ' + new Date();
loadTime.style.color = 'green';
document.body.appendChild(loadTime);
var cnt = 0
while (cnt++ <= 9999999) { }