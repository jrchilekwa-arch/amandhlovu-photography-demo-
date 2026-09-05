/* =====================================================
   AMANDHLOVU PHOTOGRAPHY — WEBSITE JAVASCRIPT
   ===================================================== */

/* -----------------------------
   MOBILE MENU
----------------------------- */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");

      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
  });
}


/* -----------------------------
   CURRENT YEAR
----------------------------- */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* -----------------------------
   SMOOTH SCROLLING
----------------------------- */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

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


/* -----------------------------
   BROKEN IMAGE PROTECTION
----------------------------- */

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.style.display = "none";
  });
});


/* -----------------------------
   PAGE READY
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  console.log("AmaNdhlovu Photography website loaded successfully.");
});
