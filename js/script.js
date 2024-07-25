document.addEventListener('DOMContentLoaded', function() {
    // Código do menu hambúrguer
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    function toggleMenu() {
        if (window.getComputedStyle(nav).display === 'none' || nav.style.display === 'none') {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    }

    hamburgerMenu.addEventListener('click', toggleMenu);

    function adjustMenu() {
        if (window.innerWidth > 992) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    }

    window.addEventListener('resize', adjustMenu);
    adjustMenu();

    // Código do accordion
    const accordionHeaders = document.querySelectorAll('.header-accordion');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.arrow-icon');

            // Alternar a visibilidade do conteúdo
            if (header.classList.contains('open')) {
                content.style.maxHeight = null;
                header.classList.remove('open');
                arrow.src = '../img/fi-rr-caret-down.svg';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                header.classList.add('open');
                arrow.src = '../img/fi-rr-caret-up.svg';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="politica"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            checkboxes.forEach(box => {
                if (box !== this) box.checked = false;
            });
            toggleOrganizacaoGroup();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function adjustScroll() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#')) {
            const targetElement = document.querySelector(hash); // Seleciona o elemento alvo

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Posição original do alvo
                const offsetPosition = targetPosition - 200; // Ajusta a posição subtraindo 100px

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Rola suavemente para a posição ajustada
                });
            }
        }
    }

    // Adiciona o evento de clique para todas as âncoras
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            const targetId = event.currentTarget.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault(); // Impede o comportamento padrão de clique na âncora
                history.pushState(null, null, targetId); // Atualiza a URL sem recarregar a página
                adjustScroll(); // Ajusta a rolagem
            }
        });
    });

    // Ajusta a rolagem quando a página é carregada
    window.addEventListener('load', adjustScroll);
    window.addEventListener('popstate', adjustScroll); // Ajusta a rolagem quando o histórico do navegador muda
});

