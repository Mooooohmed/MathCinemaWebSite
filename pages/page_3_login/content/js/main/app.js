// .................login teacher accounts............
const teacherNavAccounts = document.querySelector(".nav__menu--acount");
// console.log(teacherNavAccounts);
const teacherRegisterSpsn = document.querySelector(".nav__span--acount");
// console.log(teacherRegisterSpsn);
const teacherNavRegister = document.querySelector(".nav__register");
// console.log(teacherNavRegister);
const teacherNavEnvolpe = document.querySelector(".nav__login");
// console.log(teacherNavEnvolpe);
teacherNavRegister.addEventListener("click", function (e) {
  teacherNavEnvolpe.classList.toggle("d-none");
  teacherRegisterSpsn.classList.toggle("nav__span--active");
});
document.addEventListener("click", function (event) {
  if (!teacherNavAccounts.contains(event.target)) {
    teacherNavEnvolpe.classList.add("d-none");
  }
});
