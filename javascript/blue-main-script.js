!function(t){t.TITLE_DESCRIPTION="TITLE_DESCRIPTION",t.TITLE_DESCRIPTION_BUTTON="TITLE_DESCRIPTION_BUTTON",t.ONLY_DESCRIPTION="ONLY_DESCRIPTION",t.DESCRIPTION_BUTTON="DESCRIPTION_BUTTON",t.DESCRIPTION_LINK="DESCRIPTION_LINK",t.DESCRIPTION_BUTTON_LINK="DESCRIPTION_BUTTON_LINK"}(AlertMessageOrderEnum=AlertMessageOrderEnum||{});var AlertMessageOrderEnum,LoadingIconPath,AnimationSVGOption,AlertMessage=function(){function t(t){this.options=t,this.mainClassName="alert-message",this.mainContainerElement=document.createElement("div"),this.statusContainerElement=document.createElement("div"),this.statusIconElement=document.createElement("span"),this.titleContainerElement=document.createElement("div"),this.titleElement=document.createElement("h3"),this.contentContainerElement=document.createElement("div"),this.contentMessageElement=document.createElement("p"),this.buttonContainerElement=document.createElement("div"),this.buttonElement=document.createElement("button"),this.linkContainerElement=document.createElement("div"),this.linkElement=document.createElement("a"),this.order=AlertMessageOrderEnum.TITLE_DESCRIPTION,this.type=t.type,this.icon=t.icon,this.bgColor=t.bgColor,this.title=t.title,this.description=t.description,this.button=t.button,this.link=t.link,this.linkUrl=t.linkUrl,this.init()}return t.prototype.addTitle=function(){this.mainContainerElement.appendChild(this.titleContainerElement),this.titleContainerElement.appendChild(this.titleElement),this.title&&this.titleElement.appendChild(document.createTextNode(this.title))},t.prototype.addDescription=function(){this.mainContainerElement.appendChild(this.contentContainerElement),this.contentContainerElement.appendChild(this.contentMessageElement),this.description&&this.contentMessageElement.appendChild(document.createTextNode(this.description))},t.prototype.addButton=function(){this.mainContainerElement.appendChild(this.buttonContainerElement),this.buttonContainerElement.appendChild(this.buttonElement),this.button&&this.buttonElement.appendChild(document.createTextNode(this.button))},t.prototype.addLink=function(){this.mainContainerElement.appendChild(this.linkContainerElement),this.linkContainerElement.appendChild(this.linkElement),this.link&&this.linkUrl&&(this.linkElement.appendChild(document.createTextNode(this.link)),this.linkElement.setAttribute("href",this.linkUrl),this.linkElement.setAttribute("target","_blank"))},t.prototype.updateInternalOrder=function(){this.title&&this.description&&!this.link&&!this.button?this.order=AlertMessageOrderEnum.TITLE_DESCRIPTION:this.title&&this.description&&!this.link&&this.button?this.order=AlertMessageOrderEnum.TITLE_DESCRIPTION_BUTTON:this.title||!this.description||this.link||this.button?!this.title&&this.description&&!this.link&&this.button?this.order=AlertMessageOrderEnum.DESCRIPTION_BUTTON:!this.title&&this.description&&this.link&&!this.button?this.order=AlertMessageOrderEnum.DESCRIPTION_LINK:!this.title&&this.description&&this.link&&this.button&&(this.order=AlertMessageOrderEnum.DESCRIPTION_BUTTON_LINK):this.order=AlertMessageOrderEnum.ONLY_DESCRIPTION},t.prototype.setOrder=function(t){switch(t){case AlertMessageOrderEnum.TITLE_DESCRIPTION:this.mainContainerElement.classList.add("".concat(this.mainClassName,"_title_description"));break;case AlertMessageOrderEnum.TITLE_DESCRIPTION_BUTTON:this.mainContainerElement.classList.add("".concat(this.mainClassName,"_title_description_button"));break;case AlertMessageOrderEnum.ONLY_DESCRIPTION:this.mainContainerElement.classList.add("".concat(this.mainClassName,"_only_description"));break;case AlertMessageOrderEnum.DESCRIPTION_BUTTON:this.mainContainerElement.classList.add("".concat(this.mainClassName,"_description_button"));break;case AlertMessageOrderEnum.DESCRIPTION_LINK:this.mainContainerElement.classList.add("".concat(this.mainClassName,"_description_link"));break;case AlertMessageOrderEnum.DESCRIPTION_BUTTON_LINK:this.mainContainerElement.classList.add("".concat(this.mainClassName,"_description_button_link"));break;default:throw new Error("La orden asignada no es valida.")}return this},t.prototype.setStyles=function(){return this.mainContainerElement.classList.add("".concat(this.mainClassName)),this.contentContainerElement.classList.add("".concat(this.mainClassName,"_content")),this.statusContainerElement.classList.add("".concat(this.mainClassName,"_status")),this.titleContainerElement.classList.add("".concat(this.mainClassName,"_title")),this.titleElement.classList.add("typography-h3"),this.buttonContainerElement.classList.add("".concat(this.mainClassName,"_button")),this.buttonElement.classList.add("btn","btn-default"),this.linkContainerElement.classList.add("".concat(this.mainClassName,"_link")),this.linkElement.classList.add("typography-link"),this.contentMessageElement.classList.add("typography-p"),this.setStatusStyles(),this},t.prototype.setChildren=function(){return this.mainContainerElement.appendChild(this.statusContainerElement),this.statusContainerElement.appendChild(this.statusIconElement),this.title&&this.addTitle(),this.description&&this.addDescription(),this.button&&this.addButton(),this.link&&this.addLink(),this},t.prototype.setStatusStyles=function(t,e){return void 0===t&&(t=this.bgColor),void 0===e&&(e=this.icon),this.statusContainerElement.classList.add("".concat(this.mainClassName,"_status")),this.statusContainerElement.classList.add("".concat(this.mainClassName,"_status")),t&&this.statusContainerElement.classList.add(t),this.statusIconElement.classList.add("icons",e,"icons-after-3xl","c-white"),this},t.prototype.render=function(t){if(!t)throw new Error('El "id" es necesario para renderizar el elemento');var e=document.getElementById(t);if(e)return e.appendChild(this.mainContainerElement),this;throw new Error("No se encontró ningún elemento con el id ".concat(t))},t.prototype.init=function(){return this.updateInternalOrder(),this.setOrder(this.order),this.setStyles(),this.setChildren(),this},t}();function createRipple(t){var e=document.createElement("span");null!==t.getElementsByClassName("ripple")[0]&&(e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",e.style.left=t.layerX-t.clientWidth/2-t.offsetLeft+"px",e.style.top="0px",e.classList.add("ripple"),t.appendChild(e))}function validateCheckboxRequired(e){var t=document.querySelector("#"+e);null!==t&&(0<t.querySelectorAll('input[type="checkbox"]:checked').length?t.querySelectorAll('input[type="checkbox"]:required').forEach(function(t){t.removeAttribute("required")}):t.querySelectorAll('input[type="checkbox"]').forEach(function(t){t.required=!0,t.addEventListener("click",function(){validateCheckboxRequired(e)})}))}function loadBLUE(){inputPassword()}function inputPassword(){document.querySelectorAll(".input-password").forEach(function(t){var e,n,i,o=t.querySelector("button");null!==o&&null!==(e=o.textContent)&&(n=o.getAttribute("data-hidden-message"),null!==(i=t.querySelector("input"))&&(o.addEventListener("click",function(){var t=i.getAttribute("type");i.focus(),t&&/password/i.test(t)?(i.setAttribute("type","text"),o.textContent=n):(i.setAttribute("type","password"),o.textContent=e)}),i.addEventListener("keyup",function(t){t=t.target.value;o.style.visibility=t?"visible":"hidden"})))})}window.addEventListener("load",function(){loadBLUE()}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".btn").forEach(function(t){t.addEventListener("focus",function(){return t.classList.add("tab-focus")}),t.addEventListener("blur",function(){return t.classList.remove("tab-focus")}),t.addEventListener("click",function(){return t.classList.remove("tab-focus")})})}),document.addEventListener("click",function(t){t=t.target;t.matches(".btn-primary")&&createRipple(t)}),function(t){t.DEFAULT_INIT_ICON="M193.894 68H173.105C171.219 67.9932 169.407 68.7255 168.073 70.0345C166.739 71.3434 165.993 73.1208 166 74.9719V116.028C165.993 117.879 166.739 119.657 168.073 120.966C169.407 122.274 171.219 123.007 173.105 123H193.894C195.781 123.007 197.592 122.274 198.926 120.966C200.26 119.657 201.007 117.879 201 116.028V75.2301C201.03 71.3249 197.873 68.1124 193.894 68ZM198.368 114.221V116.028C198.326 117.183 197.858 118.284 197.052 119.127C196.222 119.96 195.082 120.427 193.894 120.418H173.105C170.664 120.35 168.7 118.424 168.632 116.028V114.221H198.368ZM198.368 111.638H168.632V79.3616H198.368V111.638ZM198.368 75.2301V77.0376H168.632V75.2301C168.7 72.8343 170.664 70.908 173.105 70.8405H193.894C195.083 70.8335 196.225 71.2938 197.066 72.1185C197.906 72.9432 198.375 74.0638 198.368 75.2301Z",t.DEFAULT_MAIN_ICON="M170.946 93.8619L180.875 103.177L196.875 86.1772",t.DEFAULT_SECONDARY_ICON="M172.971 105.937L194.893 84.0001",t.DEFAULT_SECONDARY_ICON_2="M194.893 105.937L172.971 84.0001"}(LoadingIconPath=LoadingIconPath||{}),function(t){t.LOADER_ANIMATION_SVG_WEB="assets/images/components/loader/loadingcomponent.svg",t.LOADER_ANIMATION_SVG_APP="libs/blue/v3/assets/images/components/loader/loadingcomponent.svg"}(AnimationSVGOption=AnimationSVGOption||{});var IconPath,SVGOptions,LoaderComponent=function(){function t(t){if(null===t.animationContainerID||void 0===t.animationContainerID)throw new Error("El parametro animationContainerID es obligatorio, para crear el Loader necesita indicar cual será el elemento contenedor}");this.settings=Object.assign({},{initFill:"--neutral-low",mainColor:"--positive-low",secondaryColor:"--critical-low",iconFill:"--white",fillTime:2,waveCounter:"infinite",waveTime:3.5,initText:"",iconInitPath:LoadingIconPath.DEFAULT_INIT_ICON,iconMainPath:LoadingIconPath.DEFAULT_MAIN_ICON,iconSecondaryPath:LoadingIconPath.DEFAULT_SECONDARY_ICON,iconSecondary2Path:LoadingIconPath.DEFAULT_SECONDARY_ICON_2,type:1,height:"100px",width:"100%",position:"",zIndex:""},t),this.animation={animationContainer:document.getElementById(t.animationContainerID)},this._build()}return t.prototype._build=function(){var t=new XMLHttpRequest,e=(this._isMobile()?t.open("GET",AnimationSVGOption.LOADER_ANIMATION_SVG_APP,!1):t.open("GET",AnimationSVGOption.LOADER_ANIMATION_SVG_WEB,!1),t.send(),document.createElement("div"));if(e.innerHTML=t.responseText,!(e.firstElementChild instanceof SVGSVGElement))throw new Error("Expected e to be an SVGSVGElement, was ".concat(null==(t=this.settings.animationSVG.firstElementChild)?void 0:t.className));this.settings.animationSVG=e.firstElementChild,this.settings.animationSVG.setAttribute("id",this.settings.animationContainerID+"SVG"),this._setPositionContainer(),this._setElementColors(),this._setElementAnimation(),this._setSvgPathElements(),this.animation.animationContainer.append(this.settings.animationSVG),this._observer()},t.prototype._setPositionContainer=function(){this.animation.animationContainer.style.setProperty("height",this.settings.height),this.animation.animationContainer.style.setProperty("width",this.settings.width),this.animation.animationContainer.style.setProperty("position",this.settings.position),this.animation.animationContainer.style.setProperty("z-index",this.settings.zIndex)},t.prototype._setElementColors=function(){this.settings.animationSVG.style.setProperty("--init-fill","var("+this.settings.initFill+")"),this.settings.animationSVG.style.setProperty("--main-color","var("+this.settings.mainColor+")"),this.settings.animationSVG.style.setProperty("--secondary-color","var("+this.settings.secondaryColor+")"),this.settings.animationSVG.style.setProperty("--icon-fill","var("+this.settings.iconFill+")")},t.prototype._setElementAnimation=function(){this.settings.animationSVG.style.setProperty("--fill-time",this.settings.fillTime+"s"),this.settings.animationSVG.style.setProperty("--wave-time",this.settings.waveTime+"s"),this.settings.animationSVG.style.setProperty("--wave-counter",this.settings.waveCounter),this.settings.animationSVG.style.setProperty("position",this.settings.position),this.settings.animationSVG.style.setProperty("z-index",this.settings.zIndex+"")},t.prototype._setPosition=function(){this.settings.animationSVG.style.setProperty("position",this.settings.position),this.settings.animationSVG.style.setProperty("z-index",this.settings.zIndex+"")},t.prototype._setSvgPathElements=function(){this.settings.animationSVG.setAttribute("data-type",this.settings.type.toString()),""==this.settings.initText?this.settings.animationSVG.getElementsByTagName("path")[0].setAttribute("d",this.settings.iconInitPath):this._setInitText(),this.settings.animationSVG.getElementsByTagName("path")[1].setAttribute("d",this.settings.iconMainPath),this.settings.animationSVG.getElementsByTagName("path")[2].setAttribute("d",this.settings.iconSecondaryPath),this.settings.animationSVG.getElementsByTagName("path")[3].setAttribute("d",this.settings.iconSecondary2Path)},t.prototype._observer=function(){var t=this,e=document.getElementById(this.settings.animationContainerID+"SVG");new MutationObserver(function(){(document.querySelector(".loader__primary")||document.querySelector(".loader__secondary"))&&(t.settings.animationSVG.getElementsByTagName("text")[0].textContent="")}).observe(e,{attributes:!0})},t.prototype._setInitText=function(){this._isMobile()&&this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y","100"),-1<navigator.userAgent.toLowerCase().indexOf("safari/")?(this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y","97"),this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("x","185")):this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y","104"),this.settings.animationSVG.getElementsByTagName("text")[0].textContent=this.settings.initText},t.prototype._isMobile=function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)},t.prototype._getDataType=function(){0===Number(this.settings.animationSVG.getAttribute("data-type"))?this.settings.animationSVG.classList.add("loader__secondary"):this.settings.animationSVG.classList.add("loader__primary")},t.prototype.startAnimation=function(){var t=this;this.settings.animationSVG.classList.contains("animation")||(this.settings.animationSVG.classList.add("animation"),setTimeout(function(){t._getDataType()},1e3*this.settings.fillTime))},t.prototype.changeLoaderStatus=function(){var t=getComputedStyle(this.settings.animationSVG).getPropertyValue("--main-color"),e=getComputedStyle(this.settings.animationSVG).getPropertyValue("--secondary-color");this.settings.animationSVG.style.setProperty("--secondary-color",t),this.settings.animationSVG.style.setProperty("--main-color",e),0===this.settings.type?(this._changeLoaderType(1),this.settings.animationSVG.classList.remove("loader__secondary"),this.settings.animationSVG.classList.add("loader__primary")):(this._changeLoaderType(0),this.settings.animationSVG.classList.remove("loader__primary"),this.settings.animationSVG.classList.add("loader__secondary"))},t.prototype._changeLoaderType=function(t){this.settings.animationSVG.setAttribute("data-type",t.toString()),this.settings.type=t},t.prototype.endAnimation=function(){var t=this;0===Number(this.settings.animationSVG.getAttribute("data-type"))?this.settings.animationSVG.classList.remove("loader__secondary"):this.settings.animationSVG.classList.remove("loader__primary"),this.settings.animationSVG.classList.remove("animation"),setTimeout(function(){t._setInitText()},500)},t.prototype.clearStatus=function(){var t=this;this.settings.animationSVG.classList.remove("loader__primary"),this.settings.animationSVG.classList.remove("loader__secondary"),this.settings.animationSVG.classList.remove("animation"),this.settings.animationSVG.style.setProperty("--init-fill","var("+this.settings.initFill+")"),setTimeout(function(){t._setInitText()},500)},t.prototype.destroy=function(){var t=document.getElementById(this.settings.animationContainerID+"SVG");null!=t&&t.remove()},t}(),modalBLUE=function(t){var i=this;this.options=t,this.idModal="",this.elementReference="",this.contentHTML="",this.closeButtom=!0,this.priority=0,this.container=document.body,this.boxContent=null,this.boxModal=null,this.containerHTML=null,this.callBackOpenModal=function(){},this.callBackCloseModal=function(){},this.callBackDestroyModal=function(){},this.init=function(){i.clear(),i.prepareView(),i.addOpenModal()},this.clear=function(){i.container.style.position="inherit";var t,e,n=document.querySelector("#boxModal"+i.idModal);null!==n&&(t=null==n?void 0:n.parentElement)&&(e=document.querySelector("#boxContent"+i.idModal),t.removeChild(n),e&&t.removeChild(e))},this.prepareView=function(){var t;i.boxModal=document.createElement("div"),i.boxModal.setAttribute("id","boxModal"+i.idModal),i.boxModal.setAttribute("class","box-modal-main d-none"),i.boxContent=document.createElement("div"),i.boxContent.setAttribute("id","boxContent"+i.idModal),i.boxContent.setAttribute("data-priority",(i.priority||0).toString()),i.boxContent.setAttribute("class","box-modal-content modal-z-index d-none"),i.container.append(i.boxModal),i.container.append(i.boxContent),i.closeButtom&&((t=document.createElement("button")).setAttribute("id","btnClose"+i.idModal),t.setAttribute("class","icons x-block-before icons-l modal-btn-close cursor-pointer "),t.addEventListener("click",function(){return i.closeModalBox()}),i.boxContent.append(t)),i.containerHTML=document.createElement("div"),i.containerHTML.setAttribute("class","overflow-y-auto"),i.boxContent.append(i.containerHTML),i.containerHTML.innerHTML=i.contentHTML},this.addOpenModal=function(){var t=document.querySelector("#"+i.elementReference);t&&t.addEventListener("click",function(){return i.openModalBox()})},this.openModalBox=function(){i.container.style.position="relative",i.callBackOpenModal&&i.callBackOpenModal();var t=document.getElementsByClassName("box-modal-content"),e=1;Array.from(t).forEach(function(t){t=null!=(t=t.getAttribute("data-priority"))?t:"";Number(t)>=e&&(e=parseInt(t)+1)}),i.boxContent&&i.boxModal&&(i.boxContent.setAttribute("data-priority",e.toString()),i.boxContent.setAttribute("style","z-index:"+(105+e)),i.boxModal.setAttribute("style","z-index:"+(105+e)),i.boxModal.classList.remove("d-none"),i.boxContent.classList.remove("d-none"),i.boxModal.classList.add("d-block"),i.boxContent.classList.add("d-block"),t=.87*i.container.clientHeight,i.containerHTML&&i.containerHTML.setAttribute("style","max-height:calc("+t+"px)"),i.boxModal.classList.remove("modal-fadeOut-opacity"),i.boxModal.classList.add("modal-fadeIn-opacity"),i.boxContent.classList.remove("modal-fadeOut"),i.boxContent.classList.add("modal-fadeIn"))},this.closeModalBox=function(){i.boxModal&&(i.boxModal.classList.remove("modal-fadeIn-opacity"),i.boxModal.classList.add("modal-fadeOut-opacity")),i.boxContent&&(i.boxContent.classList.remove("modal-fadeIn"),i.boxContent.classList.add("modal-fadeOut")),setTimeout(function(){i.boxModal&&(i.boxModal.classList.remove("d-block"),i.boxModal.classList.add("d-none")),i.boxContent&&(i.boxContent.classList.remove("d-block"),i.boxContent.classList.add("d-none"))},200),i.boxModal&&i.boxModal.removeAttribute("style"),i.boxContent&&(i.boxContent.setAttribute("data-priority","0"),i.boxContent.removeAttribute("style")),i.callBackCloseModal&&i.callBackCloseModal()},this.destroy=function(){var t=i.container;i.boxModal&&t.removeChild(i.boxModal),i.boxContent&&t.removeChild(i.boxContent),i.boxModal=null,i.boxContent=null,i.callBackDestroyModal&&i.callBackDestroyModal()},null!=t&&t.idModal&&(this.idModal=null==t?void 0:t.idModal),null!=t&&t.container&&(this.container=null==t?void 0:t.container),null!=t&&t.elementReference&&(this.elementReference=null==t?void 0:t.elementReference),null!=t&&t.contentHTML&&(this.contentHTML=null==t?void 0:t.contentHTML),null==(null==t?void 0:t.closeButtom)&&null==(null==t?void 0:t.closeButtom)||(this.closeButtom=null==t?void 0:t.closeButtom),null!=t&&t.priority&&(this.priority=null==t?void 0:t.priority),null!=t&&t.callBackOpenModal&&(this.callBackOpenModal=null==t?void 0:t.callBackOpenModal),null!=t&&t.callBackCloseModal&&(this.callBackCloseModal=null==t?void 0:t.callBackCloseModal),null!=t&&t.callBackDestroyModal&&(this.callBackDestroyModal=null==t?void 0:t.callBackDestroyModal),this.init()},RandomAnimationComponent=(!function(t){t.PATH_DOLAR="M -6.039 13.525 L -6.039 13.524 L -11.325 0.345 C -11.438 0.064 -11.758 -0.072 -12.04 0.039 L -33.487 8.518 C -33.575 8.556 -33.65 8.616 -33.708 8.692 C -33.885 8.784 -33.998 8.966 -34 9.166 L -34 23.355 C -34 23.656 -33.754 23.9 -33.45 23.9 L -10.364 23.9 C -10.061 23.9 -9.816 23.656 -9.816 23.355 L -9.816 15.605 L -6.346 14.233 C -6.064 14.122 -5.927 13.804 -6.039 13.525 Z M -10.914 22.809 L -32.9 22.809 L -32.9 9.712 L -10.914 9.712 L -10.914 22.809 Z M -24.829 8.623 L -15.625 4.981 C -14.804 5.839 -13.666 6.326 -12.474 6.331 L -11.557 8.623 L -24.829 8.623 Z M -9.816 14.433 L -9.816 9.166 C -9.816 8.864 -10.061 8.62 -10.364 8.62 L -10.374 8.62 L -11.538 5.716 C -11.552 5.692 -11.567 5.668 -11.584 5.647 C -11.642 5.383 -11.887 5.205 -12.158 5.227 C -13.266 5.327 -14.352 4.864 -15.039 3.994 C -15.211 3.785 -15.512 3.732 -15.745 3.872 C -15.771 3.876 -15.797 3.88 -15.822 3.886 L -27.059 8.329 C -27.194 8.381 -27.303 8.486 -27.36 8.62 L -30.773 8.62 L -12.144 1.255 L -7.264 13.422 L -9.816 14.433 Z M -31.409 19.125 C -30.342 19.438 -29.507 20.266 -29.19 21.325 C -29.12 21.556 -28.906 21.715 -28.664 21.715 C -28.635 21.713 -28.606 21.709 -28.578 21.702 C -28.554 21.709 -28.529 21.714 -28.504 21.718 L -15.312 21.718 C -15.29 21.715 -15.266 21.71 -15.244 21.704 C -14.97 21.77 -14.694 21.603 -14.626 21.331 L -14.626 21.328 C -14.31 20.267 -13.474 19.438 -12.407 19.124 C -12.148 19.045 -11.987 18.789 -12.03 18.523 C -12.023 18.498 -12.017 18.47 -12.014 18.443 L -12.014 14.078 C -12.017 14.05 -12.023 14.023 -12.03 13.997 C -11.988 13.731 -12.149 13.475 -12.408 13.396 C -13.475 13.083 -14.311 12.253 -14.625 11.192 C -14.705 10.934 -14.966 10.773 -15.234 10.818 C -15.259 10.811 -15.286 10.806 -15.312 10.803 L -28.504 10.803 C -28.531 10.806 -28.558 10.811 -28.585 10.819 C -28.853 10.777 -29.111 10.937 -29.19 11.194 C -29.506 12.253 -30.341 13.083 -31.409 13.396 C -31.668 13.475 -31.829 13.731 -31.786 13.997 C -31.793 14.023 -31.799 14.05 -31.802 14.078 L -31.802 18.443 C -31.799 18.469 -31.793 18.494 -31.786 18.519 C -31.831 18.786 -31.67 19.045 -31.409 19.125 Z M -30.702 14.299 C -29.599 13.859 -28.724 12.99 -28.281 11.894 L -15.536 11.894 C -15.092 12.99 -14.217 13.859 -13.113 14.299 L -13.113 18.221 C -14.216 18.662 -15.092 19.53 -15.535 20.626 L -28.281 20.626 C -28.724 19.53 -29.599 18.662 -30.702 18.221 L -30.702 14.299 Z M -18.61 16.26 C -18.61 18.068 -20.086 19.534 -21.907 19.534 C -23.729 19.533 -25.204 18.068 -25.205 16.26 C -25.205 14.452 -23.729 12.986 -21.907 12.986 C -20.086 12.986 -18.61 14.452 -18.61 16.26 Z M -19.709 16.26 C -19.709 15.055 -20.693 14.078 -21.907 14.078 C -23.122 14.078 -24.107 15.055 -24.107 16.26 C -24.107 17.466 -23.122 18.444 -21.907 18.444 C -20.693 18.444 -19.709 17.466 -19.709 16.26 Z M -27.954 17.079 C -27.499 17.079 -27.13 16.712 -27.13 16.26 C -27.13 15.808 -27.499 15.442 -27.954 15.442 C -28.409 15.442 -28.778 15.808 -28.778 16.26 C -28.778 16.712 -28.409 17.079 -27.954 17.079 Z M -27.954 15.988 C -27.802 15.988 -27.679 16.109 -27.679 16.26 C -27.679 16.411 -27.802 16.534 -27.954 16.534 C -28.106 16.534 -28.229 16.411 -28.229 16.26 C -28.229 16.109 -28.106 15.988 -27.954 15.988 Z M -15.037 16.26 C -15.037 16.712 -15.406 17.079 -15.862 17.079 C -16.317 17.079 -16.686 16.712 -16.686 16.26 C -16.686 15.808 -16.317 15.442 -15.862 15.442 C -15.406 15.442 -15.037 15.808 -15.037 16.26 Z M -15.586 16.26 C -15.586 16.109 -15.71 15.988 -15.862 15.988 C -16.013 15.988 -16.136 16.109 -16.136 16.26 C -16.136 16.411 -16.013 16.534 -15.862 16.534 C -15.71 16.534 -15.586 16.411 -15.586 16.26 Z",t.PATH_CENT="M -12.818 3.818 C -15.28 1.356 -18.541 0 -22 0 C -25.459 0 -28.72 1.356 -31.182 3.818 C -33.644 6.281 -35 9.541 -35 13 C -35 16.459 -33.644 19.72 -31.182 22.182 C -28.72 24.644 -25.459 26 -22 26 C -18.541 26 -15.28 24.644 -12.818 22.182 C -10.356 19.72 -9 16.459 -9 13 C -9 9.541 -10.356 6.281 -12.818 3.818 Z M -22 24.477 C -28.328 24.477 -33.476 19.328 -33.476 13 C -33.476 6.672 -28.328 1.524 -22 1.524 C -15.672 1.524 -10.523 6.672 -10.523 13 C -10.523 19.328 -15.672 24.477 -22 24.477 Z M -22 3.098 C -27.46 3.098 -31.902 7.54 -31.902 13 C -31.902 18.46 -27.46 22.903 -22 22.903 C -16.54 22.903 -12.098 18.46 -12.098 13 C -12.098 7.54 -16.54 3.098 -22 3.098 Z M -22 21.379 C -26.62 21.379 -30.379 17.62 -30.379 13 C -30.379 8.38 -26.62 4.621 -22 4.621 C -17.38 4.621 -13.621 8.38 -13.621 13 C -13.621 17.62 -17.38 21.379 -22 21.379 Z M -18.953 11.469 C -19.374 11.469 -19.715 11.128 -19.715 10.707 C -19.715 10.059 -20.361 9.489 -21.238 9.275 L -21.238 12.292 C -20.547 12.402 -19.908 12.663 -19.388 13.052 C -18.628 13.623 -18.191 14.434 -18.191 15.278 C -18.191 16.121 -18.628 16.932 -19.388 17.503 C -19.908 17.893 -20.547 18.153 -21.238 18.264 L -21.238 19.094 C -21.238 19.515 -21.579 19.856 -22 19.856 C -22.421 19.856 -22.762 19.515 -22.762 19.094 L -22.762 18.264 C -23.452 18.153 -24.092 17.893 -24.611 17.503 C -25.372 16.932 -25.808 16.121 -25.808 15.278 C -25.808 14.857 -25.467 14.516 -25.047 14.516 C -24.626 14.516 -24.285 14.857 -24.285 15.278 C -24.285 15.926 -23.639 16.496 -22.762 16.71 L -22.762 13.693 C -23.452 13.583 -24.092 13.322 -24.611 12.933 C -25.372 12.362 -25.808 11.551 -25.808 10.707 C -25.808 9.864 -25.372 9.053 -24.611 8.482 C -24.092 8.092 -23.452 7.832 -22.762 7.721 L -22.762 6.899 C -22.762 6.478 -22.421 6.137 -22 6.137 C -21.579 6.137 -21.238 6.478 -21.238 6.899 L -21.238 7.721 C -20.547 7.832 -19.908 8.092 -19.388 8.482 C -18.628 9.053 -18.191 9.864 -18.191 10.707 C -18.191 11.128 -18.532 11.469 -18.953 11.469 Z M -22.762 9.275 C -23.639 9.489 -24.285 10.059 -24.285 10.707 C -24.285 11.356 -23.639 11.926 -22.762 12.14 L -22.762 9.275 Z M -21.238 16.71 C -20.361 16.496 -19.715 15.926 -19.715 15.278 C -19.715 14.629 -20.361 14.06 -21.238 13.845 L -21.238 16.71 Z",t.PATH_MOLECULE="M -32.933 5.319 C -32.951 8.252 -30.616 10.638 -27.728 10.638 C -26.963 10.638 -26.235 10.471 -25.577 10.17 L -21.493 17.627 C -22.371 18.235 -22.952 19.256 -22.959 20.411 C -22.959 20.447 -22.959 20.483 -22.958 20.519 L -30.494 21.868 C -30.82 21.308 -31.419 20.933 -32.106 20.933 C -33.144 20.933 -33.993 21.79 -34 22.844 C -34.006 23.898 -33.168 24.756 -32.13 24.756 C -31.092 24.756 -30.242 23.898 -30.236 22.844 C -30.236 22.808 -30.236 22.772 -30.238 22.736 L -22.817 21.408 C -22.406 22.782 -21.149 23.782 -19.66 23.782 C -17.829 23.782 -16.33 22.27 -16.319 20.411 C -16.307 18.551 -17.787 17.039 -19.618 17.039 C -19.995 17.039 -20.358 17.103 -20.697 17.221 L -24.799 9.731 C -23.795 9.045 -23.033 8.018 -22.678 6.816 L -17.477 8.138 C -17.566 8.482 -17.614 8.842 -17.617 9.213 C -17.631 11.609 -15.724 13.559 -13.364 13.559 C -11.005 13.559 -9.073 11.609 -9.058 9.213 C -9.044 6.817 -10.951 4.868 -13.311 4.868 C -14.99 4.868 -16.452 5.855 -17.161 7.288 L -22.496 5.932 C -22.471 5.731 -22.458 5.526 -22.457 5.319 C -22.439 2.386 -24.774 0 -27.662 0 C -30.55 0 -32.914 2.386 -32.933 5.319 Z M -32.045 5.319 C -32.03 2.883 -30.066 0.901 -27.668 0.901 C -25.269 0.901 -23.33 2.883 -23.345 5.319 C -23.36 7.755 -25.323 9.736 -27.722 9.736 C -30.121 9.736 -32.06 7.755 -32.045 5.319 Z M -13.316 5.769 C -15.186 5.769 -16.717 7.314 -16.729 9.213 C -16.74 11.112 -15.229 12.657 -13.359 12.657 C -11.489 12.657 -9.958 11.112 -9.946 9.213 C -9.935 7.314 -11.446 5.769 -13.316 5.769 Z M -22.071 20.411 C -22.063 19.049 -20.965 17.94 -19.623 17.94 C -18.282 17.94 -17.198 19.049 -17.206 20.411 C -17.215 21.773 -18.313 22.881 -19.654 22.881 C -20.995 22.881 -22.08 21.773 -22.071 20.411 Z M -33.112 22.844 C -33.109 22.287 -32.66 21.834 -32.112 21.834 C -31.563 21.834 -31.12 22.288 -31.124 22.844 C -31.127 23.401 -31.576 23.854 -32.124 23.854 C -32.672 23.854 -33.116 23.401 -33.112 22.844 Z M -27.681 2.992 C -28.944 2.992 -29.977 4.036 -29.985 5.318 C -29.987 5.567 -30.187 5.769 -30.432 5.769 C -30.677 5.769 -30.875 5.567 -30.873 5.318 C -30.862 3.539 -29.427 2.091 -27.675 2.091 C -27.43 2.091 -27.232 2.293 -27.234 2.542 C -27.235 2.79 -27.436 2.992 -27.681 2.992 Z"}(IconPath=IconPath||{}),!function(t){t.ANIMATION_SVG_WEB="assets/images/components/randomAnimation/randomAnimation.svg",t.ANIMATION_SVG_APP="libs/blue/v3/assets/images/components/randomAnimation/randomAnimation.svg"}(SVGOptions=SVGOptions||{}),function(){function t(t){if(null===t.animationContainerID||void 0===t.animationContainerID)throw new Error("El parametro animationContainerID es obligatorio, para crear la animacion necesita indicar cual será el elemento contenedor");this.settings=Object.assign({},{paths:[{repeat:1,d:IconPath.PATH_DOLAR}],maxAnimationTime:2,minAnimationTime:5,height:"100px",width:"100%",position:"",zIndex:""},t),this.animation={animationContainer:document.getElementById(t.animationContainerID)},this._build()}return t.prototype._build=function(){this._responseSVG(),this._setPositionContainer(),this._setPathElement()},t.prototype._responseSVG=function(){var t=new XMLHttpRequest,e=(this._isMobile()?t.open("GET",SVGOptions.ANIMATION_SVG_APP,!1):t.open("GET",SVGOptions.ANIMATION_SVG_WEB,!1),t.send(),document.createElement("div"));if(e.innerHTML=t.responseText,!(e.firstElementChild instanceof SVGElement))throw new Error("Expected e to be an SVGElement, was ".concat(null==(t=this.settings.animationSVG.firstElementChild)?void 0:t.className));this.settings.animationSVG=e.firstElementChild,this.settings.animationSVG.setAttribute("id",this.settings.animationContainerID+"SVG"),this.animation.animationContainer.append(this.settings.animationSVG)},t.prototype._setPositionContainer=function(){this.animation.animationContainer.style.setProperty("height",this.settings.height),this.animation.animationContainer.style.setProperty("width",this.settings.width),this.animation.animationContainer.style.setProperty("position",this.settings.position),this.animation.animationContainer.style.setProperty("z-index",this.settings.zIndex),this.settings.animationSVG.setAttribute("viewbox","0 0 "+this.settings.height+" "+this.settings.height)},t.prototype._setPathElement=function(){var t,e=0,n=[];for(t in this.settings.paths)for(var i=0;i<this.settings.paths[t].repeat;i++){var o=this._generateUID();this.settings.animationSVG.getElementsByTagName("path")[e].setAttribute("id",o),this.settings.animationSVG.getElementsByTagName("path")[e].setAttribute("d",this.settings.paths[t].d),document.getElementById(o).style.setProperty("--animationInitY",this._getPositionAnimationY()+"px"),document.getElementById(o).style.setProperty("--animationEndY",this._getPositionAnimationY()+"px"),document.getElementById(o).style.setProperty("--animationEndX",this._getPositionAnimationEndX()+"px"),document.getElementById(o).style.setProperty("--time",this._getRandomTimer()+"s"),document.getElementById(o).style.setProperty("--cubic-bezier","cubic-bezier("+this._getCubicBezier()+", "+this._getCubicBezier()+", "+this._getCubicBezier()+", "+this._getCubicBezier()+")"),document.getElementById(o).style.setProperty("--iniRotate",this._getRotate()+"deg"),document.getElementById(o).style.setProperty("--endRotate",this._getRotate()+"deg"),n.push(document.getElementById(o)),e++}this.settings.pathArrays=n},t.prototype._getPositionAnimationEndX=function(){return this.animation.animationContainer.clientWidth+34},t.prototype._getPositionAnimationY=function(){var t=Math.floor(this.animation.animationContainer.clientHeight-35);return Math.floor(Math.random()*(t-35)+35)},t.prototype._getRandomTimer=function(){return Math.floor(Math.random()*(this.settings.maxAnimationTime-this.settings.minAnimationTime)+this.settings.minAnimationTime)},t.prototype._getCubicBezier=function(){return Math.round(100*Math.random())/100},t.prototype._generateUID=function(){var n=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==t?e:3&e|8).toString(16)})},t.prototype._getRotate=function(){return Math.floor(300*Math.random()+1)},t.prototype._isMobile=function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)},t.prototype.initAnimation=function(){for(var t in this.settings.pathArrays)document.getElementById(this.settings.pathArrays[t].id).classList.add("animation-position")},t.prototype.stopAnimation=function(){for(var t in this.settings.pathArrays)document.getElementById(this.settings.pathArrays[t].id).classList.remove("animation-position")},t.prototype.destroy=function(){var t=document.getElementById(this.settings.animationContainerID+"SVG");null!=t&&t.remove()},t}()),SeeMore=function(){function t(t){this.parentElementReference=t.parentElementReference,this.stepSize=t.stepSize,this.currentMaxData=0,this.componentText=t.componentText,this.componentId=t.componentId||"",this.dataLength=t.dataLength,this.componentClassList=t.componentClassList||[],this.componentStyleList=t.componentStyleList||[],this.iconStyleList=t.iconStyleList||[],this.callbackFunction=t.callbackFunction,this.componentInstance=document.createElement("a"),this.parentComponentInstance=document.createElement("div"),this._init()}return t.prototype._init=function(){this._build(),this._show(),this._calculateSteps()},t.prototype._build=function(){var t=this,e=this._createComponentElement();if((this.componentInstance=e).addEventListener("click",function(){t._calculateSteps()}),this.componentClassList&&0<this.componentClassList.length)for(var n=0;n<this.componentClassList.length;n++)e.classList.add(this.componentClassList[n]);this.componentStyleList&&0<this.componentStyleList.length&&(e=this._setStyleToElement(e,this.componentStyleList));var i=this._createTextElement(),o=this._createIconElement();this.iconStyleList&&0<this.iconStyleList.length&&(o=this._setStyleToElement(o,this.iconStyleList)),e.appendChild(i),e.appendChild(o)},t.prototype._createComponentElement=function(){var t=document.createElement("a");return t.setAttribute("id",this.componentId||this._makeRandomId(15)),t.setAttribute("class","see-more-principal"),t},t.prototype._createTextElement=function(){var t=document.createElement("span");return t.innerHTML="".concat(this.componentText),t},t.prototype._createIconElement=function(){var t=document.createElement("i");return t.setAttribute("class","icons chevron-down-block-before see-more-icon"),t},t.prototype._show=function(){var t=document.querySelector("#".concat(this.parentElementReference));return!!t&&((this.parentComponentInstance=t).classList.add("see-more-parent"),t.appendChild(this.componentInstance),!0)},t.prototype._calculateSteps=function(){this.currentMaxData=this.currentMaxData+this.stepSize,this.currentMaxData>=this.dataLength&&this._hide(),this.callbackFunction(this.currentMaxData)},t.prototype._hide=function(){this.parentComponentInstance.style.display="none"},t.prototype._makeRandomId=function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e},t.prototype._setStyleToElement=function(n,i){for(var t=0;t<i.length;t++)!function(e){Object.keys(i[e]).forEach(function(t){n.style.setProperty(t,i[e][t])})}(t);return n},t}(),Toast=function(){function t(t){this.idElement=t.idElement,this.container=t.container,this.title=t.title,this.description=t.description,this.icon=t.icon,this.backgroundColor=t.backgroundColor,this.color=t.color,this.itemLeftCustom=t.itemLeftCustom,this.itemRightCustom=t.itemRightCustom,this.animationIn=t.animationIn,this.animationOut=t.animationOut,this.timeIn=t.timeIn,this.timeOut=t.timeOut,this.autoClose=t.autoClose,this.timeAutoClose=t.timeAutoClose,this.position=t.position,this.instanceElement=document.createElement("div"),this.instanceContainer=document.createElement("div"),this.init()}return t.prototype.init=function(){this.build(),this.show(),this.autoCloseFunction()},t.prototype.buildElement=function(t){var e;return t?(e=document.querySelector("#".concat(t)))||(e=document.createElement("div")).setAttribute("id",t):(e=document.createElement("div")).setAttribute("id",this.makeRandomId(15)),e},t.prototype.makeRandomId=function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e},t.prototype.build=function(){var t,e=this,n=this.buildElement(this.idElement),i=((this.instanceElement=n).setAttribute("class","d-none toast a-items-center b "+this.backgroundColor),this.itemLeftCustom&&(this.itemLeft=this.stringToHTML(this.itemLeftCustom),n.append(this.itemLeft)),this.icon&&((i=document.createElement("i")).setAttribute("class",this.icon),n.append(i)),this.color||(this.color="c-white"),(this.description||this.title)&&((i=document.createElement("div")).setAttribute("class","f-grow-1 m-y-m"),this.title&&((t=document.createElement("h3")).textContent=this.title,t.setAttribute("class","typography-h3 t-truncate-clamp t-line-clamp-1 "+this.color),i.append(t)),this.description&&((t=document.createElement("p")).textContent=this.description,t.setAttribute("class","typography-p t-truncate-clamp t-line-clamp-2 "+this.color),i.append(t)),n.append(i)),this.itemRightCustom?(this.itemRight=this.stringToHTML(this.itemRightCustom),n.append(this.itemRight)):((t=document.createElement("div")).setAttribute("class","m-x-m"),t.addEventListener("click",function(){e.closeToast()}),t.innerHTML='<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#000" stroke-width="1" ><polyline points="8,6 12,2 16,6" opacity=".05" style="animation: slideUp 2s infinite"></polyline><polyline points="8,14 12,10 16,14" opacity=".05" style="animation:slideUp 2s infinite 1s"></polyline><polyline points="8,22 12,18 16,22" style="animation:slideUp 2s infinite .5s" opacity=".05"></polyline></svg>',n.append(t)),this.buildElement(this.container));this.instanceContainer=i,document.getElementById(this.idElement)||(this.idElement=n.id,i.append(n),document.getElementById(this.container)||(i.setAttribute("class","p-fixed toast-container"),this.setContainer(i),this.container=i.id,document.body.append(i)))},t.prototype.stringToHTML=function(t){return(new DOMParser).parseFromString(t,"text/html").body.childNodes[0]},t.prototype.setContainer=function(t){var e="width:"+(this.position.width?this.position.width+"":"100%")+";",e=(e=(e=(e+=this.position.top?" top:"+this.position.top+";":"")+(this.position.bottom?" bottom:"+this.position.bottom+";":""))+(this.position.left?" left:"+this.position.left+";":""))+(this.position.right?" right:"+this.position.right+";":"");this.position.top||this.position.bottom||this.position.left||this.position.right||(e+=" top: 0;"),t.setAttribute("style",e)},t.prototype.show=function(){var t=this.instanceElement;t.classList.remove("d-none"),t.setAttribute("style","animation: "+this.animationIn+", fadeIncreaseOpacity; animation-duration: "+this.timeIn+"s, "+this.timeIn+"s;"),t.classList.add("d-flex","a-items-top"),setTimeout(function(){t.removeAttribute("style")},1e3*this.timeIn)},t.prototype.closeToast=function(){var t=this.instanceElement,e=(t.setAttribute("style","animation: "+this.animationOut+", fadeDecreaseOpacity, fadeFlexToNone; animation-duration: "+this.timeOut+"s, "+this.timeOut+"s, "+this.timeOut+"s; animation-direction: reverse, normal, normal;"),this);setTimeout(function(){t.classList.add("d-none"),t.remove(),document.querySelector("#"+e.container)&&e.instanceContainer.remove()},1e3*e.timeOut)},t.prototype.autoCloseFunction=function(){var t=this;this.autoClose&&setTimeout(function(){t.closeToast()},1e3*this.timeAutoClose)},t}();