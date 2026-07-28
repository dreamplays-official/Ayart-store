/* ===============================
   AYART STORE - script.js
=================================*/

// Loading Animation
window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

if(loader){
loader.style.opacity = "0";

setTimeout(()=>{
loader.style.display = "none";
},500);

}

});


// Sticky Header

window.addEventListener("scroll",()=>{

const header = document.querySelector("header");

if(window.scrollY > 50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


// Scroll Reveal Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.item,.hero-content").forEach((el)=>{

observer.observe(el);

});


// Image Hover Zoom

document.querySelectorAll(".item img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// Search Artwork

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

document.querySelectorAll(".item").forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}


// Scroll To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>500?"block":"none";

});


// Floating WhatsApp Button

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/916397188182";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.id="whatsapp";

document.body.appendChild(whatsapp);


// Ripple Effect

document.querySelectorAll(".btn,.buy").forEach(btn=>{

btn.addEventListener("click",(e)=>{

let circle=document.createElement("span");

circle.classList.add("ripple");

btn.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


// Hero Typing Effect

const title=document.querySelector(".hero h1");

if(title){

const text="Own Original Art.";

let i=0;

title.innerHTML="";

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}


// Dynamic Year

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
/* ===== Mobile Menu ===== */

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menu.onclick=()=>{

nav.classList.toggle("active");

}
