(()=>{"use strict";function e(){const e=document.getElementById("content");return{banner:()=>{const a=document.createElement("div");a.classList.add("header"),a.innerHTML='<img class="catImg" src="/src/cat.png" alt="cat">',e.append(a)},navBar:()=>{const a=document.createElement("ul");a.innerHTML='<li><a class="active" href="#home">Home</a></li>\n        <li><a href="#menu">Menu</a></li>\n        <li><a href="#contact">Contact</a></li>',e.append(a)},review:()=>{const a=document.createElement("div");a.classList.add("meniu-content"),e.appendChild(a);const n=document.createElement("div");n.classList.add("customer-review"),n.innerHTML="<p>“The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies. The restaurant has a vey nice ambiance and a cozy bar.” <strong>HawaiiNut02760</strong> </p>",a.append(n);const s=document.createElement("br");a.appendChild(s);const t=document.createElement("div");t.classList.add("info-hours"),t.innerHTML='<h3 class="hours">Squedule</h3>\n        <p class="sunday">Sunday: 8am - 8pm</p>\n        <p class="monday">Monday: 6am - 6pm</p>\n        <p class="tuesday">Tuesday: 6am - 6pm</p>\n        <p class="wednesday">Wednesday: 6am - 6pm</p>\n        <p class="thursday">Thursday: 6am - 10pm</p>\n        <p class="friday">Friday: 6am - 10pm</p>\n        <p class="saturday">Saturday: 8am - 10pm</p>',a.appendChild(t)}}}e().banner(),e().navBar(),e().review()})();