function toggleHeader() {
    $('.header').toggleClass('header--active');
}

$('.burger').on('click', function(e) {
    e.preventDefault;
    toggleHeader();
});

$('.nav__list-link').on('click', function(e) {
    toggleHeader();
});

$('.header .button').on('click', function(e) {
    toggleHeader();
});

$('.header__scrolldown').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#introduction').offset().top
    }, 500);
});