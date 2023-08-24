// .................login teacher accounts............
const teacherNavAccounts = document.querySelector(".nav__menu--acount");
// console.log(teacherNavAccounts);
const teacherRegisterSpsn = document.querySelector(".nav__p--acount");
// console.log(teacherRegisterSpsn);
const teacherNavRegister = document.querySelector(".nav__register");
// console.log(teacherNavRegister);
const teacherNavEnvolpe = document.querySelector(".nav__login");
// console.log(teacherNavEnvolpe);
teacherNavRegister.addEventListener("click", function (e) {
  teacherNavEnvolpe.classList.toggle("d-none");
  teacherRegisterSpsn.classList.toggle("nav__p--active");
});
document.addEventListener("click", function (event) {
  if (!teacherNavAccounts.contains(event.target)) {
    teacherNavEnvolpe.classList.add("d-none");
  }
});
// .................login teacher accounts............
function getFromlocalStorage() {
  return JSON.parse(window.localStorage.getItem("teachersObjectArr"));
}
const TeacherInfo = getFromlocalStorage()[10];
// console.log(TeacherInfo);
const teacherCvAside = document.querySelector(".cv");
// console.log(teacherCvAside);
teacherCvAside.innerHTML = `
<section class="cv__block">
<section class="cv__card">
  <div class="cv__card-info">
    <figure class="cv__card-wraper">
      <img
        src="${TeacherInfo.src2}"
        alt="teacher name"
        class="cv__card-image"
      />
    </figure>
  </div>
</section>
<header class="cv__header">
<h2 class="cv__header-head">${
  TeacherInfo.gender === "male"
    ? "Mr / " + TeacherInfo.name
    : "Ms / " + TeacherInfo.name
} </h2>
<p class="cv__header-text">Math teacher</p>
</header>
</section>
<article class="cv__title">
<h3 class="cv__title-header">about :</h3>
<p class="about-intro">
${TeacherInfo.about}
</p>
</article>
<article class="cv__title">
<h3 class="cv__title-header">contact :</h3>
<ul class="contact">
<li class="contact__item">
<p
  ><i class="fa-solid fa-location-dot contact__icon"></i
></p>
<p class="contact__text contact__text--capitalize">${TeacherInfo.address}</p>
</li>
  <li class="contact__item">
    <p><i class="fa-solid fa-phone contact__icon"></i></p>
    <p class="contact__text">${TeacherInfo.phoneNumber}</p>
  </li>
  <li class="contact__item">
    <p
      ><i class="fa-brands fa-whatsapp contact__icon"></i
    ></p>
    <a class="contact__text contact__text--link" href="https://wa.me/${
      TeacherInfo.whatsNumber
    }">${TeacherInfo.whatsNumber}</a>
  </li>
  <li class="contact__item">
    <p
      ><i class="fa-regular fa-envelope-open contact__icon"></i
    ></p>
    <a class="contact__text contact__text--link" href="mailto:${
      TeacherInfo.email
    }">${TeacherInfo.email}</a>
  </li>
  <li class="contact__item">
    <p
      ><i class="fa-brands fa-youtube contact__icon"></i
    ></p>
    <a class="contact__text contact__text--link" href="${
      TeacherInfo.youtube
    }">YouTube channel</a>
  </li>
</ul>
</article>
<article class="cv__title">
<h3 class="cv__title-header">education :</h3>
<ul class="education">
  <li class="education__item">
    <p class="education__item-year">${TeacherInfo.yearOfSecondary}</p>
    <p class="education__item-degree">secondary certificate</p>
    <p class="education__item-place">${TeacherInfo.schoolName}</p>
  </li>
  <li class="education__item">
    <p class="education__item-year">${TeacherInfo.yearOfBachelor}</p>
    <p class="education__item-degree">
      bachelor of science and education
    </p>
    <p class="education__item-place">
      faculty of education / ${TeacherInfo.universityName}
    </p>
  </li>
  ${
    TeacherInfo.yearOfMaster !== ""
      ? `<li class="education__item">
      <p class="education__item-year">${TeacherInfo.yearOfMaster}</p>
      <p class="education__item-degree">
      ${TeacherInfo.nameOfMaster}
      </p>
      <p class="education__item-place">
        faculty of education / ${TeacherInfo.universityName}
      </p>
    </li>`
      : ""
  }
</article>
<article class="cv__title">
<h3 class="cv__title-header">experience :</h3>
<ul class="education">
  <li class="education__item">
    <p class="education__item-year"> ${TeacherInfo.interval1From} - ${
  TeacherInfo.interval1To
}</p>
    <p class="experience-postion">
    ${TeacherInfo.interval1Position}
    </p>
    <p class="education__item-place">${TeacherInfo.interval1School}</p>
  </li>
  ${
    TeacherInfo.interval2From !== ""
      ? `<li class="education__item">
  <p class="education__item-year"> ${TeacherInfo.interval2From} - ${TeacherInfo.interval2To}</p>
  <p class="experience-postion">
  ${TeacherInfo.interval2Position}
  </p>
  <p class="education__item-place">${TeacherInfo.interval2School}</p>
</li>`
      : ""
  }
  ${
    TeacherInfo.interval3From !== ""
      ? `<li class="education__item">
  <p class="education__item-year"> ${TeacherInfo.interval3From} - ${TeacherInfo.interval3To}</p>
  <p class="experience-postion">
  ${TeacherInfo.interval3Position}
  </p>
  <p class="education__item-place">${TeacherInfo.interval3School}</p>
</li>`
      : ""
  }
  ${
    TeacherInfo.interval4From !== ""
      ? `<li class="education__item">
  <p class="education__item-year"> ${TeacherInfo.interval4From} - ${TeacherInfo.interval4To}</p>
  <p class="experience-postion">
  ${TeacherInfo.interval4Position}
  </p>
  <p class="education__item-place">${TeacherInfo.interval4School}</p>
</li>`
      : ""
  }
  ${
    TeacherInfo.interval5From !== ""
      ? `<li class="education__item">
  <p class="education__item-year"> ${TeacherInfo.interval5From} - ${TeacherInfo.interval5To}</p>
  <p class="experience-postion">
  ${TeacherInfo.interval5Position}
  </p>
  <p class="education__item-place">${TeacherInfo.interval5School}</p>
</li>`
      : ""
  }
  ${
    TeacherInfo.interval6From !== ""
      ? `<li class="education__item">
  <p class="education__item-year"> ${TeacherInfo.interval6From} - ${TeacherInfo.interval6To}</p>
  <p class="experience-postion">
  ${TeacherInfo.interval6Position}
  </p>
  <p class="education__item-place">${TeacherInfo.interval6School}</p>
</li>`
      : ""
  }
</ul>
</article>
<article class="cv__title">
<h3 class="cv__title-header">courses and certificates</h3>
<ul class="education">
${
  TeacherInfo.traningCourse1 !== ""
    ? `<li class="education__item">
<p class="education__item-year">${TeacherInfo.traningCourse1}</p>
<p class="experience-postion">${TeacherInfo.traningCourse1Name}</p>
<p class="education__item-place">
${TeacherInfo.traningCourse1Place}
</p>
</li>`
    : ""
}
${
  TeacherInfo.traningCourse2 !== ""
    ? `<li class="education__item">
<p class="education__item-year">${TeacherInfo.traningCourse2}</p>
<p class="experience-postion">${TeacherInfo.traningCourse2Name}</p>
<p class="education__item-place">
${TeacherInfo.traningCourse2Place}
</p>
</li>`
    : ""
}${
  TeacherInfo.traningCourse3 !== ""
    ? `<li class="education__item">
<p class="education__item-year">${TeacherInfo.traningCourse3}</p>
<p class="experience-postion">${TeacherInfo.traningCourse3Name}</p>
<p class="education__item-place">
${TeacherInfo.traningCourse3Place}
</p>
</li>`
    : ""
}${
  TeacherInfo.traningCourse4 !== ""
    ? `<li class="education__item">
<p class="education__item-year">${TeacherInfo.traningCourse4}</p>
<p class="experience-postion">${TeacherInfo.traningCourse4Name}</p>
<p class="education__item-place">
${TeacherInfo.traningCourse4Place}
</p>
</li>`
    : ""
}${
  TeacherInfo.traningCourse5 !== ""
    ? `<li class="education__item">
<p class="education__item-year">${TeacherInfo.traningCourse5}</p>
<p class="experience-postion">${TeacherInfo.traningCourse5Name}</p>
<p class="education__item-place">
${TeacherInfo.traningCourse5Place}
</p>
</li>`
    : ""
}
</ul>
</article>
<article class="cv__title">
      <h3 class="cv__title-header">skills</h3>
      <ul class="education">
      ${
        TeacherInfo.skill1 !== ""
          ? `<li class="skills-item">
      <p class="skills-text">
        <span><i class="fa-solid fa-diamond skills-icon"></i></span>${TeacherInfo.skill1}
      </p>    
    </li>`
          : ""
      }
      ${
        TeacherInfo.skill2 !== ""
          ? `<li class="skills-item">
      <p class="skills-text">
        <span><i class="fa-solid fa-diamond skills-icon"></i></span>${TeacherInfo.skill2}
      </p>    
    </li>`
          : ""
      }
      ${
        TeacherInfo.skill3 !== ""
          ? `<li class="skills-item">
      <p class="skills-text">
        <span><i class="fa-solid fa-diamond skills-icon"></i></span>${TeacherInfo.skill3}
      </p>    
    </li>`
          : ""
      }
      ${
        TeacherInfo.skill4 !== ""
          ? `<li class="skills-item">
      <p class="skills-text">
        <span><i class="fa-solid fa-diamond skills-icon"></i></span>${TeacherInfo.skill4}
      </p>    
    </li>`
          : ""
      }
      ${
        TeacherInfo.skill5 !== ""
          ? `<li class="skills-item">
      <p class="skills-text">
        <span><i class="fa-solid fa-diamond skills-icon"></i></span>${TeacherInfo.skill5}
      </p>    
    </li>`
          : ""
      }
      ${
        TeacherInfo.skill6 !== ""
          ? `<li class="skills-item">
      <p class="skills-text">
        <span><i class="fa-solid fa-diamond skills-icon"></i></span>${TeacherInfo.skill6}
      </p>    
    </li>`
          : ""
      }
        
      </ul>
    </article>
</ul>
`;
