const menuBtn=document.querySelector(".menu-btn"),navLinks=document.querySelector(".nav-links"),resumeBtn=document.querySelector(".resume-btn"),navBtns=document.querySelectorAll(".nav-link"),header=document.querySelector("header"),menuIcon=document.querySelector(".header-icon"),logo=document.querySelector(".logo");menuBtn.addEventListener("click",()=>{navLinks.classList.toggle("show-links")}),resumeBtn.addEventListener("click",()=>{removeShowLinks()}),navBtns.forEach(e=>{e.addEventListener("click",()=>{removeShowLinks()})});const removeShowLinks=()=>{navLinks.classList.remove("show-links")};window.addEventListener("scroll",()=>{window.pageYOffset>header.getBoundingClientRect().height?(header.classList.add("fixed-nav"),menuIcon.src="./images/menu-icon-black.png",logo.src="./images/defalt-logo-black.png"):(header.classList.remove("fixed-nav"),menuIcon.src="./images/menu-icon.svg",logo.src="./images/defalt-logo.png")});const scrollLinks=document.querySelectorAll(".nav-link");scrollLinks.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const n=e.currentTarget.getAttribute("href").slice(1),t=document.getElementById(n);if("contact-section"===n)return void window.scrollTo({left:0,top:t.offsetTop});const o=header.getBoundingClientRect().height,c=navLinks.getBoundingClientRect().height,s=header.classList.contains("fixed-nav");let l=t.offsetTop-o;s||(l-=o),o>100&&(l+=c),window.scrollTo({left:0,top:l})})});const logoBtn=document.querySelector(".logo-btn");logoBtn.addEventListener("click",()=>{removeShowLinks(),window.scrollTo({left:0,top:0})});