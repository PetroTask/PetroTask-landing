// Menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navbarLinks = document.querySelectorAll(".navbar__link");

  // Toggle del menú hamburguesa
  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");

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
