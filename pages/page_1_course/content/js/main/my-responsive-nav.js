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
const pathNameUrl = window.location.pathname;
// console.log(pathNameUrl); ///type string
// if (pathNameUrl.includes("page_1_course")) {
//   // console.log("true");
// }
const BurgerMenu = document.querySelector(".menu-icon");
  const BurgerFirstSpan = document.querySelector(".menu-icon span:first-child");
  const BurgerMiddleSpan = document.querySelector(
    ".menu-icon span:nth-child(2)"
  );
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
// ..............................
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
      } else {
        link.removeAttribute("href");
      }
    });
  });
});
