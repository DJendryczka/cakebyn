const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon')

hamburgerIcon.addEventListener('click', ()=>{
    console.log('klik')
    mobileMenu.classList.toggle('hidden')
})

