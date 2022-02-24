/* eslint linebreak-style: ["error", "windows"] */
const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
const topnav = document.getElementById('topnav');

document.onclick = function a(x) {
  if (x.target.id !== 'navbar' && x.target.id !== 'toggle' && x.target.id !== 'topnav') {
    toggle.classList.remove('active');
    topnav.classList.remove('active');
    navbar.classList.remove('active');
  }
};

toggle.onclick = function b() {
  toggle.classList.toggle('active');
  topnav.classList.toggle('active');
};
