
document.addEventListener('DOMContentLoaded', function() {
    const registrationButton = document.getElementById('registrationButton');
    const registrationModal = document.getElementById('registrationModal');
    const closeButton = document.querySelector('.close');
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');

    registrationButton.addEventListener('click', function() {
        registrationModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        registrationModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === registrationModal) {
            registrationModal.style.display = 'none';
        }
    });

    burgerMenu.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });


});

  document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: false, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3, 
                spaceBetween: 20,
            }
        }
    });
});

