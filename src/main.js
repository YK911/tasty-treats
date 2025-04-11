import { event } from './js/data';
import { popularRecipes } from './js/popular-recipes';

// 1. Отримати перемикач
themeSwitcher.onclick = onSwitcherClick;
// 2. Додати функцію для перемикання теми
function onSwitcherClick(event) {
  const themeStatus = event.target.checked;
  if (themeStatus) {
    // statusTheme => true => dark

    document.body.style.backgroundColor = '#161616';
    document.body.style.color = '#ffffff';
  } else {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#050505';
  }
}

// for (let i = 0; i < event.length; i++) {
//   console.log(event[i]);
// }

// for (const item of event) {
//   console.log(item);
// }

Function();
Object();
Array();

Boolean();
String();
Number();

const fruits = [];
// console.log(' fruits:', fruits);

function map(items = [], callback) {
  const arr = [];

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    const newElement = callback(element);

    arr.push(newElement);
  }

  return arr;
}

function trimDescription(text, length = 86) {
  // length = 87 chars

  return `${text.slice(0, length)}...`;
}

function createPopularRecipesMarkup(item) {
  return `<li class="popular-item" >
    <img src="${item.preview}" alt="${item.title}" />
    <h3>${item.title}</h3>
    <p>${trimDescription(item.description)}</p>
  </li>
  `;
}

function showMarkup(selector = '', markup = '') {
  const el = document.querySelector(selector);
  el.insertAdjacentHTML('beforeend', markup);
}

const markup = popularRecipes.map(createPopularRecipesMarkup);

showMarkup('.popular-items', markup.join(''));

// event.map(element => {});

// Function Declaration
function getImages(params) {}

// Function expression
const convertNamesToLowerCase = function (names) {
  const namesToLowerCase = [];
  for (const name of names) {
    namesToLowerCase.push(name.toLocaleLowerCase());
  }

  return namesToLowerCase;
};

const users = ['Mango', 'Poly', 'Ajax'];

function showNamesInLowerCase(selector, callback, users) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.warn('Can not find element');
    return;
  }
  const namesToLowerCase = callback(users);
  element.insertAdjacentHTML('beforeend', namesToLowerCase);
}

// showNamesInLowerCase('.popur', convertNamesToLowerCase, users);
