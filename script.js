//1. GetElementById
const imgElement = document.getElementById('shinchan');
console.log('By ID:', imgElement);

//2.GetElementByClassName
const paraElements = document.getElementsByClassName('my-para');
console.log('By Class:', paraElements[0]);

//3. getElementsByTagName
const liTags = document.getElementsByTagName('p');
console.log('By Tag Name:', liTags);

//4.querySelector
const myTitle = document.querySelector('.my-title');
console.log('querySelector:', myTitle);

//5.querySelectorAll
const allListItems = document.querySelectorAll('ul li');
console.log('querySelectorAll:', allListItems);

//6.innerHTML
myTitle.innerHTML = 'Learning <h6>DOM</h6>';

//7.textContent
myTitle.textContent += '(textContent added)';

//8.innerText
myTitle.innerText += ' [innerText added]';

//9.style change
myTitle.style.fontFamily='Times New Roman';
imgElement.style.border = '5px solid red';

//10.classlist
myTitle.classList.add('highlight');
myTitle.classList.remove('my-title');
myTitle.classList.toggle('new-class');
console.log('Contains class highlight:', myTitle.classList.contains('highlight'));

//11.Attribute methods
console.log('Image src:', imgElement.getAttribute('src'));
imgElement.setAttribute('alt', 'New Alt Text');
imgElement.removeAttribute('height');
console.log('Has alt attribute:', imgElement.hasAttribute('alt'));

//12.create and insert new elements
const newPara = document.createElement('p');
newPara.textContent = 'This is a dynamically created paragraph.';
document.body.appendChild(newPara);

//13.create a new element
const hr = document.createElement('hr');
document.body.insertBefore(hr, newPara);

//14.remove list
const listItemToRemove = liTags[0];
listItemToRemove.remove();


//15.removing and replacing
const newLi = document.createElement('li');
newLi.textContent = 'Replaced Item';
const parentList = document.querySelector('ol');
parentList.replaceChild(newLi, parentList.children[1]);