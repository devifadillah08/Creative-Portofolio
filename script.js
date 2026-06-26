// =========================
// Smooth Scroll
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// Navbar Blur Saat Scroll
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// =========================
// Animasi Fade Up
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".content,.card,.hero-box").forEach((el)=>{

    observer.observe(el);

});


// =========================
// Parallax Ornamen
// =========================

const shapes = document.querySelectorAll(".shape");

window.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape,index)=>{

        const speed = (index + 1) * 8;

        shape.style.transform =
        `translate(${x * speed}px, ${y * speed}px)`;

    });

});


// =========================
// Active Menu
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 200;

        if(window.pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// =========================
// Hero Text Animation
// =========================

const heroTitle = document.querySelector(".hero h1");

window.addEventListener("load",()=>{

    heroTitle.animate([

        {
            opacity:0,
            transform:"translateY(-50px)"
        },

        {
            opacity:1,
            transform:"translateY(0)"
        }

    ],{

        duration:1500,
        easing:"ease-out"

    });

});


// =========================
// Scroll To Top
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";

    }else{

        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

const progressBars = document.querySelectorAll(".progress");

const progressObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar = entry.target.querySelector(".progress-bar");
            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(()=>{
                bar.style.width = width;
            },100);

        }

    });

},{
    threshold:0.3
});

progressBars.forEach(progress=>{

    progressObserver.observe(progress);

});