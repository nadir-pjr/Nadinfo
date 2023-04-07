
// scroll Info topics

let scrollContainer = document.querySelector(".top-info-wrap");

scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "smooth";
});

