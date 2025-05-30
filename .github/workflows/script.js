// Menu mobile
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simulation d'envoi (remplacer par un vrai envoi AJAX)
        setTimeout(() => {
            formMessage.textContent = 'Merci pour votre message! Je vous répondrai dès que possible.';
            formMessage.classList.add('success');
            formMessage.style.display = 'block';
            contactForm.reset();
            
            // Cacher le message après 5 secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.classList.remove('success');
            }, 5000);
        }, 1000);
    });
}

// Animation au scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelector('.skills');
    if (skills) {
        const skillsPosition = skills.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillsPosition < screenPosition) {
            document.querySelectorAll('.skill').forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.opacity = '1';
                    skill.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    }
});

// Initialisation des animations
document.addEventListener('DOMContentLoaded', () => {
    // Animation des compétences
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animation des projets
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        // Déclencher l'animation après un petit délai
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 500);
    });
});