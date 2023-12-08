(function(){
  const partners = new Swiper('.partners-slider__swiper', {
    speed: 400,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 4500,
    },
    slidesPerView: 'auto',
    preloadImages: false,
    lazy: true,
    watchSlidesProgress: true,
    //grabCursor: true,
  });
}());
