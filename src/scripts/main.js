'use strict';

async function filterPromise() {
  try {
    await Promise.resolve();

    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  } catch (error) {
    const rejectionError = new Error('Promise was rejected!');

    Promise.reject(rejectionError);

    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected! ' + rejectionError.message;
    document.body.appendChild(div);
  }
}

document.querySelector('.logo').addEventListener('click', filterPromise);
