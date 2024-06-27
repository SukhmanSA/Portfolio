const navbar = document.querySelector("nav");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const percent = document.querySelectorAll(".percentage");
const progressBarPercents = [97, 89, 85,45,55,15];


window.addEventListener("scroll",()=>{
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    
      sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
          navbarLinks.forEach((navbarLink) => {
            navbarLink.classList.remove("change");
          });
          navbarLinks[i].classList.add("change");
        }
      });
})

const targets = document.querySelectorAll(".bars");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < 7; i++) {
                percent[i].style.width = `${progressBarPercents[i]}%`;
            }
        } else {
            percent.forEach(p => p.style.width = 0);
        }
    });
}, { threshold: 0.6 });

targets.forEach(target => {
    observer.observe(target);
});




