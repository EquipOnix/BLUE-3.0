function AlertMessage(t={}){const{type:e="",icon:i="",bgColor:n="",title:s="",description:o="",button:a="",link:l="",linkUrl:r=""}=t;if(!i)throw new Error("Es necesario el icon al crear un mensaje de alerta.");this.type=e,this.icon=i,this.bgColor=n,this.title=s,this.button=a,this.description=o,this.link=l,this.linkUrl=r,this.order="TITLE_DESCRIPTION";const d=()=>{this.title&&this.description&&!this.link&&!this.button?this.order="TITLE_DESCRIPTION":this.title&&this.description&&!this.link&&this.button?this.order="TITLE_DESCRIPTION_BUTTON":this.title||!this.description||this.link||this.button?!this.title&&this.description&&!this.link&&this.button?this.order="DESCRIPTION_BUTTON":!this.title&&this.description&&this.link&&!this.button?this.order="DESCRIPTION_LINK":!this.title&&this.description&&this.link&&this.button&&(this.order="DESCRIPTION_BUTTON_LINK"):this.order="ONLY_DESCRIPTION"};return this.setItems=()=>{this.mainClassName="alert-message",this.mainContainerElement=document.createElement("div"),this.statusContainerElement=document.createElement("div"),this.statusIconElement=document.createElement("span"),this.titleContainerElement=document.createElement("div"),this.titleElement=document.createElement("h3"),this.contentContainerElement=document.createElement("div"),this.contentMessageElement=document.createElement("p"),this.buttonContainerElement=document.createElement("div"),this.buttonElement=document.createElement("button"),this.linkContainerElement=document.createElement("div"),this.linkElement=document.createElement("a")},this.init=()=>(d(),this.setItems(),this.setOrder(this.order),this.setStyles(),this.setChildren(),this),this.setStatusStyles=({bgColor:t=this.bgColor,icon:e=this.icon}={})=>(this.statusContainerElement.classList.remove(...this.statusContainerElement.classList),this.statusIconElement.classList.remove(...this.statusIconElement.classList),this.statusContainerElement.classList.add(this.mainClassName+"_status"),this.statusContainerElement.classList.add(this.mainClassName+"_status"),t&&this.statusContainerElement.classList.add(n),this.statusIconElement.classList.add("icons",e,"icons-after-5xl","c-white"),this),this.setStyles=()=>(this.mainContainerElement.classList.add(""+this.mainClassName),this.contentContainerElement.classList.add(this.mainClassName+"_content"),this.statusContainerElement.classList.add(this.mainClassName+"_status"),this.titleContainerElement.classList.add(this.mainClassName+"_title"),this.titleElement.classList.add("typography-h3"),this.buttonContainerElement.classList.add(this.mainClassName+"_button"),this.buttonElement.classList.add("btn","btn-default"),this.linkContainerElement.classList.add(this.mainClassName+"_link"),this.linkElement.classList.add("typography-link"),this.contentMessageElement.classList.add("typography-p"),this.setStatusStyles(),this),this.setOrder=(t="")=>{if([e=""]=[t],!/(TITLE_DESCRIPTION|TITLE_DESCRIPTION_BUTTON|ONLY_DESCRIPTION|DESCRIPTION_BUTTON|DESCRIPTION_LINK|DESCRIPTION_BUTTON_LINK)/gi.test(e))throw new Error("La orden asignada no es valida.");var e;switch(t){case"TITLE_DESCRIPTION":this.mainContainerElement.classList.add(this.mainClassName+"_title_description");break;case"TITLE_DESCRIPTION_BUTTON":this.mainContainerElement.classList.add(this.mainClassName+"_title_description_button");break;case"ONLY_DESCRIPTION":this.mainContainerElement.classList.add(this.mainClassName+"_only_description");break;case"DESCRIPTION_BUTTON":this.mainContainerElement.classList.add(this.mainClassName+"_description_button");break;case"DESCRIPTION_LINK":this.mainContainerElement.classList.add(this.mainClassName+"_description_link");break;case"DESCRIPTION_BUTTON_LINK":this.mainContainerElement.classList.add(this.mainClassName+"_description_button_link")}return this},this.setChildren=()=>{this.mainContainerElement.appendChild(this.statusContainerElement),this.statusContainerElement.appendChild(this.statusIconElement);var t=()=>{this.mainContainerElement.appendChild(this.titleContainerElement),this.titleContainerElement.appendChild(this.titleElement),this.title&&this.titleElement.appendChild(document.createTextNode(this.title))},e=()=>{this.mainContainerElement.appendChild(this.contentContainerElement),this.contentContainerElement.appendChild(this.contentMessageElement),this.description&&this.contentMessageElement.appendChild(document.createTextNode(this.description))},i=()=>{this.mainContainerElement.appendChild(this.buttonContainerElement),this.buttonContainerElement.appendChild(this.buttonElement),this.button&&this.buttonElement.appendChild(document.createTextNode(this.button))},n=()=>{this.mainContainerElement.appendChild(this.linkContainerElement),this.linkContainerElement.appendChild(this.linkElement),this.link&&(this.linkElement.appendChild(document.createTextNode(this.link)),this.linkElement.setAttribute("href",this.linkUrl),this.linkElement.setAttribute("target","_blank"))};return this.title&&this.description&&!this.button&&!this.link?(t(),e()):this.title&&this.description&&this.button&&!this.link?(t(),i(),e()):this.title||!this.description||this.button||this.link?!this.title&&this.description&&this.button&&!this.link?(e(),i()):!this.title&&this.description&&!this.button&&this.link?(e(),n()):!this.title&&this.description&&this.button&&this.link&&(e(),i(),n()):e(),this},this.render=(t="")=>{if(!t)throw new Error('El "id" es necesario para renderizar el elemento');const e=document.getElementById(t);if(e)return e.appendChild(this.mainContainerElement),this;throw new Error("No se encontró ningún elemento con el id "+t)},this.init()}function loadBLUE(){inputPassword(),inputError(),inputCurrency()}function inputPassword(){document.querySelectorAll(".input-password").forEach(t=>{const e=t.querySelector("span"),i=e.textContent,n=e.getAttribute("data-hidden-message"),s=t.querySelector("input");e.addEventListener("click",()=>{var t=s.getAttribute("type");s.focus(),t&&/password/i.test(t)?(s.setAttribute("type","text"),e.textContent=n):(s.setAttribute("type","password"),e.textContent=i)}),s.addEventListener("keyup",({target:t})=>{t=t.value;e.style.visibility=t?"visible":"hidden"})})}function inputError(){document.querySelectorAll(".input-main").forEach(t=>{t.addEventListener("focus",({target:t})=>{t.classList.add("input-main_default")})})}function inputCurrency(){document.querySelectorAll(".input-currency").forEach(t=>{t.addEventListener("focus",({target:t})=>{/currency-content/gi.test(t.parentNode.className)&&(t.classList.remove("input-main_default"),t.parentNode.classList.add("input-line"))})})}function createRipple(t){const e=t.currentTarget,i=document.createElement("span"),n=e.getElementsByClassName("ripple")[0];i.style.width=this.clientWidth+"px",i.style.height=this.clientHeight+"px",i.style.left=t.layerX-this.clientWidth/2-this.offsetLeft+"px",i.style.top="0px",i.classList.add("ripple"),n&&n.remove(),e.appendChild(i)}function createRipple(t){const e=document.createElement("span"),i=t.getElementsByClassName("ripple")[0];e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",e.style.left=event.layerX-t.clientWidth/2-t.offsetLeft+"px",e.style.top="0px",e.classList.add("ripple"),i&&i.remove(),t.appendChild(e)}function validateCheckboxRequired(e){const t=document.querySelector("#"+e);0<t.querySelectorAll('input[type="checkbox"]:checked').length?t.querySelectorAll('input[type="checkbox"]:required').forEach(t=>{t.removeAttribute("required")}):t.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.required=!0,t.addEventListener("click",()=>{validateCheckboxRequired(e)})})}function modalBLUE(o){let a=this;var t={idModal:"",elementReference:"",contentHTML:"",container:document.body,closeButtom:!0,priority:0,callBackOpenModal:function(){},callBackCloseModal:function(){}};o=Object.assign(t,o),a.options=o,this.init=function(){this.clear(),this.prepareView(),this.addOpenModal()},this.clear=function(){var t,e=document.querySelector("#boxModal"+o.idModal),i=document.querySelector("#boxContent"+o.idModal);null!==e&&((t=e.parentElement).removeChild(e),t.removeChild(i))},this.prepareView=function(){var t=o.container;const e=document.createElement("div"),i=(e.setAttribute("id","boxModal"+o.idModal),e.setAttribute("class","box-modal-main d-none"),this.boxModal=e,document.createElement("div"));if(i.setAttribute("id","boxContent"+o.idModal),i.setAttribute("data-priority",o.priority),i.setAttribute("class","box-modal-content modal-z-index d-none"),this.boxContent=i,t.append(e),t.append(i),o.closeButtom){const s=document.createElement("button");s.setAttribute("id","btnClose"+o.idModal),s.setAttribute("class","icons x-block-before icons-l modal-btn-close cursor-pointer "),s.addEventListener("click",function(){a.closeModalBox()}),i.append(s)}const n=document.createElement("div");n.setAttribute("class","overflow-y-auto"),this.containerHTML=n,i.append(n),n.innerHTML=o.contentHTML},this.addOpenModal=function(){document.querySelector("#"+o.elementReference)&&document.querySelector("#"+o.elementReference).addEventListener("click",function(){a.openModalBox()})},this.openModalBox=function(){o.callBackOpenModal();let e=1;var t=document.getElementsByClassName("box-modal-content"),t=(Array.from(t).forEach(function(t){t.getAttribute("data-priority")>=e&&(e=parseInt(t.getAttribute("data-priority"))+1)}),document.querySelector("#boxContent"+o.idModal).setAttribute("data-priority",e),document.querySelector("#boxContent"+o.idModal).setAttribute("style","z-index:"+(105+e)),document.querySelector("#boxModal"+o.idModal).setAttribute("style","z-index:"+(105+e)),this.boxModal.classList.remove("d-none"),this.boxContent.classList.remove("d-none"),this.boxModal.classList.add("d-block"),this.boxContent.classList.add("d-block"),.87*o.container.clientHeight);this.containerHTML.setAttribute("style","max-height:calc("+t+"px)"),this.boxModal.classList.remove("modal-fadeOut-opacity"),this.boxModal.classList.add("modal-fadeIn-opacity"),this.boxContent.classList.remove("modal-fadeOut"),this.boxContent.classList.add("modal-fadeIn")},this.closeModalBox=function(){this.boxModal.classList.remove("modal-fadeIn-opacity"),this.boxModal.classList.add("modal-fadeOut-opacity"),this.boxContent.classList.remove("modal-fadeIn"),this.boxContent.classList.add("modal-fadeOut");var t=this.boxModal,e=this.boxContent;setTimeout(function(){t.classList.remove("d-block"),e.classList.remove("d-block"),t.classList.add("d-none"),e.classList.add("d-none")},200),document.querySelector("#boxContent"+o.idModal).setAttribute("data-priority",0),document.querySelector("#boxContent"+o.idModal).removeAttribute("style"),document.querySelector("#boxModal"+o.idModal).removeAttribute("style"),o.callBackCloseModal()},this.destroy=function(){var t=this.boxModal.parentElement;t.removeChild(this.boxModal),t.removeChild(this.boxContent),this.boxModal="",this.boxContent=""},this.init()}window.addEventListener("load",function(){loadBLUE()}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".btn").forEach(t=>{t.addEventListener("focus",()=>t.classList.add("tab-focus")),t.addEventListener("blur",()=>t.classList.remove("tab-focus")),t.addEventListener("click",()=>t.classList.remove("tab-focus"))})}),document.addEventListener("click",function(t){let e=t.target;e.matches(".btn-primary")&&createRipple(e)});