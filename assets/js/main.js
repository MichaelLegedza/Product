$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

// header scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.borderBottom = "1px solid #dadde4";
    document.getElementById("header").style.padding = "5px";
  } else {
    document.getElementById("header").style.borderBottom = "0";
    document.getElementById("header").style.padding = "0";
  }
}


// Светлая и темная темы

// Функция для установки заданной темы/цветовой схемы
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// Функция для переключения между темной и светлой темой
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Функция дя быстрой загрузки
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('dark').checked = false;
  } else {
      setTheme('theme-light');
    document.getElementById('dark').checked = true;
  }
})();