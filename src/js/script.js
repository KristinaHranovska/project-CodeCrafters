//script to Opening the mobile menu
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-mobile-open]"),
        closeModalBtn: document.querySelector("[data-mobile-close]"),
        modal: document.querySelector("[data-mobile]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

// header-scroll
window.addEventListener('scroll', function () {
    changeHeaderBackground();
    activateNavLink();
});

function changeHeaderBackground() {
    const header = document.querySelector('.header-nav');
    const headerOffsetTrigger = header.offsetTop;
    const pageOffset = window.pageYOffset;

    if (pageOffset > headerOffsetTrigger) {
        header.classList.add('js-no-transparency');
    } else {
        header.classList.remove('js-no-transparency');
    }
}

function activateNavLink() {
    const sections = document.querySelectorAll('section');
    const scroll = window.pageYOffset;

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const id = section.id;

        if (scroll >= top && scroll <= bottom) {
            const activeLink = document.querySelector(`nav a[href="#${id}"]`);
            const currentActiveLink = document.querySelector('nav a.active');

            if (currentActiveLink) {
                currentActiveLink.classList.remove('active');
            }

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// up arrow settings
document.addEventListener('DOMContentLoaded', function () {
    var upButton = document.querySelector('.up-btn');

    upButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        document.body.classList.add('scrolling');
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            upButton.classList.add('show');
        } else {
            upButton.classList.remove('show');
        }

        if (document.body.classList.contains('scrolling') && window.scrollY === 0) {
            document.body.classList.remove('scrolling');
        }
    });
});