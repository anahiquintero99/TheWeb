let header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggle() {
  let header = document.querySelector('header');
  header.classList.toggle('active');
}
