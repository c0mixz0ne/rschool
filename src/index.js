import "./fonts/fonts.scss";
import "./_cleanup.scss";
import "./_main.scss";



window.onload = () => {
    console.log("working...");

    document.querySelectorAll('header a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(link.getAttribute('href'))
            .scrollIntoView({behavior: "smooth"})
        })
    })
}