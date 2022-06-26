$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  })
});