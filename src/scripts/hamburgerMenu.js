document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navbarLinks = document.querySelectorAll(".navbar__link");
  const openMenuIcon = document.querySelector(".icon-open");
  const closeMenuIcon = document.querySelector(".icon-close");

  // Toggle del menú hamburguesa
  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");

    const isMenuActive = navbarMenu.classList.contains("active");

    if (isMenuActive) {
      openMenuIcon.style.display = "none";
      closeMenuIcon.style.display = "block";
    } else {
      openMenuIcon.style.display = "block";
      closeMenuIcon.style.display = "none";
    }

    // Cambiar aria-expanded para accesibilidad
    const isExpanded = navbarMenu.classList.contains("active");
    navbarToggle.setAttribute("aria-expanded", isExpanded);
  });

  // Cerrar el menú cuando se hace clic en un enlace
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      navbarToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener("click", (e) => {
    if (!navbarToggle.contains(e.target) && !navbarMenu.contains(e.target)) {
      navbarMenu.classList.remove("active");
      navbarToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Cerrar el menú cuando se presiona la tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navbarMenu.classList.contains("active")) {
      navbarMenu.classList.remove("active");
      navbarToggle.setAttribute("aria-expanded", "false");
      navbarToggle.focus(); // Devolver el foco al botón
    }
  });
});
