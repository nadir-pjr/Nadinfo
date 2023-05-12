
// scroll Info topics

let scrollContainer = document.querySelector(".top-info-wrap");

scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
});

let scroller = document.querySelector(".bio-wrap");

scroller.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scroller.scrollLeft += evt.deltaY;
        scroller.style.scrollBehavior = "auto";
});

