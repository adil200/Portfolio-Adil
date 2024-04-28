const typeWriter = (textElement, words, wait = 3000) => {
  let wordIndex = 0;
  let textIndex = 0;
  let typingSpeed = 160; // Increase typing speed
  let eraseSpeed = 60; // Increase erasing speed
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      if (textIndex > 0) {
        textElement.textContent = currentWord.substring(0, textIndex - 1) ;
      }
      textIndex--;
    } else {
      textElement.textContent = currentWord.substring(0, textIndex) ;
      textIndex++;
    }

    if (!isDeleting && textIndex === currentWord.length + 1) {
      isDeleting = true;
      typingSpeed = eraseSpeed; // Change speed for erasing
    } else if (isDeleting && textIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 100; // Reset typing speed
    }

    setTimeout(type, typingSpeed);
  };

  type(); 
};

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".home__subtitle");
  const words = ["Data Scientist", "Kaggle Expert", "AI Blogger"];
  typeWriter(textElement, words);
});


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id"),
        sectionsClass = document.querySelector(
          ".nav__menu a[href*=" + sectionId + "]"
        ),
        navImg = document.querySelector(".nav__img"); // Select the navigation image
  
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
        if (sectionId !== "home") {
          // If scrolled into a section other than home, show the navigation image
          navImg.style.display = "inline-block";
        } else {
          // If scrolled back to home, hide the navigation image
          navImg.style.display = "none";
        }
      } else {
        sectionsClass.classList.remove("active-link");
      }
    });
  };
  
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
