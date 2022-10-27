"use strict";
/***
 * @name document.addEventListener
 * @description Agrega el focus a la lista de componentes y lo elimina si fue realizado por un click
 */
document.addEventListener("DOMContentLoaded", () => {
    const componentsClass = ".btn, .checkbox-button, .switch-input, .radio-button";
    document.querySelectorAll(componentsClass).forEach((element) => {
        element.addEventListener("focus", () => element.classList.add("tab-focus"));
        element.addEventListener("blur", () => element.classList.remove("tab-focus"));
        element.addEventListener("click", () => element.classList.remove("tab-focus"));
    });
});
// @ts-ignore
class BLUEUtils {
    static makeRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    ;
    static dataFilter(search, data, key) {
        let tempData = data;
        let tempKey = key;
        let tempSearch = search.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let dataReturn = [];
        tempData.forEach(function (temp) {
            Object.getOwnPropertyNames(temp).forEach(function (i) {
                if (temp.hasOwnProperty(tempKey) && tempKey == i) {
                    if (temp[tempKey].toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(tempSearch)) {
                        dataReturn.push(temp);
                    }
                }
            });
        });
        return dataReturn;
    }
    /**
     * Convierte un string en un objeto HTMLElement.
     * @returns {HTMLElement} HTMLElement
     * @param str
     */
    static stringToHTML(str) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(str, 'text/html');
        return doc.body.childNodes[0];
    }
}
/**
 * Toma un nodo y devuelve una matriz de nombres de clase.
 * @param {HTMLElement} node - HTMLElement: el nodo del que queremos obtener la lista de clases
 * @returns Una matriz de cadenas.
 */
// @ts-ignore
const classListToArray = (node) => {
    /* Tomando la propiedad className del nodo y dividiéndola en una matriz de cadenas. */
    const classes = node.className
        .split(" ")
        .filter((className) => !!className.trim());
    return classes;
};
/**
 * Devuelve verdadero si className se encuentra en la propiedad className del nodo.
 * @param {HTMLElement} node - El nodo para verificar el nombre de la clase.
 * @param {string} className - El nombre de la clase para comprobar.
 * @returns Un valor booleano.
 */
// @ts-ignore
const hasClass = (node, className) => {
    /* Comprobando si el nodo tiene el className. */
    return new RegExp(className, "g").test(node.className);
};
/**
 * Devuelve verdadero si el nodo tiene alguna de las clases en la matriz de coincidencias.
 * @param {HTMLElement} node - HTMLElement - el nodo para comprobar
 * @param {string[]} matches - cuerda[]
 * @returns Una función que toma dos argumentos, nodo y coincidencias.
 */
// @ts-ignore
const hasSomeClasses = (node, matches) => {
    /* Comprobando si el nodo tiene alguna de las clases en la matriz de coincidencias. */
    return matches.some((className) => hasClass(node, className));
};
/**
 * Devuelve verdadero si el nodo tiene todas las clases en la matriz de coincidencias.
 * @param {HTMLElement} node - HTMLElement: el nodo para verificar las clases
 * @param {string[]} matches - cuerda[]
 * @returns Una función que toma dos argumentos, un nodo y una matriz de cadenas. La función devuelve un booleano.
 */
// @ts-ignore
const hasEveryClasses = (node, matches) => {
    /* Está comprobando si el nodo tiene todas las clases en la matriz de coincidencias. */
    return matches.every((className) => hasClass(node, className));
};

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
// @ts-ignore
var AlertMessageOrderEnum;
(function (AlertMessageOrderEnum) {
    AlertMessageOrderEnum["TITLE_DESCRIPTION"] = "TITLE_DESCRIPTION";
    AlertMessageOrderEnum["TITLE_DESCRIPTION_BUTTON"] = "TITLE_DESCRIPTION_BUTTON";
    AlertMessageOrderEnum["ONLY_DESCRIPTION"] = "ONLY_DESCRIPTION";
    AlertMessageOrderEnum["DESCRIPTION_BUTTON"] = "DESCRIPTION_BUTTON";
    AlertMessageOrderEnum["DESCRIPTION_LINK"] = "DESCRIPTION_LINK";
    AlertMessageOrderEnum["DESCRIPTION_BUTTON_LINK"] = "DESCRIPTION_BUTTON_LINK";
})(AlertMessageOrderEnum || (AlertMessageOrderEnum = {}));
// @ts-ignore
class AlertMessage {
    constructor(options) {
        this.options = options;
        this.mainClassName = "alert-message";
        this.mainContainerElement = document.createElement("div");
        this.statusContainerElement = document.createElement("div");
        this.statusIconElement = document.createElement("span");
        this.titleContainerElement = document.createElement("div");
        this.titleElement = document.createElement("h3");
        this.contentContainerElement = document.createElement("div");
        this.contentMessageElement = document.createElement("p");
        this.buttonContainerElement = document.createElement("div");
        this.buttonElement = document.createElement("button");
        this.linkContainerElement = document.createElement("div");
        this.linkElement = document.createElement("a");
        this.order = AlertMessageOrderEnum.TITLE_DESCRIPTION;
        this.type = options.type;
        this.icon = options.icon;
        this.bgColor = options.bgColor;
        this.title = options.title;
        this.description = options.description;
        this.button = options.button;
        this.link = options.link;
        this.linkUrl = options.linkUrl;
        this.init();
    }
    addTitle() {
        this.mainContainerElement.appendChild(this.titleContainerElement);
        this.titleContainerElement.appendChild(this.titleElement);
        if (this.title) {
            this.titleElement.appendChild(document.createTextNode(this.title));
        }
    }
    addDescription() {
        this.mainContainerElement.appendChild(this.contentContainerElement);
        this.contentContainerElement.appendChild(this.contentMessageElement);
        if (this.description) {
            this.contentMessageElement.appendChild(document.createTextNode(this.description));
        }
    }
    addButton() {
        this.mainContainerElement.appendChild(this.buttonContainerElement);
        this.buttonContainerElement.appendChild(this.buttonElement);
        if (this.button) {
            this.buttonElement.appendChild(document.createTextNode(this.button));
        }
    }
    addLink() {
        this.mainContainerElement.appendChild(this.linkContainerElement);
        this.linkContainerElement.appendChild(this.linkElement);
        if (this.link && this.linkUrl) {
            this.linkElement.appendChild(document.createTextNode(this.link));
            this.linkElement.setAttribute("href", this.linkUrl);
            this.linkElement.setAttribute("target", "_blank");
        }
    }
    updateInternalOrder() {
        if (this.title && this.description && !this.link && !this.button) {
            this.order = AlertMessageOrderEnum.TITLE_DESCRIPTION;
        }
        else if (this.title && this.description && !this.link && this.button) {
            this.order = AlertMessageOrderEnum.TITLE_DESCRIPTION_BUTTON;
        }
        else if (!this.title && this.description && !this.link && !this.button) {
            this.order = AlertMessageOrderEnum.ONLY_DESCRIPTION;
        }
        else if (!this.title && this.description && !this.link && this.button) {
            this.order = AlertMessageOrderEnum.DESCRIPTION_BUTTON;
        }
        else if (!this.title && this.description && this.link && !this.button) {
            this.order = AlertMessageOrderEnum.DESCRIPTION_LINK;
        }
        else if (!this.title && this.description && this.link && this.button) {
            this.order = AlertMessageOrderEnum.DESCRIPTION_BUTTON_LINK;
        }
    }
    // Se establece el orden de las alertas
    setOrder(order) {
        switch (order) {
            case AlertMessageOrderEnum.TITLE_DESCRIPTION:
                this.mainContainerElement.classList.add(`${this.mainClassName}_title_description`);
                break;
            case AlertMessageOrderEnum.TITLE_DESCRIPTION_BUTTON:
                this.mainContainerElement.classList.add(`${this.mainClassName}_title_description_button`);
                break;
            case AlertMessageOrderEnum.ONLY_DESCRIPTION:
                this.mainContainerElement.classList.add(`${this.mainClassName}_only_description`);
                break;
            case AlertMessageOrderEnum.DESCRIPTION_BUTTON:
                this.mainContainerElement.classList.add(`${this.mainClassName}_description_button`);
                break;
            case AlertMessageOrderEnum.DESCRIPTION_LINK:
                this.mainContainerElement.classList.add(`${this.mainClassName}_description_link`);
                break;
            case AlertMessageOrderEnum.DESCRIPTION_BUTTON_LINK:
                this.mainContainerElement.classList.add(`${this.mainClassName}_description_button_link`);
                break;
            default:
                throw new Error("La orden asignada no es valida.");
        }
        return this;
    }
    // Se establecen las clases globales de las alertas
    setStyles() {
        // Se agregan las clases utilitarias a los elementos
        this.mainContainerElement.classList.add(`${this.mainClassName}`);
        this.contentContainerElement.classList.add(`${this.mainClassName}_content`);
        this.statusContainerElement.classList.add(`${this.mainClassName}_status`);
        this.titleContainerElement.classList.add(`${this.mainClassName}_title`);
        this.titleElement.classList.add("typography-h3");
        this.buttonContainerElement.classList.add(`${this.mainClassName}_button`);
        this.buttonElement.classList.add("btn", "btn-default");
        this.linkContainerElement.classList.add(`${this.mainClassName}_link`);
        this.linkElement.classList.add("typography-link");
        this.contentMessageElement.classList.add("typography-p");
        this.setStatusStyles();
        return this;
    }
    // Se establecen los elementos organizados en funciones
    setChildren() {
        this.mainContainerElement.appendChild(this.statusContainerElement);
        this.statusContainerElement.appendChild(this.statusIconElement);
        if (this.title)
            this.addTitle();
        if (this.description)
            this.addDescription();
        if (this.button)
            this.addButton();
        if (this.link)
            this.addLink();
        return this;
    }
    // Se establecen los estilos de los estados
    setStatusStyles(backgroundColorClass = this.bgColor, icon = this.icon) {
        this.statusContainerElement.classList.add(`${this.mainClassName}_status`);
        this.statusContainerElement.classList.add(`${this.mainClassName}_status`);
        if (!!backgroundColorClass) {
            this.statusContainerElement.classList.add(backgroundColorClass);
        }
        this.statusIconElement.classList.add("icons", icon, "icons-after-3xl", "c-white");
        return this;
    }
    render(id) {
        if (!id) {
            throw new Error('El "id" es necesario para renderizar el elemento');
        }
        const rootElement = document.getElementById(id);
        if (!rootElement) {
            throw new Error(`No se encontró ningún elemento con el id ${id}`);
        }
        rootElement.appendChild(this.mainContainerElement);
        return this;
    }
    // Se inicializan las funciones
    init() {
        this.updateInternalOrder();
        this.setOrder(this.order);
        this.setStyles();
        this.setChildren();
        return this;
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define funcionalidad y animacion de los botones
// AUTHOR: ------- SContreras, ARamirez
// WORKTEAM: ----- Onix
// version 1.0
/***
 * @name createRipple
 * @description Funcion que  crea la animacion para los botones
 */
// @ts-ignore
function createRipple(element, event) {
    const circle = document.createElement("span");
    const ripple = element.getElementsByClassName("ripple")[0];
    circle.style.width = element.clientWidth + "px";
    circle.style.height = element.clientHeight + "px";
    circle.style.left = (event.layerX * 2) - (element.clientWidth / 2) - (event.offsetX / 2) + "px";
    circle.style.top = 0 + "px";
    circle.classList.add("ripple");
    if (ripple)
        ripple.remove();
    element.appendChild(circle);
}
/***
 * @name window.addEventListener
 * @description Llamada a la funcion createRipple despues de que la pantalla este cargada,
 * para agregarle a los botones primario la animacion
 */
document.addEventListener("click", (event) => {
    let elementClick = event.target;
    if (elementClick.matches(".btn-primary")) {
        createRipple(elementClick, event);
    }
});
/***
 * @name window.addEventListener
 * @description Llamada a la funcion createRipple despues de que la pantalla este cargada,
 * para agregarle a los botones primario la animacion
 */
window.addEventListener("load", () => {
    loadBLUE();
});

"use strict";
// @ts-ignore
function closeCardToolTip(containerId) {
    const container = document.querySelector(`#${containerId}`);
    if (container != null) {
        container.classList.remove("d-block");
        container.classList.add("d-none");
    }
}
// @ts-ignore
function openCardToolTip(containerId, element) {
    const container = document.querySelector(`#${containerId}`);
    // const element: HTMLElement | null = elementId;
    let containerPositionTop = 0;
    let containerPositionHorizontal = 0;
    let width = 0;
    let orientation = "right";
    containerPositionTop = element.offsetTop + element.offsetHeight;
    containerPositionHorizontal = (element.offsetLeft + element.offsetWidth / 2) - 23.5;
    //element[0].offsetLeft + $BLUEJQuery(element)[0].offsetWidth/2)-23.5;
    container === null || container === void 0 ? void 0 : container.removeAttribute(`style`);
    if (container === null || container === void 0 ? void 0 : container.classList.contains('card-tooltip-left')) {
        orientation = "left";
        //let pendejo : HTMLElement | null | undefined =document.getElementById(`${elementId}`)?.offsetParent as HTMLElement
        let offsetParentElement = element.offsetParent;
        let valOffsetParent = offsetParentElement === null || offsetParentElement === void 0 ? void 0 : offsetParentElement.offsetWidth;
        containerPositionHorizontal = (valOffsetParent - (element.offsetLeft + (element.offsetWidth / 2))) - 23.5;
    }
    else {
        if (container != null && !(container === null || container === void 0 ? void 0 : container.classList.contains('card-tooltip-right'))) {
            container.classList.add("card-tooltip-right");
        }
    }
    if (container != null) {
        if (orientation === "right") {
            container.style.cssText = "left: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px;";
            container.classList.add("v-hidden");
            container.classList.add("d-block");
            container.classList.remove("d-none");
            let leftContainer = container.getBoundingClientRect().left;
            let beforeContainer = container.querySelector("::before");
            container.classList.add("d-none");
            container.classList.remove("v-hidden");
            container.classList.remove("d-block");
            width = 299;
            if (leftContainer < 0 || leftContainer < 5) {
                let cardtoltipRightBefore = leftContainer < 0 ? 18 - 5 + leftContainer : 18 - 5 - leftContainer;
                if (beforeContainer) {
                    beforeContainer.style.cssText = "left: " + cardtoltipRightBefore + "px;";
                }
                container.style.cssText = "left: 5px; top: " + containerPositionTop + "px;";
            }
            if (width + leftContainer > screen.width) {
                container.style.cssText = "left: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px; min-width: " + (screen.width - leftContainer - 5) + "px;";
            }
        }
        else {
            container.style.cssText = "right: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px";
            container.classList.add("v-hidden");
            container.classList.add("d-block");
            container.classList.remove("d-none");
            let xPositionContainer = container.getBoundingClientRect().x;
            let rightConatiner = screen.width - container.getBoundingClientRect().x;
            let beforeContainer = container.querySelector("::before");
            container.classList.add("d-none");
            container.classList.remove("v-hidden");
            container.classList.remove("d-block");
            width = 299;
            if (xPositionContainer < 5) {
                let widthContainer = xPositionContainer < 0 ? width + xPositionContainer - 5 : width - xPositionContainer - 5;
                container.style.cssText = "right: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px; min-width: " + widthContainer + "px;";
            }
            if (rightConatiner < 5) {
                container.style.cssText = "right: " + 5 + "px; top: " + containerPositionTop + "px;";
                let cardtoltipLeftBefore = rightConatiner < 0 ? 18 - 5 + rightConatiner : 18 - 5 - rightConatiner;
                if (beforeContainer) {
                    beforeContainer.style.cssText = "right: " + cardtoltipLeftBefore + "px;";
                }
            }
        }
        container.classList.add("d-block");
        container.classList.remove("d-none");
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define funcinalidad de los checkbox
// AUTHOR: ------- SContreras, ARamirez
// WORKTEAM: ----- Onix
// version 1.0
/***
 * @name validateCheckboxRequired
 * @description Funcion que se encarga de validar que dentro de un grupo de checkbox exista al menos un input en checked
 * de lo contrario marca todos los input checkbox de ese grupo en rojo y con el atributo requerido
 */
// @ts-ignore
function validateCheckboxRequired(idGroupCheckbox) {
    const groupCheckbox = document.querySelector("#" + idGroupCheckbox);
    if (groupCheckbox === null)
        return;
    if (groupCheckbox.querySelectorAll('input[type="checkbox"]:checked').length > 0) {
        groupCheckbox
            .querySelectorAll('input[type="checkbox"]:required')
            .forEach((element) => {
            element.removeAttribute("required");
        });
    }
    else {
        groupCheckbox
            .querySelectorAll('input[type="checkbox"]')
            .forEach((element) => {
            element.required = true;
            element.addEventListener("click", () => {
                validateCheckboxRequired(idGroupCheckbox);
            });
        });
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define funcionalidad de los inputs
// AUTHOR: ------- SContreras
// WORKTEAM: ----- Onix
// version 1.0
// @ts-ignore
function loadBLUE() {
    inputPassword();
}
/***
 * @name inputPassword
 * @description funcion para el input de mostrar y ocultar contraseña
 */
//
// @ts-ignore
function inputPassword() {
    document.querySelectorAll(".input-password").forEach((element) => {
        const spanTag = element.querySelector("button");
        if (spanTag === null)
            return;
        const spanTagDefaultTextContent = spanTag.textContent;
        if (spanTagDefaultTextContent === null)
            return;
        const spanTagHiddenMessage = spanTag.getAttribute("data-hidden-message");
        const inputTag = element.querySelector("input");
        if (inputTag === null)
            return;
        spanTag.addEventListener("click", () => {
            const passwordInputType = inputTag.getAttribute("type");
            inputTag.focus();
            if (passwordInputType && /password/i.test(passwordInputType)) {
                inputTag.setAttribute("type", "text");
                spanTag.textContent = spanTagHiddenMessage;
            }
            else {
                inputTag.setAttribute("type", "password");
                spanTag.textContent = spanTagDefaultTextContent;
            }
        });
        inputTag.addEventListener("keyup", ({ target }) => {
            const { value } = target;
            if (value)
                spanTag.style.visibility = "visible";
            else
                spanTag.style.visibility = "hidden";
        });
    });
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define los elementos y funcionalidad del componente de carga
// AUTHOR: ------- ECalderon, WElizondo
// WORKTEAM: ----- Onix
// version 1.0
// @ts-ignore
var LoaderSvgPath;
(function (LoaderSvgPath) {
    LoaderSvgPath["LOADER_SVG"] = "<svg class=\"waiting\" width=\"100%\"  height=\"100%\"  viewBox=\"0 0 375 190\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <filter id=\"dropshadow\" width=\"100%\" height=\"110%\" filterUnits=\"userSpaceOnUse\">\n        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"20\"></feGaussianBlur>\n        <feOffset dx=\"0\" dy=\"0\"/>\n        <feMerge>\n            <feMergeNode/>\n            <feMergeNode in=\"SourceGraphic\" />\n        </feMerge>\n    </filter>\n    <circle class=\"circle-waves waiting__circle-waves-1 \" cx=\"184\" cy=\"95\" r=\"56\" stroke=\"#64CF8A\" stroke-width=\"2\" />\n    <circle class=\"circle-waves waiting__circle-waves-2\" cx=\"184\" cy=\"95\" r=\"56\" stroke=\"#64CF8A\" stroke-width=\"2\" />\n    <circle class=\"circle-waves waiting__circle-waves-3\" cx=\"184\" cy=\"95\" r=\"56\" stroke=\"#64CF8A\" stroke-width=\"2\" />\n    <circle class=\"circle-waves waiting__circle-waves-4\" cx=\"184\" cy=\"95\" r=\"56\" stroke=\"#64CF8A\" stroke-width=\"2\" />\n    <circle class=\"waiting__radial\" cx=\"184\" cy=\"95\" r=\"62.5\"/>\n    <circle class=\"waiting__loading-stroke\" cx=\"184\" cy=\"95\" r=\"56\" stroke=\"#64CF8A\" stroke-width=\"2\" />\n    <circle class=\"waiting__center\"  style=\"filter:url(#dropshadow)\" cx=\"184\" cy=\"95\" r=\"41\" fill=\"transparent\" />\n    <text fill=\"#ffffff\" alignment-baseline=\"middle\" text-anchor=\"middle\" style=\"font-size: 28px; font-family: Graphik;\" x=\"184\"></text>\n    <path id=\"iconInitId\" class=\"waiting__icon\"  fill=\"white\" />\n    <path id=\"iconMainId\" class=\"waiting__icon-success\" stroke=\"white\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" />\n    <path id=\"iconSecondaryId\" class=\"waiting__icon-error_line1\"  stroke=\"white\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path id=\"iconSecondary2Id\" class=\"waiting__icon-error_line2\"  stroke=\"white\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n</svg>";
})(LoaderSvgPath || (LoaderSvgPath = {}));
// @ts-ignore
var LoadingIconPath;
(function (LoadingIconPath) {
    // Estos valores DEFAULT corresponden al icono que es un celular
    LoadingIconPath["DEFAULT_INIT_ICON"] = "M193.894 68H173.105C171.219 67.9932 169.407 68.7255 168.073 70.0345C166.739 71.3434 165.993 73.1208 166 74.9719V116.028C165.993 117.879 166.739 119.657 168.073 120.966C169.407 122.274 171.219 123.007 173.105 123H193.894C195.781 123.007 197.592 122.274 198.926 120.966C200.26 119.657 201.007 117.879 201 116.028V75.2301C201.03 71.3249 197.873 68.1124 193.894 68ZM198.368 114.221V116.028C198.326 117.183 197.858 118.284 197.052 119.127C196.222 119.96 195.082 120.427 193.894 120.418H173.105C170.664 120.35 168.7 118.424 168.632 116.028V114.221H198.368ZM198.368 111.638H168.632V79.3616H198.368V111.638ZM198.368 75.2301V77.0376H168.632V75.2301C168.7 72.8343 170.664 70.908 173.105 70.8405H193.894C195.083 70.8335 196.225 71.2938 197.066 72.1185C197.906 72.9432 198.375 74.0638 198.368 75.2301Z";
    LoadingIconPath["DEFAULT_MAIN_ICON"] = "M170.946 93.8619L180.875 103.177L196.875 86.1772";
    LoadingIconPath["DEFAULT_SECONDARY_ICON"] = "M172.971 105.937L194.893 84.0001";
    LoadingIconPath["DEFAULT_SECONDARY_ICON_2"] = "M194.893 105.937L172.971 84.0001";
})(LoadingIconPath || (LoadingIconPath = {}));
// @ts-ignore
class LoaderComponent {
    constructor(options) {
        if (options.animationContainerID === null || options.animationContainerID === undefined) {
            throw new Error(`El parametro animationContainerID es obligatorio, para crear el Loader necesita indicar cual será el elemento contenedor}`);
        }
        this.settings = Object.assign({}, {
            initFill: '--c-neutral-low',
            mainColor: '--c-positive-low',
            secondaryColor: '--c-critical-low',
            iconFill: '--c-white',
            fillTime: 2,
            waveCounter: 'infinite',
            waveTime: 3.5,
            initText: '',
            iconInitPath: LoadingIconPath.DEFAULT_INIT_ICON,
            iconMainPath: LoadingIconPath.DEFAULT_MAIN_ICON,
            iconSecondaryPath: LoadingIconPath.DEFAULT_SECONDARY_ICON,
            iconSecondary2Path: LoadingIconPath.DEFAULT_SECONDARY_ICON_2,
            type: 1,
            height: '100px',
            width: '100%',
            position: '',
            zIndex: '',
        }, options);
        this.animation = { animationContainer: document.getElementById(options.animationContainerID) };
        this._build();
    }
    _build() {
        var _a;
        const divTem = document.createElement('div');
        divTem.innerHTML = LoaderSvgPath.LOADER_SVG;
        if (!(divTem.firstElementChild instanceof SVGSVGElement)) {
            throw new Error(`Expected e to be an SVGSVGElement, was ${(_a = this.settings.animationSVG.firstElementChild) === null || _a === void 0 ? void 0 : _a.className}`);
        }
        this.settings.animationSVG = divTem.firstElementChild;
        this.settings.animationSVG.setAttribute("id", this.settings.animationContainerID + "SVG");
        this._setPositionContainer();
        this._setElementColors();
        this._setElementAnimation();
        this._setSvgPathElements();
        this.animation.animationContainer.append(this.settings.animationSVG);
        this._observer();
    }
    /**
     * @name _setPositionContainer
     * @description se encarga de setear la posicion del contenedor principal
     */
    _setPositionContainer() {
        this.animation.animationContainer.style.setProperty("height", this.settings.height);
        this.animation.animationContainer.style.setProperty("width", this.settings.width);
        this.animation.animationContainer.style.setProperty("position", this.settings.position);
        this.animation.animationContainer.style.setProperty("z-index", this.settings.zIndex);
    }
    /**
     * @name setElementAnimation
     * @description se encarga de setear los elementos relacionados al color
     */
    _setElementColors() {
        this.settings.animationSVG.style.setProperty("--init-fill", "var(" + this.settings.initFill + ")");
        this.settings.animationSVG.style.setProperty("--main-color", "var(" + this.settings.mainColor + ")");
        this.settings.animationSVG.style.setProperty("--secondary-color", "var(" + this.settings.secondaryColor + ")");
        this.settings.animationSVG.style.setProperty("--icon-fill", "var(" + this.settings.iconFill + ")");
    }
    /**
     * @name setElementAnimation
     * @description se encarga de setear los elementos de la animación
     */
    _setElementAnimation() {
        this.settings.animationSVG.style.setProperty("--fill-time", this.settings.fillTime + 's');
        this.settings.animationSVG.style.setProperty("--wave-time", this.settings.waveTime + 's');
        this.settings.animationSVG.style.setProperty("--wave-counter", this.settings.waveCounter);
        this.settings.animationSVG.style.setProperty("position", this.settings.position);
        this.settings.animationSVG.style.setProperty("z-index", this.settings.zIndex + '');
    }
    /**
     * @name _setPosition
     * @description se encarga de setear la posicion del contenedor principal
     */
    _setPosition() {
        this.settings.animationSVG.style.setProperty("position", this.settings.position);
        this.settings.animationSVG.style.setProperty("z-index", this.settings.zIndex + '');
    }
    /**
     * @name setSvgPathElements
     * @description se encarga de setear los elementos del svg
     */
    _setSvgPathElements() {
        this.settings.animationSVG.setAttribute('data-type', this.settings.type.toString());
        if (this.settings.initText == '') {
            this.settings.animationSVG.getElementsByTagName("path")[0].setAttribute("d", this.settings.iconInitPath);
        }
        else {
            this._setInitText();
        }
        this.settings.animationSVG.getElementsByTagName("path")[1].setAttribute("d", this.settings.iconMainPath);
        this.settings.animationSVG.getElementsByTagName("path")[2].setAttribute("d", this.settings.iconSecondaryPath);
        this.settings.animationSVG.getElementsByTagName("path")[3].setAttribute("d", this.settings.iconSecondary2Path);
    }
    /**
     * @name _observer
     * @description observador encargado de validar el cambio de estado del componente
     */
    _observer() {
        const plugin = this;
        const container = document.getElementById(this.settings.animationContainerID + "SVG"); // Opcions para el observer 
        const setting = {
            attributes: true
        };
        const observer = new MutationObserver(() => {
            if (document.querySelector(".waiting__primary") || document.querySelector(".waiting__secondary")) {
                let text = plugin.settings.animationSVG.getElementsByTagName("text")[0];
                text.textContent = '';
            }
        });
        observer.observe(container, setting);
    }
    /**
     * @name _setInitText
     * @description Establece texto de inicio dentro del componente
     */
    _setInitText() {
        if (this._isMobile()) {
            this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y", "100");
        }
        if (navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y", "97");
            this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("x", "185");
        }
        else {
            this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y", "104");
        }
        let text = this.settings.animationSVG.getElementsByTagName("text")[0];
        text.textContent = this.settings.initText;
    }
    /**
    * @name _isMobile
    * @description valida si es mobile donde se va utilizar la animacion
    */
    _isMobile() {
        return ((navigator.userAgent.match(/Android/i)) ||
            (navigator.userAgent.match(/webOS/i)) ||
            (navigator.userAgent.match(/iPhone/i)) ||
            (navigator.userAgent.match(/iPad/i)));
    }
    _getDataType() {
        if (Number(this.settings.animationSVG.getAttribute("data-type")) === 0) {
            this.settings.animationSVG.classList.add("waiting__secondary");
        }
        else {
            this.settings.animationSVG.classList.add("waiting__primary");
        }
    }
    startAnimation() {
        let plugin = this;
        if (!this.settings.animationSVG.classList.contains("animation")) {
            this.settings.animationSVG.classList.add("animation");
            setTimeout(() => {
                plugin._getDataType();
            }, this.settings.fillTime * 1000);
        }
    }
    changeLoaderStatus() {
        const mainColor = getComputedStyle(this.settings.animationSVG).getPropertyValue("--main-color");
        const secondaryColor = getComputedStyle(this.settings.animationSVG).getPropertyValue("--secondary-color");
        this.settings.animationSVG.style.setProperty("--secondary-color", mainColor);
        this.settings.animationSVG.style.setProperty("--main-color", secondaryColor);
        if (this.settings.type === 0) {
            this._changeLoaderType(1);
            this.settings.animationSVG.classList.remove("waiting__secondary");
            this.settings.animationSVG.classList.add("waiting__primary");
        }
        else {
            this._changeLoaderType(0);
            this.settings.animationSVG.classList.remove("waiting__primary");
            this.settings.animationSVG.classList.add("waiting__secondary");
        }
    }
    /**
     * @name changewaitingType
     * @description se encargada cambiar el tipo de estado
     * @param {int} type nuevo valor del tipo de estado
     */
    _changeLoaderType(type) {
        this.settings.animationSVG.setAttribute("data-type", type.toString());
        this.settings.type = type;
    }
    endAnimation() {
        let plugin = this;
        if (Number(this.settings.animationSVG.getAttribute("data-type")) === 0) {
            this.settings.animationSVG.classList.remove("waiting__secondary");
            this.settings.animationSVG.classList.remove("animation");
            setTimeout(() => {
                plugin._setInitText();
            }, 500);
        }
        else {
            this.settings.animationSVG.classList.remove("waiting__primary");
            this.settings.animationSVG.classList.remove("animation");
            setTimeout(() => {
                plugin._setInitText();
            }, 500);
        }
    }
    clearStatus() {
        let plugin = this;
        this.settings.animationSVG.classList.remove("waiting__primary");
        this.settings.animationSVG.classList.remove("waiting__secondary");
        this.settings.animationSVG.classList.remove("animation");
        this.settings.animationSVG.style.setProperty("--init-fill", "var(" + this.settings.initFill + ")");
        setTimeout(() => {
            plugin._setInitText();
        }, 500);
    }
    destroy() {
        let containerPlugin = document.getElementById(this.settings.animationContainerID + "SVG");
        if (containerPlugin !== null && containerPlugin !== undefined) {
            containerPlugin.remove();
        }
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- PN-0005910
// DATE: --------- 29-09-2022
// DESCRIPTION: -- Define los elementos y funcionalidad del componente loading
// AUTHOR: ------- aramirezpa
// WORKTEAM: ----- Onix
// version 1.0
class LoadingComponent {
    constructor(options) {
        this.settings = Object.assign({}, {
            fill: '--c-interaction-medium',
            height: '52px',
            width: '52px',
            loadingText: '',
            zIndex: '',
            containerId: '',
            extraClassesContainer: '',
            animationContainer: document.body,
        }, options);
        this._buildElement();
    }
    _buildElement() {
        let LoadingSvgPath;
        (function (LoadingSvgPath) {
            LoadingSvgPath["LOADING_SVG"] = "<svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"rect1 rect\" d=\"M23.1747 0.433333V8.23333V8.66667H28.8253V8.23333V0.433333V0H23.1747V0.433333Z\"/>\n    <rect class=\"rect2 rect\" x=\"32\" y=\"9\" width=\"9\" height=\"6\" transform=\"rotate(-59 32 9)\"/>\n    <rect class=\"rect3 rect\" x=\"39\" y=\"14\" width=\"9\" height=\"6\" transform=\"rotate(-30 39 14)\"/>\n    <rect class=\"rect4 rect\" x=\"43\" y=\"23\" width=\"9\" height=\"6\"/>\n    <rect class=\"rect5 rect\" x=\"39\" y=\"37\" width=\"6\" height=\"9\" transform=\"rotate(-59 39 37)\"/>\n    <rect class=\"rect6 rect\" x=\"32\" y=\"42\" width=\"6\" height=\"9\" transform=\"rotate(-30 32 42)\"/>\n    <rect class=\"rect7 rect\" x=\"23\" y=\"43\" width=\"6\" height=\"9\"/>\n    <path class=\"rect8 rect\" d=\"M14.6698 39.9742V39.9742L10.5531 47.104L15.4463 49.9293L15.663 49.5537V49.5537L19.7796 42.424L14.8864 39.5986L14.6698 39.9742Z\"/>\n    <path class=\"rect9 rect\" d=\"M9.57609 32.2202L9.20111 32.4369L9.20053 32.4363L2.07018 36.553L4.89551 41.4462L5.27049 41.2301H5.27106L12.4014 37.1134L9.57609 32.2202Z\"/>\n    <path class=\"rect10 rect\" d=\"M8.66609 28.8255V23.1748H8.23333H0.432756H0V28.8255H0.432756H8.23333H8.66609Z\"/>\n    <path class=\"rect11 rect\" d=\"M2.44573 15.6636L9.57609 19.7802L12.4014 14.887L12.0259 14.6704V14.6704L4.89551 10.5537L2.07018 15.4469L2.44573 15.6636V15.6636Z\"/>\n    <path class=\"rect12 rect\" d=\"M15.663 2.44636L15.4463 2.0708L10.5531 4.89613L14.6698 12.0265V12.0265L14.8864 12.402L19.7796 9.57671L15.663 2.44636V2.44636Z\"/>";
        })(LoadingSvgPath || (LoadingSvgPath = {}));
        //Se crea el contenedor del loading y se le da estilos
        const loadingElement = document.createElement('div');
        //Define el elemento que contendrá el loading, solo coloca overlay si irá en el document.body
        if (this.settings.containerId != '') {
            let animationContainer = document.getElementById(this.settings.containerId);
            this.settings.animationContainer = animationContainer ? animationContainer : this.settings.animationContainer;
        }
        else {
            loadingElement.classList.add("d-flex", "f-column", "a-items-center", "j-content-center", "loading-bg");
        }
        //Define un id 
        this.settings.containerId = BLUEUtils.makeRandomId(15);
        loadingElement.setAttribute("id", this.settings.containerId);
        //Define z-index
        if (this.settings.zIndex != '') {
            loadingElement.style.zIndex = this.settings.zIndex;
        }
        //Define clases extra para el contenedor
        if (this.settings.extraClassesContainer != '') {
            loadingElement.classList.add(...this.settings.extraClassesContainer);
        }
        //Define estilos para el SVG
        loadingElement.innerHTML = LoadingSvgPath.LOADING_SVG;
        loadingElement.getElementsByTagName("svg")[0].style.setProperty("height", this.settings.animationHeight);
        loadingElement.getElementsByTagName("svg")[0].style.setProperty("width", this.settings.animationWidth);
        loadingElement.getElementsByTagName("svg")[0].style.setProperty("fill", "rgb(var(" + this.settings.fill + "))");
        if (this.settings.loadingText != '') {
            loadingElement.append(this.setText(this.settings.loadingText));
        }
        //setea el loading en el contenedor default o el indicado por parametro (body default)
        this.settings.animationContainer.append(loadingElement);
    }
    /**
      * @name _setText
      * @description agrega texto al loading
      * @param text texto pasado por parametro mediante la variable loadingText
    */
    setText(text) {
        const textLoadingElement = document.createElement('p');
        textLoadingElement.classList.add("typography-p", "p-top-m");
        textLoadingElement.innerHTML = text;
        return textLoadingElement;
    }
    /**
    * @name destroy
    * @description Elimina el loading en el HTML
    */
    destroy() {
        var _a;
        (_a = document.getElementById(this.settings.containerId)) === null || _a === void 0 ? void 0 : _a.remove();
    }
}

"use strict";
// @ts-ignore
class modalBLUE {
    constructor(options) {
        this.options = options;
        this.idModal = "";
        this.elementReference = "";
        this.contentHTML = "";
        this.closeButtom = true;
        this.priority = 0;
        this.modalType = "bottom";
        this.modalColor = "";
        this.container = document.body;
        this.boxContent = null;
        this.boxModal = null;
        this.containerHTML = null;
        this.callBackOpenModal = () => undefined;
        this.callBackCloseModal = () => undefined;
        this.callBackDestroyModal = () => undefined;
        this.init = () => {
            this.clear();
            this.prepareView();
            this.addOpenModal();
        };
        this.clear = () => {
            this.container.style.position = "inherit";
            const modal = document.querySelector("#boxModal" + this.idModal);
            if (modal !== null) {
                const parent = modal === null || modal === void 0 ? void 0 : modal.parentElement;
                if (parent) {
                    const content = document.querySelector("#boxContent" + this.idModal);
                    parent.removeChild(modal);
                    if (content)
                        parent.removeChild(content);
                }
            }
        };
        this.prepareView = () => {
            this.boxModal = document.createElement("div");
            this.boxModal.setAttribute("id", "boxModal" + this.idModal);
            this.boxModal.setAttribute("class", "box-modal-main d-none");
            this.boxContent = document.createElement("div");
            this.boxContent.setAttribute("id", "boxContent" + this.idModal);
            this.boxContent.setAttribute("data-priority", (this.priority || 0).toString());
            this.boxContent.setAttribute("class", "box-modal-content modal-z-index d-none p-x-reset " + (this === null || this === void 0 ? void 0 : this.boxContentClass));
            this.container.append(this.boxModal);
            this.container.append(this.boxContent);
            if (this.closeButtom) {
                const buttonClose = document.createElement("button");
                buttonClose.setAttribute("id", "btnClose" + this.idModal);
                buttonClose.setAttribute("class", "icons x-block-before icons-l modal-btn-close cursor-pointer ");
                buttonClose.addEventListener("click", () => this.closeModalBox());
                this.boxContent.append(buttonClose);
                if (this.modalType == "full") {
                    buttonClose.classList.add("modal-close-inside");
                }
            }
            this.containerHTML = document.createElement("div");
            this.containerHTML.setAttribute("class", "overflow-y-auto p-sm-xl modal-container-z-index");
            this.boxContent.append(this.containerHTML);
            if (this.contentHTML instanceof HTMLElement) {
                this.containerHTML.appendChild(this.contentHTML);
            }
            else {
                this.containerHTML.innerHTML = this.contentHTML;
            }
            if (this.modalType == "full") {
                this.boxContent.classList.add("modal-content-full");
                this.boxModal.classList.add("modal-main-full");
                if (this.closeButtom) {
                    this.containerHTML.classList.add("p-top-xl");
                }
            }
            if (this.modalColor != "") {
                this.boxContent.style.backgroundColor = "rgba(var(" + this.modalColor + ")", 0.99 + ")";
            }
        };
        this.addOpenModal = () => {
            const ref = document.querySelector("#" + this.elementReference);
            if (ref)
                ref.addEventListener("click", () => this.openModalBox());
        };
        this.openModalBox = () => {
            this.container.style.position = "relative";
            if (this.callBackOpenModal)
                this.callBackOpenModal();
            const modals = document.getElementsByClassName("box-modal-content");
            let currentPriority = 1;
            Array.from(modals).forEach((item) => {
                var _a;
                const dataPriority = (_a = item.getAttribute("data-priority")) !== null && _a !== void 0 ? _a : "";
                if (Number(dataPriority) >= currentPriority)
                    currentPriority = parseInt(dataPriority) + 1;
            });
            if (this.boxContent && this.boxModal) {
                this.boxContent.setAttribute("data-priority", currentPriority.toString());
                this.boxContent.style.zIndex = `${105 + currentPriority}`;
                this.boxModal.setAttribute("style", "z-index:" + (105 + currentPriority));
                this.boxModal.classList.remove("d-none");
                this.boxContent.classList.remove("d-none");
                this.boxModal.classList.add("d-block");
                this.boxContent.classList.add("d-block");
                const calcHeight = this.container.clientHeight * 0.87;
                if (this.containerHTML) {
                    this.containerHTML.setAttribute("style", "max-height:calc(" + calcHeight + "px)");
                }
                this.boxModal.classList.remove("modal-fadeOut-opacity");
                this.boxModal.classList.add("modal-fadeIn-opacity");
                this.boxContent.classList.remove("modal-fadeOut");
                this.boxContent.classList.add("modal-fadeIn");
            }
        };
        this.closeModalBox = () => {
            if (this.boxModal) {
                this.boxModal.classList.remove("modal-fadeIn-opacity");
                this.boxModal.classList.add("modal-fadeOut-opacity");
            }
            if (this.boxContent) {
                this.boxContent.classList.remove("modal-fadeIn");
                this.boxContent.classList.add("modal-fadeOut");
            }
            setTimeout(() => {
                if (this.boxModal) {
                    this.boxModal.classList.remove("d-block");
                    this.boxModal.classList.add("d-none");
                }
                if (this.boxContent) {
                    this.boxContent.classList.remove("d-block");
                    this.boxContent.classList.add("d-none");
                }
            }, 200);
            if (this.boxModal) {
                this.boxModal.removeAttribute("style");
            }
            if (this.boxContent) {
                this.boxContent.setAttribute("data-priority", "0");
                this.boxContent.style.zIndex = "0";
            }
            if (this.callBackCloseModal)
                this.callBackCloseModal();
        };
        this.destroy = () => {
            const parent = this.container;
            if (this.boxModal)
                parent.removeChild(this.boxModal);
            if (this.boxContent)
                parent.removeChild(this.boxContent);
            this.boxModal = null;
            this.boxContent = null;
            if (this.callBackDestroyModal)
                this.callBackDestroyModal();
        };
        this.boxContentClass = options === null || options === void 0 ? void 0 : options.boxContentClass;
        if (options === null || options === void 0 ? void 0 : options.idModal) {
            this.idModal = options === null || options === void 0 ? void 0 : options.idModal;
        }
        else {
            this.idModal = BLUEUtils.makeRandomId(8).toString();
        }
        if (options === null || options === void 0 ? void 0 : options.container)
            this.container = options === null || options === void 0 ? void 0 : options.container;
        if (options === null || options === void 0 ? void 0 : options.elementReference)
            this.elementReference = options === null || options === void 0 ? void 0 : options.elementReference;
        if (options === null || options === void 0 ? void 0 : options.contentHTML)
            this.contentHTML = options === null || options === void 0 ? void 0 : options.contentHTML;
        if ((options === null || options === void 0 ? void 0 : options.closeButtom) != undefined || (options === null || options === void 0 ? void 0 : options.closeButtom) != null)
            this.closeButtom = options === null || options === void 0 ? void 0 : options.closeButtom;
        if (options === null || options === void 0 ? void 0 : options.priority)
            this.priority = options === null || options === void 0 ? void 0 : options.priority;
        if (options === null || options === void 0 ? void 0 : options.modalType)
            this.modalType = options === null || options === void 0 ? void 0 : options.modalType;
        if (options === null || options === void 0 ? void 0 : options.modalColor)
            this.modalColor = options === null || options === void 0 ? void 0 : options.modalColor;
        if (options === null || options === void 0 ? void 0 : options.callBackOpenModal)
            this.callBackOpenModal = options === null || options === void 0 ? void 0 : options.callBackOpenModal;
        if (options === null || options === void 0 ? void 0 : options.callBackCloseModal)
            this.callBackCloseModal = options === null || options === void 0 ? void 0 : options.callBackCloseModal;
        if (options === null || options === void 0 ? void 0 : options.callBackDestroyModal)
            this.callBackDestroyModal = options === null || options === void 0 ? void 0 : options.callBackDestroyModal;
        this.init();
    }
}
//  Fin del Plugin

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para la animacion randon
// AUTHOR: ------- WElizondo
// WORKTEAM: ----- Onix
// version 1.0
// @ts-ignore
var RandomAnimationSvgPath;
(function (RandomAnimationSvgPath) {
    RandomAnimationSvgPath["RANDOM_ANIMATION_SVG"] = "<svg width=\"100%\" height=\"100%\"  preserveAspectRatio=\"xMinYMid\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:bx=\"https://boxy-svg.com\">\n    <defs>\n      <filter id=\"filter\" x=\"-500%\" y=\"-500%\" width=\"1000%\" height=\"1000%\" bx:preset=\"outline 1 1.5 rgba(255,255,255,1)\">\n        <feMorphology in=\"SourceAlpha\" result=\"dilated\" operator=\"dilate\" radius=\"1.5\"/>\n        <feFlood flood-color=\"rgba(255,255,255,1)\" result=\"flood\"/>\n        <feComposite in=\"flood\" in2=\"dilated\" operator=\"in\" result=\"outline\"/>\n        <feMerge>\n          <feMergeNode in=\"outline\"/>\n          <feMergeNode in=\"SourceGraphic\"/>\n        </feMerge>\n      </filter> \n    </defs>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n  </svg>";
})(RandomAnimationSvgPath || (RandomAnimationSvgPath = {}));
// @ts-ignore
var IconPath;
(function (IconPath) {
    //catalogo de paths 
    IconPath["PATH_DOLAR"] = "M -6.039 13.525 L -6.039 13.524 L -11.325 0.345 C -11.438 0.064 -11.758 -0.072 -12.04 0.039 L -33.487 8.518 C -33.575 8.556 -33.65 8.616 -33.708 8.692 C -33.885 8.784 -33.998 8.966 -34 9.166 L -34 23.355 C -34 23.656 -33.754 23.9 -33.45 23.9 L -10.364 23.9 C -10.061 23.9 -9.816 23.656 -9.816 23.355 L -9.816 15.605 L -6.346 14.233 C -6.064 14.122 -5.927 13.804 -6.039 13.525 Z M -10.914 22.809 L -32.9 22.809 L -32.9 9.712 L -10.914 9.712 L -10.914 22.809 Z M -24.829 8.623 L -15.625 4.981 C -14.804 5.839 -13.666 6.326 -12.474 6.331 L -11.557 8.623 L -24.829 8.623 Z M -9.816 14.433 L -9.816 9.166 C -9.816 8.864 -10.061 8.62 -10.364 8.62 L -10.374 8.62 L -11.538 5.716 C -11.552 5.692 -11.567 5.668 -11.584 5.647 C -11.642 5.383 -11.887 5.205 -12.158 5.227 C -13.266 5.327 -14.352 4.864 -15.039 3.994 C -15.211 3.785 -15.512 3.732 -15.745 3.872 C -15.771 3.876 -15.797 3.88 -15.822 3.886 L -27.059 8.329 C -27.194 8.381 -27.303 8.486 -27.36 8.62 L -30.773 8.62 L -12.144 1.255 L -7.264 13.422 L -9.816 14.433 Z M -31.409 19.125 C -30.342 19.438 -29.507 20.266 -29.19 21.325 C -29.12 21.556 -28.906 21.715 -28.664 21.715 C -28.635 21.713 -28.606 21.709 -28.578 21.702 C -28.554 21.709 -28.529 21.714 -28.504 21.718 L -15.312 21.718 C -15.29 21.715 -15.266 21.71 -15.244 21.704 C -14.97 21.77 -14.694 21.603 -14.626 21.331 L -14.626 21.328 C -14.31 20.267 -13.474 19.438 -12.407 19.124 C -12.148 19.045 -11.987 18.789 -12.03 18.523 C -12.023 18.498 -12.017 18.47 -12.014 18.443 L -12.014 14.078 C -12.017 14.05 -12.023 14.023 -12.03 13.997 C -11.988 13.731 -12.149 13.475 -12.408 13.396 C -13.475 13.083 -14.311 12.253 -14.625 11.192 C -14.705 10.934 -14.966 10.773 -15.234 10.818 C -15.259 10.811 -15.286 10.806 -15.312 10.803 L -28.504 10.803 C -28.531 10.806 -28.558 10.811 -28.585 10.819 C -28.853 10.777 -29.111 10.937 -29.19 11.194 C -29.506 12.253 -30.341 13.083 -31.409 13.396 C -31.668 13.475 -31.829 13.731 -31.786 13.997 C -31.793 14.023 -31.799 14.05 -31.802 14.078 L -31.802 18.443 C -31.799 18.469 -31.793 18.494 -31.786 18.519 C -31.831 18.786 -31.67 19.045 -31.409 19.125 Z M -30.702 14.299 C -29.599 13.859 -28.724 12.99 -28.281 11.894 L -15.536 11.894 C -15.092 12.99 -14.217 13.859 -13.113 14.299 L -13.113 18.221 C -14.216 18.662 -15.092 19.53 -15.535 20.626 L -28.281 20.626 C -28.724 19.53 -29.599 18.662 -30.702 18.221 L -30.702 14.299 Z M -18.61 16.26 C -18.61 18.068 -20.086 19.534 -21.907 19.534 C -23.729 19.533 -25.204 18.068 -25.205 16.26 C -25.205 14.452 -23.729 12.986 -21.907 12.986 C -20.086 12.986 -18.61 14.452 -18.61 16.26 Z M -19.709 16.26 C -19.709 15.055 -20.693 14.078 -21.907 14.078 C -23.122 14.078 -24.107 15.055 -24.107 16.26 C -24.107 17.466 -23.122 18.444 -21.907 18.444 C -20.693 18.444 -19.709 17.466 -19.709 16.26 Z M -27.954 17.079 C -27.499 17.079 -27.13 16.712 -27.13 16.26 C -27.13 15.808 -27.499 15.442 -27.954 15.442 C -28.409 15.442 -28.778 15.808 -28.778 16.26 C -28.778 16.712 -28.409 17.079 -27.954 17.079 Z M -27.954 15.988 C -27.802 15.988 -27.679 16.109 -27.679 16.26 C -27.679 16.411 -27.802 16.534 -27.954 16.534 C -28.106 16.534 -28.229 16.411 -28.229 16.26 C -28.229 16.109 -28.106 15.988 -27.954 15.988 Z M -15.037 16.26 C -15.037 16.712 -15.406 17.079 -15.862 17.079 C -16.317 17.079 -16.686 16.712 -16.686 16.26 C -16.686 15.808 -16.317 15.442 -15.862 15.442 C -15.406 15.442 -15.037 15.808 -15.037 16.26 Z M -15.586 16.26 C -15.586 16.109 -15.71 15.988 -15.862 15.988 C -16.013 15.988 -16.136 16.109 -16.136 16.26 C -16.136 16.411 -16.013 16.534 -15.862 16.534 C -15.71 16.534 -15.586 16.411 -15.586 16.26 Z";
    IconPath["PATH_CENT"] = "M -12.818 3.818 C -15.28 1.356 -18.541 0 -22 0 C -25.459 0 -28.72 1.356 -31.182 3.818 C -33.644 6.281 -35 9.541 -35 13 C -35 16.459 -33.644 19.72 -31.182 22.182 C -28.72 24.644 -25.459 26 -22 26 C -18.541 26 -15.28 24.644 -12.818 22.182 C -10.356 19.72 -9 16.459 -9 13 C -9 9.541 -10.356 6.281 -12.818 3.818 Z M -22 24.477 C -28.328 24.477 -33.476 19.328 -33.476 13 C -33.476 6.672 -28.328 1.524 -22 1.524 C -15.672 1.524 -10.523 6.672 -10.523 13 C -10.523 19.328 -15.672 24.477 -22 24.477 Z M -22 3.098 C -27.46 3.098 -31.902 7.54 -31.902 13 C -31.902 18.46 -27.46 22.903 -22 22.903 C -16.54 22.903 -12.098 18.46 -12.098 13 C -12.098 7.54 -16.54 3.098 -22 3.098 Z M -22 21.379 C -26.62 21.379 -30.379 17.62 -30.379 13 C -30.379 8.38 -26.62 4.621 -22 4.621 C -17.38 4.621 -13.621 8.38 -13.621 13 C -13.621 17.62 -17.38 21.379 -22 21.379 Z M -18.953 11.469 C -19.374 11.469 -19.715 11.128 -19.715 10.707 C -19.715 10.059 -20.361 9.489 -21.238 9.275 L -21.238 12.292 C -20.547 12.402 -19.908 12.663 -19.388 13.052 C -18.628 13.623 -18.191 14.434 -18.191 15.278 C -18.191 16.121 -18.628 16.932 -19.388 17.503 C -19.908 17.893 -20.547 18.153 -21.238 18.264 L -21.238 19.094 C -21.238 19.515 -21.579 19.856 -22 19.856 C -22.421 19.856 -22.762 19.515 -22.762 19.094 L -22.762 18.264 C -23.452 18.153 -24.092 17.893 -24.611 17.503 C -25.372 16.932 -25.808 16.121 -25.808 15.278 C -25.808 14.857 -25.467 14.516 -25.047 14.516 C -24.626 14.516 -24.285 14.857 -24.285 15.278 C -24.285 15.926 -23.639 16.496 -22.762 16.71 L -22.762 13.693 C -23.452 13.583 -24.092 13.322 -24.611 12.933 C -25.372 12.362 -25.808 11.551 -25.808 10.707 C -25.808 9.864 -25.372 9.053 -24.611 8.482 C -24.092 8.092 -23.452 7.832 -22.762 7.721 L -22.762 6.899 C -22.762 6.478 -22.421 6.137 -22 6.137 C -21.579 6.137 -21.238 6.478 -21.238 6.899 L -21.238 7.721 C -20.547 7.832 -19.908 8.092 -19.388 8.482 C -18.628 9.053 -18.191 9.864 -18.191 10.707 C -18.191 11.128 -18.532 11.469 -18.953 11.469 Z M -22.762 9.275 C -23.639 9.489 -24.285 10.059 -24.285 10.707 C -24.285 11.356 -23.639 11.926 -22.762 12.14 L -22.762 9.275 Z M -21.238 16.71 C -20.361 16.496 -19.715 15.926 -19.715 15.278 C -19.715 14.629 -20.361 14.06 -21.238 13.845 L -21.238 16.71 Z";
    IconPath["PATH_MOLECULE"] = "M -32.933 5.319 C -32.951 8.252 -30.616 10.638 -27.728 10.638 C -26.963 10.638 -26.235 10.471 -25.577 10.17 L -21.493 17.627 C -22.371 18.235 -22.952 19.256 -22.959 20.411 C -22.959 20.447 -22.959 20.483 -22.958 20.519 L -30.494 21.868 C -30.82 21.308 -31.419 20.933 -32.106 20.933 C -33.144 20.933 -33.993 21.79 -34 22.844 C -34.006 23.898 -33.168 24.756 -32.13 24.756 C -31.092 24.756 -30.242 23.898 -30.236 22.844 C -30.236 22.808 -30.236 22.772 -30.238 22.736 L -22.817 21.408 C -22.406 22.782 -21.149 23.782 -19.66 23.782 C -17.829 23.782 -16.33 22.27 -16.319 20.411 C -16.307 18.551 -17.787 17.039 -19.618 17.039 C -19.995 17.039 -20.358 17.103 -20.697 17.221 L -24.799 9.731 C -23.795 9.045 -23.033 8.018 -22.678 6.816 L -17.477 8.138 C -17.566 8.482 -17.614 8.842 -17.617 9.213 C -17.631 11.609 -15.724 13.559 -13.364 13.559 C -11.005 13.559 -9.073 11.609 -9.058 9.213 C -9.044 6.817 -10.951 4.868 -13.311 4.868 C -14.99 4.868 -16.452 5.855 -17.161 7.288 L -22.496 5.932 C -22.471 5.731 -22.458 5.526 -22.457 5.319 C -22.439 2.386 -24.774 0 -27.662 0 C -30.55 0 -32.914 2.386 -32.933 5.319 Z M -32.045 5.319 C -32.03 2.883 -30.066 0.901 -27.668 0.901 C -25.269 0.901 -23.33 2.883 -23.345 5.319 C -23.36 7.755 -25.323 9.736 -27.722 9.736 C -30.121 9.736 -32.06 7.755 -32.045 5.319 Z M -13.316 5.769 C -15.186 5.769 -16.717 7.314 -16.729 9.213 C -16.74 11.112 -15.229 12.657 -13.359 12.657 C -11.489 12.657 -9.958 11.112 -9.946 9.213 C -9.935 7.314 -11.446 5.769 -13.316 5.769 Z M -22.071 20.411 C -22.063 19.049 -20.965 17.94 -19.623 17.94 C -18.282 17.94 -17.198 19.049 -17.206 20.411 C -17.215 21.773 -18.313 22.881 -19.654 22.881 C -20.995 22.881 -22.08 21.773 -22.071 20.411 Z M -33.112 22.844 C -33.109 22.287 -32.66 21.834 -32.112 21.834 C -31.563 21.834 -31.12 22.288 -31.124 22.844 C -31.127 23.401 -31.576 23.854 -32.124 23.854 C -32.672 23.854 -33.116 23.401 -33.112 22.844 Z M -27.681 2.992 C -28.944 2.992 -29.977 4.036 -29.985 5.318 C -29.987 5.567 -30.187 5.769 -30.432 5.769 C -30.677 5.769 -30.875 5.567 -30.873 5.318 C -30.862 3.539 -29.427 2.091 -27.675 2.091 C -27.43 2.091 -27.232 2.293 -27.234 2.542 C -27.235 2.79 -27.436 2.992 -27.681 2.992 Z";
})(IconPath || (IconPath = {}));
// @ts-ignore
class RandomAnimationComponent {
    constructor(options) {
        if (options.animationContainerID === null || options.animationContainerID === undefined) {
            throw new Error(`El parametro animationContainerID es obligatorio, para crear la animacion necesita indicar cual será el elemento contenedor`);
        }
        this.settings = Object.assign({}, {
            paths: [{ repeat: 1, d: IconPath.PATH_DOLAR }],
            maxAnimationTime: 2,
            minAnimationTime: 5,
            height: '100px',
            width: '100%',
            position: '',
            zIndex: '',
        }, options);
        this.animation = { animationContainer: document.getElementById(options.animationContainerID) };
        this._build();
    }
    _build() {
        this._responseSVG();
        this._setPositionContainer();
        this._setPathElement();
    }
    /**
     * @name responseSVG
     * @description se encarga buscar el svg para renderizar en el plugin
     */
    _responseSVG() {
        var _a;
        const divTem = document.createElement('div');
        divTem.innerHTML = RandomAnimationSvgPath.RANDOM_ANIMATION_SVG;
        if (!(divTem.firstElementChild instanceof SVGElement)) {
            throw new Error(`Expected e to be an SVGElement, was ${(_a = this.settings.animationSVG.firstElementChild) === null || _a === void 0 ? void 0 : _a.className}`);
        }
        this.settings.animationSVG = divTem.firstElementChild;
        this.settings.animationSVG.setAttribute("id", this.settings.animationContainerID + "SVG");
        this.animation.animationContainer.append(this.settings.animationSVG);
    }
    /**
     * @name _setPositionContainer
     * @description se encarga de setear la posicion del contenedor principal
     */
    _setPositionContainer() {
        this.animation.animationContainer.style.setProperty("height", this.settings.height);
        this.animation.animationContainer.style.setProperty("width", this.settings.width);
        this.animation.animationContainer.style.setProperty("position", this.settings.position);
        this.animation.animationContainer.style.setProperty("z-index", this.settings.zIndex);
        this.settings.animationSVG.setAttribute("viewbox", "0 0 " + this.settings.height + " " + this.settings.height);
    }
    /**
     * @name _setPathElement
     * @description se encarga de setear los elementos relacionados los paths
     */
    _setPathElement() {
        let counter = 0;
        let pathArray = [];
        for (const index in this.settings.paths) {
            for (let i = 0; i < this.settings.paths[index].repeat; i++) {
                const pathID = this._generateUID();
                this.settings.animationSVG.getElementsByTagName("path")[counter].setAttribute("id", pathID);
                this.settings.animationSVG.getElementsByTagName("path")[counter].setAttribute("d", this.settings.paths[index].d);
                document.getElementById(pathID).style.setProperty("--animationInitY", this._getPositionAnimationY() + "px");
                document.getElementById(pathID).style.setProperty("--animationEndY", this._getPositionAnimationY() + "px");
                document.getElementById(pathID).style.setProperty("--animationEndX", this._getPositionAnimationEndX() + "px");
                document.getElementById(pathID).style.setProperty("--time", this._getRandomTimer() + "s");
                document.getElementById(pathID).style.setProperty("--cubic-bezier", "cubic-bezier(" + this._getCubicBezier() + ", " + this._getCubicBezier() + ", " + this._getCubicBezier() + ", " + this._getCubicBezier() + ")");
                document.getElementById(pathID).style.setProperty("--iniRotate", this._getRotate() + "deg");
                document.getElementById(pathID).style.setProperty("--endRotate", this._getRotate() + "deg");
                pathArray.push(document.getElementById(pathID));
                counter++;
            }
        }
        this.settings.pathArrays = pathArray;
    }
    /**
     * @name _getPositionAnimationEndX
     * @description se encarga obtener la posicion que va utilizar X
     */
    _getPositionAnimationEndX() {
        return this.animation.animationContainer.clientWidth + 34;
    }
    /**
     * @name _getPositionAnimationY
     * @description se encarga obtener la posicion que va utilizar Y
     */
    _getPositionAnimationY() {
        let position = Math.floor(this.animation.animationContainer.clientHeight - (35));
        return Math.floor(Math.random() * (position - 35) + 35);
    }
    /**
     * @name _getRandomTimer
     * @description se encarga obtener cuanto va durar la animacion
     */
    _getRandomTimer() {
        return (Math.floor(Math.random() * (this.settings.maxAnimationTime - this.settings.minAnimationTime) + this.settings.minAnimationTime));
    }
    /**
     * @name _getCubicBezier
     * @description se encarga obtener el valor aleatorio que utiliza la propiedad cubicBezier
     */
    _getCubicBezier() {
        return Math.round(Math.random() * 100.0) / 100.0;
    }
    /**
     * @name _generateUID
     * @description se encarga obtener el ID unico del path
     */
    _generateUID() {
        let date = new Date().getTime();
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (date + Math.random() * 16) % 16 | 0;
            date = Math.floor(date / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    /**
    * @name _getRotate
    * @description se encarga obtener el valor aleatorio del rotate de la animacion
    */
    _getRotate() {
        return Math.floor(Math.random() * (301 - 1) + 1);
    }
    /**
     * @name _isMobile
     * @description valida si es mobile donde se va utilizar la animacion
     */
    _isMobile() {
        return ((navigator.userAgent.match(/Android/i)) ||
            (navigator.userAgent.match(/webOS/i)) ||
            (navigator.userAgent.match(/iPhone/i)) ||
            (navigator.userAgent.match(/iPad/i)));
    }
    initAnimation() {
        for (const index in this.settings.pathArrays) {
            document.getElementById(this.settings.pathArrays[index].id).classList.add("animation-position");
        }
    }
    stopAnimation() {
        for (const index in this.settings.pathArrays) {
            document.getElementById(this.settings.pathArrays[index].id).classList.remove("animation-position");
        }
    }
    destroy() {
        let containerPlugin = document.getElementById(this.settings.animationContainerID + "SVG");
        if (containerPlugin !== null && containerPlugin !== undefined) {
            containerPlugin.remove();
        }
    }
}

"use strict";
// @ts-ignore
class SeeMore {
    constructor(options) {
        this.parentElementReference = options.parentElementReference;
        this.stepSize = options.stepSize;
        this.currentMaxData = 0;
        this.componentText = options.componentText;
        this.componentId = options.componentId ? options.componentId : "";
        this.dataLength = options.dataLength;
        this.componentClassList = options.componentClassList ? options.componentClassList : [];
        this.componentStyleList = options.componentStyleList ? options.componentStyleList : [];
        this.iconStyleList = options.iconStyleList ? options.iconStyleList : [];
        this.callbackFunction = options.callbackFunction;
        this.componentInstance = document.createElement("a");
        this.parentComponentInstance = document.createElement("div");
        this._init();
    }
    _init() {
        this._build();
        this._show();
        this._calculateSteps();
    }
    _build() {
        let componentElement = this._createComponentElement();
        this.componentInstance = componentElement;
        componentElement.addEventListener("click", () => {
            this._calculateSteps();
        });
        if (this.componentClassList && this.componentClassList.length > 0) {
            for (let i = 0; i < this.componentClassList.length; i++) {
                componentElement.classList.add(this.componentClassList[i]);
            }
        }
        if (this.componentStyleList && this.componentStyleList.length > 0) {
            componentElement = this._setStyleToElement(componentElement, this.componentStyleList);
        }
        let textElement = this._createTextElement();
        let iconElement = this._createIconElement();
        if (this.iconStyleList && this.iconStyleList.length > 0) {
            iconElement = this._setStyleToElement(iconElement, this.iconStyleList);
        }
        componentElement.appendChild(textElement);
        componentElement.appendChild(iconElement);
    }
    _createComponentElement() {
        let componentElement = document.createElement("a");
        componentElement.setAttribute("id", this.componentId ? this.componentId : this._makeRandomId(15));
        componentElement.setAttribute("class", "see-more-principal");
        return componentElement;
    }
    _createTextElement() {
        let textElement = document.createElement("span");
        textElement.innerHTML = `${this.componentText}`;
        return textElement;
    }
    _createIconElement() {
        let iconElement = document.createElement("i");
        iconElement.setAttribute("class", "icons chevron-down-block-before see-more-icon");
        return iconElement;
    }
    _show() {
        let parentComponent = document.querySelector(`#${this.parentElementReference}`);
        if (!parentComponent)
            return false;
        this.parentComponentInstance = parentComponent;
        parentComponent.classList.add("see-more-parent");
        parentComponent.appendChild(this.componentInstance);
        return true;
    }
    _calculateSteps() {
        this.currentMaxData = this.currentMaxData + this.stepSize;
        if (this.currentMaxData >= this.dataLength)
            this._hide();
        this.callbackFunction(this.currentMaxData);
    }
    _hide() {
        this.parentComponentInstance.style.display = "none";
    }
    _makeRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    _setStyleToElement(element, styleArray) {
        for (let i = 0; i < styleArray.length; i++) {
            Object.keys(styleArray[i]).forEach((key) => {
                element.style.setProperty(key, styleArray[i][key]);
            });
        }
        return element;
    }
}

"use strict";
// REVISION ------ 1.0
// Pase ---------- PN-0005506
// DATE: --------- 04-10-2022
// DESCRIPTION: -- Define y construye los elementos para el indicador de pasos
// AUTHOR: ------- Daniel Giménez
// WORKTEAM: ----- Merge
// version 1.0
// @ts-ignore
class Steps {
    constructor(options) {
        this.options = options;
        this.rootElement = document.createElement("div");
        this.steps = 1;
        this.asWizard = false;
        this.prevPosition = () => {
            const position = this.settings.position - 1;
            this.setPosition(position);
        };
        this.nextPosition = () => {
            const position = this.settings.position + 1;
            this.setPosition(position);
        };
        this.clearPosition = () => {
            const position = 0;
            this.setPosition(position);
        };
        this.destroy = () => {
            this.rootElement.innerHTML = '';
        };
        this.init = () => {
            this.setPosition(0);
        };
        this.build = () => {
            this.rootElement.classList.add("steps-container", "p-relative", "d-flex");
            for (let step = 0; step < this.steps; step++) {
                const className = this.asWizard ? '' : ' class="dots"';
                const element = BLUEUtils.stringToHTML(`<div id="step-${step}"${className}></div>`);
                if (this.asWizard) {
                    element.classList.remove('done');
                    element.classList.remove('init-dot');
                    element.classList.remove('dots');
                    element.classList.add('wizard-step', 'p-relative', 'bg-color-neutral-medium', 'w-auto');
                    if (step === this.settings.position) {
                        element.classList.remove('wizard-step-viewed');
                        element.classList.remove('wizard-step-incoming');
                    }
                    else if (step < this.settings.position) {
                        element.classList.add('wizard-step-viewed');
                        element.classList.remove('wizard-step-incoming');
                    }
                    else if (step > this.settings.position) {
                        element.classList.remove('wizard-step-viewed');
                        element.classList.add('wizard-step-incoming');
                    }
                }
                else {
                    element.classList.remove('wizard-step');
                    element.classList.remove('wizard-step-viewed');
                    element.classList.remove('wizard-step-incoming');
                    element.classList.remove('wizard-step-selected');
                    if (step === this.settings.position) {
                        element.classList.add('init-dot');
                        element.classList.remove('done');
                    }
                    else if (step < this.settings.position) {
                        element.classList.remove('init-dot');
                        element.classList.add('done');
                    }
                    else if (step > this.settings.position) {
                        element.classList.remove('init-dot');
                        element.classList.remove('done');
                    }
                }
                if (!!this.onRenderLabel) {
                    const label = document.createElement("span");
                    const labelText = this.onRenderLabel(step);
                    const labelTextNode = document.createTextNode(labelText);
                    label.classList.add('wizard-step-text', 'p-absolute', 'typography-p', 'd-block');
                    if (step === this.settings.position) {
                        label.classList.remove('c-neutral-high');
                        label.classList.add('f-weight-m', 'c-black');
                    }
                    else if (step < this.settings.position) {
                        label.classList.add('typography-p', 'c-neutral-high');
                        label.classList.remove('c-neutral-medium');
                    }
                    else if (step > this.settings.position) {
                        label.classList.remove('step-wizard-label-viewed');
                        label.classList.add('typography-p', 'c-neutral-medium');
                    }
                    else {
                        label.classList.add('f-weight-m', 'c-black');
                    }
                    label.appendChild(labelTextNode);
                    element.append(label);
                }
                this.rootElement.append(element);
            }
            this.rootElement.classList.add(`j-content-${this.settings.justify}`);
        };
        this.isValidPosition = (position) => position >= 0 && position < this.steps;
        this.stepsPosition = (position) => {
            if (!this.isValidPosition(position))
                throw new Error(`Invalid position (${position})`);
            const steps = Array.prototype.slice.call(this.rootElement.children);
            const stepSelector = `#step-${position}`;
            const element = this.rootElement.querySelector(stepSelector);
            if (!element)
                throw new Error(`The element with position (${position}) and selector (${stepSelector}) do not exists`);
            const selectedClassName = this.asWizard ? 'wizard-step-selected' : 'init-dot';
            for (const step of steps)
                step.classList.remove(selectedClassName);
            element.classList.add(selectedClassName);
        };
        this.setPosition = (position) => {
            if (!this.isValidPosition(position))
                throw new Error(`Invalid position (${position})`);
            this.destroy();
            this.settings.position = position;
            this.build();
            this.stepsPosition(this.settings.position);
        };
        const { rootElement, steps = 1, initialPosition = 0, stepsAlign = 'center', asWizard = false, onRenderLabel = (step = 0) => '', classes = [] } = options;
        if (!Array.isArray(classes))
            throw new Error('Es necesario que class sea un array');
        if (!rootElement)
            throw new Error('Root Element is required');
        if (steps < 1)
            throw new Error('minimum accepted steps is one');
        if (!!onRenderLabel)
            this.onRenderLabel = onRenderLabel;
        if (asWizard !== undefined)
            this.asWizard = asWizard;
        this.classes = classes;
        this.steps = steps;
        this.settings = {
            position: initialPosition,
            justify: stepsAlign,
        };
        this.rootElement = rootElement;
        this.init();
    }
}

"use strict";
// REVISION ------ 1.0
// DATE: --------- 03-10-2022
// DESCRIPTION: -- Define y contruye los elementos para el toast
// AUTHOR: ------- rvargas
// WORKTEAM: ----- Onix
// version 1.0
class Timer {
    constructor(options) {
        var _a, _b;
        this.options = options;
        this.animationIdCounter = 0;
        this.startAutomatic = true;
        this.initSecond = 0;
        this.timerState = [
            {
                from: 60,
                color: '--c-positive-low',
            },
            {
                from: 30,
                color: '--c-attention-low',
            },
            {
                from: 19,
                color: '--c-brand-low',
            }
        ];
        this.callbackTimer = () => undefined;
        this.counterTime = 0;
        this.strokeDashOffSetActual = 0;
        this.nextChangeColor = {};
        this.init = () => {
            this.createElementView();
        };
        this.createElementView = () => {
            var _a, _b, _c, _d;
            let svg = '<svg id="' + this.idElement + 'timerSVG" class="timer-svg" viewBox="0 0 100 100"><circle cy="50%" cx="50%" r="40" class="timer-circle timer-circle-shadow"></circle><circle id="' + this.idElement + 'circle" cy="50%" cx="50%" r="40" stroke-dasharray="' + 2 * Math.PI * 40 + '" class="timer-circle timer-circle-front timerWaiting"></circle></svg>';
            (_a = document.getElementById(this.idElement)) === null || _a === void 0 ? void 0 : _a.classList.add("d-flex", "j-content-center", "a-items-center");
            let contentSVG = document.createElement("div");
            contentSVG.setAttribute("id", this.idElement + "ContentSVG");
            contentSVG.classList.add("container-circle-timer");
            contentSVG.innerHTML = svg;
            (_b = document.getElementById(this.idElement)) === null || _b === void 0 ? void 0 : _b.append(contentSVG);
            let contentTextTimer = document.createElement("div");
            contentTextTimer.setAttribute("id", this.idElement + "ContentTimer");
            contentTextTimer.classList.add("container-text-timer", "d-flex", "j-content-center", "a-items-center", "p-relative");
            contentTextTimer.innerHTML = '<label id="' + this.idElement + 'TextSecond" class="typography-p text-timer-second">' + this.initSecond + ' s</label>';
            (_c = document.getElementById(this.idElement)) === null || _c === void 0 ? void 0 : _c.append(contentTextTimer);
            this.cleanAnimationValues(this.initSecond);
            (_d = document.getElementById(this.idElement + "circle")) === null || _d === void 0 ? void 0 : _d.style.setProperty("--stroke-dashoffset", "" + this.strokeDashOffSetActual);
            if (this.startAutomatic) {
                this.initAnimation();
            }
        };
        this.cleanAnimationValues = (secondInit) => {
            var _a, _b, _c;
            let timeInitial = this.timerState[0].from ? this.timerState[0].from : 0;
            let circunference = 2 * Math.PI * 40;
            this.counterTime = 0;
            clearInterval(this.timer);
            this.strokeDashOffSetActual = (timeInitial - this.initSecond) * ((circunference) / (timeInitial));
            for (var i = 0; i < ((_a = this.timerState) === null || _a === void 0 ? void 0 : _a.length); i++) {
                let nodeActFrom = this.timerState[i].from != undefined ? this.timerState[i].from : 0;
                let nodeActColor = this.timerState[i].color != undefined ? this.timerState[i].color : 0;
                if (nodeActFrom && nodeActFrom >= secondInit) {
                    (_b = document.getElementById(this.idElement + "TextSecond")) === null || _b === void 0 ? void 0 : _b.style.setProperty("--timer-color", "var(" + nodeActColor + ")");
                    (_c = document.getElementById(this.idElement + "circle")) === null || _c === void 0 ? void 0 : _c.style.setProperty("--timer-color", "var(" + nodeActColor + ")");
                    if (this.timerState[i + 1]) {
                        this.nextChangeColor = this.timerState[i + 1];
                        this.nextChangeColor.index = i + 1;
                    }
                }
            }
        };
        this.startAnimation = (secondInit) => {
            if (secondInit) {
                this.initAnimation(secondInit);
            }
            else {
                console.error("Se requiere el segundo donde iniciar");
            }
        };
        this.initAnimation = (secondInit) => {
            if (secondInit) {
                this.initSecond = secondInit;
                this.cleanAnimationValues(secondInit);
            }
            this.timer = setInterval(this.animationCircleRegresive, 250);
        };
        this.animationCircleRegresive = () => {
            var _a, _b, _c, _d;
            this.counterTime = this.counterTime + 0.25;
            let timeToShow = this.initSecond - this.counterTime;
            if (timeToShow < 0) {
                clearInterval(this.timer);
                if (this.callbackTimer) {
                    this.callbackTimer();
                }
                return;
            }
            let textLabelSecond = document.getElementById(this.idElement + "TextSecond");
            let timeToShowCeil = Math.ceil(timeToShow);
            if (textLabelSecond) {
                textLabelSecond.innerHTML = timeToShowCeil + " s";
            }
            let fromMayor = this.timerState[0].from ? this.timerState[0].from : 0;
            var positionPerSecuence = ((2 * Math.PI * 40) / (fromMayor)) / 4;
            this.strokeDashOffSetActual = this.strokeDashOffSetActual + positionPerSecuence;
            if (this.strokeDashOffSetActual) {
                (_a = document.getElementById(this.idElement + "circle")) === null || _a === void 0 ? void 0 : _a.style.setProperty("--stroke-dashoffset", "" + this.strokeDashOffSetActual);
            }
            if (this.nextChangeColor.from == timeToShowCeil) {
                (_b = document.getElementById(this.idElement + "circle")) === null || _b === void 0 ? void 0 : _b.style.setProperty("--timer-color", "var(" + this.nextChangeColor.color + ")");
                (_c = document.getElementById(this.idElement + "TextSecond")) === null || _c === void 0 ? void 0 : _c.style.setProperty("--timer-color", "var(" + this.nextChangeColor.color + ")");
                let nextIndex = this.nextChangeColor.index ? ((_d = this.nextChangeColor) === null || _d === void 0 ? void 0 : _d.index) + 1 : -1;
                if (nextIndex > -1 && this.timerState[nextIndex]) {
                    this.nextChangeColor = this.timerState[nextIndex];
                }
            }
        };
        this.idElement = options.idElement;
        this.animationIdCounter = 0;
        if ((options === null || options === void 0 ? void 0 : options.startAutomatic) != undefined || (options === null || options === void 0 ? void 0 : options.startAutomatic) != null)
            this.startAutomatic = options === null || options === void 0 ? void 0 : options.startAutomatic;
        this.timerState = options.timerState ? options.timerState : this.timerState;
        this.callbackTimer = options.callbackTimer ? options.callbackTimer : this.callbackTimer;
        if (options.initSecond) {
            this.initSecond = options.initSecond;
        }
        else if ((_a = this.timerState[0]) === null || _a === void 0 ? void 0 : _a.from) {
            this.initSecond = (_b = this.timerState[0]) === null || _b === void 0 ? void 0 : _b.from;
        }
        this.init();
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y contruye los elementos para el toast
// AUTHOR: ------- RVargas
// WORKTEAM: ----- Onix
// version 1.0
// @ts-ignore
class Toast {
    constructor(option) {
        this.idElement = option.idElement;
        this.container = option.container;
        this.title = option.title;
        this.description = option.description;
        this.icon = option.icon;
        this.backgroundColor = option.backgroundColor;
        this.color = option.color;
        this.itemLeftCustom = option.itemLeftCustom;
        this.itemRightCustom = option.itemRightCustom;
        this.animationIn = option.animationIn;
        this.animationOut = option.animationOut;
        this.timeIn = option.timeIn;
        this.timeOut = option.timeOut;
        this.autoClose = option.autoClose;
        this.timeAutoClose = option.timeAutoClose;
        this.position = option.position;
        this.instanceElement = document.createElement("div");
        this.instanceContainer = document.createElement("div");
        this.init();
    }
    init() {
        //this.clear();
        this.build();
        this.show();
        this.autoCloseFunction();
    }
    buildElement(idElement) {
        if (idElement) {
            let element = document.querySelector(`#${idElement}`);
            if (!element) {
                element = document.createElement("div");
                element.setAttribute("id", idElement);
            }
            return element;
        }
        else {
            const element = document.createElement("div");
            element.setAttribute("id", BLUEUtils.makeRandomId(15));
            return element;
        }
    }
    build() {
        let element = this.buildElement(this.idElement);
        this.instanceElement = element;
        //Seteamos clases del elemento principal
        element.setAttribute("class", "d-none toast a-items-center " + this.backgroundColor);
        if (this.itemLeftCustom) {
            this.itemLeft = this.stringToHTML(this.itemLeftCustom);
            element.append(this.itemLeft);
        }
        if (this.icon) {
            let icon = document.createElement("i");
            icon.setAttribute("class", this.icon);
            element.append(icon);
        }
        if (!this.color) {
            this.color = "c-white";
        }
        if (this.description || this.title) {
            let textContainer = document.createElement("div");
            textContainer.setAttribute("class", "f-grow-1 m-y-m");
            if (this.title) {
                let title = document.createElement("h3");
                title.textContent = this.title;
                title.setAttribute("class", "typography-h3 t-truncate-clamp t-line-clamp-1 " + this.color);
                textContainer.append(title);
            }
            if (this.description) {
                let description = document.createElement("p");
                description.textContent = this.description;
                description.setAttribute("class", "typography-p t-truncate-clamp t-line-clamp-2 " + this.color);
                textContainer.append(description);
            }
            element.append(textContainer);
        }
        if (this.itemRightCustom) {
            this.itemRight = this.stringToHTML(this.itemRightCustom);
            element.append(this.itemRight);
        }
        else {
            let itemRightContainer = document.createElement("div");
            itemRightContainer.setAttribute("class", "m-x-m");
            itemRightContainer.addEventListener("click", () => {
                this.closeToast();
            });
            itemRightContainer.innerHTML = '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#000" stroke-width="1" >'
                + '<polyline points="8,6 12,2 16,6" opacity=".05" style="animation: slideUp 2s infinite"></polyline>'
                + '<polyline points="8,14 12,10 16,14" opacity=".05" style="animation:slideUp 2s infinite 1s"></polyline>'
                + '<polyline points="8,22 12,18 16,22" style="animation:slideUp 2s infinite .5s" opacity=".05"></polyline>'
                + '</svg>';
            element.append(itemRightContainer);
        }
        let container = this.buildElement(this.container);
        this.instanceContainer = container;
        if (!document.getElementById(this.idElement)) {
            this.idElement = element.id;
            container.append(element);
            if (!document.getElementById(this.container)) {
                container.setAttribute("class", "p-fixed toast-container");
                this.setContainer(container);
                this.container = container.id;
                document.body.append(container);
            }
        }
    }
    stringToHTML(str) {
        const parser = new DOMParser(), doc = parser.parseFromString(str, 'text/html');
        return doc.body.childNodes[0];
    }
    setContainer(container) {
        let widthContainer = this.position.width ? this.position.width + "" : "100%";
        let styleSet = "width:" + widthContainer + ";";
        styleSet += this.position.top ? " top:" + this.position.top + ";" : "";
        styleSet += this.position.bottom ? " bottom:" + this.position.bottom + ";" : "";
        styleSet += this.position.left ? " left:" + this.position.left + ";" : "";
        styleSet += this.position.right ? " right:" + this.position.right + ";" : "";
        if (!this.position.top && !this.position.bottom && !this.position.left && !this.position.right) {
            styleSet += " top: 0;";
        }
        container.setAttribute("style", styleSet);
    }
    show() {
        let element = this.instanceElement;
        element.classList.remove("d-none");
        element.setAttribute("style", "animation: " + this.animationIn + ", fadeIncreaseOpacity; animation-duration: " + this.timeIn + "s, " + this.timeIn + "s;");
        element.classList.add("d-flex", "a-items-top");
        setTimeout(() => {
            element.removeAttribute("style");
        }, this.timeIn * 1000);
    }
    closeToast() {
        let element = this.instanceElement;
        element.setAttribute("style", "animation: " + this.animationOut + ", fadeDecreaseOpacity, fadeFlexToNone; animation-duration: " + this.timeOut + "s, " + this.timeOut + "s, " + this.timeOut + "s; animation-direction: reverse, normal, normal;");
        let _this = this;
        setTimeout(() => {
            element.classList.add("d-none");
            element.remove();
            if (document.getElementById(this.container)) {
                _this.instanceContainer.remove();
            }
        }, (_this.timeOut * 1000));
    }
    autoCloseFunction() {
        let _this = this;
        if (this.autoClose) {
            setTimeout(() => {
                _this.closeToast();
            }, this.timeAutoClose * 1000);
        }
    }
}

"use strict";
// @ts-ignore
class Tooltip {
    constructor(options) {
        this.options = options;
        this.elementZIndex = 999;
        this.elementHTML = null;
        this.elementReferenceHTML = null;
        this.closeElementHTML = null;
        this.tabClose = false;
        this.clickClose = false;
        this.timeToClose = 10000;
        this.closeOnTime = false;
        this.closeBtn = true;
        this.onClickFunction = ' ';
        this.tabCallback = () => undefined;
        this.closeBtnCallback = () => undefined;
        this.beforeOpen = () => undefined;
        this.backgroundColor = "--c-neutral-extrahigh";
        this.closeBtnClass = "c-white";
        this.radius = '4px';
        this.contentHTML = "";
        this.direction = "left";
        this.indicatorPositionArrow = "50%";
        this.indicatorPositionElementReference = "50%";
        this.animationIn = 'fade-in-top';
        this.animationOut = 'fade-out-top';
        this.animationTime = .5;
        this.animationDelay = 0;
        this.classElement = ' ';
        this.x = '0';
        this.y = '0';
        this.width = 'absolute';
        this._statusDisplay = false;
        this.init = () => {
            this.initConfig();
            this.prepareView();
        };
        this.initConfig = () => {
            let elementReference = document.querySelector(`#${this.idElementReference}`);
            if (elementReference) {
                this.elementReferenceHTML = elementReference;
            }
            else {
                console.error("No existe un elemento al cual referenciar");
            }
            if (this.elementReferenceHTML && this.width && this.indicatorPositionElementReference) {
                let positionElementReferencePercent = (100 / parseInt(this.indicatorPositionElementReference));
                switch (this.direction) {
                    case "right":
                        this.xSet((-4 - parseInt(this.width)) + "");
                        this.ySet((this.elementReferenceHTML.offsetHeight / positionElementReferencePercent) + "");
                        break;
                    case "left":
                        this.xSet((this.elementReferenceHTML.offsetWidth + 24) + "");
                        this.ySet((this.elementReferenceHTML.offsetHeight / positionElementReferencePercent) + "");
                        break;
                    case "top":
                        this.xSet((this.elementReferenceHTML.offsetWidth / positionElementReferencePercent) + "");
                        this.ySet((this.elementReferenceHTML.offsetHeight + 12) + "");
                        break;
                    case "bottom":
                        this.xSet((this.elementReferenceHTML.offsetWidth / positionElementReferencePercent) + "");
                        this.ySet((-12) + "");
                        break;
                    default:
                        console.error("No posee una dirección del tooltip valida, valores aceptados right, left, top, bottom");
                }
            }
        };
        this.buildElement = (idElement) => {
            var _a;
            if (idElement) {
                let element = document.querySelector(`#${idElement}`);
                if (element) {
                    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                }
                element = document.createElement("div");
                element.setAttribute("id", idElement);
                return element;
            }
            else {
                const element = document.createElement("div");
                let idElement = BLUEUtils.makeRandomId(15);
                element.setAttribute("id", idElement);
                this.idElement = idElement;
                return element;
            }
        };
        this.prepareView = () => {
            var _a;
            this.elementHTML = this.buildElement(this.idElement);
            this.elementHTML.setAttribute("onclick", this.onClickFunction + '');
            this.elementHTML.setAttribute("class", this.classElement + " tooltip tooltip--" + this.direction);
            this.elementHTML.setAttribute("style", " --width: " + this.width + "; --xPos: " +
                this._calcXPos + "px; --yPos: " + this._calcYPos + "px; --radius: " +
                this.radius + "; --background: var(" + this.backgroundColor + "); --indicator-position-arrow: " +
                this.indicatorPositionArrow + "; --indicator-position-element-reference: " +
                this.indicatorPositionElementReference + "; --zIndex: " + this.elementZIndex + "; --anim-name-in: " +
                this.animationIn + "; --anim-name-out: " + this.animationOut + "; --anim-time: " +
                this.animationTime + "s; --anim-delay: " + this.animationDelay + "s;");
            let containerContentHtml = document.createElement("div");
            if (this.closeBtn) {
                containerContentHtml.setAttribute("class", "p-m m-right-xs");
            }
            else {
                containerContentHtml.setAttribute("class", "p-m");
            }
            if (this.contentHTML instanceof HTMLElement) {
                containerContentHtml.appendChild(this.contentHTML);
            }
            else {
                containerContentHtml.insertAdjacentHTML('beforeend', this.contentHTML);
            }
            this.elementHTML.append(containerContentHtml);
            if (this.closeBtn) {
                this.closeElementHTML = document.createElement("button");
                this.closeElementHTML.setAttribute("id", this.idElement + "CloseBtn");
                this.closeElementHTML.setAttribute("class", "tooltip__close-btn p-right-m p-top-m p-left-reset");
                this.closeElementHTML.addEventListener("click", (event) => {
                    this.close(event);
                });
                let iconClose = document.createElement("i");
                iconClose.setAttribute("class", this.closeBtnClass + " icons x-block-after icons-after-s");
                this.closeElementHTML.append(iconClose);
                this.elementHTML.append(this.closeElementHTML);
            }
            if (this.tabClose) {
                this.elementHTML.addEventListener("keyup", (event) => {
                    if (event.key == "Tab") {
                        this.closeTab(event);
                    }
                });
            }
            if (this.clickClose) {
                this.elementHTML.addEventListener("click", (event) => {
                    this.closeTab(event);
                });
            }
            this.refreshPosition();
            let elementReferenceParent = (_a = document.querySelector(`#${this.idElementReference}`)) === null || _a === void 0 ? void 0 : _a.parentNode;
            if (elementReferenceParent) {
                elementReferenceParent.append(this.elementHTML);
            }
            else {
                console.error("No se puede agregar el tooltip sin elemento de referencia padre");
            }
        };
        this.refreshPosition = () => {
            var _a, _b, _c, _d, _e, _f;
            let positionArrowPerCentual = 2;
            let positionElementReferencePerCentual = 2;
            // Indicador de porcentaje del posicionamiento del arrow
            if (this.indicatorPositionArrow != ((_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.getPropertyValue('--indicator-position-arrow')) && ((_b = this.elementHTML) === null || _b === void 0 ? void 0 : _b.style.getPropertyValue('--indicator-position-arrow')) != undefined) {
                this.indicatorPositionArrowFunction((_c = this.elementHTML) === null || _c === void 0 ? void 0 : _c.style.getPropertyValue('--indicator-position-arrow'));
            }
            if (this.indicatorPositionArrow) {
                positionArrowPerCentual = (100 / parseInt(this.indicatorPositionArrow));
            }
            //Indicador de posición del arrow con respecto al elemento de referencia
            if (this.indicatorPositionElementReference != ((_d = this.elementHTML) === null || _d === void 0 ? void 0 : _d.style.getPropertyValue('--indicator-position-element-reference')) && ((_e = this.elementHTML) === null || _e === void 0 ? void 0 : _e.style.getPropertyValue('--indicator-position-element-reference')) != undefined) {
                this.indicatorPositionElementReferenceFunction((_f = this.elementHTML) === null || _f === void 0 ? void 0 : _f.style.getPropertyValue('--indicator-position-element-reference'));
            }
            if (this.indicatorPositionElementReference) {
                positionElementReferencePerCentual = (100 / parseInt(this.indicatorPositionElementReference));
            }
            if (this.elementReferenceHTML && this.elementHTML && (this.direction == 'left' || this.direction == 'right')) {
                this.ySet((this.elementReferenceHTML.offsetHeight / positionElementReferencePerCentual) + "");
                this._calcYPos = 'calc( ' + this.y + 'px - ' + (this.elementHTML.offsetHeight / positionArrowPerCentual) + 'px )';
                this._calcYPosFunction(this._calcYPos);
                this._calcXPos = 'calc( ' + this.x + 'px )';
                this._calcXPosFunction(this._calcXPos);
            }
            else if (this.elementReferenceHTML && this.elementHTML && (this.direction == 'top' || this.direction == 'bottom')) {
                this.xSet((this.elementReferenceHTML.offsetWidth / positionElementReferencePerCentual) + "");
                this._calcXPos = 'calc( ' + this.x + 'px - ' + (this.elementHTML.offsetWidth / positionArrowPerCentual) + 'px )';
                this._calcXPosFunction(this._calcXPos);
                if (this.direction == 'bottom') {
                    this._calcYPos = 'calc( ' + this.y + 'px - ' + this.elementHTML.offsetHeight + 'px )';
                }
                else {
                    this._calcYPos = 'calc( ' + this.y + 'px )';
                }
                this._calcYPosFunction(this._calcYPos);
            }
        };
        this.beforeOpenFunction = (property) => {
            if (property !== undefined) {
                if (typeof property == 'function') {
                    this.beforeOpen = property;
                }
            }
            else {
                if (typeof this.beforeOpen == 'function') {
                    this.beforeOpen.call(this);
                }
            }
        };
        this._calcXPosFunction = (property) => {
            var _a;
            (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--xPos", property);
        };
        this._calcYPosFunction = (property) => {
            var _a;
            (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--yPos", property);
        };
        this.open = () => {
            var _a, _b, _c, _d;
            this.beforeOpenFunction;
            (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--animation-in', 'tooltip--animation-out');
            (_b = this.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add('d-flex', 'tooltip--animation-in');
            this.refreshPosition();
            (_c = this.elementHTML) === null || _c === void 0 ? void 0 : _c.classList.add('v-visible');
            if (this.closeOnTime) {
                const pluginThis = this;
                setTimeout(function () {
                    pluginThis.closeOnTimeCallback();
                }, pluginThis.timeToClose);
            }
            this._statusDisplay = true;
            (_d = this.elementReferenceHTML) === null || _d === void 0 ? void 0 : _d.focus();
        };
        this.close = (e) => {
            if (e) {
                e.stopPropagation();
            }
            const pluginThis = this;
            let promise = () => {
                pluginThis.closeAnimation();
                return new Promise((resolve, reject) => {
                    pluginThis.closeBtnCallbackFunction();
                    pluginThis._statusDisplay = false;
                });
            };
            promise();
        };
        this.closeTab = (e) => {
            e.stopPropagation();
            const pluginThis = this;
            let promise = () => {
                pluginThis.closeAnimation();
                return new Promise((resolve, reject) => {
                    pluginThis.tabCallbackFuntion();
                    pluginThis._statusDisplay = false;
                });
            };
            promise();
        };
        this.closeAnimation = () => {
            var _a, _b;
            const pluginThis = this;
            (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--animation-in');
            (_b = this.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add('tooltip--animation-out');
            if (this.animationTime && this.animationDelay) {
                setTimeout(function () {
                    var _a;
                    (_a = pluginThis.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--animation-out', 'v-visible', 'd-flex');
                }, (this.animationTime + this.animationDelay + .05) * 1000);
            }
        };
        this.closeBtnCallbackFunction = (property) => {
            if (property !== undefined) {
                if (typeof property == 'function') {
                    this.closeBtnCallback = property;
                }
            }
            else {
                if (typeof this.closeBtnCallback == 'function') {
                    this.closeBtnCallback.call(this);
                }
            }
        };
        this.tabCallbackFuntion = (property) => {
            if (property !== undefined) {
                if (typeof property == 'function') {
                    this.tabCallback = property;
                }
            }
            else {
                if (typeof this.tabCallback == 'function') {
                    this.tabCallback.call(this);
                }
            }
        };
        this.elementZIndexFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.elementZIndex = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--zIndex", "" + this.elementZIndex);
            }
            else {
                return this.elementZIndex;
            }
        };
        this.tabCloseFunction = (property) => {
            if (property !== undefined) {
                this.tabClose = property;
            }
            else {
                return this.tabClose;
            }
        };
        this.timeToCloseFunction = (property) => {
            if (property !== undefined) {
                this.timeToClose = property;
            }
            else {
                return this.timeToClose;
            }
        };
        this.closeOnTimeFunction = (property) => {
            if (property !== undefined) {
                this.closeOnTime = property;
            }
            else {
                return this.closeOnTime;
            }
        };
        this.closeOnTimeCallback = () => {
            const pluginThis = this;
            if (this._statusDisplay) {
                let mypromise = function functionOne() {
                    pluginThis.closeAnimation();
                    return new Promise((resolve, reject) => {
                        pluginThis.closeBtnCallbackFunction();
                    });
                };
                mypromise();
            }
        };
        this.closeBtnEvent = (property) => {
            var _a, _b, _c, _d, _e;
            if (property !== undefined) {
                if (property && !this.closeBtn) {
                    this.closeElementHTML = document.createElement("button");
                    this.closeElementHTML.setAttribute("id", this.idElement + "CloseBtn");
                    this.closeElementHTML.setAttribute("class", "tooltip__close-btn");
                    let iconClose = document.createElement("i");
                    iconClose.setAttribute("class", this.closeBtnClass);
                    this.closeElementHTML.append(iconClose);
                    (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.prepend(this.closeElementHTML);
                }
                else if (!property && property != this.closeBtn) {
                    (_b = this.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.remove('tooltip--close');
                    (_c = this.closeElementHTML) === null || _c === void 0 ? void 0 : _c.removeEventListener("click", () => { });
                    (_e = (_d = this.closeElementHTML) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.removeChild(this.closeElementHTML);
                }
                this.closeBtn = property;
            }
            else {
                return this.closeBtn;
            }
        };
        this.background = (property) => {
            var _a;
            if (property !== undefined) {
                this.backgroundColor = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--background", this.backgroundColor);
            }
            else {
                return this.backgroundColor;
            }
        };
        this.closeBtnClassFunction = (property) => {
            var _a, _b, _c, _d;
            if (property !== undefined) {
                (_b = (_a = this.closeElementHTML) === null || _a === void 0 ? void 0 : _a.children.namedItem('i')) === null || _b === void 0 ? void 0 : _b.classList.remove(this.closeBtnClass);
                this.closeBtnClass = property;
                (_d = (_c = this.closeElementHTML) === null || _c === void 0 ? void 0 : _c.children.namedItem('i')) === null || _d === void 0 ? void 0 : _d.classList.add(this.closeBtnClass);
            }
            else {
                return this.closeBtnClass;
            }
        };
        this.radiusFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.radius = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--radius", this.radius);
            }
            else {
                return this.radius;
            }
        };
        this.contentHTMLFunction = (property) => {
            var _a, _b, _c;
            if (property !== undefined) {
                this.contentHTML = property;
                if (this.closeBtn && this.closeElementHTML) {
                    (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.append(this.closeElementHTML);
                    (_b = this.elementHTML) === null || _b === void 0 ? void 0 : _b.append(this.contentHTML);
                }
                else {
                    (_c = this.elementHTML) === null || _c === void 0 ? void 0 : _c.append(this.contentHTML);
                }
            }
            else {
                return this.contentHTML;
            }
        };
        this.directionFunction = (property) => {
            var _a, _b;
            if (property !== undefined) {
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--' + this.direction);
                this.direction = property;
                (_b = this.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add('tooltip--' + this.direction);
            }
            else {
                return this.direction;
            }
        };
        this.indicatorPositionArrowFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.indicatorPositionArrow = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--indicator-position-arrow", this.indicatorPositionArrow);
            }
            else {
                return this.indicatorPositionArrow;
            }
        };
        this.indicatorPositionElementReferenceFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.indicatorPositionElementReference = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--indicator-position-element-reference", this.indicatorPositionElementReference);
            }
            else {
                return this.indicatorPositionElementReference;
            }
        };
        this.animationInFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.animationIn = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--animationIn", this.animationIn);
            }
            else {
                return this.animationIn;
            }
        };
        this.animationOutFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.animationOut = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--animationOut", this.animationOut);
            }
            else {
                return this.animationOut;
            }
        };
        this.classElementFunction = (property) => {
            var _a, _b;
            if (property !== undefined && this.classElement) {
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove(this.classElement);
                this.classElement = property;
                (_b = this.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add(this.classElement);
            }
            else {
                return this.classElement;
            }
        };
        this.xSet = (property) => {
            if (property !== undefined) {
                this.x = property;
                this._calcXPosFunction(this.x);
                //this.refreshPosition();
            }
            else {
                return this.x;
            }
        };
        this.ySet = (property) => {
            if (property !== undefined) {
                this.y = property;
                this._calcYPosFunction(this.y);
                //this.refreshPosition();
            }
            else {
                return this.y;
            }
        };
        this.widthFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.width = property;
                (_a = this.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--width", this.width);
            }
            else {
                return this.width;
            }
        };
        this.idElement = options.idElement;
        this.idElementReference = options.idElementReference;
        this.elementZIndex = options.elementZIndex ? options.elementZIndex : this.elementZIndex;
        this.timeToClose = options.timeToClose ? options.timeToClose : this.timeToClose;
        if ((options === null || options === void 0 ? void 0 : options.tabClose) != undefined || (options === null || options === void 0 ? void 0 : options.tabClose) != null)
            this.tabClose = options === null || options === void 0 ? void 0 : options.tabClose;
        if ((options === null || options === void 0 ? void 0 : options.clickClose) != undefined || (options === null || options === void 0 ? void 0 : options.clickClose) != null)
            this.clickClose = options === null || options === void 0 ? void 0 : options.clickClose;
        if ((options === null || options === void 0 ? void 0 : options.closeOnTime) != undefined || (options === null || options === void 0 ? void 0 : options.closeOnTime) != null)
            this.closeOnTime = options === null || options === void 0 ? void 0 : options.closeOnTime;
        if ((options === null || options === void 0 ? void 0 : options.closeBtn) != undefined || (options === null || options === void 0 ? void 0 : options.closeBtn) != null)
            this.closeBtn = options === null || options === void 0 ? void 0 : options.closeBtn;
        this.onClickFunction = options.onClickFunction ? options.onClickFunction : '';
        this.tabCallback = options.tabCallback ? options.tabCallback : this.tabCallback;
        this.closeBtnCallback = options.closeBtnCallback ? options.closeBtnCallback : this.closeBtnCallback;
        this.beforeOpen = options.beforeOpen ? options.beforeOpen : this.beforeOpen;
        this.backgroundColor = options.backgroundColor ? options.backgroundColor : this.backgroundColor;
        this.closeBtnClass = options.closeBtnClass ? options.closeBtnClass : this.closeBtnClass;
        this.radius = options.radius ? options.radius : this.radius;
        this.contentHTML = options.contentHTML ? options.contentHTML : this.contentHTML;
        this.direction = options.direction ? options.direction : this.direction; //left,right,top,bottom
        this.indicatorPositionArrow = options.indicatorPositionArrow ? options.indicatorPositionArrow : this.indicatorPositionArrow; //En porcentaje según el tooltip por ejemplo '50%'
        this.indicatorPositionElementReference = options.indicatorPositionElementReference ? options.indicatorPositionElementReference : this.indicatorPositionElementReference; //En porcentaje según el elemento por ejemplo '50%',
        this.animationIn = options.animationIn ? options.animationIn : this.animationIn;
        this.animationOut = options.animationOut ? options.animationOut : this.animationOut;
        this.animationTime = options.animationTime ? options.animationTime : this.animationTime;
        this.animationDelay = options.animationDelay ? options.animationDelay : this.animationDelay;
        this.classElement = options.classElement ? options.classElement : ''; // Clases extra que se le coloquen al tooltip   
        this.width = options.width ? options.width : this.width;
        this.init();
    }
}
//  Fin del Plugin

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- ecalderon
// WORKTEAM: ----- Onix
// version 1.0
const defaultSettings = {
    options: [{ value: '-1', selected: false, text: 'Seleccione...', label: 'Seleccione...', disabled: false, index: 0 }],
    name: '',
    disabled: false,
    scrollable: false,
};
class DropdownComponent {
    /**
     * The constructor of the class.
     * @param {DropdownOptions} settins - DropdownOptions
     */
    constructor(incomingSettins) {
        this.incomingSettins = incomingSettins;
        this.onDefaultChange = (event) => {
            if (event === null || event === void 0 ? void 0 : event.preventDefault)
                event === null || event === void 0 ? void 0 : event.preventDefault();
            if (this.settings.onSelectChange)
                this.settings.onSelectChange(event);
        };
        //linkeamos nuestro plugging con el select nativo (ya sea referenciandolo o creandolo)
        this.nativeHtmlSelect = HTMLSelectDriver.setUpHTMLSelectElement(incomingSettins);
        //optenemos los settings desde el elemento nativo
        let settingFromHTML = HTMLSelectDriver.getSettingsFromHTML(this.nativeHtmlSelect);
        //Unificamos las tres configuraciones 
        this.settings = Object.assign(Object.assign(Object.assign({}, defaultSettings), settingFromHTML), incomingSettins);
        //aplicamos settings al html
        HTMLSelectDriver.applySelectSettingsToHTML(this.nativeHtmlSelect, this.settings);
        //sobreescribirmos comportamientos por los ingresados por el usuario en los settings de entrada
        this.overwriteBehaviors();
        //Creo el elemento de blue que sería la interfaz gráfica select
        this.blueHtmlSelect = new BlueHtmlSelectElement(this.settings, this.nativeHtmlSelect);
        let thisObject = this;
        this.observer = new MutationObserver(function () {
            console.log('vambio el select antes this');
            if (thisObject) {
                let settingFromHTMLChanged = HTMLSelectDriver.getSettingsFromHTML(thisObject.nativeHtmlSelect);
                thisObject.settings = Object.assign(Object.assign({}, thisObject.settings), settingFromHTMLChanged);
                thisObject.blueHtmlSelect.createModal(thisObject.settings);
                thisObject.blueHtmlSelect.renderBlueSelectOptions(thisObject.settings);
            }
        });
        // pasa al observer el nodo y la configuracion
        this.observer.observe(this.nativeHtmlSelect, { attributes: true, childList: true, characterData: true, attributeFilter: ['value', 'disabled'] });
    }
    overwriteBehaviors() {
        var _a;
        if (!this.settings.disabled)
            (_a = this.nativeHtmlSelect) === null || _a === void 0 ? void 0 : _a.addEventListener('change', this.onDefaultChange);
    }
    dispose() {
        this.blueHtmlSelect.dispose();
    }
    addClases(clases) {
        for (const className of clases) {
            this.addClass(className);
        }
    }
    addClass(className) {
        this.blueHtmlSelect.label.classList.add(className);
    }
}

"use strict";

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- ecalderon
// WORKTEAM: ----- Onix
// version 1.0
class HTMLSelectDriver {
    static getSettingsFromHTML(selectElement) {
        if (selectElement) {
            return {
                name: selectElement.name,
                disabled: selectElement.disabled,
                selectedValue: selectElement.value,
                id: selectElement.id ? selectElement.id : this._getIdByName(selectElement.name),
                options: HTMLSelectDriver.getOptionsFromHTMLElement(selectElement),
                optgroup: HTMLSelectDriver.getOptgroupFromDOM(selectElement)
            };
        }
        else {
            throw new Error(`No exite el select a nivel de HTML`);
        }
    }
    static _getIdByName(name) {
        return name ? name : BLUEUtils.makeRandomId(15);
    }
    static applySelectSettingsToHTML(selectElement, settings) {
        if (selectElement && settings) {
            //Le quitamos los estilos
            selectElement.removeAttribute('class');
            //agregamos la clase blueselect por defecto
            selectElement.classList.add('blueSelect');
            selectElement.disabled = settings.disabled;
            if (settings.name)
                selectElement.setAttribute('name', settings.name);
            if (settings.id)
                selectElement.setAttribute('id', settings.id);
            if (settings.selectedValue) {
                selectElement.value = settings.selectedValue;
            }
        }
        else {
            throw new Error(`No se encontró el select a estilizar o los parámetros necesarios`);
        }
    }
    static setUpHTMLSelectElement(incomingSettins) {
        if (incomingSettins) {
            let result;
            //para poder crear o convertir un select a BLUE debe especificar almenos uno de estos parámetros. Se aplica el principio de fallo rápido
            if (!incomingSettins.querySelector && !incomingSettins.selectElement && !incomingSettins.containerQuerySelector) {
                throw new Error(`Necesita especificar un elemento de tipo select o el id del select al que desea aplicar estilos de BLUE, o el selector de un elemento contenedor para incluir un nuevo select`);
            }
            //Si no especificaron un select para convertir a BLUE entonces se busca con el selector o bien se crea uno nuevo
            if (incomingSettins.selectElement) {
                result = incomingSettins.selectElement;
            }
            else {
                if (document.querySelector(`${incomingSettins.querySelector}`) != undefined) {
                    result = this._getSelectFromDOM(incomingSettins);
                }
                else {
                    result = this._createNewSelect(incomingSettins);
                }
            }
            if (incomingSettins.selectedValue) {
                result.value = incomingSettins.selectedValue;
            }
            return result;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    static _createNewSelect(incomingSettins) {
        var _a, _b, _c;
        if (incomingSettins.containerQuerySelector) {
            let selectElement = document.createElement("select");
            HTMLSelectDriver.addOptions(incomingSettins, selectElement);
            HTMLSelectDriver.addOptGroup(incomingSettins, selectElement);
            const firstChild = (_a = document.querySelector(incomingSettins.containerQuerySelector)) === null || _a === void 0 ? void 0 : _a.firstChild;
            if (firstChild != null) {
                (_b = document.querySelector(incomingSettins.containerQuerySelector)) === null || _b === void 0 ? void 0 : _b.insertBefore(selectElement, firstChild);
            }
            else {
                (_c = document.querySelector(incomingSettins.containerQuerySelector)) === null || _c === void 0 ? void 0 : _c.appendChild(selectElement);
            }
            return selectElement;
        }
        else {
            throw new Error(`Debe especificar un contenedor para el nuevo select`);
        }
    }
    static addOptGroup(incomingSettins, selectElement) {
        var optionInfo;
        if (incomingSettins.optgroup) {
            for (const groupInfo of incomingSettins.optgroup) {
                var group = document.createElement("optgroup");
                group.label = groupInfo.label;
                group.disabled = groupInfo.disabled;
                if (groupInfo.options) {
                    for (optionInfo of groupInfo.options) {
                        var option = document.createElement("option");
                        option.value = optionInfo.value;
                        option.text = optionInfo.text;
                        if (optionInfo.selected) {
                            option.setAttribute('selected', 'true');
                        }
                        group.appendChild(option);
                    }
                }
                selectElement.add(group);
            }
        }
    }
    static addOptions(incomingSettins, selectElement) {
        var _a;
        var optionInfo;
        if (incomingSettins.options) {
            for (var i = 0; i < ((_a = incomingSettins.options) === null || _a === void 0 ? void 0 : _a.length); i++) {
                optionInfo = incomingSettins.options[i];
                var optionHmtl = document.createElement("option");
                optionHmtl.value = optionInfo.value;
                optionHmtl.text = optionInfo.text;
                if (optionInfo.selected) {
                    optionHmtl.setAttribute('selected', 'true');
                }
                selectElement.add(optionHmtl);
            }
        }
    }
    static _getSelectFromDOM(incomingSettins) {
        if (document.querySelector(`${incomingSettins.querySelector}`) instanceof HTMLSelectElement) {
            return document.querySelector(`${incomingSettins.querySelector}`);
        }
        else {
            throw new Error(`El elemento señalado no es un control de tipo select`);
        }
    }
    static getOptgroupFromDOM(selectElement) {
        var result = new Array();
        if (selectElement) {
            var selectOptions = selectElement === null || selectElement === void 0 ? void 0 : selectElement.children;
            for (const element of Array.from(selectOptions)) {
                if (element.tagName == 'OPTGROUP') {
                    const selectOption = element;
                    result.push({
                        label: selectOption.label,
                        disabled: selectOption.disabled,
                        options: this.getOptionsFromHTMLElement(selectOption)
                    });
                }
                // Do stuff
            }
        }
        return result;
    }
    static getOptionsFromHTMLElement(htmlElement) {
        let result = new Array();
        if (htmlElement.children) {
            var selectOptions = htmlElement.children;
            for (const element of Array.from(selectOptions)) {
                const selectOption = element;
                result.push({
                    value: selectOption.value,
                    text: selectOption.text,
                    label: selectOption.label,
                    disabled: selectOption.disabled,
                    selected: selectOption.selected,
                    index: selectOption.index
                });
            }
        }
        return result;
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- ecalderon
// WORKTEAM: ----- Onix
// version 1.0
class BlueHtmlSelectElement {
    /**
     * The constructor of the class.
     * @param {DropdownOptions} settings - DropdownOptions
     */
    constructor(opt, nativeHtmlSelect) {
        this.nativeHtmlSelect = nativeHtmlSelect;
        this.settings = opt;
        this.container = this._createContainer(nativeHtmlSelect, this.settings);
        this.label = this._createLabel();
        this.container.appendChild(this.label);
        this.selectModalDiv = this._createSelectModal(this.settings);
        this.selectList = this._createSelectList(this.settings);
        this.renderBlueSelectOptions(opt);
        nativeHtmlSelect.classList.add('d-none');
    }
    createModal(opt) {
        this.settings = opt;
        this.selectModalDiv = this._createSelectModal(this.settings);
        this.selectList = this._createSelectList(this.settings);
    }
    renderBlueSelectOptions(opt) {
        this.settings = opt;
        this.selectModalDiv.appendChild(this.selectList);
        this.container.appendChild(this.selectModalDiv);
        this._populateOptions(this.settings);
        if (this.settings.disabled) {
            this.label.classList.add('neutral-medium');
            this.label.classList.add('blue-select-disabled');
            this.label.classList.add('p-events-none');
        }
        else {
            this.label.classList.remove('p-events-none');
            this.label.classList.remove('blue-select-disabled');
            if (BlueHtmlSelectElement.isMobile()) {
                this.selectModalDiv.classList.remove('p-absolute');
                this.selectModalDiv.classList.add('select-box-content-modal');
                this.selectModalDiv.classList.remove('d-none');
                this.modal = new modalBLUE({
                    idModal: `${this.settings.id}modal`,
                    elementReference: `${this.settings.id}Label`,
                    contentHTML: this.selectModalDiv,
                    container: document.body,
                    closeButtom: true,
                    boxContentClass: ''
                });
            }
            else {
                this.label.addEventListener("click", () => {
                    this.selectModalDiv.classList.remove('d-none');
                    this.selectModalDiv.classList.add('select-max-height');
                    document.getElementById(`${this.settings.id}icon`).classList.add('select-rotate-icon');
                });
                let elementsArray = [`${this.settings.id}Label`, `${this.settings.id}p`, `${this.settings.id}icon`];
                document.addEventListener("click", (event) => {
                    let elementClick = event.target;
                    if (elementsArray.indexOf(elementClick.id) == -1 && document.getElementById(`${this.settings.id}icon`).classList.contains('select-rotate-icon')) {
                        document.getElementById(`${this.settings.id}icon`).classList.remove('select-rotate-icon');
                        setTimeout(() => { this.selectModalDiv.classList.add('d-none'); }, 150);
                    }
                });
            }
        }
    }
    _createSelectModal(settings) {
        let result = document.createElement("div");
        result.className = 'd-flex f-column select-box-content w-100 p-md-absolute grid-container d-none p-absolute cursor-pointer';
        result.setAttribute('id', `${settings.id}selectModalDiv`);
        return result;
    }
    _createSelectList(settings) {
        if (settings) {
            let selectList = document.createElement("ul");
            selectList.className = 'w-100 blue-option-list';
            selectList.setAttribute('id', `${settings.id}List`);
            return selectList;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    _populateOptions(settings) {
        if (settings) {
            if (settings.optgroup && settings.optgroup.length > 0) {
                for (const groupInfo of settings.optgroup) {
                    let visualGroup = document.createElement("li");
                    if (groupInfo.disabled) {
                        visualGroup.setAttribute('selectable', 'true');
                    }
                    visualGroup.classList.add('blue-option-disabled');
                    visualGroup.classList.add('typography-h4');
                    visualGroup.textContent = groupInfo.label;
                    this.selectList.appendChild(visualGroup);
                    this.populateBlueHtmlOptions(groupInfo.options, settings);
                }
            }
            else {
                this.populateBlueHtmlOptions(settings.options, settings);
            }
        }
        else {
            throw new Error(`no se encontraron los options configurados`);
        }
    }
    populateBlueHtmlOptions(options, settings) {
        if (options && settings) {
            let iterations = options.length;
            for (let optionInfo of options) {
                let textOption = optionInfo.label ? optionInfo.label : optionInfo.text;
                let liClass = optionInfo.disabled ? 'blue-option-disabled' : '';
                let displayStyle = (!--iterations) ? 'style="display:list-item"' : '';
                let htmlOptionId = BLUEUtils.makeRandomId(8);
                if (optionInfo.selected || optionInfo.value == settings.selectedValue) {
                    liClass = `${liClass} blue-option blue-selected-option`;
                    this.label.getElementsByTagName('p')[0].textContent = `${textOption}`;
                }
                else {
                    liClass = `${liClass} blue-option typography-p`;
                }
                let stringHtmlOption = `<li selectable="true" index='${optionInfo.index}' class="${liClass}" tabIndex="0" onkeydown="optionActionByKey(event, this)" ${displayStyle} onclick="BlueHtmlSelectElement.selectOption('${optionInfo.value}','${textOption}','${settings.id}', this);">${textOption}</li>`;
                this.selectList.innerHTML += stringHtmlOption;
            }
        }
    }
    static selectOption(valueToSelect, labelSelected, selectId, selectedHtmlOption) {
        document.getElementById(selectId).value = valueToSelect;
        document.getElementById(`${selectId}p`).textContent = labelSelected;
        const blueHtmlSelect = document.getElementById(`${selectId}List`);
        if (blueHtmlSelect) {
            blueHtmlSelect.querySelectorAll('li').forEach((element) => {
                element.classList.remove('blue-selected-option');
            });
        }
        selectedHtmlOption.classList.add('blue-selected-option');
        if (this.isMobile()) {
            document.getElementById(`btnClose${selectId}modal`).click();
        }
        else {
            document.getElementById(`${selectId}icon`).classList.remove('select-rotate-icon');
            setTimeout(() => { document.getElementById(`${selectId}selectModalDiv`).classList.add('d-none'); }, 150);
        }
    }
    _createContainer(selectElement, settings) {
        var _a;
        if (selectElement && settings) {
            const visualSelectContainer = document.createElement("div");
            visualSelectContainer.className = 'p-relative';
            visualSelectContainer.setAttribute('id', `${settings.id}Div`);
            (_a = selectElement.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(visualSelectContainer, selectElement);
            if (settings.disabled) {
                visualSelectContainer.classList.add('p-events-none');
            }
            else {
                if (settings.scrollable) {
                    visualSelectContainer.setAttribute('scrollable', 'true');
                }
            }
            return visualSelectContainer;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    _createLabel() {
        if (this.settings) {
            const label = document.createElement("label");
            label.className = 'blue-select blue-select-default d-flex typography-p';
            label.setAttribute('tabIndex', '0');
            label.setAttribute('id', `${this.settings.id}Label`);
            const p = document.createElement("p");
            p.setAttribute('id', `${this.settings.id}p`);
            p.className = 't-truncate d-inline m-reset w-100 d-flex';
            label.appendChild(p);
            const i = document.createElement("i");
            i.setAttribute('id', `${this.settings.id}icon`);
            i.className = 'icons chevron-down-block-after icons-xs d-flex p-left-s a-items-end select-icon';
            label.appendChild(i);
            return label;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    static _isEnterKey(event) {
        var keycode = event.which || event.keyCode;
        if (keycode == 13) {
            return true;
        }
        return false;
    }
    static isMobile() {
        return ((navigator.userAgent.match(/Android/i)) ||
            (navigator.userAgent.match(/webOS/i)) ||
            (navigator.userAgent.match(/iPhone/i)) ||
            (navigator.userAgent.match(/iPad/i)) ||
            (navigator.userAgent.match(/HarmonyOS/i)));
    }
    dispose() {
        this.container.remove();
    }
}

"use strict";
class InputAbstractComponent {
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
/* "Esta clase es un componente que representa un elemento de entrada".

Lo primero que hacemos es importar la clase InputAbstractComponent. Esta clase es una clase abstracta que contiene la
lógica de la clase InputComponent */
// @ts-ignore
class InputComponent extends InputAbstractComponent {
    /**
     * La función constructora se utiliza para inicializar las propiedades del componente y representar el componente.
     * @param {InputComponentOptions} options - InputComponentOptions: el objeto de opciones que se pasa al constructor.
     */
    constructor(options) {
        super();
        this.options = options;
        this.disabled = false;
        this.showPassword = false;
        this.callBackDestroyInput = () => undefined;
        this.callBackSearch = (any) => { console.log(any); };
        /* Renderizando el componente. */
        this.render = () => {
            const rootElement = document.querySelector(`#${this.rootElement}`);
            if (rootElement)
                this.prepare(rootElement);
            else
                throw new Error(`No existe ningún elemento con el ID (${this.rootElement})`);
            if (this.typeSearch) {
                this.inputElement.addEventListener('keyup', this.dataFilter);
                this.inputElement.addEventListener('paste', this.dataFilter);
            }
            return this;
        };
        /* Metodo encargado de filtrar los datos  */
        this.dataFilter = () => {
            var _a, _b;
            if (event) {
                let e = event;
                ((_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) ? this.search = (_b = e.clipboardData) === null || _b === void 0 ? void 0 : _b.getData('text') : this.search = this.inputElement.value;
                let searchResult = (this.search && this.dataSearch) ? BLUEUtils.dataFilter(this.search, this.dataSearch, this.dataKey) : null;
                this.callBackSearch(searchResult);
            }
            else {
                this.search = this.inputElement.value;
                let searchResult = (this.search && this.dataSearch) ? BLUEUtils.dataFilter(this.search, this.dataSearch, this.dataKey) : null;
                this.callBackSearch(searchResult);
            }
        };
        /* Un método que se llama cuando cambia el valor de la entrada. */
        this.onDefaultChange = (event) => {
            if (event === null || event === void 0 ? void 0 : event.preventDefault)
                event === null || event === void 0 ? void 0 : event.preventDefault();
            if (this.onChange)
                this.onChange(event);
            else {
                //  Default change value
            }
        };
        /* Preparación del componente de entrada. */
        this.prepare = (rootElement) => {
            this.prepareLabel(rootElement);
            this.preparePrefix();
            this.prepareInput(rootElement);
            this.prepareSuffix();
            return this;
        };
        /* Adición de un prefijo al elemento de entrada. */
        this.preparePrefix = () => {
            if (!this.prefix)
                return;
            if (this.options.prefix) {
                if (this.options.prefix instanceof InputIconComponent
                    || (this.options.prefix instanceof InputButtonComponent && !this.options.prefix.asInput)) {
                    this.inputElement.classList.add('p-left-xl');
                }
                this.containerElement.appendChild(this.options.prefix.node);
            }
        };
        /**
         * "Esta función toma un elemento raíz y le agrega un elemento contenedor, luego agrega un elemento de entrada al elemento
         * contenedor, establece los atributos del elemento de entrada y agrega detectores de eventos al elemento de entrada".
         *
         * Lo primero que hacemos es agregar el elemento contenedor al elemento raíz.
         * @param {HTMLElement} rootElement - HTMLElement: el elemento raíz del componente.
         */
        this.prepareInput = (rootElement) => {
            var _a, _b;
            rootElement.appendChild(this.containerElement);
            if (this.name)
                this.inputElement.setAttribute('name', this.name);
            this.inputElement.setAttribute('type', this.password ? 'password' : 'text');
            this.inputElement.disabled = (_a = this.disabled) !== null && _a !== void 0 ? _a : false;
            this.containerElement.appendChild(this.inputElement);
            if (this.value)
                this.inputElement.value = this.value;
            if (this.placeholder)
                this.inputElement.placeholder = this.placeholder;
            if (!this.disabled)
                this.inputElement.addEventListener('input', this.onDefaultChange);
            this.inputElement.classList.add('input-main', 'm-top-xs', 'typography-p', 'input-config-reveal');
            this.containerElement.classList.add('d-flex', ...(_b = this.classes) !== null && _b !== void 0 ? _b : []);
        };
        /* El código anterior está agregando un detector de eventos al elemento de entrada. */
        this.prepareSuffix = () => {
            var _a;
            if (!this.suffix)
                return;
            if (this.options.suffix instanceof InputIconComponent) {
                this.inputElement.classList.add('p-right-xl');
            }
            if (this.options.suffix instanceof InputButtonComponent) {
                this.inputElement.classList.add('input-space-button');
            }
            /* Agregar un detector de eventos al nodo de sufijo. */
            if (this.options.suffix) {
                if (this.options.suffix instanceof InputButtonComponent) {
                    this.suffix.node.addEventListener('click', this.onHiddenPassword);
                }
                else if (this.options.suffix instanceof InputIconComponent && ((_a = this.options.suffix.secondIconClasses) === null || _a === void 0 ? void 0 : _a.length)) {
                    this.suffix.node.addEventListener('click', this.onHiddenPassword);
                }
            }
            /* El código anterior está agregando un detector de eventos al elemento de entrada. */
            if (this.showSuffixAfterTyping) {
                this.suffix.node.style.visibility = 'hidden';
                this.inputElement.addEventListener("keyup", ({ target }) => {
                    if (!this.suffix)
                        return;
                    const { value } = target;
                    if (value)
                        this.suffix.node.style.visibility = "visible";
                    else
                        this.suffix.node.style.visibility = "hidden";
                });
                this.inputElement.addEventListener("click", ({ target }) => {
                    if (!this.suffix)
                        return;
                    const { value } = target;
                    if (value)
                        this.suffix.node.style.visibility = "visible";
                    else
                        this.suffix.node.style.visibility = "hidden";
                });
            }
            this.containerElement.appendChild(this.suffix.node);
        };
        /* El código anterior es un método que se llama cuando el usuario hace clic en el sufijo. Está comprobando si el sufijo
        es una instancia de InputButtonComponent. Si es así, está comprobando si la matriz secondIconClasses tiene una
        longitud. Si lo hace, está configurando iconClasses y secondIconClasses a iconClasses y secondIconClasses del
        sufijo. Luego establece las clases en secondIconClasses si showPassword es verdadero; de lo contrario, establece las
        clases en iconClasses. Luego está reemplazando las clases del nodo con las clases. */
        this.onHiddenPassword = (event) => {
            var _a, _b, _c;
            const mainNode = event === null || event === void 0 ? void 0 : event.target;
            if (event === null || event === void 0 ? void 0 : event.preventDefault)
                event === null || event === void 0 ? void 0 : event.preventDefault();
            /* Este es un operador ternario. Es una forma abreviada de una declaración if/else. */
            this.showPassword = !this.showPassword;
            if (mainNode && mainNode instanceof HTMLElement) {
                /* El código anterior verifica si el sufijo es una instancia de InputButtonComponent. Si es así, está
                comprobando si la matriz secondIconClasses tiene una longitud. Si lo hace, está configurando iconClasses y
                secondIconClasses a iconClasses y secondIconClasses del sufijo. Luego, establece las clases en
                secondIconClasses si showPassword es verdadero; de lo contrario, establece las clases en iconClasses. Luego
                está reemplazando las clases del nodo con las clases. */
                if (this.options.suffix instanceof InputButtonComponent) {
                    const add = (...tokens) => mainNode.classList.add(...tokens);
                    const remove = (...tokens) => mainNode.classList.remove(...tokens);
                    const filterIcon = (icon) => icon.replace(/\s/gi, '');
                    const exec = this.showPassword ? add : remove;
                    if (this.options.suffix.secondIcon)
                        exec(filterIcon(this.options.suffix.secondIcon));
                    mainNode.textContent = this.showPassword
                        ? (_a = this.options.suffix.hiddenMessage) !== null && _a !== void 0 ? _a : ''
                        : (_b = this.options.suffix.text) !== null && _b !== void 0 ? _b : '';
                    /* Comprobando si el sufijo es una instancia de InputIconComponent. Si es así, está comprobando si la matriz
                    secondIconClasses tiene una longitud. Si lo hace, está configurando iconClasses y secondIconClasses en
                    iconClasses y secondIconClasses del sufijo. Luego, establece las clases en secondIconClasses si showPassword
                    es verdadero; de lo contrario, establece las clases en iconClasses. Luego está reemplazando las clases de
                    nodo con las clases. */
                }
                else if (this.options.suffix instanceof InputIconComponent) {
                    if ((_c = this.options.suffix.secondIconClasses) === null || _c === void 0 ? void 0 : _c.length) {
                        const { iconClasses, secondIconClasses, replaceNodeClasses } = this.options.suffix;
                        const classes = this.showPassword
                            ? secondIconClasses !== null && secondIconClasses !== void 0 ? secondIconClasses : []
                            : iconClasses !== null && iconClasses !== void 0 ? iconClasses : [];
                        replaceNodeClasses(...classes);
                    }
                }
            }
            /* Este es un operador ternario. Es una forma abreviada de una declaración if/else. */
            this.inputElement.setAttribute('type', this.showPassword ? 'text' : 'password');
        };
        /* Crear una nueva instancia de la clase InputLabelComponent y agregarla a rootElement. */
        this.prepareLabel = (rootElement) => {
            if (this.label && this.label instanceof InputLabelComponent) {
                rootElement.appendChild(this.label.labelElement);
            }
            else if (this.label) {
                const inputLabel = new InputLabelComponent({
                    classes: ['typography-label'],
                    for: this.name,
                    text: this.label,
                });
                rootElement.appendChild(inputLabel.labelElement);
            }
        };
        this.dispose = () => {
            var _a, _b;
            this.inputElement.removeEventListener("click", () => {
            });
            this.inputElement.removeEventListener("keyup", () => {
            });
            (_a = this.inputElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.inputElement);
            (_b = this.containerElement.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.containerElement);
        };
        this.disabled = options === null || options === void 0 ? void 0 : options.disabled;
        this.rootElement = options === null || options === void 0 ? void 0 : options.rootElement;
        this.currentValue = options === null || options === void 0 ? void 0 : options.value;
        this.value = options === null || options === void 0 ? void 0 : options.value;
        this.name = options === null || options === void 0 ? void 0 : options.name;
        this.placeholder = options === null || options === void 0 ? void 0 : options.placeholder;
        this.password = options === null || options === void 0 ? void 0 : options.password;
        this.showSuffixAfterTyping = options === null || options === void 0 ? void 0 : options.showSuffixAfterTyping;
        this.label = options === null || options === void 0 ? void 0 : options.label;
        this.prefix = options === null || options === void 0 ? void 0 : options.prefix;
        this.suffix = options === null || options === void 0 ? void 0 : options.suffix;
        this.classes = options === null || options === void 0 ? void 0 : options.classes;
        this.borderColor = options === null || options === void 0 ? void 0 : options.borderColor;
        this.description = options === null || options === void 0 ? void 0 : options.description;
        this.typeSearch = options === null || options === void 0 ? void 0 : options.typeSearch;
        this.search = options === null || options === void 0 ? void 0 : options.search;
        this.dataSearch = options === null || options === void 0 ? void 0 : options.dataSearch;
        this.dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
        this.onChange = options === null || options === void 0 ? void 0 : options.onChange;
        this.onValidate = options === null || options === void 0 ? void 0 : options.onValidate;
        if (options === null || options === void 0 ? void 0 : options.callBackSearch)
            this.callBackSearch = options === null || options === void 0 ? void 0 : options.callBackSearch;
        this.containerElement = document.createElement("div");
        this.inputElement = document.createElement("input");
        this.render();
    }
    addClases(clases) {
        for (const className of clases) {
            this.addClass(className);
        }
    }
    addClass(className) {
        this.inputElement.classList.add(className);
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
class InputButtonComponent extends InputAbstractComponent {
    /**
     * La función constructora se usa para crear una nueva instancia de la clase.
     * @param {InputButtonComponentOptions} options - InputButtonComponentOptions: este es el objeto de opciones que se
     * pasará al constructor.
     */
    constructor(options) {
        var _a, _b, _c;
        super();
        this.options = options;
        this.disabled = false;
        this.asInput = false;
        /* Un método que devuelve la clase misma. */
        this.render = () => {
            this.prepare();
            if (this.rootElement) {
                const rootElement = document.querySelector(this.rootElement);
                if (rootElement)
                    rootElement.appendChild(this.node);
            }
            return this;
        };
        /* Un método que devuelve la propia clase. */
        this.prepare = () => {
            var _a, _b;
            /* Agregar las clases al node. */
            this.node.classList.add(...this.classes);
            /* Esto verifica si la función onDefaultClick está definida y, si lo está, agrega un detector de eventos al
            node. */
            if (this.onDefaultClick)
                this.node.addEventListener('click', this.onDefaultClick);
            /* Verificar si buttonElement es una instancia de HTMLInputElement y si lo es, está configurando el valor de
            buttonElement en la propiedad de texto y agregando las clases typography-p, input-file y p-s al node. */
            if (this.node instanceof HTMLInputElement) {
                this.node.value = (_a = this.text) !== null && _a !== void 0 ? _a : '';
                this.node.classList.add('typography-p', 'input-file', 'p-s');
                /* Comprobando si la función onChange está definida y, si lo está, está agregando un detector de eventos al
                node. */
                if (this.onChange)
                    this.node.addEventListener('input', this.onDefaultChange);
                /* Agregar la clase typography-link y l-height-reset al node. */
            }
            else if (this.node instanceof HTMLButtonElement) {
                this.node.classList.add('l-height-reset');
            }
            /* Al verificar si el botón está deshabilitado y si lo está, está eliminando la clase typography-p y agregando la
            clase typography-placeholder. */
            if (this.disabled) {
                if (this.node instanceof HTMLInputElement) {
                    this.node.disabled = (_b = this.disabled) !== null && _b !== void 0 ? _b : false;
                    this.node.classList.remove('typography-p');
                    this.node.classList.add('typography-placeholder');
                }
                else if (this.node instanceof HTMLButtonElement) {
                    this.node.classList.remove('typography-link');
                    this.node.classList.add('typography-placeholder');
                }
            }
            /* Si el texto no está vacío y el icono está vacío, entonces el texto se establece en node. */
            if (this.text && !this.icon) {
                this.node.textContent = this.text;
                /* Comprobando si el texto está vacío y el icono no está vacío. */
            }
            else if (!this.text && this.icon) {
                const iconClassNames = this.icon
                    .split(/(\s|,)/ig)
                    .map((className) => className.trim())
                    .filter((className) => !!className);
                this.node.classList.remove(...iconClassNames);
                if (this.node instanceof HTMLButtonElement) {
                    this.node.textContent = '';
                    if (this.icon)
                        this.node.classList.add(...iconClassNames);
                }
            }
            /* Establecer el atributo data-hidden-message en node. */
            if (this.hiddenMessage) {
                this.node.setAttribute('data-hidden-message', this.hiddenMessage);
            }
            return this;
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultClick = (event) => {
            if (this.onClick)
                this.onClick(event);
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultChange = (event) => {
            if (this.onChange)
                this.onChange(event);
        };
        this.asInput = (_a = options === null || options === void 0 ? void 0 : options.asInput) !== null && _a !== void 0 ? _a : false;
        this.disabled = (_b = options === null || options === void 0 ? void 0 : options.disabled) !== null && _b !== void 0 ? _b : false;
        this.rootElement = options === null || options === void 0 ? void 0 : options.rootElement;
        this.text = options === null || options === void 0 ? void 0 : options.text;
        this.icon = options === null || options === void 0 ? void 0 : options.icon;
        this.secondIcon = options === null || options === void 0 ? void 0 : options.secondIcon;
        this.classes = (_c = options === null || options === void 0 ? void 0 : options.classes) !== null && _c !== void 0 ? _c : [];
        this.hiddenMessage = options === null || options === void 0 ? void 0 : options.hiddenMessage;
        this.onClick = options === null || options === void 0 ? void 0 : options.onClick;
        this.onChange = options === null || options === void 0 ? void 0 : options.onChange;
        this.node = document.createElement(this.asInput ? 'input' : 'button');
        this.render();
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
/* Es una clase que crea un elemento span con una lista de clases y un detector de eventos. */
class InputIconComponent extends InputAbstractComponent {
    /**
     * La función constructora es una función que se llama cuando se crea una nueva instancia de la clase.
     * @param {InputIconComponentOptions} options - InputIconComponentOptions: este es el objeto de opciones que pasaremos
     * al constructor.
     */
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        this.options = options;
        /* Un método que se llama cuando se crea una instancia de la clase. */
        this.render = () => {
            this.prepare();
            if (this.rootElement) {
                const rootElement = document.querySelector(this.rootElement);
                rootElement === null || rootElement === void 0 ? void 0 : rootElement.appendChild(this.node);
            }
            return this;
        };
        /* Agregar las clases al nodo. */
        this.prepare = () => {
            var _a, _b;
            this.node.classList.add(...(_a = this.classes) !== null && _a !== void 0 ? _a : []);
            this.node.classList.add(...(_b = this.iconClasses) !== null && _b !== void 0 ? _b : []);
            if (this.onDefaultClick)
                this.node.addEventListener('click', this.onDefaultClick);
            if (this.onChange)
                this.node.addEventListener('input', this.onDefaultChange);
            return this;
        };
        /* Un método que reemplaza las clases del nodo. */
        this.replaceNodeClasses = (...iconClasses) => {
            /* Convertir la lista de clases del nodo en una matriz de cadenas. */
            const oldIconClasses = classListToArray(this.node);
            /* Eliminando todas las clases del nodo. */
            this.node.classList.remove(...oldIconClasses);
            /* Agregar las clases al nodo. */
            this.node.classList.add(...iconClasses);
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultClick = (event) => {
            if (this.onClick)
                this.onClick(event);
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultChange = (event) => {
            if (this.onChange)
                this.onChange(event);
        };
        this.rootElement = (_a = options.rootElement) !== null && _a !== void 0 ? _a : '';
        this.iconClasses = (_b = options.iconClasses) !== null && _b !== void 0 ? _b : [];
        this.secondIconClasses = (_c = options.secondIconClasses) !== null && _c !== void 0 ? _c : [];
        this.classes = (_d = options.classes) !== null && _d !== void 0 ? _d : [];
        this.node = document.createElement("span");
        this.render();
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
class InputLabelComponent extends InputAbstractComponent {
    constructor(option) {
        var _a, _b, _c;
        super();
        this.option = option;
        this.prepare = () => {
            var _a;
            this.labelElement.classList.add(...(_a = this.classes) !== null && _a !== void 0 ? _a : []);
            if (this.for)
                this.labelElement.setAttribute('for', this.for);
            if (this.text)
                this.labelElement.textContent = this.text;
        };
        this.render = () => {
            this.prepare();
            if (this.rootElement) {
                const rootElement = document.querySelector(this.rootElement);
                if (rootElement)
                    rootElement.appendChild(this.labelElement);
            }
        };
        this.for = option === null || option === void 0 ? void 0 : option.rootElement;
        this.for = (_a = option === null || option === void 0 ? void 0 : option.for) !== null && _a !== void 0 ? _a : '';
        this.text = (_b = option === null || option === void 0 ? void 0 : option.text) !== null && _b !== void 0 ? _b : '';
        this.classes = (_c = option === null || option === void 0 ? void 0 : option.classes) !== null && _c !== void 0 ? _c : [];
        this.labelElement = document.createElement("label");
        this.render();
    }
}
