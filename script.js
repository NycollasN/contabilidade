// Infinity Contabilidade & Consultoria - Interactive JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 3. Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (link) link.classList.add('active');
            } else {
                if (link) link.classList.remove('active');
            }
        });
    });
});

// 4. Form Submission & WhatsApp Redirection
function handleFormSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;
    const empresa = document.getElementById('empresa').value || 'Não informada';
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value || 'Sem detalhes adicionais';

    // Format text for WhatsApp URL
    const text = `*Novo Contato via Site - Infinity*%0A%0A` +
                 `*Nome:* ${encodeURIComponent(nome)}%0A` +
                 `*WhatsApp:* ${encodeURIComponent(whatsapp)}%0A` +
                 `*E-mail:* ${encodeURIComponent(email)}%0A` +
                 `*Empresa:* ${encodeURIComponent(empresa)}%0A` +
                 `*Serviço:* ${encodeURIComponent(servico)}%0A` +
                 `*Mensagem:* ${encodeURIComponent(mensagem)}`;

    // Infinity WhatsApp Number
    const phoneNumber = "5583991657499";
    const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    alert('Obrigado pelo contato! Você será redirecionado para o nosso WhatsApp com os dados preenchidos.');
    
    window.open(waUrl, '_blank');
}


const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Alternar abertura do menu
    function toggleMenu() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      
      // Impede a rolagem da página quando o menu está aberto
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'initial';
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Fechar o menu ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });


    // meu video 

    document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('hero-video');
    const heroSection = document.getElementById('home');

    // Usando Intersection Observer para verificar se a section está visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o topo/section está visível na tela, roda o vídeo
                video.play();
            } else {
                // Quando rolar para baixo e a section sair de vista, pausa o vídeo
                video.pause();
            }
        });
    }, {
        threshold: 0.1 // Pausa assim que 90% da seção sair da tela
    });

    observer.observe(heroSection);
});