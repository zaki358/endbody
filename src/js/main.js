var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




const pageTopBtn = document.querySelector(".c-btn__footer--page-top");

pageTopBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    pageTopBtn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pageTopBtn.style.opacity = "0";
  }
})




const fadeIn1 = document.querySelector(".p-service__section--training");
const fadeIn2 = document.querySelector(".p-service__section--food");
const fadeIn3 = document.querySelector(".p-introduction__area--trainer");

const cb = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('js-fadein');
      //console.log(entry.target);
      observer.unobserve(entry.target);
    } else {
      console.log("off");
      entry.target.classList.remove('js-fadein');
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}
document.addEventListener("DOMContentLoaded", function () {
  const io = new IntersectionObserver(cb, options);
  io.observe(fadeIn1);
  io.observe(fadeIn2);
  io.observe(fadeIn3);
})



