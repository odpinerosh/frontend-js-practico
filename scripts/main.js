const deskTopMenu = document.getElementById('desktop-menu');
const navBarMail = document.getElementById('nv-email');

navBarMail.addEventListener('click', () => {
    console.log('Se hizo un buen clic');
    deskTopMenu.classList.toggle('visible');
})

