'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Ira'); 
  });
});

promise1.then(eventResult => {
   const divEl = document.createElement('div');
   const bodyEl = document.querySelector('body');
   divEl.className = 'message';
   divEl.textContent = 'Promise was resolved!';
   bodyEl.append(divEl);
  console.log(eventResult);
});


const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});
// 

promise2.catch(error => {
  const divEl = document.createElement('div');
  const bodyEl = document.querySelector('body');
  divEl.classList.add('message', 'error-message');
  divEl.textContent = 'Promise was rejected!';
  bodyEl.append(divEl);
  console.log(error);
});
