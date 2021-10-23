$(function () {
  $(".header__item").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});

$('.product__catalog').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '<button class="product__arrow product__arrow--next"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14L8 7.5L1 0.999999" stroke="#282A30" stroke-width="2" stroke-linecap="round"/></svg></button>',
  prevArrow: '<button class="product__arrow product__arrow--prev"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14L8 7.5L1 0.999999" stroke="#282A30" stroke-width="2" stroke-linecap="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
}
)

$('.header__burger').on('click', function () {
  $('.header__nav').addClass('header__nav--active')
})

$('.header__close').on('click', function () {
  $('.header__nav').removeClass('header__nav--active')
})