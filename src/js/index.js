const toggleButton= document.getElementsByClassName('toggle_button')[0]

const navLinks=document.getElementsByClassName('navbar_links')[0]

toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
})