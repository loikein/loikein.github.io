let root = document.documentElement;
root.style.setProperty("--scrolltop", root.scrollTop);

document.addEventListener("scroll", evt => {
    root.style.setProperty("--scrolltop", root.scrollTop);
});
