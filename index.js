const workEl = document.getElementById('projects');
const aboutEl = document.getElementById('aboutme');

document.getElementById('work').addEventListener('click', () => {
  workEl.scrollIntoView({ behavior: "smooth" });
});

document.getElementById('about').addEventListener('click', () => {
  aboutEl.scrollIntoView({ behavior: "smooth" });
});
