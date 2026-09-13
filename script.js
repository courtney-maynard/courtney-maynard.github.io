// =========================================================
// Courtney Maynard — script.js
// One init function per section, called on DOMContentLoaded.
// Fill in whichever ones you actually need; delete the rest.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    initAbout();
    initLogistics();
    initPapers();
    initCV();
    initWhatsNew();
    initPhotoWall();
    initFunExtras();
    initPageScale();
});

// ---------- responsive "zoom out" scaling ----------
// .page-scale is a fixed 900px-wide design. On windows/phones
// narrower than that, shrink the WHOLE thing uniformly (transform:
// scale) instead of letting anything reflow or wrap — so section
// proportions always look the same, just smaller.
function initPageScale() {
    const frame = document.querySelector(".page-scale-frame");
    const page = document.querySelector(".page-scale");
    if (!frame || !page) return;

    const designWidth = page.offsetWidth; // fixed at 900 via CSS

    function applyScale() {
        const scale = Math.min(1, window.innerWidth / designWidth);
        // translateX(-50%) centers the box regardless of scale (see
        // style.css comment on .page-scale); scale shrinks it in place.
        page.style.transform = `translateX(-50%) scale(${scale})`;
        // transform doesn't affect layout flow, so the frame's height
        // has to be set explicitly to match the visually shrunk size —
        // otherwise there'd be blank space left over below the page.
        frame.style.height = (page.offsetHeight * scale) + "px";
    }

    applyScale();
    window.addEventListener("resize", applyScale);
    // images/fonts loading can change page.offsetHeight after the
    // initial run, so recheck once everything has finished loading
    window.addEventListener("load", applyScale);
}

// ---------- about ----------
function initAbout() {
    // .profile_pic, .name, .affiliation, .research
}

// ---------- logistics ----------
function initLogistics() {
    // .email, .linkedin, .gscholar
}

// ---------- papers ----------
function initPapers() {
    // .papers_list, .paper, .mecite
}

// ---------- cv ----------
function initCV() {
    // placeholder for cv image/embed logic
}

// ---------- whatsnew ----------
function initWhatsNew() {
    // .newnewsheader, .newnewslist, .newnewsdates, .newnewstext
}

// ---------- photowall ----------
// Click-through slideshow: clicking anywhere in .photowall advances
// to the next .photowallslide, wrapping back to the first.
function initPhotoWall() {
    const wall = document.querySelector(".photowall");
    if (!wall) return;

    const slides = wall.querySelectorAll(".photowallslide");
    if (slides.length === 0) return;

    let current = 0;

    wall.addEventListener("click", () => {
        slides[current].classList.remove("photowallslide_active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("photowallslide_active");
    });
}

// ---------- fun_extras ----------
function initFunExtras() {
    // .fun_extras_list, .fun_extra
}
