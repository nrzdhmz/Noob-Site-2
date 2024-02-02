document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add("header-fixed");
    } else {
      header.classList.remove("header-fixed");
    }
  });
});