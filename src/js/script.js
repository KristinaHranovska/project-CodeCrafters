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


