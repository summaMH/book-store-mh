//toggle class active

const navbarNav = document.querySelector(".navbar-nav");
//ketika book menu di klik
document.querySelector("#bk-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav

const bk = document.querySelector("#bk-menu");

document.addEventListener("click", function (e) {
  if (!bk.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
