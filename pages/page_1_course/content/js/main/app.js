// ..................................................................................
const stages = document.querySelector(".stages");
const stagesBtn = document.querySelector(".stages__btn--defualt");
const stagesMenu = document.querySelector(".stages__menu");
const stagesMenuButtons = document.querySelectorAll(".stages__menu button"); // all buttons in the list (gives array)
// ..............................................................
const btnStagesAttr = [];
stagesMenuButtons.forEach(function (btn) {
  // console.log(btn);
  btnStagesAttr.push(btn.getAttribute("data-stage"));
  // console.log(btnStagesAttr); // every element in array (function معرفة داخل ال )
});
// console.log(btnStagesAttr); // all element in single array (function معرفة خارج ال )
// .................................select your grade..................................
const grades = document.querySelector(".grades");
const gradesBtn = document.querySelector(".grades__btn--defualt");
const primGradesMenu = document.querySelector(".grades__menu-prim");
const primGradesMenuButtons = primGradesMenu.querySelectorAll("button");
const prepGradesMenu = document.querySelector(".grades__menu-prep");
const prepGradesMenuButtons = prepGradesMenu.querySelectorAll("button");
const secGradesMenu = document.querySelector(".grades__menu-sec");
const secGradesMenuButtons = secGradesMenu.querySelectorAll("button");
const choosenGradeArray = [primGradesMenu, prepGradesMenu, secGradesMenu];
// ------------------------------------------------------------------------
const btnGradesAttr = [];
primGradesMenuButtons.forEach(function (btn) {
  btnGradesAttr.push(btn.getAttribute("data-grade"));
});
prepGradesMenuButtons.forEach(function (btn) {
  btnGradesAttr.push(btn.getAttribute("data-grade"));
});
secGradesMenuButtons.forEach(function (btn) {
  btnGradesAttr.push(btn.getAttribute("data-grade"));
});
// console.log(btnGradesAttr);
// ------------------------------------------------------------------------
const termChoose = document.querySelector(".select-term");
const termSelectorBtn = document.querySelector(".select-term__btn");
const termMenu = document.querySelector(".select-term__menu");
const termMenuButtons = document.querySelectorAll(".select-term__menu button");
const btnTermAttr = [];
termMenuButtons.forEach(function (btn) {
  btnTermAttr.push(btn.getAttribute("data-term"));
});
// ..............................................................
const GoYourCourse = document.querySelectorAll(".final-course");
const GoYourCourseBtn = document.querySelector(".final-course button");
const GoYourCourseAncors = document.querySelectorAll(".final-course a"); // all buttons in the list
const GoYourCourseAttr = [];
GoYourCourseAncors.forEach(function (ele) {
  GoYourCourseAttr.push(ele.getAttribute("data-course")); // all attributes in the buttons in single array
});
// console.log(GoYourCourseAttr);
// ------------------------------------------------------------------------
const angleIconStage = document.querySelector(".stages #angle-icon");
const angleIconGrade = document.querySelector(".grades  #angle-icon");
const angleIconTerm = document.querySelector(".select-term #angle-icon");
// ---------------------- functions --------------------------------------------------
// لو داس في اي مكان فاضي تقفل القايمة
function CloseIt(subMenu, mainMenu) {
  document.addEventListener("click", function (event) {
    let isClickInsideMenu = mainMenu.contains(event.target); // retrun true or false
    // console.log(isClickInsideMenu);
    if (!isClickInsideMenu) {
      subMenu.classList.remove("active");
      if (mainMenu === stages) {
        angleIconStage.className =
          "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
      }
      if (mainMenu === grades) {
        angleIconGrade.className =
          "grades__text d-block fa-solid fa-angle-left fa-angle-down--size";
      }
      if (mainMenu === termChoose) {
        angleIconTerm.className =
          "select-term__text d-block fa-solid fa-angle-left fa-angle-down--size";
      }
    }
  });
}
// ------------------------------------------------------------------------
// لو مكنش اختار بالترتيب المنطقي اظهر رسالة و اقفل كل حاجة مفتوحة
function validateSelection(btn, name) {
  if (btn.querySelector("span").textContent === `select your ${name}`) {
    window.alert(`please you should select your ${name}`);
    stagesMenu.classList.remove("active");
    choosenGradeArray.forEach(function (menu) {
      menu.classList.remove("active");
      termMenu.classList.remove("active");
    });
    return false;
  }
  return true;
}
// ------------------------------------------------------------------------
// لتغير شكل السهم الصغير مع الفتح و القفل
function openClose(icon) {
  if (icon.classList.contains("fa-angle-left")) {
    icon.classList.replace("fa-angle-left", "fa-angle-down");
  } else if (icon.classList.contains("fa-angle-down")) {
    icon.classList.replace("fa-angle-down", "fa-angle-left");
  }
}
// ------------------------------------------------------------------------
// choose form sub menu and close it
let nameOfStage;
let nameOfGrade;
let nameOfTerm;
let FinalBtnTarget;
let shouldOpenModal;
// console.log(nameOfStage);  // udefined // سيبك منه مش مهم
//event listner  غير معرفين في الجوبل اسكوب لوجود
//if condition هيبقوا معرفين بعد ما يدخل ال
function selectedMenu(subMenu, mainBtn, mainMenu, arrayOfAtrr, atrr) {
  subMenu.addEventListener("click", function (ele) {
    // targetAttribute = ele.target.getAttribute(`${atrr}`);
    for (let i = 0; i < arrayOfAtrr.length; i++) {
      if (ele.target.getAttribute(`${atrr}`) === `${arrayOfAtrr[i]}`) {
        // console.log(`${arrayOfAtrr[i]}`);
        mainBtn.querySelector("span").textContent = `${arrayOfAtrr[i]}`;
        subMenu.classList.remove("active");
        mainMenu.classList.add("fade");
        // -----------------------------
        if (mainBtn === stagesBtn) {
          nameOfStage = mainBtn.querySelector("span").textContent;
          // عشان بعد ما تتختار السهم يرجع لوضعه الطبيعي
          angleIconStage.className =
            "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
        }
        if (mainBtn === gradesBtn) {
          nameOfGrade = mainBtn.querySelector("span").textContent;
          angleIconGrade.className =
            "grades__text d-block fa-solid fa-angle-left fa-angle-down--size";
        }
        // if (mainBtn === termSelectorBtn) {
        //   nameOfTerm = mainBtn.querySelector("span").textContent;
        // }
      }
    }
  });
}
// ------------------------------------stage select------------------------------------z
stagesBtn.addEventListener("click", function () {
  // شغال click للتأكد ان ال  // console.log("Hellow world");
  window.localStorage.removeItem("gradeCheckedPrim");
  window.localStorage.removeItem("gradeCheckedPrep");
  window.localStorage.removeItem("gradeCheckedSec");
  stagesMenu.classList.toggle("active");
  //  ----------------  << function الاختيار من القائمة هيروح ينادي   ------------
  CloseIt(stagesMenu, stages);
  openClose(angleIconStage);
  selectedMenu(stagesMenu, stagesBtn, stages, btnStagesAttr, "data-stage");
  // reset the defualt view
  stagesBtn.querySelector("span").textContent = `select your stage`;
  gradesBtn.querySelector("span").textContent = `select your grade`;
  termSelectorBtn.querySelector("span").textContent = `select your term`;
  stages.classList.remove("fade");
  grades.classList.remove("fade");
  termChoose.classList.remove("fade");
  choosenGradeArray.forEach(function (menu) {
    menu.classList.remove("active");
  });
  termMenu.classList.remove("active");
  termSelectorBtn.removeAttribute("disabled");
  GoYourCourseBtn.setAttribute("disabled", true);
  nameOfStage = undefined;
  nameOfGrade = undefined;
  nameOfTerm = undefined;
  FinalBtnTarget = undefined;
  shouldOpenModal = true;
});
// ------------------------------------grade select------------------------------------
gradesBtn.addEventListener("click", function () {
  validateSelection(stagesBtn, "stage");
  // -------------------------
  choosenGradeArray.forEach(function (menu) {
    if (menu.getAttribute("data-stage") === nameOfStage) {
      menu.classList.toggle("active"); // كده مش هتفتح غير لما يحدد المرحلة الاول
      //  ----------------  << function الاختيار من القائمة هيروح ينادي   ------------
      CloseIt(menu, grades);
      openClose(angleIconGrade);
      selectedMenu(menu, gradesBtn, grades, btnGradesAttr, "data-grade");
      // -------------------------
      gradesBtn.querySelector("span").textContent = `select your grade`;
      termSelectorBtn.querySelector("span").textContent = `select your term`;
      grades.classList.remove("fade");
      termChoose.classList.remove("fade");
      termMenu.classList.remove("active");
      shouldOpenModal = true;
    }
  });
});
termSelectorBtn.addEventListener("click", function () {
  if (`${nameOfGrade}` === "sec three") {
    termSelectorBtn.setAttribute("disabled", true);
    GoYourCourseBtn.removeAttribute("disabled");
    GoYourCourseBtn.setAttribute("data-bs-toggle", "modal");
    GoYourCourseBtn.setAttribute("data-bs-target", "#staticBackdrop");
    termChoose.classList.add("fade");
  } else if (validateSelection(gradesBtn, "grade")) {
    termMenu.classList.toggle("active");
    CloseIt(termMenu, termChoose);
    openClose(angleIconTerm);
    selectedMenu(
      termMenu,
      termSelectorBtn,
      termChoose,
      btnTermAttr,
      "data-term"
    );
    termSelectorBtn.querySelector("span").textContent = `select your term`;
    termChoose.classList.remove("fade");
    shouldOpenModal = true;
  }
  // console.log(nameOfTerm); // undefined
  // الحالي event listner مش هيبقي معرف غير لما يخرج من ال
  //مخصوص له event listner و بالتالي هعمل
});
//nameOfTerm reassigin  هنعمل

termMenu.addEventListener("click", function (ele) {
  angleIconTerm.className =
    "select-term__text d-block fa-solid fa-angle-left fa-angle-down--size";
  GoYourCourseBtn.removeAttribute("disabled");
  nameOfTerm = ele.target.textContent.trim();
  GoYourCourseAttr.forEach(function (atr) {
    if (atr === `${nameOfStage} ${nameOfGrade} ${nameOfTerm}`) {
      FinalBtnTarget = atr;
    }
  });
  if (
    FinalBtnTarget === `preparatory stage prep three first term`
    // ||
    // FinalBtnTarget === `preparatory stage prep three second term`
  ) {
    shouldOpenModal = false;
  }
  if (shouldOpenModal) {
    GoYourCourseBtn.setAttribute("data-bs-toggle", "modal");
    GoYourCourseBtn.setAttribute("data-bs-target", "#staticBackdrop");
  }
  if (!shouldOpenModal) {
    GoYourCourseBtn.removeAttribute("data-bs-toggle", "modal");
    GoYourCourseBtn.removeAttribute("data-bs-target", "#staticBackdrop");
  }
});
GoYourCourseBtn.addEventListener("click", function () {
  if (!shouldOpenModal) {
    // console.log(FinalBtnTarget);
    GoYourCourseAncors.forEach(function (ele) {
      if (ele.getAttribute("data-course") === FinalBtnTarget) {
        ele.classList.add("active");
        const href = ele.getAttribute("href");
        // window.open(href, "_blank");
        window.location.href = href;
      }
    });
  }
  GoYourCourseBtn.setAttribute("disabled", true);
});
// .....................................................
// .....................................................
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
  // const createDots = function () {
  //   slides.forEach((_, i) => {
  //     dotContainer.insertAdjacentHTML(
  //       "beforeend",
  //       `
  //   <button class="dots__dot" data-slide="${i}"></button>

  //   `
  //     );
  //   });
  // };
  // const activeDots = function (input) {
  //   document.querySelectorAll(".dots__dot").forEach((dot) => {
  //     dot.classList.remove("dots__dot--active");
  //   });
  //   document
  //     .querySelector(`.dots__dot[data-slide="${input}"]`)
  //     .classList.add("dots__dot--active");
  // };
  // console.log(document.querySelector(`.dots__dot[data-slide="0"]`));
  goToSlide = function (slide) {
    slides.forEach(function (ele, index) {
      ele.style.transform = `translateX(${(index - slide) * 100}%)`; // 0 100% 200% 300% ...
    });
  };
  initalSlideShow = function () {
    // createDots();
    goToSlide(0);
    // activeDots(0);
  };
  initalSlideShow();
  nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    // activeDots(currentSlide);
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
  let slideInterval;
  startSlides = function () {
    slideInterval = setInterval(nextSlide, 7000);
  };
  nextSlideAndDelay = function () {
    clearInterval(slideInterval);
    setTimeout(startSlides, 20000);
    nextSlide();
  };
  prevSlideAndDelay = function () {
    clearInterval(slideInterval);
    setTimeout(startSlides, 20000);
    prevSlide();
  };
  // ....events.....
  document.addEventListener("DOMContentLoaded", function () {
    startSlides();
  });

  // .......................................................
  btnRight.addEventListener("click", nextSlideAndDelay);
  btnLeft.addEventListener("click", prevSlideAndDelay);
  document.addEventListener("keydown", function (e) {
    // console.log("true");
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
    }
  });
  // dotContainer.addEventListener("click", function (e) {
  //   // console.log("yes");
  //   if (e.target.classList.contains("dots__dot")) {
  //     // console.log("dot");
  //     const numOfActiveDot = e.target.dataset.slide;
  //     // console.log(dotSlide);
  //     goToSlide(numOfActiveDot);
  //     activeDots(numOfActiveDot);
  //   }
  // });
};
RunTheSilder();
// >>>>>>>>>>>>...................localstorage.............................<<<<<<<<<<<<<
// considering the home page //
const gradeCheckedPrim = window.localStorage.getItem("getStartedPrimary") || [];
const gradeCheckedPrep = window.localStorage.getItem("getStartedPrep") || [];
const gradeCheckedSec = window.localStorage.getItem("getStartedsec") || [];
// console.log(gradeCheckedPrim);
// console.log(gradeCheckedPrep);
// console.log(gradeCheckedSec);
// ........................
if (localStorage.getItem("getStartedPrimary")) {
  // console.log("true");
  stagesBtn.querySelector("span").textContent = gradeCheckedPrim;
  stagesMenu.classList.remove("active");
  stages.classList.add("fade");
  nameOfStage = gradeCheckedPrim;
} else if (localStorage.getItem("getStartedPrep")) {
  // console.log("yes");
  stagesBtn.querySelector("span").textContent = gradeCheckedPrep;
  stagesMenu.classList.remove("active");
  stages.classList.add("fade");
  nameOfStage = gradeCheckedPrep;
} else if (localStorage.getItem("getStartedsec")) {
  // console.log("ok");
  stagesBtn.querySelector("span").textContent = gradeCheckedSec;
  stagesMenu.classList.remove("active");
  stages.classList.add("fade");
  nameOfStage = gradeCheckedSec;
}
// else {
// }
// document.addEventListener("DOMContentLoaded", function (e) {
//   stagesBtn.click(); // click on the button
//   window.localStorage.removeItem("getStartedPrimary");
// });"
