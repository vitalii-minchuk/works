
console.log('hello')
const imgs = document.querySelectorAll('.flex-card');

imgs[0].classList.add('active');

function addClass($event) {
  removeActiveClasse();
  let target = $event.currentTarget;
  target.classList.add('active');
}

function removeActiveClasse() {
  let elem = document.querySelector('.active');

  if (elem) {
    elem.classList.remove('active');
  }
}

imgs.forEach(img => {
  img.addEventListener('click', addClass)
})
