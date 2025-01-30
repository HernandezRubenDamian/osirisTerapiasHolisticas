document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".img-galeria");
    const modals = document.querySelector(".modal");
    const modalText = document.querySelector(".info-text");
    const closeBtn = document.querySelector(".close");

    // Mostrar los items al hacer clic en la imagen
    images.forEach(img => {
        img.addEventListener("click", () => {
            const container = img.parentElement.querySelector(".items-container");
            document.querySelectorAll(".items-container").forEach(c => c.classList.remove("show"));
            container.classList.toggle("show");
        });
    });

    // Mostrar información en la ventana emergente al hacer clic en un item
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            const info = item.getAttribute("data-info");
            const link = item.getAttribute("data-link");
            const bgImage = item.getAttribute("data-bg");

            modalText.innerHTML = `<p>${info}</p><a href="${link}" target="_blank">Más información</a>`;
            modals.style.display = "flex";
            modals.style.backgroundImage = `url(${bgImage})`;
            modals.style.backgroundSize = "cover";
            modals.style.backgroundPosition = "center";
        });
    });
    // Cerrar modal al hacer clic fuera de él
    modals.addEventListener("click", (e) => {
        if (e.target === modals || e.target === closeBtn) {
            modals.style.display = "none";
        }
    });

    // Cerrar los items al hacer clic fuera de ellos
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".image-container")) {
            document.querySelectorAll(".items-container").forEach(c => c.classList.remove("show"));
        }
    });
});