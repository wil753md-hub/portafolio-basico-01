// Inicializar AOS (animaciones al hacer scroll)
AOS.init({
    duration: 1000,
    once: true  // solo se ejecuta una vez al cargar
});

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Cambiar estilo de navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Cerrar menú móvil al hacer click en un enlace (mejora UX en celular)
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {  // solo en móvil
            bsCollapse.hide();
        }
    });
});