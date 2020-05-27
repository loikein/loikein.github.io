function jumpAfterTOC() {
    if (document.getElementById("TOC") !== null) {
        var main_start = document.getElementById("TOC").nextElementSibling;
    }
    else {
        var main_start = document.getElementsByClassName('content')[0];
    }
    main_start.tabIndex = -1;
    main_start.focus();
    main_start.scrollIntoView();
}
