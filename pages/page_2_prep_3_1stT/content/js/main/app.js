// .................login teacher accounts............
// const teacherNavAccounts = document.querySelector(".nav__menu--acount");
// // console.log(teacherNavAccounts);
// const teacherRegisterSpsn = document.querySelector(".nav__span--acount");
// // console.log(teacherRegisterSpsn);
// const teacherNavRegister = document.querySelector(".nav__register");
// // console.log(teacherNavRegister);
// const teacherNavEnvolpe = document.querySelector(".nav__login");
// // console.log(teacherNavEnvolpe);
// teacherNavRegister.addEventListener("click", function (e) {
//   teacherNavEnvolpe.classList.toggle("d-none");
//   teacherRegisterSpsn.classList.toggle("nav__span--active");
// });
// document.addEventListener("click", function (event) {
//   if (!teacherNavAccounts.contains(event.target)) {
//     teacherNavEnvolpe.classList.add("d-none");
//   }
// });
// ............................................................................
const teacherContainer = document.querySelector(".staff__list");
// console.log(teacherContainer);
const autoCompleteNames = document.querySelector("datalist");
// console.log(AutoCompleteNames);
const teachingZoneContainer = document.querySelector("#acrordion-area-content");
// console.log(teachingZoneContainer);
const teachingZones = document.querySelectorAll("#acrordion-area-content li");
// console.log(teachingZones);
const teachersObject = [
  // .....1......
  {
    id: 1,
    name: "ahmed omar",
    gender: "male",
    src: "content/images/image1.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image1.jpg",
    online: "",
    offline: "offline",
    record: "",
    book: "",
    city: "cairo",
    teachingZone: "heliopolis",
    userName: "",
    password: "",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....2......
  {
    id: 2,
    name: "mostafa hassan",
    gender: "male",
    src: "content/images/image2.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image2.jpg",
    online: "online",
    offline: "offline",
    record: "",
    book: "",
    city: "giza",
    teachingZone: "el-Haram",
    userName: "",
    password: "",
    whatsNumber: "01115631586", // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....3......
  {
    id: 3,
    name: "hany sfwat",
    gender: "male",
    src: "content/images/image3.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image3.jpg",
    online: "",
    offline: "",
    record: "recorded material",
    book: "summary book",
    city: "giza",
    teachingZone: "dokki",
    userName: "",
    password: "",
    whatsNumber: "01115631586", // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....4.....
  {
    id: 4,
    name: "fatma Ali",
    gender: "female",
    src: "content/images/image4.webp",
    src2: "../../page_2_prep_3_1stT/content/images/image4.webp",
    online: "online",
    offline: "",
    record: "",
    book: "",
    city: "cairo",
    teachingZone: "hadayek el-Kobba",
    userName: "",
    password: "",
    whatsNumber: "01115631586", // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....5.....
  {
    id: 5,
    name: "omar hassan",
    gender: "male",
    src: "content/images/image5.png",
    src2: "../../page_2_prep_3_1stT/content/images/image5.png",
    online: "online",
    offline: "offline",
    record: "",
    book: "",
    city: "alexandria",
    teachingZone: "abou keir",
    userName: "",
    password: "",
    whatsNumber: "01115631586", // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....6.....
  {
    id: 6,
    name: "maria shwokt",
    gender: "female",
    src: "content/images/image6.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image6.jpg",
    online: "",
    offline: "offline",
    record: "",
    book: "",
    city: "faiyum",
    teachingZone: "ibsheway",
    whatsNumber: "01115631586", // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....7.....
  {
    id: 7,
    name: "mostafa hassan",
    gender: "male",
    src: "content/images/image7.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image7.jpg",
    online: "online",
    offline: "offline",
    record: "",
    book: "",
    city: "giza",
    teachingZone: "el-Haram",
    userName: "",
    password: "",
    whatsNumber: "01115631586", // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....8.....
  {
    id: 8,
    name: "nour ahmed",
    gender: "female",
    src: "content/images/image8.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image8.jpg",
    online: "online",
    offline: "",
    record: "",
    book: "",
    city: "giza",
    teachingZone: "el-agouza",
    userName: "",
    password: "",
    whatsNumber: "01115631586", // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....9.....
  {
    id: 9,
    name: "hassan youssef",
    gender: "male",
    src: "content/images/image9.png",
    src2: "../../page_2_prep_3_1stT/content/images/image9.png",
    online: "",
    offline: "offline",
    record: "",
    book: "summary book",
    city: "giza",
    teachingZone: "hadayek el-Ahram",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....10.....
  {
    id: 10,
    name: "yousra khalid",
    gender: "female",
    src: "content/images/image10.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image10.jpg",
    online: "offline",
    offline: "",
    record: "recorded material",
    book: "",
    city: "cairo",
    teachingZone: "Ain Shams",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....11.....
  {
    id: 11,
    name: "fwazy eid",
    gender: "male",
    src: "content/images/image11.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image11.jpg",
    online: "online",
    offline: "offline",
    record: "",
    book: "",
    city: "damietta",
    teachingZone: "damietta el gadeeda",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....12.....
  {
    id: 12,
    name: "mariam saber",
    gender: "female",
    src: "content/images/image12.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image12.jpg",
    online: "online",
    offline: "",
    record: "",
    book: "summary book",
    city: "gharbia",
    teachingZone: "tanta",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....13.....
  {
    id: 13,
    name: "amr zakria",
    gender: "male",
    src: "content/images/image13.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image13.jpg",
    online: "",
    offline: "offline",
    record: "",
    book: "",
    city: "ismailia",
    teachingZone: "ismailia city",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....14.....
  {
    id: 14,
    name: "khloud amr",
    gender: "female",
    src: "content/images/image14.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image14.jpg",
    online: "online",
    offline: "",
    record: "",
    book: "summary book",
    city: "cairo",
    teachingZone: "el-maadi",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....15.....
  {
    id: 15,
    name: "akram saad",
    gender: "male",
    src: "content/images/image15.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image15.jpg",
    online: "online",
    offline: "offline",
    record: "",
    book: "",
    city: "sohag",
    teachingZone: "Sohag City",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....16.....
  {
    id: 16,
    name: "shokry siad",
    gender: "male",
    src: "content/images/image16.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image16.jpg",
    online: "",
    offline: "offline",
    record: "",
    book: "",
    city: "Matruh",
    teachingZone: "Marsa Matrouh",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....17.....
  {
    id: 17,
    name: "omran hany",
    gender: "male",
    src: "content/images/image17.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image17.jpg",
    online: "online",
    offline: "offline",
    record: "",
    book: "",
    city: "giza",
    teachingZone: "el-agouza",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....18.....
  {
    id: 18,
    name: "shimaa mohamed",
    gender: "female",
    src: "content/images/image18.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image18.jpg",
    online: "online",
    offline: "offline",
    record: "recorded material",
    book: "",
    city: "beheira",
    teachingZone: "damanhur",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....19.....
  {
    id: 19,
    name: "ahmed omar",
    gender: "male",
    src: "content/images/image19.png",
    src2: "../../page_2_prep_3_1stT/content/images/image19.png",
    online: "",
    offline: "offline",
    record: "recorded material",
    book: "",
    city: "cairo",
    teachingZone: "10th of Ramadan",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....20.....
  {
    id: 20,
    name: "somia khaild",
    gender: "female",
    src: "content/images/image12.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image12.jpg",
    online: "online",
    offline: "",
    record: "",
    book: "",
    city: "giza",
    teachingZone: "Imbaba",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....21.....
  {
    id: 21,
    name: "ahmed omar",
    gender: "male",
    src: "content/images/image13.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image13.jpg",
    online: "",
    offline: "offline",
    record: "",
    book: "summary book",
    city: "giza",
    teachingZone: "el-agouza",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....22.....
  {
    id: 22,
    name: "esraa samy",
    gender: "female",
    src: "content/images/image10.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image10.jpg",
    online: "online",
    offline: "",
    record: "",
    book: "summary book",
    city: "giza",
    teachingZone: "el-agouza",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....23.....
  {
    id: 23,
    name: "ahmed omar",
    gender: "male",
    src: "content/images/image16.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image16.jpg",
    online: "",
    offline: "",
    record: "",
    book: "summary book",
    city: "giza",
    teachingZone: "el-Haram",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....24.....
  {
    id: 24,
    name: "mai karam",
    gender: "female",
    src: "content/images/image10.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image10.jpg",
    online: "",
    offline: "",
    record: "",
    book: "summary book",
    city: "cairo",
    teachingZone: "heliopolis",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....25.....
  {
    id: 25,
    name: "smair saalm",
    gender: "male",
    src: "content/images/image17.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image17.jpg",
    online: " online",
    offline: "offline",
    record: "",
    book: "",
    city: "alexandria",
    teachingZone: "abou keir",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  // .....26.....
  {
    id: 26,
    name: "sabry twafik",
    gender: "male",
    src: "content/images/image11.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image11.jpg",
    online: " online",
    offline: "",
    record: "recorded material",
    book: "",
    city: "alexandria",
    teachingZone: "Smouha",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
    // ................. training courses ...............
    traningCourse1: 2016,
    traningCourse1Name: "ICDL",
    traningCourse1Place: "faculty of computer science / ain shams university",
    // .......................
    traningCourse2: 2023,
    traningCourse2Name: "front end web developer",
    traningCourse2Place: "MEC academy",
    // .......................
    traningCourse3: "",
    traningCourse3Name: "",
    traningCourse3Place: "",
    // .......................
    traningCourse4: "",
    traningCourse4Name: "",
    traningCourse4Place: "",
    // .......................
    traningCourse5: "",
    traningCourse5Name: "",
    traningCourse5Place: "",
    // ................. skills courses ...............
    skill1: "creating innovative mathematical tools.",
    skill2: "class room mangement",
    skill3: "proficiency with smart boards.",
    skill4: "proficiency in Microsoft Word, PowerPoint, and Excel.",
    skill5: "Front-end web development.",
    skill6: "",
    skill7: "",
  },
  {
    id: 27,
    name: "Fatma Ali",
    gender: "female",
    src: "content/images/image11.jpg",
    src2: "../../page_2_prep_3_1stT/content/images/image11.jpg",
    online: " online",
    offline: "",
    record: "",
    book: "",
    city: "giza",
    teachingZone: "dokki",
    userName: "",
    password: "",
    whatsNumber: "01115631586",
    // .................about................
    about:
      "I am a mathematics teacher with extensive experience teaching both preparatory and secondary grade levels. My primary mission is to unlock the doors of knowledge for my students, and assisting them in achieving top scores in the field of mathematics.",
    // .................contact................
    phoneNumber: "01033060478",
    whatsNumber: "01115631586",
    email: "supermage93@gmail.com",
    address: "faisl street - giza",
    youtube: "https://www.youtube.com/channel/UCpIVFQL9hW4daoaN4m6BF5w",
    // .................education.................
    yearOfSecondary: 2011,
    schoolName: "el horreya langauge school",
    yearOfBachelor: 2015,
    universityName: "ain shams",
    yearOfMaster: 2021,
    nameOfMaster: "Master Degree in teacher preparation in science",
    // .................experience...............
    interval1From: 2016,
    interval1To: 2017,
    interval1Position: "Math teacher for prep and secondary grades",
    interval1School: "narmer language schools",
    // .......................
    interval2From: 2018,
    interval2To: "till now",
    interval2Position: "Math teacher for prep and secondary grades",
    interval2School: "misr language schools",
    // .......................
    interval3From: "",
    interval3To: "",
    interval3Position: "",
    interval3School: "",
    // .......................
    interval4From: "",
    interval4To: "",
    interval4Position: "",
    interval4School: "",
    // .......................
    interval5From: "",
    interval5To: "",
    interval5Position: "",
    interval5School: "",
    // .......................
    interval6From: "",
    interval6To: "",
    interval6Position: "",
    interval6School: "",
  },
];
window.localStorage.setItem(
  "teachersObjectArr",
  JSON.stringify(teachersObject)
);
let counter = [];
createTeacherblock = function () {
  teachersObject.forEach((ele) => {
    const liTag = document.createElement("li");
    liTag.className = "staff__card";
    liTag.setAttribute("id", ele.id);
    liTag.innerHTML = `
				  <article class="staff__info">
					<figure class="staff__wraper">
					  <img
						src= "${ele.src}"
						alt="teacher name"
						class="staff__image"
					  />
					</figure>
					<figcaption class ="staff__caption">
					  <h4
						class="staff__name text-center pt-4"
						data-tname="${ele.name}"
					  >
            ${ele.gender === "male" ? "Mr / " + ele.name : "Ms / " + ele.name}  
					  </h4>
					  <p
						class="staff__state text-center pt-4"
						data-tonline="${ele.online}"
						data-toffline="${ele.offline}"
						data-trecord="${ele.record}"
						data-tbook="${ele.book}"
					  >
           ${ele.online !== "" ? "#" + ele.online + "" : ""}  
           ${ele.offline !== "" ? "#" + ele.offline + "" : ""}  
           ${ele.record !== "" ? "#" + "record" + "" : ""}  
           ${ele.book !== "" ? "#" + "book" + "" : ""}  
					  </p>
					  <p
						class="staff__address text-center py-4"
						data-tcity="${ele.city}"
					  >
						📍 ${ele.city} - ${ele.teachingZone}
					  </p>
            </figcaption>
				  <div class="staff__visit">
          <div class="staff__visit-group">
          <button
          type="button"
          class="staff__visit-btn staff__visit-btn--margin btn btn-outline-success btn-md"
        >
          <a href="../page_5_cv/id_${ele.id}/index.html">read cv</a></button
        >  
           <button
           type="button"
           class="staff__visit-btn staff__visit-btn--whatsapp btn btn-outline-success btn-md"
         >
           <a href="https://wa.me/${
             ele.whatsNumber
           }" target="_blank">whats app</a></button
         > 
         <i class="staff__visit-mark fa-regular fa-bookmark"></i
       >
          </div>
				  </div>
				  </article>
        `;
    const optionInput = document.createElement("option");
    // .......................
    optionInput.textContent = ele.name;
    teacherContainer.appendChild(liTag);
    autoCompleteNames.appendChild(optionInput);
    // .......................
    teacherContainer.appendChild(liTag);
    const teachinZonesItems = document.createElement("p");
    teachinZonesItems.innerHTML = `
        <input
          class="staff__accordion-input mb-4"
          type="radio" name="zone"
          id="${ele.teachingZone}"
        /><label class="staff__accordion-label staff__accordion-label--area" for="${ele.teachingZone}"
          > ${ele.teachingZone}</label
        >`;
    teachingZones.forEach(function (city) {
      if (
        city
          .getAttribute("data-acrodionCity")
          .replace(/\s/g, "")
          .toLowerCase() === ele.city.replace(/\s/g, "").toLowerCase()
      ) {
        if (!counter.includes(`${ele.teachingZone}`)) {
          city.appendChild(teachinZonesItems);
          counter.push(`${ele.teachingZone}`);
          // console.log(counter);
        }
      }
    });
  });
  return;
};
createTeacherblock();
// .........................................................................

const FilterBtn = document.querySelectorAll(".staff__filter-btn");
// console.log(FilterBtn);
// ....................................
const FilterBtnCity = FilterBtn[0];
const FilterBtnService = FilterBtn[1];
// console.log(FilterBtnCity);
// console.log(FilterBtnService);
// ....................................
const FilterAangleIcon = document.querySelectorAll("#angle-icon");
const FilterAangleIconCity = FilterAangleIcon[0];
const FilterAangleIconService = FilterAangleIcon[1];
const FilterAangleIconAcordion1 = FilterAangleIcon[2];
const FilterAangleIconAcordion2 = FilterAangleIcon[3];
// console.log(FilterAangleIcon);
// console.log(FilterAangleIconCity);
// ....................................
const FilterBtnSpan = document.querySelectorAll(".staff__filter-btn span");
const FilterSpanCity = FilterBtnSpan[0];
const FilterSpanService = FilterBtnSpan[1];
// console.log(FilterSpanCity);
// console.log(FilterSpanCity);
// ....................................
const FilterCities = document.querySelector(".staff__filter-cities");
const FilterServices = document.querySelector(".staff__filter-services");
// console.log(FilterCities);
// console.log(FilterServices);
// ....................................
const CitiesNames = document.querySelectorAll(".staff__city-name");
const ServicesNames = document.querySelectorAll(".staff__service-name");
// console.log(CitiesNames);
// console.log(ServicesNames);
const CitiesNamesAttr = []; // All cities names
CitiesNames.forEach(function (ele) {
  CitiesNamesAttr.push(ele.textContent.trim());
});
const ServicesNamesAttr = []; // All services names
ServicesNames.forEach(function (ele) {
  ServicesNamesAttr.push(ele.textContent.trim());
});
// console.log(CitiesNamesAttr);
// console.log(ServicesNamesAttr);
// ....................................
const Cities = document.querySelectorAll(".staff__city-name button");
const Services = document.querySelectorAll(".staff__service-name button");
// console.log(Cities);
// console.log(Services);
const TeacherFind = document.querySelector("#staff-find");
// console.log(TeacherFind);
const TeachersAllCards = document.querySelector(".staff__teachers");
// console.log(TeachersAllCards);
const TeacherCard = document.querySelectorAll(".staff__card");
// console.log(TeacherCard);
// console.log(TeacherCard[0].querySelector("h4").getAttribute("data-tname"));
// console.log(
//   TeacherCard[5]
//     .querySelector(".staff__state")
//     .getAttribute("data-tbook")
//     .replace(/\s/g, "")
//     .toLowerCase()
// );
const teacherVisit = document.querySelectorAll(".staff__visit");
// console.log( teacherVisit);
const bookMarkSigns = document.querySelectorAll(".staff__visit-mark");
// console.log( bookMarkSigns);
// console.log( bookMarkSigns[0]);
const bookMarkChecked = document.querySelector(".theme__input");
// console.log(bookMarkChecked);
const InputSearch = document.getElementById("input-name");
// console.log(InputSearch);
const AvilableTeacherNum = document.querySelector(".staff__number");
// AvilableTeacherNum.textContent = "0" + TeacherCard.length;/
// OR //
// if (TeacherCard.lengt > 9) {
//   AvilableTeacherNum.textContent = TeacherCard.length;
// } else {
//   AvilableTeacherNum.textContent = `0${TeacherCard.length}`;
// }
// OR //
AvilableTeacherNum.textContent = `${TeacherCard.length}`.padStart(2, "0");
const paginationContainer = document.querySelector(".staff__pagintaion");
// console.log(paginationContainer);
const paginationItems = document.querySelectorAll(".staff__pagintaion-item");
// console.log(paginationItems);
const paginationBtns = document.querySelectorAll(".staff__pagintaion-btn");
// console.log(paginationBtns);
// ...................................................................................
// ........................functions ..............
// لتغير شكل السهم الصغير مع الفتح و القفل
function openClose(icon) {
  if (icon.classList.contains("fa-angle-left")) {
    icon.classList.replace("fa-angle-left", "fa-angle-down");
  } else if (icon.classList.contains("fa-angle-down")) {
    icon.classList.replace("fa-angle-down", "fa-angle-left");
  }
}
// عدد المدرسين بناءا علي الفلاتر المحددة
function avilableNum() {
  let numOfCards = 0;
  for (let i = 0; i < TeacherCard.length; i++) {
    if (
      !TeacherCard[i].classList.contains("inactive") &&
      !TeacherCard[i].classList.contains("unactive") &&
      !TeacherCard[i].classList.contains("notactive") &&
      !TeacherCard[i].classList.contains("disactive") &&
      !TeacherCard[i].classList.contains("closedown") &&
      !TeacherCard[i].classList.contains("colddown") &&
      !TeacherCard[i].classList.contains("shutdown") &&
      !TeacherCard[i].classList.contains("freez")
    ) {
      numOfCards = numOfCards + 1;
    }
  }
  AvilableTeacherNum.textContent = `${numOfCards}`.padStart(2, "0");
  return numOfCards;
}
function ArrayOfAvilableTeachers() {
  let numOfAvilableTeacher = [];
  for (let i = 0; i < TeacherCard.length; i++) {
    if (
      !TeacherCard[i].classList.contains("inactive") &&
      !TeacherCard[i].classList.contains("unactive") &&
      !TeacherCard[i].classList.contains("notactive") &&
      !TeacherCard[i].classList.contains("disactive") &&
      !TeacherCard[i].classList.contains("closedown") &&
      !TeacherCard[i].classList.contains("colddown") &&
      !TeacherCard[i].classList.contains("shutdown") &&
      !TeacherCard[i].classList.contains("freez")
    ) {
      numOfAvilableTeacher.push(TeacherCard[i]);
    }
  }
  return numOfAvilableTeacher;
}
// try to use pagination
// (1) open reuired btn
function openPaginationbtns(avilable) {
  let NumberOfOpenBtn = Math.ceil(avilable / 10);
  // btn اكتر من الواحد الصحيح يفتح 2
  // btn 3 اكتر من 2 الصحيح يفتح
  // و هكذا
  // console.log(NumberOfOpenBtn);
  paginationItems.forEach(function (ele, index) {
    if (index <= NumberOfOpenBtn - 1) {
      ele.classList.remove("shutdown");
    } else {
      ele.classList.add("shutdown");
    }
  });
}
openPaginationbtns(TeacherCard.length);
// (2) use pagination
function renderTeacherResults(page, array) {
  const start = (page - 1) * 10; // 0  10
  const end = start + 10; // 9  20
  for (let i = 0; i < array.length; i++) {
    if (start <= i && i < end) {
      array[i].classList.remove("diactivated");
    } else {
      array[i].classList.add("diactivated");
    }
  }
}
renderTeacherResults(1, TeacherCard); // defualt (10 cards per page)
// sroll to start the view forn the top of parent
function scrollToTheTopOfTheParent(parent) {
  parent.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
function defultKeyPagination() {
  for (let i = 0; i < paginationItems.length; i++) {
    if (i === 0) {
      paginationItems[i].classList.add("staff__pagintaion-item--defualt");
    } else {
      paginationItems[i].classList.remove("staff__pagintaion-item--defualt");
    }
  }
}
// >>>>>>>>>>>>................................................<<<<<<<<<<<<<
FilterBtnCity.addEventListener("click", function (e) {
  // console.log("clicked");
  FilterCities.classList.toggle("inactive");
  openClose(FilterAangleIconCity);
});
//       ..................
FilterCities.addEventListener("click", function (ele) {
  // console.log("true");
  // console.log(ele.target.textContent.trim()); //.trim();
  // console.log(ele.target.textContent.replace(/\s/g, ""));
  for (let i = 0; i < CitiesNamesAttr.length; i++) {
    if (ele.target.textContent.trim() === `${CitiesNamesAttr[i]}`) {
      FilterCities.classList.add("inactive");
      FilterSpanCity.textContent = `${CitiesNamesAttr[i]}`;
      FilterAangleIconCity.className =
        "d-block fa-solid fa-angle-left fa-angle-down--size";
      // .................................
      if (`${CitiesNamesAttr[i]}` !== `All cites`) {
        for (let j = 0; j < TeacherCard.length; j++) {
          if (
            `${CitiesNamesAttr[i]}`.replace(/\s/g, "").toLowerCase() !==
            TeacherCard[j]
              .querySelector(".staff__address")
              .getAttribute("data-tcity")
              .replace(/\s/g, "") // replace(/\s/g, "") regular expression شبه .trim()
              .toLowerCase() // replace(/\s/g, "") to delete (all) white spaces
          ) {
            // console.log("true");
            TeacherCard[j].classList.add("inactive");
          } else {
            TeacherCard[j].classList.remove("inactive");
          }
        }
      } else {
        for (let k = 0; k < TeacherCard.length; k++) {
          TeacherCard[k].classList.remove("inactive");
        }
      }
    }
  }
  teachingZones.forEach(function (city) {
    if (
      city
        .getAttribute("data-acrodionCity")
        .replace(/\s/g, "")
        .toLowerCase() ===
      ele.target.textContent.replace(/\s/g, "").toLowerCase()
    ) {
      city.classList.remove("d-none");
      for (let i = 0; i < TeacherCard.length; i++) {
        TeacherCard[i].classList.remove("freez");
      }
      teachingZonesInputs.forEach(function (input) {
        input.checked = false;
      });
    } else {
      city.classList.add("d-none");
    }
  });
});
// >>>>>>>>>>>>................................................<<<<<<<<<<<<<
FilterBtnService.addEventListener("click", function (e) {
  // console.log("clicked");
  openClose(FilterAangleIconService);
  FilterServices.classList.toggle("inactive");
});
//       ..................
FilterServices.addEventListener("click", function (ele) {
  // console.log("true");
  // console.log(ele.target.textContent.trim());
  for (let i = 0; i < ServicesNamesAttr.length; i++) {
    if (ele.target.textContent.trim() === `${ServicesNamesAttr[i]}`) {
      FilterSpanService.textContent = `${ServicesNamesAttr[i]}`;
      FilterServices.classList.add("inactive");
      FilterAangleIconService.className =
        "d-block fa-solid fa-angle-left fa-angle-down--size";
      // .................................
      if (`${ServicesNamesAttr[i]}` !== `All services`) {
        for (let j = 0; j < TeacherCard.length; j++) {
          let OffLine = TeacherCard[j]
            .querySelector(".staff__state")
            .getAttribute("data-toffline")
            .replace(/\s/g, "")
            .toLowerCase();
          // console.log(OffLine);
          let OnLine = TeacherCard[j]
            .querySelector(".staff__state")
            .getAttribute("data-tonline")
            .replace(/\s/g, "")
            .toLowerCase();
          // console.log(OnLine);
          let Record = TeacherCard[j]
            .querySelector(".staff__state")
            .getAttribute("data-trecord")
            .replace(/\s/g, "")
            .toLowerCase();
          // console.log(Record);
          let Book = TeacherCard[j]
            .querySelector(".staff__state")
            .getAttribute("data-tbook")
            .replace(/\s/g, "")
            .toLowerCase();
          // console.log(Book);
          if (
            `${ServicesNamesAttr[i]}`.replace(/\s/g, "").toLowerCase() ===
              OffLine ||
            `${ServicesNamesAttr[i]}`.replace(/\s/g, "").toLowerCase() ===
              OnLine ||
            `${ServicesNamesAttr[i]}`.replace(/\s/g, "").toLowerCase() ===
              Record ||
            `${ServicesNamesAttr[i]}`.replace(/\s/g, "").toLowerCase() === Book
          ) {
            // console.log("true");
            TeacherCard[j].classList.remove("unactive");
          } else {
            TeacherCard[j].classList.add("unactive");
          }
        }
      } else {
        for (let k = 0; k < TeacherCard.length; k++) {
          TeacherCard[k].classList.remove("unactive");
        }
      }
    }
  }
});
// لو داس في اي مكان خارج القائمة اقفلها
document.addEventListener("click", function (event) {
  Services.forEach(function (btn) {
    // console.log(ele);
    if (
      !event.target.closest("#service-choice") &&
      event.target !== btn &&
      !FilterServices.classList.contains("inactive")
      // inactive - unactive  محلوظة
      //cites مع services الاثنين نفس الكلاس و لكن بيضاف من طريق مختلف عشان نصمن التداخل في تأثير ال
    ) {
      // console.log("true");
      FilterServices.classList.add("inactive");
      FilterAangleIconService.className =
        "d-block fa-solid fa-angle-left fa-angle-down--size";
    }
  });
  // ........................................
  Cities.forEach(function (btn) {
    // console.log(ele);
    if (
      !event.target.closest("#city-choice") &&
      event.target !== btn &&
      !FilterCities.classList.contains("inactive")
    ) {
      // console.log("true");
      FilterCities.classList.add("inactive");
      FilterAangleIconCity.className =
        "d-block fa-solid fa-angle-left fa-angle-down--size";
    }
  });
});
// ........................................................................
// ........................................................................
InputSearch.addEventListener("keydown", function (ele) {
  if (ele.key === "Enter") {
    // enter في حالة داس علي
    // console.log(InputSearch.value);
    for (let j = 0; j < TeacherCard.length; j++) {
      if (
        InputSearch.value.replace(/\s/g, "").toLowerCase() !==
        TeacherCard[j]
          .querySelector(".staff__name")
          .getAttribute("data-tname")
          .replace(/\s/g, "")
          .toLowerCase()
      ) {
        TeacherCard[j].classList.add("notactive");
      } else {
        TeacherCard[j].classList.remove("notactive");
      }
    }
  }
});
// ............................
InputSearch.addEventListener("input", function (ele) {
  // input >> better than key down to avoid one more press delete after it beomes empty
  if (InputSearch.value === "") {
    for (let j = 0; j < TeacherCard.length; j++) {
      TeacherCard[j].classList.remove("notactive");
    }
  }
});
// ........................................................................
// ........................................................................
TeacherFind.addEventListener("click", function (ele) {
  if (
    ele.target.closest(".staff__filter-cities") ||
    ele.target.closest(".staff__filter-services")
  ) {
    avilableNum();
    let Arr = ArrayOfAvilableTeachers();
    renderTeacherResults(1, Arr);
    openPaginationbtns(Arr.length);
    defultKeyPagination();
  }
});
// ............................
TeacherFind.addEventListener("keydown", function (ele) {
  if (ele.key === "Enter") {
    if (ele.target.closest("#input-name")) {
      avilableNum();
      let Arr = ArrayOfAvilableTeachers();
      renderTeacherResults(1, Arr);
      openPaginationbtns(Arr.length);
      defultKeyPagination();
    }
  }
});
TeacherFind.addEventListener("input", function () {
  if (InputSearch.value === "") {
    let numOfCards = 0;
    for (let i = 0; i < TeacherCard.length; i++) {
      numOfCards = numOfCards + 1;
    }
    AvilableTeacherNum.textContent = `${numOfCards}`.padStart(2, "0");
  }
});
// ........................................................
// ..........................Bookmark......................
// console.log(TeacherCard[1].querySelector(".staff__visit .staff__visit-mark"));
let AllMarksArray = [];
for (let i = 0; i < bookMarkSigns.length; i++) {
  AllMarksArray.push(-1);
}
// console.log(AllMarksArray);
function saveTolocalStorage() {
  window.localStorage.setItem(
    "allTeachersMarks",
    JSON.stringify(AllMarksArray)
  ); //عشان لو رجع في كلامه
}
function getFromlocalStorage() {
  return JSON.parse(window.localStorage.getItem("allTeachersMarks"));
}
// saveTolocalStorage();
// .....................................................................................................
TeachersAllCards.addEventListener("click", function (event) {
  // const BookStore = getFromlocalStorage() || [];
  // // console.log(BookStore);
  if (event.target.classList.contains("staff__visit-mark")) {
    // console.log("clicked");
    if (event.target.classList.contains("fa-regular")) {
      event.target.classList.replace("fa-regular", "fa-solid");
      event.target.style.color = "#198754";
      bookMarkSigns.forEach((item, index) => {
        if (event.target === item) {
          AllMarksArray.splice(index, 1, index);
        }
      });
    } else if (event.target.classList.contains("fa-solid")) {
      event.target.classList.replace("fa-solid", "fa-regular");
      bookMarkSigns.forEach((item, index) => {
        if (event.target === item) {
          AllMarksArray.splice(index, 1, -1);
        }
      });
    }
    saveTolocalStorage();
  }
});
// >>>> when the page is refreshed <<<<
const BookStore = getFromlocalStorage() || [];
// console.log(BookStore);
// console.log(typeof BookStore[0]);
for (let i = 0; i < bookMarkSigns.length; i++) {
  if (BookStore.includes(i)) {
    bookMarkSigns[i].className = "staff__visit-mark fa-solid fa-bookmark";
    bookMarkSigns[i].style.color = "#198754";
    AllMarksArray.splice(i, 1, i);
    saveTolocalStorage();
  }
}
bookMarkChecked.addEventListener("change", function () {
  // console.log("yes");
  const BookStoreNow = getFromlocalStorage() || [];
  console.log(BookStoreNow);
  for (let i = 0; i < TeacherCard.length; i++) {
    if (!BookStoreNow.includes(i)) {
      TeacherCard[i].classList.toggle("disactive");
    }
    avilableNum();
  }
  TeachersAllCards.addEventListener("click", function (event) {
    if (
      bookMarkChecked.checked &&
      event.target.classList.contains("staff__visit-mark")
    ) {
      for (let i = 0; i < bookMarkSigns.length; i++) {
        if (event.target === bookMarkSigns[i]) {
          TeacherCard[i].classList.add("disactive");
          AllMarksArray.splice(i, 1, -1);
        }
      }
      avilableNum();
      let Arr = ArrayOfAvilableTeachers();
      openPaginationbtns(Arr.length);
    }
    // ............................
  });
  let numOfAvilableTeacher = [];
  let Arr = ArrayOfAvilableTeachers();
  renderTeacherResults(1, Arr);
  openPaginationbtns(Arr.length);
});
// >>>>>>>>>>>> .............   localstorage  ..............  <<<<<<<<<<<<<
// considering the home page //
const cityChecked = Number(window.localStorage.getItem("citiesbtn") || []);
// console.log(cityChecked);
// console.log(typeof cityChecked);
if (cityChecked !== 0) {
  FilterSpanCity.textContent = `${CitiesNamesAttr[cityChecked + 1]}`; // CitiesNamesAttr starts with All cities
  for (let j = 0; j < TeacherCard.length; j++) {
    if (
      `${CitiesNamesAttr[cityChecked + 1]}`.replace(/\s/g, "").toLowerCase() !==
      TeacherCard[j]
        .querySelector(".staff__address")
        .getAttribute("data-tcity")
        .replace(/\s/g, "") // replace(/\s/g, "") regular expression شبه .trim()
        .toLowerCase() // replace(/\s/g, "") to delete (all) white spaces
    ) {
      // console.log("true");
      TeacherCard[j].classList.add("inactive");
    } else {
      TeacherCard[j].classList.remove("inactive");
    }
  }
  avilableNum();
  let Arr = ArrayOfAvilableTeachers();
  renderTeacherResults(1, Arr);
  openPaginationbtns(Arr.length);
  window.localStorage.removeItem("citiesbtn");
}
// ...............................................................................
// Array = [2, 1, 3, 6, 7];
// NewArray = Array.filter((item) => item !== 1);
// console.log(Array);
// console.log(NewArray);

// // Arr1 = Arr.filter(item => item !== 1);
// // console.log(Arr);
// ...............................................................................
paginationContainer.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.classList.contains("staff__pagintaion-btn")) {
    // console.log("yes");
    // e.target.classList.add("staff__pagintaion-item--defualt");
    let Arr = ArrayOfAvilableTeachers();
    // console.log(numOfAvilableTeacher);
    for (let i = 0; i < paginationItems.length; i++) {
      if (e.target === paginationBtns[i]) {
        paginationItems[i].classList.add("staff__pagintaion-item--defualt");
        renderTeacherResults(i + 1, Arr);
        scrollToTheTopOfTheParent(TeacherFind);
      } else {
        paginationItems[i].classList.remove("staff__pagintaion-item--defualt");
      }
    }

    // ele.addEventListener("click", function () {
    //   // console.log("yes", index + 1);
    //   // console.log(typeof index);
    //   renderTeacherResults(index + 1);
    //   scrollToTheTopOfTheParent(TeacherFind);
    //   ele
    // });
  }
});
// ............. jquery acrordions.................
//1//
const acordionFirstTab = document.querySelector("#acrordion-gender");
// console.log(acordionFirstTab);
const acordionMaleInput = document.querySelector("#check-male");
// console.log(acordionMaleInput);
const acordionFemaleInput = document.querySelector("#check-female");
// console.log(acordionFemaleInput);
acordionFirstTab.addEventListener("click", function () {
  openClose(FilterAangleIconAcordion1);
  for (let i = 0; i < TeacherCard.length; i++) {
    TeacherCard[i].classList.remove("closedown");
  }
  acordionMaleInput.checked = false;
  acordionFemaleInput.checked = false;
  avilableNum();
  let Arr = ArrayOfAvilableTeachers();
  renderTeacherResults(1, Arr);
  openPaginationbtns(Arr.length);
});
$("#acrordion-gender").click(function () {
  console.log("hello world");
  // $("#acrordion-11").toggle(500);
  $("#acrordion-gender-content").slideToggle(500);
  // $("#acrordion-11").fadeToggle(500);
});
acordionMaleInput.addEventListener("click", function () {
  for (let j = 0; j < TeacherCard.length; j++) {
    TeacherCard[j].classList.remove("closedown");
  }
  teachersObject.forEach(function (ele, index) {
    if (ele.gender === "female") {
      // console.log(TeacherCard[index]);
      TeacherCard[index].classList.add("closedown");
      avilableNum();
      let Arr = ArrayOfAvilableTeachers();
      renderTeacherResults(1, Arr);
      openPaginationbtns(Arr.length);
    }
  });
});
// ...........................
acordionFemaleInput.addEventListener("click", function () {
  for (let i = 0; i < TeacherCard.length; i++) {
    TeacherCard[i].classList.remove("closedown");
  }
  teachersObject.forEach(function (ele, index) {
    if (ele.gender === "male") {
      // console.log(TeacherCard[index]);
      TeacherCard[index].classList.add("closedown");
      avilableNum();
      let Arr = ArrayOfAvilableTeachers();
      renderTeacherResults(1, Arr);
      openPaginationbtns(Arr.length);
      defultKeyPagination();
    }
  });
});
// //2//
// const acordionSecondTab = document.querySelector("#acrordion-area");
// $("#acrordion-area").click(function () {
//   $("#acrordion-area-content").slideToggle(500);
// });
// acordionSecondTab.addEventListener("click", function () {
//   openClose(FilterAangleIconAcordion2);
//   for (let i = 0; i < TeacherCard.length; i++) {
//     TeacherCard[i].classList.remove("freez");
//   }
//   teachingZonesInputs.forEach(function (input) {
//     input.checked = false;
//   });
//   avilableNum();
//   let Arr = ArrayOfAvilableTeachers();
//   renderTeacherResults(1, Arr);
//   openPaginationbtns(Arr.length);
//   defultKeyPagination();
// });
// // ...............................
// const teachingZonesEnvlope = document.querySelector(
//   ".staff__accordion-content--area"
// );
// // console.log(teachingZonesEnvlope);
// const teachingZonesInputs = teachingZonesEnvlope.querySelectorAll("input");
// // console.log(teachingZonesInputs);
// teachingZonesInputs.forEach(function (input) {
//   if (counter.includes(`${input.getAttribute("id")}`)) {
//     input.addEventListener("click", function () {
//       // console.log("yes");
//       // console.log(input.getAttribute("id"));
//       teachersObject.forEach(function (item, index) {
//         if (
//           item.teachingZone.replace(/\s/g, "").toLowerCase() !==
//           input.getAttribute("id").replace(/\s/g, "").toLowerCase()
//         ) {
//           TeacherCard[index].classList.add("freez");
//           avilableNum();
//           let Arr = ArrayOfAvilableTeachers();
//           renderTeacherResults(1, Arr);
//           openPaginationbtns(Arr.length);
//           defultKeyPagination();
//         } else {
//           TeacherCard[index].classList.remove("freez");
//           avilableNum();
//           let Arr = ArrayOfAvilableTeachers();
//           renderTeacherResults(1, Arr);
//           openPaginationbtns(Arr.length);
//           defultKeyPagination();
//         }
//       });
//     });
//   }
// });
//2//
const acordionSecondTab = document.querySelector("#acrordion-area");
$("#acrordion-area").click(function () {
  $("#acrordion-area-content").slideToggle(500);
});
acordionSecondTab.addEventListener("click", function () {
  openClose(FilterAangleIconAcordion2);
  for (let i = 0; i < TeacherCard.length; i++) {
    TeacherCard[i].classList.remove("freez");
  }
  teachingZonesInputs.forEach(function (input) {
    input.checked = false;
  });
  avilableNum();
  let Arr = ArrayOfAvilableTeachers();
  renderTeacherResults(1, Arr);
  openPaginationbtns(Arr.length);
  defultKeyPagination();
});
// ...............................
const teachingZonesEnvlope = document.querySelector(
  ".staff__accordion-content--area"
);
// console.log(teachingZonesEnvlope);
const teachingZonesInputs = teachingZonesEnvlope.querySelectorAll("input");
// console.log(teachingZonesInputs);
teachingZonesInputs.forEach(function (input) {
  if (counter.includes(`${input.getAttribute("id")}`)) {
    input.addEventListener("click", function () {
      // console.log("yes");
      // console.log(input.getAttribute("id"));
      teachersObject.forEach(function (item, index) {
        if (
          item.teachingZone.replace(/\s/g, "").toLowerCase() !==
          input.getAttribute("id").replace(/\s/g, "").toLowerCase()
        ) {
          TeacherCard[index].classList.add("freez");
          avilableNum();
          let Arr = ArrayOfAvilableTeachers();
          renderTeacherResults(1, Arr);
          openPaginationbtns(Arr.length);
          defultKeyPagination();
        } else {
          TeacherCard[index].classList.remove("freez");
          avilableNum();
          let Arr = ArrayOfAvilableTeachers();
          renderTeacherResults(1, Arr);
          openPaginationbtns(Arr.length);
          defultKeyPagination();
        }
      });
    });
  }
});
