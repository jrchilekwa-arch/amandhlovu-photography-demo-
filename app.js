/* =====================================================
   AMANDHLOVU PHOTOGRAPHY — VERSION 2 JAVASCRIPT
   ===================================================== */


/* ==============================
   MOBILE MENU
============================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const header = document.getElementById("header");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {

    const open = navMenu.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );

    const lines = menuBtn.querySelectorAll("span");

    if (open) {

      lines[0].style.transform =
        "translateY(4px) rotate(45deg)";

      lines[1].style.transform =
        "translateY(-4px) rotate(-45deg)";

    } else {

      lines[0].style.transform = "none";
      lines[1].style.transform = "none";

    }

  });


  /* Close menu after clicking a link */

  navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.setAttribute(
        "aria-label",
        "Open menu"
      );

      const lines = menuBtn.querySelectorAll("span");

      lines[0].style.transform = "none";
      lines[1].style.transform = "none";

    });

  });

}


/* ==============================
   HEADER ON SCROLL
============================== */

function updateHeader() {

  if (!header) return;

  if (window.scrollY > 60) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* ==============================
   SMOOTH SCROLL
============================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId =
      this.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ==============================
   CURRENT YEAR
============================== */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* ==============================
   IMAGE PROTECTION
============================== */

document.querySelectorAll("img").forEach(image => {

  image.addEventListener("error", () => {

    image.style.opacity = "0";

  });

});


/* ==============================
   REVEAL ANIMATIONS
============================== */

const revealElements = document.querySelectorAll(
  ".statement-grid, " +
  ".about-grid, " +
  ".services-heading, " +
  ".service, " +
  ".work-heading, " +
  ".gallery-item, " +
  ".experience-heading, " +
  ".experience-step, " +
  ".social-inner, " +
  ".contact-grid"
);


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity 0.8s ease, transform 0.8s ease";

});


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* ==============================
   PAGE READY
============================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "AmaNdhlovu Photography — Version 2 loaded."
    );

  }
);
