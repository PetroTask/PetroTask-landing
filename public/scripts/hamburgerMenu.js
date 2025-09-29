const menu = document.querySelector(".menu-cont");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

openMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("opened");
});

closeMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("opened");
});

// TODO: agregar logica para cerrar menu al hacer click en cualquier lugar.
// window.addEventListener("click", (e) => {
//     if (
//         menu.classList.contains("opened") && // menú abierto
//         menu.contains(e.target) && // clic fuera del menú
//         e.target !== openMenuBtn // clic no en botón abrir
//     ) {
//         menu.classList.add("opened"); // cerrar menú
//         console.log('closed by outside click');
//     }
// });
