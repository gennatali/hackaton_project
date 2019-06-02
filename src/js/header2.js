$('.burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('burger--active')
    $('.header').toggleClass('header--active')
})