/*==================================================
            PORTFOLIO SCRIPT
        PART 1
==================================================*/

/*=========================================
        LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.remove();
        }, 1000);

    }, 2500);

});


/*=========================================
        CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


document.querySelectorAll("a,button,.project-card,.skill-card").forEach(item => {

    item.addEventListener("mouseenter", () => {

        if (!cursor) return;

        cursor.style.width = "50px";
        cursor.style.height = "50px";
        cursor.style.background = "rgba(124,58,237,.25)";

    });

    item.addEventListener("mouseleave", () => {

        if (!cursor) return;

        cursor.style.width = "25px";
        cursor.style.height = "25px";
        cursor.style.background = "rgba(124,58,237,.35)";

    });

});


/*=========================================
        TYPING TEXT EFFECT
=========================================*/

const roles = [

    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "Creative Programmer",
    "UI / UX Designer"

];

const typing = document.querySelector(".typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typing) return;

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
        
        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typingEffect, deleting ? 50 : 100);

}

typingEffect();


/*=========================================
        PARTICLES
=========================================*/

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 100; i++) {

        const dot = document.createElement("span");

        dot.style.left = Math.random() * 100 + "%";

        dot.style.width = Math.random() * 6 + 4 + "px";

        dot.style.height = dot.style.width;

        dot.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        dot.style.animationDelay =
            Math.random() * 10 + "s";

        particles.appendChild(dot);

    }

}


/*=========================================
        BUTTERFLIES
=========================================*/

const butterflyContainer = document.body;

const butterflyIcons = [

"??",
"??",
"??",
"??",
"??"

];

for(let i=0;i<5;i++){

    const butterfly=document.createElement("div");

    butterfly.className="butterfly";

    butterfly.innerHTML=butterflyIcons[i];

    butterfly.style.top=Math.random()*90+"%";

    butterfly.style.left="-120px";

    butterfly.style.animationDelay=(i*3)+"s";

    butterfly.style.animationDuration=(15+Math.random()*8)+"s";

    butterflyContainer.appendChild(butterfly);

}


/*=========================================
        FLOATING BLOBS
=========================================*/

for(let i=0;i<3;i++){

    const blob=document.createElement("div");

    blob.className="bg-blob";

    document.body.appendChild(blob);

}


/*=========================================
        MOUSE GLOW
=========================================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="250px";
glow.style.height="250px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(236,72,153,.18), transparent 70%)";
glow.style.filter="blur(20px)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-125+"px";

glow.style.top=e.clientY-125+"px";

});


/*=========================================
        RANDOM FLOATING SHAPES
=========================================*/

for(let i=0;i<20;i++){

const shape=document.createElement("div");

shape.style.position="fixed";

shape.style.width=Math.random()*10+8+"px";

shape.style.height=shape.style.width;

shape.style.borderRadius="50%";

shape.style.background="rgba(255,255,255,.45)";

shape.style.left=Math.random()*100+"vw";

shape.style.top=Math.random()*100+"vh";

shape.style.animation=
`float ${8+Math.random()*8}s linear infinite`;

shape.style.pointerEvents="none";

shape.style.zIndex="-1";

document.body.appendChild(shape);

}

/*==================================================
                END OF PART 1
==================================================*/

/*==================================================
            PART 2A
     NAVBAR & SMOOTH SCROLL
==================================================*/

/*=========================================
        STICKY NAVBAR
=========================================*/

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.10)";
        navbar.style.padding = "10px 8%";

    } else {

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "20px 8%";

    }

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.createElement("div");

progressBar.id = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

progressBar.style.position = "fixed";
progressBar.style.left = "0";
progressBar.style.top = "0";
progressBar.style.height = "5px";
progressBar.style.width = "0%";
progressBar.style.zIndex = "99999";
progressBar.style.background =
"linear-gradient(90deg,#7c3aed,#ec4899,#00d4ff)";
progressBar.style.boxShadow =
"0 0 15px rgba(124,58,237,.6)";


/*=========================================
        NAVBAR HOVER ANIMATION
=========================================*/

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-3px)";
        link.style.transition = ".3s";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0px)";

    });

});


/*=========================================
        LOGO CLICK
=========================================*/

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*==================================================
            END OF PART 2A
==================================================*/


/*==================================================
            PART 2B
   SCROLL REVEAL • SKILLS • COUNTERS
==================================================*/


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(
    "section,.project-card,.skill-card,.achievement-card,.certificate-card,.timeline-item,.contact-box"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



/*=========================================
        SKILL BAR ANIMATION
=========================================*/

const skillBars = document.querySelectorAll(".progress-bar");

let skillAnimated = false;

function animateSkills() {

    const skills = document.querySelector("#skills");

    if (!skills || skillAnimated) return;

    const top = skills.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        skillAnimated = true;

        skillBars.forEach(bar => {

            const width = bar.dataset.width || bar.style.width;

            bar.style.width = "0%";

            setTimeout(() => {

                bar.style.transition = "width 2s ease";

                bar.style.width = width;

            }, 300);

        });

    }

}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);



/*=========================================
        ACHIEVEMENT COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    const section = document.querySelector("#achievements");

    if (!section || counterStarted) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = target / 80;

            function updateCounter() {

                if (count < target) {

                    count += speed;

                    counter.textContent = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target + "+";

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);



/*=========================================
        FADE SECTIONS
=========================================*/

const fadeSections = document.querySelectorAll("section");

const fadeObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{
threshold:0.2
});

fadeSections.forEach(section=>{

fadeObserver.observe(section);

});



/*=========================================
        CARD POP EFFECT
=========================================*/

const cards = document.querySelectorAll(
".project-card,.achievement-card,.certificate-card,.skill-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});



/*=========================================
        PARALLAX HERO
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(hero){

hero.style.backgroundPositionY =
window.scrollY * 0.35 + "px";

}

});



/*=========================================
        FLOATING BADGES
=========================================*/

const badges = document.querySelectorAll(".badge");

badges.forEach((badge,index)=>{

badge.style.animation=
`float ${4+index}s ease-in-out infinite`;

});



/*=========================================
        BUTTON RIPPLE
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.45)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



/*=========================================
        RIPPLE KEYFRAME
=========================================*/

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

button{

overflow:hidden;

position:relative;

}

@keyframes ripple{

to{

transform:scale(5);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);



/*==================================================
            END OF PART 2B
==================================================*/

/*==================================================
            PART 3
      CONTACT • DARK MODE • 3D EFFECTS
==================================================*/


/*=========================================
        DARK / LIGHT MODE
=========================================*/

const themeBtn = document.querySelector(".theme-btn");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            themeBtn.innerHTML="??";

            localStorage.setItem("theme","dark");

        }

        else{

            themeBtn.innerHTML="??";

            localStorage.setItem("theme","light");

        }

    });

}

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark");

    if(themeBtn){

        themeBtn.innerHTML="??";

    }

}


/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>400){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*=========================================
        CONTACT FORM
=========================================*/

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=contactForm.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.border="2px solid red";

valid=false;

}

else{

input.style.border="2px solid #7c3aed";

}

});

if(valid){

showNotification("? Message Sent Successfully!");

contactForm.reset();

}

});

}


/*=========================================
        NOTIFICATION
=========================================*/

function showNotification(message){

const notify=document.createElement("div");

notify.className="notify";

notify.innerHTML=message;

document.body.appendChild(notify);

notify.style.position="fixed";
notify.style.top="30px";
notify.style.right="30px";
notify.style.padding="18px 28px";
notify.style.background=
"linear-gradient(135deg,#7c3aed,#ec4899)";
notify.style.color="#fff";
notify.style.borderRadius="15px";
notify.style.fontWeight="600";
notify.style.boxShadow=
"0 15px 40px rgba(124,58,237,.35)";
notify.style.zIndex="99999";
notify.style.animation="fadeDown .6s";

setTimeout(()=>{

notify.remove();

},3000);

}


/*=========================================
        NOTIFICATION STYLE
=========================================*/

const notifyCSS=document.createElement("style");

notifyCSS.innerHTML=`

@keyframes fadeDown{

from{

opacity:0;

transform:translateY(-40px);

}

to{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(notifyCSS);


/*=========================================
        PROJECT 3D EFFECT
=========================================*/

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});


/*=========================================
        IMAGE HOVER EFFECT
=========================================*/

document.querySelectorAll(".project-card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*=========================================
        BUTTON HOVER
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});


/*=========================================
        PERFORMANCE
=========================================*/

window.addEventListener("resize",()=>{

document.body.style.overflowX="hidden";

});

document.addEventListener("dragstart",(e)=>{

e.preventDefault();

});


/*=========================================
        PAGE VISIBILITY
=========================================*/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

console.log("Portfolio Hidden");

}

else{

console.log("Welcome Back!");

}

});


/*=========================================
        END PART 3
=========================================*/


/*==================================================
                PART 4
        FINAL PREMIUM EFFECTS
==================================================*/


/*=========================================
        BUTTERFLY RANDOM MOVEMENT
=========================================*/

const butterflies = document.querySelectorAll(".butterfly");

butterflies.forEach((butterfly,index)=>{

setInterval(()=>{

butterfly.style.top=Math.random()*90+"vh";

butterfly.style.left="-100px";

butterfly.style.animationDuration=
(12+Math.random()*8)+"s";

},15000+(index*2000));

});


/*=========================================
        PARALLAX BACKGROUND
=========================================*/

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

document.body.style.backgroundPositionY=
scroll*0.3+"px";

});


/*=========================================
        MOUSE SPARKLES
=========================================*/

document.addEventListener("mousemove",(e)=>{

const sparkle=document.createElement("span");

sparkle.className="sparkle";

sparkle.style.left=e.pageX+"px";

sparkle.style.top=e.pageY+"px";

sparkle.style.position="absolute";

sparkle.style.width="8px";

sparkle.style.height="8px";

sparkle.style.borderRadius="50%";

sparkle.style.pointerEvents="none";

sparkle.style.background=
`hsl(${Math.random()*360},100%,70%)`;

sparkle.style.boxShadow=
"0 0 12px white";

sparkle.style.animation=
"sparkle .8s linear forwards";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},800);

});


const sparkleStyle=document.createElement("style");

sparkleStyle.innerHTML=`

@keyframes sparkle{

0%{

opacity:1;

transform:scale(1);

}

100%{

opacity:0;

transform:translateY(-30px) scale(0);

}

}

`;

document.head.appendChild(sparkleStyle);


/*=========================================
        FLOATING HEARTS
=========================================*/

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="?";

heart.style.position="absolute";

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";

heart.style.fontSize="18px";

heart.style.pointerEvents="none";

heart.style.color=
`hsl(${Math.random()*360},100%,60%)`;

heart.style.animation=
"heartFloat 1.5s ease forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1500);

});


const heartStyle=document.createElement("style");

heartStyle.innerHTML=`

@keyframes heartFloat{

0%{

transform:translateY(0) scale(1);

opacity:1;

}

100%{

transform:translateY(-80px) scale(2);

opacity:0;

}

}

`;

document.head.appendChild(heartStyle);


/*=========================================
        RANDOM CARD GLOW
=========================================*/

setInterval(()=>{

const cards=document.querySelectorAll(
".project-card,.achievement-card,.certificate-card,.skill-card"
);

if(cards.length===0) return;

const card=
cards[Math.floor(Math.random()*cards.length)];

card.style.boxShadow=
"0 0 35px rgba(236,72,153,.45)";

setTimeout(()=>{

card.style.boxShadow="";

},1200);

},2500);


/*=========================================
        HERO TEXT GLOW
=========================================*/

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

setInterval(()=>{

heroTitle.classList.toggle("glow-text");

},1800);

}


/*=========================================
        FLOATING SHAPES
=========================================*/

for(let i=0;i<15;i++){

const circle=document.createElement("div");

circle.style.position="fixed";

circle.style.width=
10+Math.random()*18+"px";

circle.style.height=
circle.style.width;

circle.style.borderRadius="50%";

circle.style.opacity=".18";

circle.style.left=
Math.random()*100+"vw";

circle.style.top=
Math.random()*100+"vh";

circle.style.background=
`hsl(${Math.random()*360},90%,75%)`;

circle.style.animation=
`float ${5+Math.random()*6}s infinite`;

circle.style.pointerEvents="none";

circle.style.zIndex="-1";

document.body.appendChild(circle);

}


/*=========================================
        SCROLL TITLE EFFECT
=========================================*/

window.addEventListener("scroll",()=>{

document.querySelectorAll(".title").forEach(title=>{

const top=title.getBoundingClientRect().top;

if(top<window.innerHeight-80){

title.style.transform="translateY(0)";

title.style.opacity="1";

}

});

});


/*=========================================
        WELCOME MESSAGE
=========================================*/

setTimeout(()=>{

showNotification("?? Welcome to my Portfolio!");

},3500);


/*=========================================
        PERFORMANCE
=========================================*/

window.addEventListener("beforeunload",()=>{

window.scrollTo(0,0);

});

console.log(
"%cPortfolio Loaded Successfully!",
"color:#7c3aed;font-size:18px;font-weight:bold;"
);


/*=========================================
            END OF SCRIPT
=========================================*/
