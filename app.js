/* =====================================================
   AMANDHLOVU PHOTOGRAPHY
   WEBSITE JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });


  /* Close menu when a link is clicked */

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(link => {

    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.textContent = "☰";
    });

  });

}


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


/* ================= IMAGE LOADING ================= */

document.querySelectorAll("img").forEach(image => {

  image.addEventListener("error", () => {

    image.style.display = "none";

  });

});


/* ================= PAGE READY ================= */

document.addEventListener("DOMContentLoaded", () => {

  console.log(
    "AmaNdhlovu Photography website loaded successfully."
  );

});
