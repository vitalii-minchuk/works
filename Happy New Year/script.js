
const searchOpen = document.querySelector('#openSearchFormBtn');
const searchForm = document.querySelector('.search__form');
const menuOpen = document.querySelector('#burgerIcon');
const menu = document.querySelector('.header__menu-list');

searchOpen.addEventListener('click', () => {
  menu.classList.remove('active');
  menuOpen.classList.remove('fa-times');
  searchOpen.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
});

menuOpen.addEventListener('click', () => {
  searchOpen.classList.remove('fa-times');
  searchForm.classList.remove('active');
  menuOpen.classList.toggle('fa-times');
  menu.classList.toggle('active');
});


window.onscroll = () => {
  searchOpen.classList.remove('fa-times');
  searchForm.classList.remove('active');
  menu.classList.remove('active');
  menuOpen.classList.remove('fa-times');

  if (window.scrollY > 600) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  let value = (window.scrollY / 10);
  console.log(value)
  document.querySelector('.mountains').style.bottom = `-${value}%`
  document.querySelector('.home__content').style.bottom = `${value * 1.5}%`
  document.querySelector('.moon').style.marginTop = `-${value}%`
  document.querySelector('.cloud-1').style.left = `-${value}%`
  document.querySelector('.cloud-2').style.right = `-${value}%`

  
};


