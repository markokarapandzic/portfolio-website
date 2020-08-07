const menuBtn=document.querySelector(".menu-btn"),navLinks=document.querySelector(".nav-links"),resumeBtn=document.querySelector(".resume-btn"),navBtns=document.querySelectorAll(".nav-link"),header=document.querySelector("header"),menuIcon=document.querySelector(".header-icon"),logo=document.querySelector(".logo"),LIGHT_THEME_CLASS="light-theme",LOGO_ICON_WHITE="./images/defalt-logo.png",LOGO_ICON_BLACK="./images/defalt-logo-black.png";menuBtn.addEventListener("click",()=>{navLinks.classList.toggle("show-links")}),resumeBtn.addEventListener("click",()=>{removeShowLinks()}),navBtns.forEach(e=>{e.addEventListener("click",()=>{removeShowLinks()})});const removeShowLinks=()=>{navLinks.classList.remove("show-links")},FIXED_NAVBAR_ACTIVE=1,FIXED_NAVBAR_INACTIVE=0;window.addEventListener("scroll",()=>{window.pageYOffset>header.getBoundingClientRect().height?(header.classList.add("fixed-nav"),logo.src=LOGO_ICON_BLACK,changeMenuIconColor(1)):(header.classList.remove("fixed-nav"),logo.src=LOGO_ICON_WHITE,changeMenuIconColor(0))});const changeMenuIconColor=e=>{const t=document.childNodes[1];e?t.classList.contains("light-theme")?(menuIcon.style.color="white",logo.src=LOGO_ICON_WHITE):(menuIcon.style.color="black",logo.src=LOGO_ICON_BLACK):t.classList.contains("light-theme")?(menuIcon.style.color="black",logo.src=LOGO_ICON_BLACK):(menuIcon.style.color="white",logo.src=LOGO_ICON_WHITE)},themeBtn=document.getElementById("theme-toggle");themeBtn.addEventListener("click",()=>{const e=document.childNodes[1];e.classList.toggle("light-theme"),header.classList.contains("fixed-nav")?changeMenuIconColor(1):changeMenuIconColor(0),displayThemeIcon(e),saveThemePreference(e)});const displayThemeIcon=e=>{e.classList.contains("light-theme")?(themeBtn.classList.remove("fa-sun"),themeBtn.classList.add("fa-moon")):(themeBtn.classList.remove("fa-moon"),themeBtn.classList.add("fa-sun"))},saveThemePreference=e=>{e.classList.contains("light-theme")?localStorage.setItem("theme","light"):localStorage.setItem("theme","dark")},scrollLinks=document.querySelectorAll(".nav-link");scrollLinks.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href").slice(1),o=document.getElementById(t);if("contact-section"===t)return void window.scrollTo({left:0,top:o.offsetTop});const n=header.getBoundingClientRect().height,s=navLinks.getBoundingClientRect().height,c=header.classList.contains("fixed-nav");let l=o.offsetTop-n;c||(l-=n),n>100&&(l+=s),window.scrollTo({left:0,top:l})})});const logoBtn=document.querySelector(".logo-btn");logoBtn.addEventListener("click",()=>{removeShowLinks(),window.scrollTo({left:0,top:0})});const MAX_MOBILE_SCREEN_WIDTH=800;document.addEventListener("DOMContentLoaded",()=>{null!==localStorage.getItem("theme")&&applyColorTheme(),screen.width<=800&&resizeIcons(),displayThemeIcon(document.childNodes[1]),changeMenuIconColor(0)});const applyColorTheme=()=>{"light"===localStorage.getItem("theme")&&document.childNodes[1].classList.add("light-theme")},resizeIcons=()=>{document.querySelectorAll(".project-icon, .sidebar-btn").forEach(e=>{e.classList.remove("fa-2x"),e.classList.add("fa-4x")})};