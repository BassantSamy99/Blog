window.onload = function () {
    /* check local storage for color */
    if (window.localStorage.getItem("current-color")!==null) {
        document.documentElement.style.setProperty("--main-color",window.localStorage.getItem("current-color"));
    }
    /* check local storage for background */
    if (window.localStorage.getItem("yes")==="true") {
        changeBackground();
   }
   else {
       document.querySelector(".parent-page").style.backgroundImage = (window.localStorage.getItem("current-background"));
       document.querySelector(".no1").classList.add("active");
   }
   /* check local storage for navigation bullets */
   if (localStorage.getItem("display")=="block")  {
    bulletsContainer.style.display=localStorage.getItem("display");
    yesBullets.classList.add("active");
}
    else {
    bulletsContainer.style.display=localStorage.getItem("display");
    noBullets.classList.add("active");
}
}
    
/* change background */ 
let parentPage = document.querySelector(".parent-page");

     document.querySelector(".yes1").onclick = changeBackground;
     document.querySelector(".no1").onclick = stopBackground;
     
let start;
     function changeBackground() {
        clearInterval(start);
         start = setInterval( function() {
             let ArrOfImgs = ["1.jpg","2.jpg","4.jpg","5.jpg"];
             parentPage.style.backgroundImage ='url("images/'+ArrOfImgs[Math.floor(Math.random() * ArrOfImgs.length)]+'")';
             window.localStorage.setItem("current-background",parentPage.style.backgroundImage);
         },3000);
         window.localStorage.removeItem("no");
         window.localStorage.setItem("yes","true");
         document.querySelector(".no1").classList.remove("active");
         document.querySelector(".yes1").classList.add("active");
     }
     function stopBackground() {
        clearInterval(start);
        window.localStorage.removeItem("yes");
        window.localStorage.setItem("no","true");
        document.querySelector(".yes1").classList.remove("active");
        document.querySelector(".no1").classList.add("active");
    }

/* setting-box movement & gear spin */ 
document.querySelector(".fa-gear").onclick = function() {
document.querySelector(".setting-box").classList.toggle("gearclick");
}
/* change color */
let color = document.querySelectorAll(".setting-box .colors li");
color.forEach((li) => {
    li.onclick = function () {
        document.documentElement.style.setProperty("--main-color",li.dataset.color);
        window.localStorage.setItem("current-color",li.dataset.color);
    }
})

/* skills percentage */
let skills = document.querySelector(".skills");
window.onscroll = function () {
    if (this.pageYOffset > skills.offsetTop - this.innerHeight + skills.offsetHeight -1) {
        // document.querySelector(".html").style.width = "80%";
        // document.querySelector(".css").style.width = "70%";
        // document.querySelector(".js").style.width = "60%";
        let progress =  document.querySelectorAll(".percentage-background div");
       progress.forEach( (e) => e.style.width = e.dataset.progress)
    }
}

/* displaying gallery photos */
let photo = document.querySelectorAll(".gallery .photos img");
photo.forEach ((e) => 
e.addEventListener("click", function () {
    let overpic = document.createElement("div");
    overpic.className="overpic";
    document.body.appendChild(overpic);
    let contain = document.createElement("div");
    contain.className = "contain";
    overpic.appendChild(contain);
    let heading = document.createElement("h4");
    contain.appendChild(heading);
    heading.textContent=`${e.alt}`;
    // let text = document.createTextNode(e.alt);
    // heading.appendChild(text); 
    let imgInOverPic = document.createElement("img");
    imgInOverPic.src=e.src;
    contain.appendChild(imgInOverPic);
    overpic.addEventListener('click',function () {
        overpic.remove();
    })    
}));

/* show navigation */
let circle = document.querySelectorAll(".move .section .circle");
circle.forEach((circle) => 
    circle.addEventListener("click", function () {
        document.querySelector(circle.dataset.section).scrollIntoView();
}));

/* display bullets */
let bulletsContainer = document.querySelector(".move");
let yesBullets =document.querySelector(".setting-box .bullets .yes2");
let noBullets =document.querySelector(".setting-box .bullets .no2");
yesBullets.onclick = showBullets;
noBullets.onclick = hideBullets;
function showBullets() {
localStorage.setItem("display","block");
bulletsContainer.style.display=localStorage.getItem("display");
noBullets.classList.remove("active");
this.classList.add("active");
}
function hideBullets() {
    localStorage.removeItem("display");
    localStorage.setItem("display","none");
    bulletsContainer.style.display=localStorage.getItem("display");
    yesBullets.classList.remove("active");
    this.classList.add("active");
}

/* reset */
let reset = document.querySelector(".setting-box .reset");
reset.onclick = function() {
    bulletsContainer.style.display="block";
    document.documentElement.style.setProperty("--main-color","#f0931f");
    document.querySelector(".parent-page").style.backgroundImage='url("images/1.jpg")';
    changeBackground();
}
 /* show menu */
 let menu = document.querySelector('.header .menu');
 let linksDown = document.querySelector('.header .links');


 menu.onclick= function (e) {
    e.stopPropagation();
    linksDown.classList.toggle('display');
 }

 document.body.onclick= function(e) {
if (e.target !== menu && e.target !== linksDown && e.target) {
    console.log(e.target)
    linksDown.classList.remove('display');
}  
 }
 linksDown.onclick=function(e) {
    e.stopPropagation();
 }