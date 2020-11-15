const navList = document.querySelector('.navbar .nav-lists');
const hamburger = document.querySelector('.hamburger.fas');

hamburger.addEventListener('click', () => {
	navList.classList.toggle('active');
});
