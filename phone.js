/* 二級選單開合 */
$(function () {

    var subMenu = $(".sub")
  
    $(".sub").click(function () {
  
      subMenu.not(this).removeClass("open");
      $(this).toggleClass("open");
  
    });
  
    /* 手機選單開合 */
    $(".header__mobileBtn").click(function () {
      $(".header__mobileMenu").addClass("open");
  
    });
  
    $(".out__cancel").click(function () {
      $(".header__mobileMenu").removeClass("open");
    });
  
    $(".menu__travel").click(function () {
      $(".header__mobileMenu").removeClass("open");
    });
  
    $(".menu__travel--money").click(function () {
      $(".header__mobileMenu").removeClass("open");
    });

});