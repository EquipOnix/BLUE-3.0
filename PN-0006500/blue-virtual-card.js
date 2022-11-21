"use strict";
class VirtualCard {
    constructor(options) {
        this.options = options;
        this.idContainerResize = '';
        this.elementHTML = null;
        this.containerResizeHTML = null;
        this.url = 'http://localhost/js/jsonDataCardVirtual.min.js';
        this.data = null;
        this.bin = '';
        this.cardNumber = '';
        this.expiration = '';
        this.CVV = '';
        this.brand = '';
        this.typeCard = '';
        this.showInfo = false;
        this.footerHTML = '';
        this.observerConfig = { attributes: true };
        this.maskCardNumber = [true, true, true, false];
        this.maskExpirationAndCVV = [false, false];
        this.showFooterCard = false;
        this.path = '';
        this.language = 'es';
        this.textMessageEn = 'Get one now!';
        this.textMessageEs = '&iexcl;Solic&iacute;tela ahora!';
        this.textStatusEn = 'This account does not have a card.';
        this.textStatusEs = 'Esta cuenta a&uacute;n no tiene tarjeta';
        this.observerTargetNode = null;
        this.init = () => {
            (!this.data) ? this._readJsonCard() : this.safeData(this.data);
        };
        this._readJsonCard = () => {
            var plugin = this;
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", this.url, true);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4 && rawFile.status == 200) {
                    plugin.safeData(rawFile.responseText);
                }
            };
            rawFile.send(null);
        };
        this.safeData = (text) => {
            if (text) {
                if (typeof text === 'object') {
                    this.data = text;
                }
                else {
                    this.data = JSON.parse(text);
                }
                (this.data) ? this._prepareView() : this._errorData();
            }
        };
        this._errorData = () => {
            console.error("No hay datos de tarjetas");
        };
        this.initConfig = () => {
        };
        this._prepareView = () => {
            var _a, _b, _c, _d, _e;
            var datosCard = this.findCard(this.bin);
            var textArrayLanguage = [{ language: 'es', textMessage: this.textMessageEs, textStatus: this.textStatusEs, textCardNumber: "Numero de tarjeta", textExpired: "Vencimiento" },
                { language: "en", textMessage: this.textMessageEn, textStatus: this.textStatusEn, textCardNumber: "Card number", textExpired: "Valid Thru" }];
            var plugin = this;
            var textCardLanguage = textArrayLanguage.filter(function (element) { return element.language == plugin.language; });
            if (!datosCard.B) {
                datosCard = this.getDefaultConfig(textCardLanguage[0].textStatus, textCardLanguage[0].textMessage);
            }
            let borderCard = datosCard.cardBorder ? datosCard.cardBorder : "";
            this.elementHTML = document.querySelector("#" + this.idElement);
            if (this.elementHTML) {
                this.elementHTML.classList.add('d-flex', 'f-column', 'containerCardPlugin');
                let containerCard = document.createElement('div');
                containerCard.setAttribute('id', `${this.idElement}containerCard`);
                containerCard.classList.add('containerCard', `card-color-${datosCard.C}`);
                if (borderCard) {
                    containerCard.classList.add(borderCard);
                }
                this.elementHTML.append(containerCard);
                let footerContainerCard = document.createElement('div');
                footerContainerCard.classList.add('footerContainerCard');
                let footerContainerCardHTML = document.createElement('div');
                footerContainerCardHTML.setAttribute('id', `${this.idElement}footerContainerHtml`);
                footerContainerCardHTML.classList.add('footerContainerCardHTML');
                footerContainerCard.append(footerContainerCardHTML);
                this.elementHTML.append(footerContainerCard);
            }
            let footerContainerHTML = document.querySelector("#" + this.idElement + "footerContainerHtml");
            if (footerContainerHTML) {
                footerContainerHTML.innerHTML = this.footerHTML;
            }
            if (!this.showFooterCard && this.elementHTML) {
                (_a = this.elementHTML.querySelector(".footerContainerCard")) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
            }
            let containerCard = document.querySelector("#" + this.idElement + "containerCard");
            if (containerCard) {
                let watermark = document.createElement('img');
                watermark.setAttribute('id', `${this.idElement}watermark-img`);
                watermark.setAttribute('alt', `bac_watermark`);
                watermark.classList.add('watermark');
                containerCard.append(watermark);
                let container_card_items = document.createElement('div');
                container_card_items.setAttribute('id', `${this.idElement}containerCardItems`);
                container_card_items.classList.add('container_card_items');
                containerCard.append(container_card_items);
            }
            var container = document.querySelector("#" + this.idElement + "containerCardItems");
            let watermarkIMG = document.querySelector("#" + this.idElement + "watermark-img");
            if (watermarkIMG) {
                watermarkIMG.setAttribute('onerror', 'this.onerror=null; this.src=\'' + this.path + 'watermarks/bac_' + datosCard.WMC + '.svg\'');
                if (this._isAnImageName(datosCard.WMI)) {
                    watermarkIMG.setAttribute('src', this.path + datosCard.WMI);
                }
            }
            if (container) {
                let container_card_grid = document.createElement('div');
                container_card_grid.classList.add('container_card_grid');
                let grid_area_plan = document.createElement('div');
                grid_area_plan.classList.add('grid_area_plan');
                let container_plan = document.createElement('div');
                container_plan.setAttribute('id', `${this.idElement}container_plan`);
                container_plan.classList.add('container_plan');
                grid_area_plan.append(container_plan);
                let grid_area_logo = document.createElement('div');
                grid_area_logo.classList.add('grid_area_logo');
                let container_logo = document.createElement('div');
                container_logo.setAttribute('id', `${this.idElement}container_logo`);
                let logo_bac = document.createElement('img');
                logo_bac.setAttribute('id', `bac-logo`);
                logo_bac.classList.add('logo_bac');
                logo_bac.setAttribute('src', this.path + datosCard.LBI);
                container_logo.append(logo_bac);
                grid_area_logo.append(container_logo);
                let grid_area_info = document.createElement('div');
                grid_area_info.setAttribute('id', `${this.idElement}areaInfo`);
                grid_area_info.classList.add('grid_area_info');
                let grid_area_brand = document.createElement('div');
                grid_area_brand.setAttribute('id', `${this.idElement}areaBrand`);
                grid_area_brand.classList.add('grid_area_brand');
                container_card_grid.append(grid_area_plan);
                container_card_grid.append(grid_area_logo);
                container_card_grid.append(grid_area_info);
                container_card_grid.append(grid_area_brand);
                container.append(container_card_grid);
            }
            let bacLogoImg = document.querySelector("#" + this.idElement + "bac-logo");
            if (bacLogoImg) {
                bacLogoImg.addEventListener("error", () => {
                    plugin.errorLoadImg(this.idElement + "bac-logo");
                });
                if (this._isAnImageName(datosCard.LBI)) {
                    bacLogoImg.setAttribute('src', this.path + datosCard.LBI);
                }
                else {
                    plugin.errorLoadImg(this.idElement + "bac-logo");
                }
            }
            let logo_plan = document.createElement('img');
            logo_plan.setAttribute('id', `${this.idElement}plan-logo`);
            logo_plan.classList.add('logo_plan');
            (_b = document.querySelector(`#${this.idElement}container_plan`)) === null || _b === void 0 ? void 0 : _b.append(logo_plan);
            logo_plan.addEventListener("error", () => {
                var _a;
                (_a = document.querySelector(`#${plugin.idElement}plan-logo`)) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
            });
            if (this._isAnImageName(datosCard.PI)) {
                logo_plan.setAttribute('src', this.path + datosCard.PI);
            }
            else {
                (_c = document.querySelector(`#${plugin.idElement}plan-logo`)) === null || _c === void 0 ? void 0 : _c.classList.add("d-none");
            }
            let areaInfo = document.querySelector("#" + this.idElement + "areaInfo");
            if (areaInfo) {
                let containerInfoTraslate = document.createElement('div');
                containerInfoTraslate.classList.add('containerInfoTraslate');
                containerInfoTraslate.setAttribute('id', `${this.idElement}Information`);
                areaInfo.append(containerInfoTraslate);
                let shape_container = document.createElement('div');
                shape_container.classList.add('shape_container');
                shape_container.setAttribute('id', `${this.idElement}ShapeContainer`);
                areaInfo.append(shape_container);
            }
            this._createCardNumberInfo(datosCard, textCardLanguage[0].textCardNumber);
            this._createExpirationAndCVV(datosCard, textCardLanguage[0].textExpired);
            this._createShape(datosCard.C);
            let container_brand = document.createElement('div');
            container_brand.classList.add('container_brand');
            let brand = document.createElement('img');
            brand.classList.add('brand');
            brand.setAttribute('id', `${this.idElement}brand-logo`);
            brand.addEventListener("error", () => {
                var _a;
                (_a = document.querySelector(`#${plugin.idElement}brand-logo`)) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
            });
            if (this._isAnImageName(datosCard.BI)) {
                brand.setAttribute('src', this.path + datosCard.BI);
            }
            else {
                (_d = document.querySelector(`#${plugin.idElement}brand-logo`)) === null || _d === void 0 ? void 0 : _d.classList.add("d-none");
            }
            container_brand.append(brand);
            (_e = document.querySelector("#" + this.idElement + "areaBrand")) === null || _e === void 0 ? void 0 : _e.append(container_brand);
            this.observerResize();
            this.resizeView();
        };
        this.resizeView = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
            if (this.elementHTML) {
                var sizeContainer = this.elementHTML.clientWidth;
                let text_info_detail_card1 = this.elementHTML.querySelectorAll('.text_info_detail_card');
                text_info_detail_card1.forEach((element) => {
                    let elementActualState = element;
                    elementActualState.style.fontSize = (sizeContainer * (5.5)) / 100 + "px";
                    elementActualState.style.marginRight = (sizeContainer * (3)) / 100 + "px";
                    if (element.classList.contains("circle_mask")) {
                        elementActualState.style.width = "calc(" + elementActualState.value.length + "ch - " + (sizeContainer * (2)) / 100 + "px)";
                    }
                });
                let text_info_card1 = this.elementHTML.querySelectorAll('.text_info_card');
                text_info_card1.forEach((element) => {
                    element.setAttribute("style", "font-size: " + (sizeContainer * 4) / 100 + "px;");
                });
                (_a = document.querySelector("#" + this.idElement + "MessageNeutral")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "font-size:" + (sizeContainer * (6.5)) / 100 + "px");
                (_b = document.querySelector("#" + this.idElement + "StatusNeutral")) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "font-size:" + (sizeContainer * 3.5) / 100 + "px");
                (_c = document.querySelector("#" + this.idElement + "footerContainerHtml")) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "transform: " + "translate(0, -0.63em)");
                (_e = (_d = document.querySelector("#" + this.idElement + "footerContainerHtml")) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.setAttribute("style", "transform: translate(0, -" + (this.elementHTML.querySelectorAll(".container_card_grid")[0].clientWidth * 0.05) / 2 + "px)");
                if (sizeContainer <= 100) {
                    (_f = this.elementHTML.querySelector('.containerCard')) === null || _f === void 0 ? void 0 : _f.classList.remove('card-box-shadow-normal', 'card-box-radius-normal');
                    (_g = this.elementHTML.querySelector('.containerCard')) === null || _g === void 0 ? void 0 : _g.classList.add('card-box-shadow-small', 'card-box-radius-small');
                    (_h = this.elementHTML.querySelector('.watermark')) === null || _h === void 0 ? void 0 : _h.classList.remove('card-box-radius-normal');
                    (_j = this.elementHTML.querySelector('.watermark')) === null || _j === void 0 ? void 0 : _j.classList.add('card-box-radius-small');
                    (_k = this.elementHTML.querySelector('.container_brand')) === null || _k === void 0 ? void 0 : _k.classList.add("container_brand_small");
                    (_l = this.elementHTML.querySelector('.container_brand')) === null || _l === void 0 ? void 0 : _l.classList.remove("container_brand_normal");
                    (_m = document.querySelector("#" + this.idElement + "container_plan")) === null || _m === void 0 ? void 0 : _m.classList.add("container_hide");
                    (_o = document.querySelector("#" + this.idElement + "Information")) === null || _o === void 0 ? void 0 : _o.classList.add("d-none");
                    (_p = document.querySelector("#" + this.idElement + "ShapeContainer")) === null || _p === void 0 ? void 0 : _p.classList.remove("d-none");
                    (_q = document.querySelector("#" + this.idElement + "container_logo")) === null || _q === void 0 ? void 0 : _q.classList.add("container_bac_small");
                    (_r = document.querySelector("#" + this.idElement + "container_logo")) === null || _r === void 0 ? void 0 : _r.classList.remove("container_bac_normal");
                    (_s = this.elementHTML.querySelector(".footerContainerCard")) === null || _s === void 0 ? void 0 : _s.classList.add("d-none");
                }
                else {
                    (_t = this.elementHTML.querySelector('.containerCard')) === null || _t === void 0 ? void 0 : _t.classList.add('card-box-shadow-normal', 'card-box-radius-normal');
                    (_u = this.elementHTML.querySelector('.containerCard')) === null || _u === void 0 ? void 0 : _u.classList.remove('card-box-shadow-small', 'card-box-radius-small');
                    (_v = this.elementHTML.querySelector('.watermark')) === null || _v === void 0 ? void 0 : _v.classList.add('card-box-radius-normal');
                    (_w = this.elementHTML.querySelector('.watermark')) === null || _w === void 0 ? void 0 : _w.classList.remove('card-box-radius-small');
                    (_x = this.elementHTML.querySelector('.container_brand')) === null || _x === void 0 ? void 0 : _x.classList.remove("container_brand_small");
                    (_y = this.elementHTML.querySelector('.container_brand')) === null || _y === void 0 ? void 0 : _y.classList.add("container_brand_normal");
                    (_z = document.querySelector("#" + this.idElement + "container_plan")) === null || _z === void 0 ? void 0 : _z.classList.remove("container_hide");
                    (_0 = document.querySelector("#" + this.idElement + "Information")) === null || _0 === void 0 ? void 0 : _0.classList.remove("d-none");
                    (_1 = document.querySelector("#" + this.idElement + "ShapeContainer")) === null || _1 === void 0 ? void 0 : _1.classList.add("d-none");
                    (_2 = document.querySelector("#" + this.idElement + "container_logo")) === null || _2 === void 0 ? void 0 : _2.classList.add("container_bac_normal");
                    (_3 = document.querySelector("#" + this.idElement + "container_logo")) === null || _3 === void 0 ? void 0 : _3.classList.remove("container_bac_small");
                    if (this.showFooterCard) {
                        (_4 = this.elementHTML.querySelector(".footerContainerCard")) === null || _4 === void 0 ? void 0 : _4.classList.remove("d-none");
                    }
                    ;
                }
                var sizeHeightContainer = (_5 = this.elementHTML.querySelector(".grid_area_info")) === null || _5 === void 0 ? void 0 : _5.clientHeight;
                if (sizeHeightContainer) {
                    (_6 = this.elementHTML.querySelector('.shape_info_1')) === null || _6 === void 0 ? void 0 : _6.setAttribute("Style", "height:" + (sizeHeightContainer * (33)) / 100 + "px");
                    (_7 = this.elementHTML.querySelector('.shape_info_2')) === null || _7 === void 0 ? void 0 : _7.setAttribute("Style", "height:" + (sizeHeightContainer * (33)) / 100 + "px");
                }
            }
        };
        this.observerResize = () => {
            var plugin = this;
            this.observerTargetNode = document.querySelector("#" + this.idContainerResize);
            if (this.observerTargetNode) {
                // Opciones para el observador (cuales mutaciones observar)
                // Callback  de la funcion para ejecutarse cuando las mutaciones son observadas
                // Crea una instancia del observador con un callback
                var observer = new MutationObserver(function (mutationsList) {
                    mutationsList.forEach((mutation) => {
                        plugin.resizeView();
                    });
                });
                // Inicia la observacion del target node para las mutaciones configuradas
                observer.observe(this.observerTargetNode, {
                    attributes: true
                });
            }
            ;
        };
        this.errorLoadImage = () => {
            console.log("imagenes no disponibles.");
        };
        this.errorLoadImg = (id) => {
            var _a;
            (_a = document.querySelector("#" + id)) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
        };
        this.errorLoadImgWatermarker = (imgColor) => {
            let watermarkImg = document.querySelector("#" + this.idElement + "watermark-img");
            if (imgColor != "sin datos" && watermarkImg) {
                var plugin = this;
                watermarkImg.removeEventListener("error", () => {
                    plugin.errorLoadImage();
                });
                watermarkImg.addEventListener("error", () => {
                    plugin.errorLoadImage();
                });
                watermarkImg.setAttribute("src", this.path + "watermarks/bac_" + imgColor + ".svg");
            }
        };
        this._createShape = (shapeColor) => {
            var _a, _b;
            let shape_info_1 = document.createElement('div');
            shape_info_1.classList.add('shape_info_1', `shape_info_${shapeColor}`);
            let shape_info_2 = document.createElement('div');
            shape_info_2.classList.add('shape_info_2', `shape_info_${shapeColor}`);
            (_a = document.querySelector('#' + this.idElement + 'ShapeContainer')) === null || _a === void 0 ? void 0 : _a.append(shape_info_1);
            (_b = document.querySelector('#' + this.idElement + 'ShapeContainer')) === null || _b === void 0 ? void 0 : _b.append(shape_info_2);
        };
        this._createExpirationAndCVV = (datosCard, textExpired) => {
            var textColor = datosCard.textColor ? "card_text-color-" + datosCard.textColor : "card_text-colorDefault";
            let informationContainer = document.querySelector('#' + this.idElement + 'Information');
            if (datosCard.textMessage && informationContainer) {
                let messageNeutral = document.createElement('p');
                messageNeutral.classList.add('card-text-drop-shadow', textColor, 'text_neutral');
                messageNeutral.setAttribute('id', `${this.idElement}MessageNeutral`);
                messageNeutral.textContent = datosCard.textMessage;
                informationContainer.append(messageNeutral);
                informationContainer.classList.remove("containerInfoTraslate");
            }
            else if (this.CVV && this.expiration && this.showInfo && informationContainer) {
                var ExpirationMask = this.maskExpirationAndCVV[0] ? "circle_mask" : "";
                var CVVMask = this.maskExpirationAndCVV[1] ? "circle_mask" : "";
                let display_flex = document.createElement('div');
                display_flex.classList.add('d-flex');
                let card_expiration_text = document.createElement('div');
                card_expiration_text.classList.add('d-flex', 'f-column', 'card_expiration_text');
                let text_info_card = document.createElement('p');
                text_info_card.classList.add('text_info_card', textColor, 'card-text-drop-shadow');
                text_info_card.innerText = textExpired;
                card_expiration_text.append(text_info_card);
                let circle_group = document.createElement('div');
                circle_group.classList.add('circle_group');
                let text_info_detail_card = document.createElement('input');
                text_info_detail_card.setAttribute('id', `${this.idElement}Expiration`);
                text_info_detail_card.classList.add(textColor, 'card-text-drop-shadow', 'text_info_detail_card');
                text_info_detail_card.setAttribute("type", "text");
                text_info_detail_card.setAttribute("disabled", "true");
                let widthCalc = this.expiration.length + "ch";
                if (ExpirationMask) {
                    text_info_detail_card.classList.add(ExpirationMask);
                    text_info_detail_card.setAttribute("type", "password");
                }
                text_info_detail_card.value = this.expiration;
                text_info_detail_card.style.width = widthCalc;
                circle_group.append(text_info_detail_card);
                card_expiration_text.append(circle_group);
                let card_cvv_text = document.createElement('div');
                card_cvv_text.classList.add('d-flex', 'f-column', 'card_expiration_text', 'p-left-m', 'card_cvv_text');
                let text_info_cardCVV = document.createElement('p');
                text_info_cardCVV.classList.add('text_info_card', textColor, 'card-text-drop-shadow');
                text_info_cardCVV.innerText = 'CVV';
                card_cvv_text.append(text_info_cardCVV);
                let circle_group_CVV = document.createElement('div');
                circle_group_CVV.classList.add('circle_group');
                let text_info_detail_card_CVV = document.createElement('input');
                text_info_detail_card_CVV.setAttribute('id', `${this.idElement}CVV`);
                text_info_detail_card_CVV.classList.add(textColor, 'card-text-drop-shadow', 'text_info_detail_card');
                text_info_detail_card_CVV.setAttribute("type", "text");
                text_info_detail_card_CVV.setAttribute("disabled", "true");
                widthCalc = this.CVV.length + "ch";
                if (CVVMask) {
                    text_info_detail_card_CVV.classList.add(CVVMask);
                    text_info_detail_card_CVV.setAttribute("type", "password");
                }
                text_info_detail_card_CVV.value = this.CVV;
                text_info_detail_card_CVV.style.width = widthCalc;
                circle_group_CVV.append(text_info_detail_card_CVV);
                card_cvv_text.append(circle_group_CVV);
                display_flex.append(card_expiration_text);
                display_flex.append(card_cvv_text);
                informationContainer.append(display_flex);
            }
        };
        this._createCardNumberInfo = (datosCard, textCardNumber) => {
            var _a, _b;
            var plugin = this;
            var textColor = datosCard.textColor ? "card_text-color-" + datosCard.textColor : "card_text-colorDefault";
            if (datosCard.textStatus) {
                let textStatus = document.createElement('p');
                textStatus.setAttribute('id', `${this.idElement}StatusNeutral`);
                textStatus.classList.add('card-text-drop-shadow', textColor, 'text_neutral');
                textStatus.innerText = datosCard.textStatus;
                (_a = document.querySelector('#' + this.idElement + 'Information')) === null || _a === void 0 ? void 0 : _a.append(textStatus);
            }
            else if (this.cardNumber && this.showInfo) {
                var cardsNumbersArray = this.cardNumber.split("-");
                let cardNumber = document.createElement('div');
                cardNumber.classList.add('d-flex', 'f-column', 'container_text_info_card');
                let text_info_card = document.createElement('p');
                text_info_card.classList.add('text_info_card', textColor, 'card-text-drop-shadow');
                text_info_card.innerText = textCardNumber;
                cardNumber.append(text_info_card);
                let containersCardNumber = document.createElement('div');
                containersCardNumber.classList.add('d-flex');
                containersCardNumber.setAttribute('id', `${this.idElement}containersCardNumber`);
                cardsNumbersArray.forEach((cardNumberItem, index) => {
                    if (plugin.maskCardNumber[index]) {
                        let maskCardNumber = document.createElement('div');
                        maskCardNumber.classList.add('circle_group');
                        let cardNumberItemElement = document.createElement('input');
                        cardNumberItemElement.classList.add(textColor, 'text_info_detail_card', 'card-text-drop-shadow', 'circle_mask');
                        cardNumberItemElement.setAttribute("type", "password");
                        cardNumberItemElement.setAttribute("disabled", "true");
                        cardNumberItemElement.value = cardNumberItem;
                        maskCardNumber.append(cardNumberItemElement);
                        containersCardNumber.append(maskCardNumber);
                    }
                    else {
                        let maskCardNumber = document.createElement('div');
                        maskCardNumber.classList.add('circle_group');
                        let cardNumberItemElement = document.createElement('input');
                        cardNumberItemElement.classList.add(textColor, 'text_info_detail_card', 'card-text-drop-shadow');
                        cardNumberItemElement.setAttribute("type", "text");
                        cardNumberItemElement.setAttribute("disabled", "true");
                        cardNumberItemElement.value = cardNumberItem;
                        cardNumberItemElement.style.width = cardNumberItem.length + "ch";
                        cardNumberItemElement.innerText = cardNumberItem;
                        maskCardNumber.append(cardNumberItemElement);
                        containersCardNumber.append(maskCardNumber);
                    }
                });
                cardNumber.append(containersCardNumber);
                (_b = document.querySelector('#' + this.idElement + 'Information')) === null || _b === void 0 ? void 0 : _b.append(cardNumber);
            }
        };
        this.findCard = (bin) => {
            let binfind = "";
            if (this.data.cards[bin])
                binfind = this.data.cards[bin];
            return binfind;
        };
        this.getDefaultConfig = (textStatus, textMessage) => {
            var datosCard = {};
            var typeCards = [{ type: "credit", color: "blue" }, { type: "debit", color: "red" }];
            var Cardbrands = [{ brand: "visa", imgBrand: "visa.svg" }, { brand: "mastercard", imgBrand: "mastercard.svg" }, { brand: "americanexpress", imgBrand: "amex.svg" }, { brand: "bac", imgBrand: "" }];
            var plugin = this;
            var filterCardBrand = Cardbrands.filter(function (element) { return element.brand == plugin.brand.toLowerCase(); });
            var filterCardType = typeCards.filter(function (element) { return element.type == plugin.typeCard.toLowerCase(); });
            if (filterCardBrand.length && filterCardType.length) {
                datosCard = {
                    "BR": filterCardBrand[0].brand,
                    "C": filterCardType[0].color,
                    "BI": "Brands/" + filterCardBrand[0].imgBrand,
                    "WMI": "watermarks/bac_" + filterCardType[0].color + ".svg",
                    "WMC": filterCardType[0].color,
                    "LBI": "logo.png",
                    "PI": ""
                };
            }
            else {
                datosCard = {
                    "BR": "",
                    "C": "white",
                    "BI": "",
                    "WMI": "watermarks/bac_neutral-low.svg",
                    "WMC": "white",
                    "LBI": "LogoBAC-neutral-low.svg",
                    "PI": "",
                    "textStatus": textStatus,
                    "textMessage": textMessage,
                    "textColor": "dark",
                    "cardBorder": "card-border-neutral"
                };
            }
            return datosCard;
        };
        this.idElement = options.idElement;
        this.idContainerResize = options.idContainerResize ? options.idContainerResize : this.idContainerResize;
        this.url = options.url ? options.url : this.url;
        this.data = options.data ? options.data : this.data;
        this.bin = options.bin ? options.bin : this.bin;
        this.cardNumber = options.cardNumber ? options.cardNumber : this.cardNumber;
        this.expiration = options.expiration ? options.expiration : this.expiration;
        this.CVV = options.CVV ? options.CVV : this.CVV;
        this.brand = options.brand ? options.brand : this.brand;
        this.typeCard = options.typeCard ? options.typeCard : this.typeCard;
        if ((options === null || options === void 0 ? void 0 : options.showInfo) != undefined || (options === null || options === void 0 ? void 0 : options.showInfo) != null)
            this.showInfo = options === null || options === void 0 ? void 0 : options.showInfo;
        this.footerHTML = options.footerHTML ? options.footerHTML : this.footerHTML;
        this.maskCardNumber = options.maskCardNumber ? options.maskCardNumber : this.maskCardNumber;
        this.maskExpirationAndCVV = options.maskExpirationAndCVV ? options.maskExpirationAndCVV : this.maskExpirationAndCVV;
        if ((options === null || options === void 0 ? void 0 : options.showFooterCard) != undefined || (options === null || options === void 0 ? void 0 : options.showFooterCard) != null)
            this.showFooterCard = options === null || options === void 0 ? void 0 : options.showFooterCard;
        this.path = options.path ? options.path : this.path;
        this.language = options.language ? options.language : this.language;
        this.textMessageEn = options.textMessageEn ? options.textMessageEn : this.textMessageEn;
        this.textMessageEs = options.textMessageEs ? options.textMessageEs : this.textMessageEs;
        this.textStatusEn = options.textStatusEn ? options.textStatusEn : this.textStatusEn;
        this.textStatusEs = options.textStatusEs ? options.textStatusEs : this.textStatusEs;
        this.init();
    }
    _isAnImageName(imageName) {
        const regex = new RegExp('/*.png$|/*.jpg$|/*.gif$|/*.jpeg$|/*.svg$');
        console.log('Evaluando si es una imagen: ', imageName);
        return regex.test(imageName);
    }
}
//  Fin del Plugin
