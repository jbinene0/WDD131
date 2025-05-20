const menuButton = document.querySelector(".menu");
const menu = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery"); 
const modal = document.querySelector(".image-viewer");
const modalImage = modal.querySelector("img"); 
const closeButton = document.querySelector(".close-viewer");


document.addEventListener("DOMContentLoaded", () => {
    modal.close(); 
});


gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return;

    const src = clickedImage.getAttribute("src");
    const alt = clickedImage.getAttribute("alt");

    let fullImageSrc = src.replace("norris-sm.jpeg", "norris-full.jpeg");

    console.log("Clicked Image:", src);
    console.log("Attempting to Load:", fullImageSrc);


    modalImage.src = fullImageSrc;
    modalImage.alt = alt;

   
    setTimeout(() => {
        modal.showModal();
    }, 100);
});


closeButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});




document.addEventListener("DOMContentLoaded", () => {
    modal.close();
});

gallery.addEventListener("click", () => {
    modalImage.src = "norris-full.jpeg"; 
    modalImage.alt = "Expanded picture";
    modal.showModal();
});
