/* ===================================
        LOADING SCREEN
=================================== */


window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");


    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";
              body.style.display="none";

        },1000);


    },3000);


});






/* ===================================
        DARK / LIGHT MODE
=================================== */


/* ===================================
        DARK / LIGHT MODE
=================================== */

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.innerHTML = "??";
        } else {
            themeBtn.innerHTML = "??";
        }

    });

}









/* ===================================
        MULTIPLE TEXT TYPING
=================================== */


const roles=[

"Frontend Developer",

"UI/UX Designer",

"JavaScript Developer",

"Web Creator",

"Creative Coder"

];


let roleIndex=0;

let charIndex=0;

let deleting=false;


const typing=document.querySelector(".typing");



function typeEffect(){


let current=roles[roleIndex];



if(!deleting){


typing.innerHTML=current.substring(
0,
charIndex++
);


if(charIndex>current.length){


deleting=true;


setTimeout(typeEffect,1200);

return;


}



}


else{


typing.innerHTML=current.substring(
0,
charIndex--
);



if(charIndex==0){


deleting=false;


roleIndex++;


if(roleIndex>=roles.length){

roleIndex=0;

}


}

}



setTimeout(
typeEffect,
deleting?60:120
);



}



typeEffect();










/* ===================================
        MOUSE GLOW CURSOR
=================================== */


const cursor=document.querySelector(".cursor");



document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left=
e.clientX+"px";


cursor.style.top=
e.clientY+"px";


});


 









/* ===================================
        PARTICLE GENERATOR
=================================== */


const particleBox=
document.getElementById("particles");



for(let i=0;i<80;i++){


let particle=
document.createElement("span");



particle.style.left=
Math.random()*100+"%";



particle.style.animationDelay=
Math.random()*10+"s";



particle.style.animationDuration=
(8+Math.random()*15)+"s";



particleBox.appendChild(particle);



}









/* ===================================
        SCROLL REVEAL
=================================== */


const revealElements=
document.querySelectorAll(
"section,.project-card,.skill-box,.achievement-card"
);



function reveal(){


revealElements.forEach(element=>{


let position=
element.getBoundingClientRect().top;



let screen=
window.innerHeight-100;



if(position < screen){


element.classList.add("reveal");


setTimeout(()=>{


element.classList.add("active");


},100);



}



});


}



window.addEventListener(
"scroll",
reveal
);


reveal();










/* ===================================
        NAVBAR BACKGROUND CHANGE
=================================== */


const nav=
document.querySelector("nav");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY>50){


nav.style.boxShadow=
"0 20px 50px rgba(0,0,0,.2)";


nav.style.transform=
"scale(.98)";


}

else{


nav.style.boxShadow=
"0 15px 40px rgba(0,0,0,.15)";


nav.style.transform=
"scale(1)";


}



});









/* ===================================
        ACTIVE NAV LINK
=================================== */


const sections=
document.querySelectorAll("section");


const navLinks=
document.querySelectorAll("nav a");



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


let top=
window.scrollY;


let offset=
section.offsetTop-200;


let height=
section.offsetHeight;



if(
top>=offset &&
top<offset+height
){


current=
section.getAttribute("id");


}



});




navLinks.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")
==
"#"+current
){


link.classList.add("active");


}



});


});










/* ===================================
        PROJECT CARD 3D EFFECT
=================================== */


const cards=
document.querySelectorAll(".project-card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let x=
(e.offsetX-card.offsetWidth/2)/20;


let y=
(e.offsetY-card.offsetHeight/2)/20;



card.style.transform=

`
rotateX(${-y}deg)
rotateY(${x}deg)
translateY(-15px)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});









/* ===================================
        SMOOTH BUTTON CLICK
=================================== */


document.querySelectorAll("a")
.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


let target=
document.querySelector(
link.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});









/* ===================================
        RANDOM BUTTERFLY POSITION
=================================== */


document.querySelectorAll(".butterfly")
.forEach((butterfly)=>{


butterfly.style.left=
Math.random()*90+"%";



});

// Achievement Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=80;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});