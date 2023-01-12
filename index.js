document.addEventListener("DOMContentLoaded", function (event) {
  const sectionLeft = document.querySelector(".content-main .section-left");
  setTimeout(() => {
    sectionLeft.classList.add("section-left-animated");
  }, 500);
  function display() {
    menuCheck.checked = !true;
  }
  const menuCheck = document.querySelector("#menu-check");
  const navList = document.querySelector(".navigation-list");
  navList.addEventListener("click", display);
});
