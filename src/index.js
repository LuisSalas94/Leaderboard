import './style.css';
import { getUserScores, postScore } from './modules/api.js';

const scoresContainer = document.querySelector('#container');
const submitBtn = document.querySelector('#submitBtn');
const refrestBtn = document.querySelector('#refreshBtn');

// Display Users
const displayUsers = () => {
  getUserScores().then((result) => {
    scoresContainer.innerHTML = '';
    let displayUser = result.result.map(
      (user) => `<li><span>${user.user}: ${user.score}</span></li>`,
    );
    displayUser = displayUser.join('');
    scoresContainer.innerHTML = displayUser;
    return result;
  });
};

// Clear info
const clearForm = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

// Submit User
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  if (name && score) {
    postScore(name, score);
    displayUsers();
    clearForm();
  }
});

refrestBtn.addEventListener('click', () => {
  displayUsers();
});

window.addEventListener('DOMContentLoaded', () => {
  displayUsers();
});
