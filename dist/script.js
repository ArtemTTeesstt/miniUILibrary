!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const n=function(t){return new n.prototype.init(t)};n.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},n.prototype.init.prototype=n.prototype,window.$=n;var s=n;s.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},s.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},s.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="":this[t].style.display="none");return this},s.prototype.addClass=function(){for(let t=0;t<this.length;t++)this[t].tagName&&this[t].classList.add(...arguments);return this},s.prototype.removeClass=function(){for(let t=0;t<this.length;t++)this[t].tagName&&this[t].classList.remove(...arguments);return this},s.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++)this[e].tagName&&(this[e].classList.contains(t)?this[e].classList.remove(t):this[e].classList.add(t));return this},s.prototype.on=function(t,e){if(t&&e&&"string"==typeof t&&"function"==typeof e)for(let i=0;i<this.length;i++)this[i].addEventListener(t,e);else console.error("on - Неправильный тип или отсутствуют аргументы");return this},s.prototype.off=function(t,e){if(t&&e&&"string"==typeof t&&"function"==typeof e)for(let i=0;i<this.length;i++)this[i].removeEventListener(t,e);else console.error("off - Неправильный тип или отсутствуют аргументы");return this},s.prototype.click=function(t){if(t&&"function"==typeof t)for(let e=0;e<this.length;e++)this[e].addEventListener("click",t);else for(let t=0;t<this.length;t++)this[t].click();return this},s.prototype.addAttr=function(t,e){if(t&&e&&"string"==typeof e&&"string"==typeof t)for(let i=0;i<this.length;i++)this[i].tagName&&this[i].setAttribute(t,e);else console.error("addAttr - Неправильный тип или отсутствуют аргументы");return this},s.prototype.removeAttr=function(t){if(t&&"string"==typeof t)for(let e=0;e<this.length;e++)this[e].tagName&&this[e].removeAttribute(t);else console.error("removeAttr - Неправильный тип или отсутствуют аргументы");return this},s.prototype.toggleAttr=function(t,e){if(t&&e&&"string"==typeof e&&"string"==typeof t)for(let i=0;i<this.length;i++)this[i].tagName&&(this[i].hasAttribute(t)?this[i].removeAttribute(t):this[i].setAttribute(t,e));else console.error("toggleAttr - Неправильный тип или отсутствуют аргументы");return this},s.prototype.getAttr=function(t){if(!t||"string"!=typeof t)return console.error("getAttr - Неправильный тип или отсутствуют аргументы"),this;for(let e=0;e<this.length;e++)if(this[e].tagName)return this[e].getAttribute(t)},s.prototype.html=function(t){for(let e=0;e<this.length;e++)if(this[e].tagName){if(!t)return this[e].innerHTML;"string"==typeof t?this[e].innerHTML=t:console.error("html - Аргумент должен быть типа строка")}return this},s.prototype.eq=function(t){if("number"==typeof t){const e=Object.keys(this).length;if(t<e-1){const i=this[t];for(let t=0;t<e;t++)delete this[t];return this[0]=i,this.length=1,this}console.error("eq - переданный аргумент больше чем всего элементов в массиве")}else console.error("eq - Неправильный тип или отсутствуют аргументы");return this},s.prototype.index=function(){return[...this[0].parentElement.children].indexOf(this[0])},s.prototype.find=function(t){if(t&&"string"==typeof t){const e=Object.assign({},this),i=Object.keys(this).length;let n=0;for(let t=0;t<i;t++)delete this[t];for(let i=0;i<e.length;i++){const s=e[i].querySelectorAll(t);s&&s.forEach(t=>{this[n]=t,n++})}this.length=n}else console.error("find - Неправильный тип или отсутствуют аргументы");return this},s.prototype.closest=function(t){if(t&&"string"==typeof t){let e=!1;for(let i=0;i<this.length;i++)this[i].closest(t)&&(e=!0);if(!e)return this;{const e=Object.assign({},this),i=Object.keys(this).length;let n=0;for(let t=0;t<i;t++)delete this[t];for(let i=0;i<e.length;i++)e[i].closest(t)&&(this[n]=e[i].closest(t),n++);this.length=n}}else console.error("closest - Неправильный тип или отсутствуют аргументы");return this},s.prototype.siblings=function(){let t=!1;for(let e=0;e<this.length;e++)this[e].parentElement.children&&(t=!0);if(!t)return this;{const t=Object.assign({},this),e=Object.keys(this).length;let i=0;for(let t=0;t<e;t++)delete this[t];for(let e=0;e<t.length;e++){const n=t[e].parentElement.children;if(n)for(let s=0;s<n.length;s++)n[s]!==t[e]&&(this[i]=n[s],i++)}this.length=i}return this},s.prototype.animateOverTime=function(t,e,i){let n;return function s(o){n||(n=o);let r=o-n,l=Math.min(r/t,1);e(l),r<t?requestAnimationFrame(s):"function"==typeof i&&i()}},s.prototype.fadeIn=function(t,e,i){for(let n=0;n<this.length;n++){this[n].style.display=e||"block";const s=t=>{this[n].style.opacity=t},o=this.animateOverTime(t,s,i);requestAnimationFrame(o)}return this},s.prototype.fadeOut=function(t,e){for(let i=0;i<this.length;i++){const n=t=>{this[i].style.opacity=1-t,1==t&&(this[i].style.display="none")},s=this.animateOverTime(t,n,e);requestAnimationFrame(s)}return this},s.prototype.fadeToggle=function(t,e,i){for(let n=0;n<this.length;n++){const s=t=>{this[n].style.opacity=t},o=t=>{this[n].style.opacity=1-t,1==t&&(this[n].style.display="none")};if("none"===window.getComputedStyle(this[n]).display){this[n].style.display=e||"block";const o=this.animateOverTime(t,s,i);requestAnimationFrame(o)}else{const e=this.animateOverTime(t,o,i);requestAnimationFrame(e)}}return this},s.prototype.dropdown=function(){for(let t=0;t<this.length;t++){const e=this[t].getAttribute("id");s(this[t]).click(()=>{console.log(s(`[data-toggle-id="${e}"]`)),s(`[data-toggle-id="${e}"]`).fadeToggle(300)})}},s(".dropdown-toggle").dropdown(),s.prototype.modal=function(t){for(let e=0;e<this.length;e++){const i=this[e].getAttribute("data-target"),n=function(t){const e=document.documentElement.clientWidth,i=window.innerWidth-e;i>0?(document.body.style.paddingRight=i+"px",document.body.style.overflow="hidden"):setTimeout(()=>{document.body.style.paddingRight="",document.body.style.overflow=""},t)};s(this[e]).click(t=>{t.preventDefault(),n(),s(i).fadeIn(500)});s(i).find("[data-close]").click(e=>{e.preventDefault(),n(500),s(i).fadeOut(500),t&&(console.log(i),document.querySelector(i).remove())}),s(i).click(e=>{e.target.classList.contains("modal")&&(n(500),s(i).fadeOut(500),t&&(console.log(i),document.querySelector(i).remove()))})}},s('[data-toggle="modal"]').modal(),s.prototype.createModal=function(){let{text:t,btns:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let i=0;i<this.length;i++){let n=document.createElement("div");n.classList.add("modal"),n.setAttribute("id",this[i].getAttribute("data-target").slice(1));const o=[];for(let t=0;t<e.count;t++){let i=document.createElement("button");i.classList.add("btn",...e.settings[t][1]),i.textContent=e.settings[t][0],e.settings[t][2]&&i.setAttribute("data-close","true"),e.settings[t][3]&&"function"==typeof e.settings[t][3]&&i.addEventListener("click",e.settings[t][3]),o.push(i)}n.innerHTML=`\n\t\t\t<div class="modal-dialog">\n\t\t\t\t<div class="modal-content">\n\t\t\t\t\t<button class="close" data-close>\n\t\t\t\t\t\t<span>&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class="modal-header">\n\t\t\t\t\t\t<div class="modal-title">\n\t\t\t\t\t\t\t${t.title}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t${t.body}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,n.querySelector(".modal-footer").append(...o),document.body.appendChild(n),s(this[i]).modal(!0),s(this[i].getAttribute("data-target")).fadeIn(500)}},s.prototype.tab=function(){for(let t=0;t<this.length;t++)s(this[t]).click(()=>{s(this[t]).addClass("tab-item--active").siblings().removeClass("tab-item--active").closest(".tab").find(".tab-content").removeClass("tab-content--active").eq(s(this[t]).index()).addClass("tab-content--active")})},s("[data-tabpanel] .tab-item").tab(),s.prototype.accordion=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"accordion-head--active",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"accordion-content--active",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40;for(let n=0;n<this.length;n++)s(this[n]).click(()=>{this[n].classList.toggle(t),this[n].nextElementSibling.classList.toggle(e),this[n].classList.contains(t)?this[n].nextElementSibling.style.maxHeight=this[n].nextElementSibling.scrollHeight+i+"px":this[n].nextElementSibling.style.maxHeight="0px"})},s(".accordion-head").accordion(),s.prototype.carousel=function(){for(let e=0;e<this.length;e++){const i=parseInt(window.getComputedStyle(this[e].querySelector(".carousel-inner")).width),n=this[e].querySelectorAll(".carousel-item"),s=this[e].querySelector(".carousel-slides"),o=this[e].querySelector('[data-slide="prev"]'),r=this[e].querySelector('[data-slide="next"]'),l=this[e].querySelectorAll(".carousel-indicators li");let a=1;function t(){a<n.length?(s.style.transform=`translateX(-${i*a}px)`,a++):(s.style.transform="translateX(0px)",a=1),l.forEach(t=>t.classList.remove("active")),l[a-1].classList.add("active")}s.style.width=i*n.length+"px",n.forEach(t=>t.style.width=i+"px"),o.addEventListener("click",t=>{t.preventDefault(),1===a?(a=n.length,s.style.transform=`translateX(-${i*(a-1)}px)`):(a--,s.style.transform=`translateX(-${i*(a-1)}px)`),l.forEach(t=>t.classList.remove("active")),l[a-1].classList.add("active")}),r.addEventListener("click",e=>{e.preventDefault(),t()}),l.forEach(e=>{e.addEventListener("click",e=>{const i=e.target.getAttribute("data-slide-to");a=+i,t()})})}},s(".carousel").carousel(),s.prototype.createCarousel=function(){let{width:t,imgs:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let i=0;i<this.length;i++)this[i].style.cssText=`\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t\twidth: ${t};\n\t\t\tposition: relative;\n\t\t`,this[i].innerHTML='\n\t\t\t<ol class="carousel-indicators">\n\t\t\t\t<li class="active" data-slide-to="0"></li>\n\t\t\t\t<li data-slide-to="1"></li>\n\t\t\t\t<li data-slide-to="2"></li>\n\t\t\t</ol>\n\t\t\t<div class="carousel-inner">\n\t\t\t\t<div class="carousel-slides">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a href="" class="carousel-prev" data-slide="prev">\n\t\t\t\t<span class="carousel-prev-icon">&lt;</span>\n\t\t\t</a>\n\t\t\t<a href="" class="carousel-next" data-slide="next">\n\t\t\t\t<span class="carousel-next-icon">&gt;</span>\n\t\t\t</a>\n\t\t',e.forEach(t=>{const e=document.createElement("img");e.setAttribute("src",t),e.setAttribute("alt","photo");const n=document.createElement("div");n.classList.add("carousel-item"),n.append(e),this[i].querySelector(".carousel-slides").appendChild(n)}),s(this[i]).carousel()},s.prototype.get=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",i=await fetch(t);if(!i.ok)throw new Error(`Could not fetch ${t}, status: ${i.status}`);switch(e){case"json":return await i.json();case"text":return await i.text();case"blob":return await i.blob()}},s.prototype.post=async function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=await fetch(t,{method:"POST",body:e});switch(i){case"json":return await n.json();case"text":return await n.text();case"blob":return await n.blob()}};var o=s;o("#fadeOut").click(()=>{o(".buttons__someText").fadeOut(800)}),o("#fadeIn").click(()=>{o(".buttons__someText").fadeIn(800)}),o("#trigger").click(()=>o("#trigger").createModal({text:{title:"Modal window - Js generated",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum eveniet necessitatibus nihil a eligendi tempora, exercitationem qui natus hic quasi aut magni praesentium est pariatur nesciunt, at, alias totam."},btns:{count:3,settings:[["Close",["btn-danger","mr-10"],!0],["Save changes",["btn-success"],!1,()=>{alert("Данные сохранены")}],["Another btn",["btn-warning","ml-10"],!1,()=>{alert("Hello World")}]]}})),o(".carousel-1").createCarousel({width:"900px",imgs:["https://on-desktop.com/wps/Cities_____Night_Vancouver_Canada_093043_.jpg","https://vsegda-pomnim.com/uploads/posts/2022-04/1649129708_24-vsegda-pomnim-com-p-priroda-norvegii-foto-37.jpg","https://i.pinimg.com/originals/32/2e/05/322e05d6a52e151ffdda036663d0193b.jpg"]}),o().get("https://jsonplaceholder.typicode.com/todos/1").then(t=>console.log(t))}]);