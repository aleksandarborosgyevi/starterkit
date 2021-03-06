/* SAMPLE JS FILE CONTENTS */

(function ($) {

  /* Mobile menu */
  $(function () {
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function (e) {
      $('.navigation.menu--main,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
  });

  /* Language switcher */
  $(function () {
    var languageActive = $('.block-language .links li.is-active').detach();
    languageActive.insertBefore($('.block-language .links li:first-child'));
  });

})(jQuery);
