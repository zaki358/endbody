//swiper初期化
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



//ページのトップに戻るボタン（機能）
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



//スクロール時下からスッと出てくる
const fadeIn1 = document.querySelector(".p-service__section--training");
const fadeIn2 = document.querySelector(".p-service__section--food");
const fadeIn3 = document.querySelector(".p-introduction__area--trainer");
const fadeIn4 = document.querySelector(".p-introduction__area--staff");

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

const io = new IntersectionObserver(cb, options);
io.observe(fadeIn1);
io.observe(fadeIn2);
io.observe(fadeIn3);
io.observe(fadeIn4);


//トレーナーのタブ
const trainerList = document.querySelector(".p-introduction__list--trainer");
const staffList = document.querySelector(".p-introduction__list--staff");
const trainer = document.querySelector(".p-introduction__area--trainer");
const staff = document.querySelector(".p-introduction__area--staff");

document.addEventListener("DOMContentLoaded", function () {
  trainerList.classList.add("js-tab");
  trainer.classList.add("js-tab");
})

function addClass(el1, el2, el3, el4) {
  el1.classList.add("js-tab");
  el2.classList.remove("js-tab");
  el3.classList.add("js-tab");
  el4.classList.remove("js-tab");
}

trainerList.addEventListener("click", function () {
  addClass(trainerList, staffList, trainer, staff);
});

staffList.addEventListener("click", function () {
  addClass(staffList, trainerList, staff, trainer);
});


//スクロール時ヘッダー表示
const header = document.querySelector(".p-header");
const btnHeader = document.querySelector(".c-btn__header");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    header.style.backgroundColor = "white";
    btnHeader.style.display = "block";
  } else if (window.pageYOffset < 100) {
    header.style.backgroundColor = "transparent";
    btnHeader.style.display = "none";
  }
})