import "./fonts/fonts.scss";
import "./_cleanup.scss";
import "./_main.scss";



window.onload = (event) => {
    console.log("working...");

    document.querySelectorAll('header a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(link.getAttribute('href'))
            .scrollIntoView({behavior: "smooth"})
        })
    })
}
window.onscroll = (event) => {
    // console.log(window.scrollY);
    if (window.scrollY > 50){
        document.querySelector('.header').classList.add('header__scroll')
        document.querySelectorAll('.navigation__link').forEach(link => {
            link.classList.add('navigation__link_scroll')
        });
        document.querySelector('.logo').classList.add('logo__scroll')
    }
    else {
        document.querySelector('.header').classList.remove('header__scroll')
        document.querySelectorAll('.navigation__link').forEach(link => {
            link.classList.remove('navigation__link_scroll')
        });
        document.querySelector('.logo').classList.remove('logo__scroll')
    }
}