'use strict'

function createDom (tag = 'div') {
  let node = document.createElement(tag);
  switch (tag) {
    case 'img':
      node.setAttribute('src', '../img/logo.png');
      node.setAttribute('class', 'com-logo')
      break;
    case 'div':
      node.setAttribute('class', 'com-div')
      break;
  }
  return node;
}

function getElement(node) {
  return typeof node === 'string' ? document.querySelector(node) : node;
}

function init () {
  const navLink = getElement('.navbar');
  const homeLink = getElement('.home-link');
  const targetNode = createDom('img');
  navLink.insertBefore(targetNode, homeLink);
}

setTimeout("init()", 500);
