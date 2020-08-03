function Toggle () {
    const navs = document.querySelector(".nav-items")

    navs.forEach(nav => nav.classList.toggle("nav-toggle-show"));
}


document.querySelector(".nav-link-toggle").addEventListener("click", Toggle);
