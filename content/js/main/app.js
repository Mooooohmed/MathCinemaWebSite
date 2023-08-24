// when I refreshed the page start from the top
document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0); // Scroll to the top of the page
  window.localStorage.removeItem("citiesbtn");
  window.localStorage.removeItem("getStartedPrimary");
  window.localStorage.removeItem("getStartedPrep");
  window.localStorage.removeItem("getStartedsec");
});
// .................login teacher accounts............
const teacherNavAccounts = document.querySelectorAll(".nav__menu--acount");
// console.log(teacherNavAccounts);
const teacherSpanRegister = document.querySelectorAll(".nav__span--acount");
// console.log(teacherSpanRegister);
const teacherNavRegister = document.querySelectorAll(".nav__register");
// console.log(teacherNavRegister);
const teacherNavEnvolpe = document.querySelectorAll(".nav__login");
// console.log(teacherNavEnvolpe);
teacherNavRegister.forEach(function (ele) {
  ele.addEventListener("click", function () {
    teacherNavEnvolpe.forEach(function (item) {
      item.classList.toggle("d-none");
    });
    teacherSpanRegister.forEach(function (element) {
      element.classList.toggle("nav__span--active");
    });
  });
});
document.addEventListener("click", function (event) {
  teacherNavAccounts.forEach(function (menu, index) {
    if (!menu.contains(event.target)) {
      teacherNavEnvolpe[index].classList.add("d-none");
    }
  });
});
// ..........................................
// Burger menu
const BurgerMenu = document.querySelector(".menu-icon");
const BurgerFirstSpan = document.querySelector(".menu-icon span:first-child");
const BurgerMiddleSpan = document.querySelector(".menu-icon span:nth-child(2)");
const BurgerLastSpan = document.querySelector(".menu-icon span:last-child");
BurgerMenu.addEventListener("click", function () {
  BurgerFirstSpan.classList.toggle("span-clockwize");
  BurgerMiddleSpan.classList.toggle("span-opacity");
  BurgerLastSpan.classList.toggle("span-anticlockwize");
});
$(".menu-icon").click(function () {
  // console.log("hello world");
  // $("#acrordion-11").toggle(500);
  $(".menu-envelop").slideToggle(500);
  // $("#acrordion-11").fadeToggle(500);
});
// .............................
AlertUnAvilable = document.querySelectorAll(".alert-unavilable");
// console.log(AlertUnAvilable);
AlertUnAvilable.forEach(function (link) {
  link.addEventListener("click", function () {
    window.alert(
      "sorry sign up is unavailable right now, kindly send your cv to supermaged93@hotmail.com and we will contact you"
    );
  });
});
// .................................
const linkToFooter = document.querySelectorAll("#contact-link");
// console.log(linkToFooter);
const Footers = document.querySelectorAll("footer");
// console.log(Footers);
linkToFooter.forEach(function (link) {
  link.addEventListener("click", function () {
    Footers.forEach(function (footer) {
      const computedStyle = window.getComputedStyle(footer);
      // console.log(computedStyle);
      if (computedStyle.getPropertyValue("display") !== "none") {
        // console.log(footer.id);
        const href = "#" + footer.id;
        window.location.href = href;
      }
      else {
        link.removeAttribute("href");
      }
    });
  });
});
// ..........................................
const heroSection = document.querySelector(".welcome");
// console.log(heroSection);
const ObserverTeachersCounter = document.querySelector(".category__envelop");
// const counterTeachers = document.querySelector(".category__statistics");
// console.log(counterTeachers);
const contners = document.querySelectorAll(".category__statistics-value");
// console.log(contners);
const increment = 16;
function AnimatedCounter(element) {
  const TargetValue = Number(element.getAttribute("data-count"));
  let InitialValue = Number(element.textContent);

  const intervalId = setInterval(() => {
    if (InitialValue < TargetValue) {
      InitialValue += increment;
      element.textContent = Math.ceil(InitialValue);
    } else {
      element.textContent = TargetValue;
      clearInterval(intervalId);
    }
  }, 60);
}

// .................................................
// what I leanerd from Jhons course
// Jhons course section 13 class 197 (Observer Ai)
// Jhons course section 13 class 198 (reveal sections)
// Jhons course section 13 class 199 (slider)
// .................................................
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     // console.log(entry);
//   });
// };
// // this call backfunction will be call when ever the intersection of
// // the target element happens with the root in thershold area
// // ...
// // entries is the array of thershold
// const obsOptions = {
//   root: null,
//   // root is the element that we want the targent element to intersect with it
//   // null means that the targent element intersect with the veiw board
//   // thershold: 0.1, // 0.1=10%
//   // thershold is the persentage of intersection
//   // thershold: [0, 0.1],
//   thershold: 0, // means whhn HeroSection  out of the view
// };

// const navObserver = new IntersectionObserver(
//   counterTeachers,
//   obsOptions,
//   obsCallback
// );

const HeroObserver = new IntersectionObserver(
  function (entries) {
    entry = entries[0]; // isIntersecting is a property in entries[0] and its value is true or false
    // console.log(entry);
    if (entry && entry.isIntersecting) {
      contners.forEach((ele) => {
        AnimatedCounter(ele);
      });
    }
  },
  {
    root: null,
    threshold: 0.35,
  }
);
HeroObserver.observe(ObserverTeachersCounter);
// .................................................
// .................................................
//  (reveal sections)  //
// .................................................
// .................................................
const sectionsReveal = document.querySelectorAll(".reveal-section");
// console.log(sectionsReveal);

const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      observer.unobserve(entry.target);
    } else {
      return;
    }
  },
  {
    root: null,
    threshold: 0.07,
  }
);
sectionsReveal.forEach((ele) => {
  ele.classList.add("hidden");
  sectionObserver.observe(ele);
});
// .................................................
// .................................................
// slider //
// .................................................
// .................................................

const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".slider__slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const maxSlide = slides.length;
let currentSlide = 0;
// .........................  function .....................
const RunTheSilder = function () {
  // ....functions.....
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `
    <button class="dots__dot" data-slide="${i}"></button>
    
    `
      );
    });
  };
  const activeDots = function (input) {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });
    document
      .querySelector(`.dots__dot[data-slide="${input}"]`)
      .classList.add("dots__dot--active");
  };
  // console.log(document.querySelector(`.dots__dot[data-slide="0"]`));
  goToSlide = function (slide) {
    slides.forEach(function (ele, index) {
      ele.style.transform = `translateX(${(index - slide) * 100}%)`; // 0 100% 200% 300% ...
    });
  };
  initalSlideShow = function () {
    createDots();
    goToSlide(0);
    activeDots(0);
  };
  initalSlideShow();
  nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activeDots(currentSlide);
  };
  prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activeDots(currentSlide);
  };
  // ....events.....
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    // console.log("true");
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
    }
  });
  dotContainer.addEventListener("click", function (e) {
    // console.log("yes");
    if (e.target.classList.contains("dots__dot")) {
      // console.log("dot");
      const numOfActiveDot = e.target.dataset.slide;
      // console.log(dotSlide);
      goToSlide(numOfActiveDot);
      activeDots(numOfActiveDot);
    }
  });
};
RunTheSilder();
// ...............................................................
// ...............................................................
// ..............................اضافة تأثير الاختيار من المحافظات علي صفحة الفلاتر .....................................................
// 1. send i to the localStorage
// 2. in the filterpage recall the localstorage
// 3. if it contains i value then apply
// 4. ater use the localStorage delete it so that it becomes clear and ready for a new loop
const egyptianCities = document.querySelector(".category__map-cities");
const goCitiesBtn = document.querySelector(".category__map-gobtn");
const allCities = document.querySelectorAll(".category__map-name");
const allCitiesBtn = document.querySelectorAll(".category__map-citybtn");
window.localStorage.removeItem("citiesbtn"); //so that when refresh the page the store is empty
egyptianCities.addEventListener("click", function (ele) {
  // console.log("yes");
  // لانه ممكن يدوس بره
  allCitiesBtn.forEach((element) => {
    if (
      element.textContent.replace(/\s/g, "").toLowerCase() ===
      ele.target.textContent.replace(/\s/g, "").toLowerCase()
    ) {
      for (let i = 0; i < allCitiesBtn.length; i++) {
        if (
          allCitiesBtn[i].textContent.replace(/\s/g, "").toLowerCase() ===
          ele.target.textContent.replace(/\s/g, "").toLowerCase()
        ) {
          // console.log("ok");
          // the style is added to Li not the btn so forEach failed
          allCities[i].classList.toggle("category__map-activebtn");
        } else {
          allCities[i].classList.remove("category__map-activebtn");
        }
      }
    }
  });
});
// ..............local Storage (1)...................
goCitiesBtn.addEventListener("click", function () {
  // console.log("yes");
  for (let j = 0; j < allCities.length; j++) {
    if (allCities[j].classList.contains("category__map-activebtn")) {
      // console.log("fine");
      window.localStorage.setItem("citiesbtn", j);
      break;
    } else {
      window.localStorage.removeItem("citiesbtn");
    }
  }
});
// ..............local Storage (2)...................
primaryBtn = document.querySelector(`[data-grade ="primary stage"]`);
primaryBtn.addEventListener("click", function () {
  window.localStorage.setItem("getStartedPrimary", "primary stage");
  window.localStorage.removeItem("getStartedPrep");
  window.localStorage.removeItem("getStartedsec");
});

// ..............local Storage (3)...................
prepBtn = document.querySelector(`[data-grade ="preparatory stage"]`);
prepBtn.addEventListener("click", function () {
  window.localStorage.setItem("getStartedPrep", "preparatory stage");
  window.localStorage.removeItem("getStartedPrimary");
  window.localStorage.removeItem("getStartedsec");
});

// ..............local Storage (4)...................
secBtn = document.querySelector(`[data-grade ="secondary stage"]`);
secBtn.addEventListener("click", function () {
  window.localStorage.setItem("getStartedsec", "secondary stage");
  window.localStorage.removeItem("getStartedPrimary");
  window.localStorage.removeItem("getStartedPrep");
});
// ............................................
const findTeacher = document.querySelectorAll("#findteacher");
// console.log(findTeacher);
findTeacher.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("clicked");
    window.localStorage.removeItem("citiesbtn");
    window.localStorage.removeItem("getStartedPrimary");
    window.localStorage.removeItem("getStartedPrep");
    window.localStorage.removeItem("getStartedsec");
  });
});
