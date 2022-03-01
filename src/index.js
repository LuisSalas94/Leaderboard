import './style.css';
import users from './modules/users.js';

const container = document.querySelector('#container');

window.addEventListener('DOMContentLoaded', () => {
  let displayUsers = users.map(
    (user) => `
  <li><span>${user.userName}: ${user.userScore}</span></li>
    `,
  );
  displayUsers = displayUsers.join('');
  container.innerHTML = displayUsers;
});
