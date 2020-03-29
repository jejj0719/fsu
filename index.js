let readmore_on = false;
let nav_button_handler_on = false;
let studybox_on = false;

const FSU = document.getElementsByClassName("header_logo");
const section = document.getElementsByClassName("section");
const header_title = document.getElementsByClassName("header_title");
const nav = document.getElementsByClassName("nav");
const header = document.getElementsByClassName("header");
const nav_menu = document.getElementsByClassName("nav_menu");
const footer = document.getElementsByClassName("footer");
const siteinfo_introduce = document.getElementsByClassName(
  "siteinfo_introduce"
);
const siteinfo_introduce2 = document.getElementsByClassName(
  "siteinfo_introduce2"
);
const study_container = document.getElementsByClassName("study_container");
const study_label = document.getElementsByClassName("study_label");
const question_name = document.getElementById("name");
const question_email = document.getElementById("email");
const question_subject = document.getElementById("subject");
const question_message = document.getElementById("message");
const question_form_submit = document.getElementById("form_submit");
const instagram = document.getElementsByClassName("fa-instagram");
const github = document.getElementsByClassName("fa-github");
const facebook = document.getElementsByClassName("fa-facebook-square");
const nav_container = document.getElementsByClassName("nav_container");
const study_studybox = document.getElementsByClassName("study_studybox");
const study_img = document.getElementsByClassName("study_img");
const study_title = document.getElementsByClassName("study_title");
const study_text = document.getElementsByClassName("study_text");

const nav_click = e => {
  const click_target = document.getElementsByClassName(e);
  const click_target_offset = click_target[0].offsetTop;
  window.scroll({ top: click_target_offset, left: 0, behavior: "smooth" });
};

const nav_button_handler = () => {
  // 모바일
  if (nav_button_handler_on == false && window.innerWidth < 501) {
    nav_container[0].style.height = "280px";
    nav_button_handler_on = true;
  } else {
    nav_container[0].style.height = "0";
    nav_button_handler_on = false;
  }
};

const page_open = p => {
  window.open(p);
};

const studybox_click = n => {
  //모바일
  if (studybox_on == false && window.innerWidth < 501) {
    for (i = 0; i < study_studybox.length; i += 1) {
      study_studybox[i].style.width = "0px";
      study_studybox[i].style.height = "0px";
      study_studybox[i].style.margin = "0px";
    }
    study_studybox[n].style.width = "100vw";
    study_studybox[n].style.height = "70vw";
    study_img[n].style.opacity = "0.2";
    study_text[n].style.fontSize = "1.1em";
    study_text[n].style.opacity = "1";
    study_text[n].style.lineHeight = "40px";
    study_text[n].style.padding = "20px";
    study_title[n].style.fontSize = "1.4em";
    study_title[n].style.opacity = "1";
    studybox_on = true;
  } else if (studybox_on == true && window.innerWidth < 501) {
    for (i = 0; i < study_studybox.length; i += 1) {
      study_studybox[i].style.width = "55px";
      study_studybox[i].style.height = "55px";
      study_studybox[i].style.margin = "15px";
    }
    study_img[n].style.opacity = "1";
    study_text[n].style.fontSize = "0";
    study_text[n].style.opacity = "0";
    study_title[n].style.opacity = "0";
    study_title[n].style.fontSize = "0";
    studybox_on = false;
  }
};

const readmore_toggle = () => {
  // 강의 더보기 text 변경
  const readmore = document.getElementsByClassName("study_label");
  if (readmore_on == false) {
    readmore[0].innerHTML = `닫기`;
    readmore_on = true;
  } else {
    readmore[0].innerHTML = `강의 더보기`;
    readmore_on = false;
  }
};

window.onload = function() {
  let check = 0;
  // 스크롤 이벤트 핸들러
  const scrollHandler = () => {
    const topScroll = document.documentElement.scrollTop;
    const heightClient = document.documentElement.clientHeight;
    //   로고 스크롤
    if (topScroll <= 420) {
      FSU[0].style.top = Math.floor(topScroll * 1.85 - 280) + "px";
    }
    //   헤더 글씨 투명도
    if (topScroll < section[0].offsetTop / 2) {
      header_title[0].style.opacity = 1 - topScroll * 0.004;
    }
    // nav바 고정
    if (topScroll >= section[0].offsetTop) {
      nav[0].style.position = "fixed";
    }
    if (topScroll <= section[0].offsetTop) {
      nav[0].style.position = "absolute";
    }
    // nav 글씨 색깔 변경
    if (topScroll >= header[0].offsetTop) {
      for (i = 0; i < nav_menu.length; i += 1) {
        //   nav 글씨 색깔 초기화
        nav_menu[i].style.color = "#ffffff";
      }
      nav_menu[0].style.color = "#fe4a49";
    }

    for (i = 0; i < 3; i += 1) {
      if (topScroll + 100 >= section[i].offsetTop) {
        for (j = 0; j < nav_menu.length; j += 1) {
          // nav 글씨 색깔 초기화
          nav_menu[i].style.color = "#ffffff";
        }
        nav_menu[i + 1].style.color = "#fe4a49";
      }
    }

    if (topScroll + heightClient - 200 >= footer[0].offsetTop) {
      for (i = 0; i < nav_menu.length; i += 1) {
        // nav 글씨 색깔 초기화
        nav_menu[i].style.color = "#ffffff";
      }
      nav_menu[4].style.color = "#fe4a49";
    }
    // 스크롤 위치에 따른 애니메이션

    if (check == 0 && topScroll + heightClient / 2 >= section[0].offsetTop) {
      siteinfo_introduce[0].style.animation = "slideRight 0.7s";
      siteinfo_introduce[0].style.opacity = "1";
      siteinfo_introduce2[0].style.animation = "slideLeft 0.7s";
      siteinfo_introduce2[0].style.opacity = "1";
      check += 1;
    }
    if (check == 1 && topScroll + heightClient / 2 >= section[1].offsetTop) {
      study_container[0].style.animation = "slideUp 0.7s";
      study_container[0].style.opacity = "1";
      study_label[0].style.animation = "slideRight 0.7s ease-out 0.4s both";
      study_label[0].style.opacity = "1";
      check += 1;
    }
    if (check == 2 && topScroll + heightClient / 2 >= section[2].offsetTop) {
      question_name.style.animation = "slideRight 0.7s";
      question_name.style.opacity = "1";
      question_email.style.animation = "slideLeft 0.7s";
      question_email.style.opacity = "1";
      question_subject.style.animation = "slideRight 0.7s";
      question_subject.style.opacity = "1";
      question_message.style.animation = "slideLeft 0.7s";
      question_message.style.opacity = "1";
      question_form_submit.style.animation = "slideUp 0.7s 0.5s both";
      question_form_submit.style.opacity = "1";
      check += 1;
    }
    if (check == 3 && topScroll + heightClient - 200 >= footer[0].offsetTop) {
      instagram[0].style.animation = "fadeIn 0.7s";
      instagram[0].style.opacity = "1";
      github[0].style.animation = "fadeIn 0.7s 0.25s both";
      github[0].style.opacity = "1";
      facebook[0].style.animation = "fadeIn 0.7s 0.5s both";
      facebook[0].style.opacity = "1";
    }
  };

  scrollHandler(); // 새로고침시 애니메이션 1회 호출
  window.addEventListener("scroll", scrollHandler);
};
