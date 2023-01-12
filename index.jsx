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

//Section menu
const sectionPostres = document.querySelector(".menu-postres");
const sectionCafes = document.querySelector(".menu-coffee");

const buttonPostres = document.querySelector("#Postres");
const buttonCafes = document.querySelector("#Cafes");
console.log(buttonCafes);
console.log(sectionCafes);

const vis = ["flex", "none"];
buttonPostres.addEventListener("click", () => {
  sectionPostres.style.display = vis[0];
  sectionCafes.style.display = vis[1];
});
buttonCafes.addEventListener("click", () => {
  sectionCafes.style.display = vis[0];
  sectionPostres.style.display = vis[1];
});
