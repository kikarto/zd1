(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kikar\Downloads\zad-rek\zd1\src\main.ts */"zUnb");


/***/ }),

/***/ "1pyK":
/*!******************************!*\
  !*** ./src/libs/starship.ts ***!
  \******************************/
/*! exports provided: parseStarship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStarship", function() { return parseStarship; });
/* harmony import */ var _enums_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/model */ "kf/4");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "Fm+L");


const parseStarship = (starship) => {
    const { name = '', model = '', manufacturer = '', cost_in_credits = '', length = '', max_atmosphering_speed = '', crew = '', passengers = '', cargo_capacity = '', consumables = '', hyperdrive_rating = '', MGLT = '', starship_class = '', } = starship || {};
    return {
        name,
        desc: `${model}`,
        attack: Object(_card__WEBPACK_IMPORTED_MODULE_1__["parseAttack"])(crew),
        info: new Map([
            ['Name', name],
            ['Model', model],
            ['Manufacturer', manufacturer],
            ['Cost in credits', cost_in_credits.toString()],
            ['Length', length.toString()],
            ['Max atmosphering speed', max_atmosphering_speed.toString()],
            ['Crew', crew.toString()],
            ['Passengers', passengers.toString()],
            ['Cargo capacity', cargo_capacity.toString()],
            ['Consumables', consumables],
            ['Hyperdrive_rating', hyperdrive_rating],
            ['MGLT', MGLT.toString()],
            ['Starship class', starship_class],
        ]),
        model: _enums_model__WEBPACK_IMPORTED_MODULE_0__["Model"].Starship,
        foto: Object(_card__WEBPACK_IMPORTED_MODULE_1__["getFotoSrc"])(_enums_model__WEBPACK_IMPORTED_MODULE_0__["Model"].Starship),
    };
};


/***/ }),

/***/ "6WOf":
/*!****************************!*\
  !*** ./src/libs/person.ts ***!
  \****************************/
/*! exports provided: parsePerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePerson", function() { return parsePerson; });
/* harmony import */ var _enums_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/model */ "kf/4");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "Fm+L");


const parsePerson = (person) => {
    const { name = '', height = '', mass = '', hair_color = '', eye_color = '', birth_year = '', gender = '', } = person || {};
    return {
        name,
        desc: `${hair_color}/${height}/${gender}`,
        attack: Object(_card__WEBPACK_IMPORTED_MODULE_1__["parseAttack"])(mass),
        info: new Map([
            ['Name', name],
            ['Height', height],
            ['Mass', mass],
            ['Hair color', hair_color],
            ['Eye color', eye_color],
            ['Birth year', birth_year],
            ['Gender', gender],
        ]),
        model: _enums_model__WEBPACK_IMPORTED_MODULE_0__["Model"].Person,
        foto: Object(_card__WEBPACK_IMPORTED_MODULE_1__["getFotoSrc"])(_enums_model__WEBPACK_IMPORTED_MODULE_0__["Model"].Person),
    };
};


/***/ }),

/***/ "7N4W":
/*!******************************!*\
  !*** ./src/libs/response.ts ***!
  \******************************/
/*! exports provided: isCorrectResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCorrectResponse", function() { return isCorrectResponse; });
const isCorrectResponse = (resp) => {
    if (!resp) {
        return undefined;
    }
    if (typeof resp !== 'object') {
        return undefined;
    }
    if ('detail' in resp && resp.detail === 'Not found') {
        return undefined;
    }
    return resp;
};


/***/ }),

/***/ "7kv/":
/*!******************************************!*\
  !*** ./src/app/score/score.component.ts ***!
  \******************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ScoreComponent {
    constructor() {
        this.score = {
            round: 0,
            player1: 0,
            player2: 0,
        };
    }
    ngOnInit() {
    }
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(); };
ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["app-score"]], inputs: { score: "score" }, decls: 13, vars: 3, consts: [[1, "score"], [1, "score__round"], [1, "score__round-nr"], [1, "score__board"], [1, "score__player"], [1, "score__sep"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score.round);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score.player1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score.player2);
    } }, styles: [".score[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 1em;\n  width: 80%;\n  background: var(--color-circle);\n  border-radius: 4em;\n  text-align: center;\n  color: #fff;\n}\n.score__round[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n}\n.score__round-nr[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin: 0.25em;\n}\n.score__board[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  margin-top: 1em;\n}\n.score__player--win[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFESjtBQUtJO0VBQ0UsaUJBQUE7QUFITiIsImZpbGUiOiJzY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNpcmNsZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgJl9fcm91bmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuXHJcbiAgICAmLW5yIHtcclxuICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICBtYXJnaW46IC4yNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYm9hcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG5cclxuICAmX19wbGF5ZXIge1xyXG4gICAgJi0td2luIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D9t+":
/*!*****************************!*\
  !*** ./src/libs/connect.ts ***!
  \*****************************/
/*! exports provided: Connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _enums_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/model */ "kf/4");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "YTri");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response */ "7N4W");




/**
 * I checked the max id for characters and spaceships.
 * During manual tests, I noticed that not all models exist in the 1 - max range.
 * So every time it doesn't find a model, it tries again, making the query up to max times.
 */
const MAX_ATTEMPT = 5;
const API_URL = 'http://swapi.dev/api/';
class Connect {
    constructor() {
        this.loading = false;
        this.attempt = 0;
    }
    load(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.attempt > MAX_ATTEMPT) {
                this.attempt = 0;
                throw new Error('The allowed number of attempts has been exceeded.');
            }
            const id = Object(_model__WEBPACK_IMPORTED_MODULE_2__["getRandomIdForModel"])(model);
            this.attempt++;
            try {
                const response = yield fetch(`${API_URL}${model}/${id}/`);
                const data = yield response.json();
                return data;
            }
            catch (e) {
                console.warn(e);
                return undefined;
            }
        });
    }
    loadPerson() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let person = yield this.load(_enums_model__WEBPACK_IMPORTED_MODULE_1__["Model"].Person);
            person = Object(_response__WEBPACK_IMPORTED_MODULE_3__["isCorrectResponse"])(person);
            if (person) {
                this.attempt = 0;
                return person;
            }
            return this.loadPerson();
        });
    }
    loadStarship() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let starship = yield this.load(_enums_model__WEBPACK_IMPORTED_MODULE_1__["Model"].Starship);
            starship = Object(_response__WEBPACK_IMPORTED_MODULE_3__["isCorrectResponse"])(starship);
            if (starship) {
                this.attempt = 0;
                return starship;
            }
            return this.loadStarship();
        });
    }
    get itIsLoading() {
        return this.loading;
    }
}


/***/ }),

/***/ "Fm+L":
/*!**************************!*\
  !*** ./src/libs/card.ts ***!
  \**************************/
/*! exports provided: checkWhoWin, parseAttack, getFotoSrc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWhoWin", function() { return checkWhoWin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAttack", function() { return parseAttack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFotoSrc", function() { return getFotoSrc; });
/* harmony import */ var _enums_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/model */ "kf/4");

const checkWhoWin = (firstCard, secondCard) => {
    let firstAttack = (firstCard === null || firstCard === void 0 ? void 0 : firstCard.attack) || 0;
    let secondAttack = (secondCard === null || secondCard === void 0 ? void 0 : secondCard.attack) || 0;
    if (typeof firstAttack !== 'number') {
        firstAttack = 0;
    }
    if (typeof secondAttack !== 'number') {
        secondAttack = 0;
    }
    return firstAttack > secondAttack ? 1 : firstAttack < secondAttack ? 2 : 0;
};
const parseAttack = (value) => {
    if (value === 'unknown') {
        return 'unknown';
    }
    // ? some starships have a defined range number in crew
    const getRange = value.split(/-/gi);
    if (getRange.length > 1) {
        value = getRange[getRange.length - 1];
    }
    // ? some starships have a defined crew quantity in thousands with a comma
    value = value.replace(new RegExp(/,/gi), '');
    return parseInt(value, 10);
};
const getFotoSrc = (model) => {
    return `/assets/${model === _enums_model__WEBPACK_IMPORTED_MODULE_0__["Model"].Person ? 'person' : 'starship'}-${Math.round(Math.random() * 3) + 1}.webp`;
};


/***/ }),

/***/ "GONR":
/*!***************************!*\
  !*** ./src/libs/board.ts ***!
  \***************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _enums_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/model */ "kf/4");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "Fm+L");
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect */ "D9t+");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person */ "6WOf");
/* harmony import */ var _starship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starship */ "1pyK");






class Board {
    constructor() {
        this.score = {
            round: 1,
            player1: 0,
            player2: 0,
        };
        this.model = _enums_model__WEBPACK_IMPORTED_MODULE_1__["Model"].Person;
        this.connect = new _connect__WEBPACK_IMPORTED_MODULE_3__["Connect"]();
    }
    play() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cards;
            switch (this.model) {
                case _enums_model__WEBPACK_IMPORTED_MODULE_1__["Model"].Person:
                    const firstPerson = yield this.connect.loadPerson();
                    const secondPerson = yield this.connect.loadPerson();
                    if (firstPerson && secondPerson) {
                        cards = [
                            Object(_person__WEBPACK_IMPORTED_MODULE_4__["parsePerson"])(firstPerson),
                            Object(_person__WEBPACK_IMPORTED_MODULE_4__["parsePerson"])(secondPerson),
                        ];
                    }
                    break;
                case _enums_model__WEBPACK_IMPORTED_MODULE_1__["Model"].Starship:
                    const firstStarship = yield this.connect.loadStarship();
                    const secondStarship = yield this.connect.loadStarship();
                    if (firstStarship && secondStarship) {
                        cards = [
                            Object(_starship__WEBPACK_IMPORTED_MODULE_5__["parseStarship"])(firstStarship),
                            Object(_starship__WEBPACK_IMPORTED_MODULE_5__["parseStarship"])(secondStarship),
                        ];
                    }
                    break;
                default:
                    cards = undefined;
            }
            if (!cards) {
                throw new Error('Models have not been loaded.');
            }
            // ? checking which card win
            const check = Object(_card__WEBPACK_IMPORTED_MODULE_2__["checkWhoWin"])(cards[0], cards[1]);
            if (check === 1) {
                this.score.player1++;
                cards[0].isWin = true;
            }
            else if (check === 2) {
                this.score.player2++;
                cards[1].isWin = true;
            }
            this.score.round++;
            return cards;
        });
    }
    refresh() {
        this.score = {
            round: 1,
            player1: 0,
            player2: 0,
        };
    }
    get getScore() {
        return this.score;
    }
    get getModel() {
        return this.model;
    }
    set setModel(model) {
        this.model = model;
    }
}


/***/ }),

/***/ "LcVa":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_enums_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/enums/model */ "kf/4");
/* harmony import */ var src_libs_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/libs/board */ "GONR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../score/score.component */ "7kv/");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function BoardComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BoardComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class BoardComponent {
    constructor() {
        this.cards = [null, null];
        this.loading = false;
        this.board = new src_libs_board__WEBPACK_IMPORTED_MODULE_2__["Board"]();
        this.score = this.board.getScore;
        this.model = this.board.getModel;
    }
    reset() {
        if (confirm('Are you sure you want to clear the results?')) {
            this.board.refresh();
            this.score = this.board.getScore;
        }
    }
    play() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                this.cards = yield this.board.play();
                this.score = this.board.getScore;
            }
            catch (e) {
                alert(e);
            }
            this.loading = false;
        });
    }
    changeModel(isPerson) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const model = isPerson ? src_enums_model__WEBPACK_IMPORTED_MODULE_1__["Model"].Person : src_enums_model__WEBPACK_IMPORTED_MODULE_1__["Model"].Starship;
            this.model = model;
            this.board.setModel = model;
        });
    }
    ngOnInit() {
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 19, vars: 9, consts: [[1, "board"], [1, "board__score", 3, "score"], [1, "board__cards"], [1, "board__player-1", 3, "data", "loading"], [1, "board__player-2", 3, "data", "loading"], [1, "board__play"], ["mat-fab", "", "color", "primary", "aria-label", "Play button", "disabled", "", 4, "ngIf"], ["mat-fab", "", "color", "primary", "aria-label", "Play button", 3, "click", 4, "ngIf"], [1, "board__bar"], ["mat-mini-fab", "", "aria-label", "Model person button", 3, "color", "click"], ["mat-mini-fab", "", "aria-label", "Model starship button", 3, "color", "click"], ["mat-button", "", "color", "warn", "aria-label", "Reset button", 3, "click"], ["mat-fab", "", "color", "primary", "aria-label", "Play button", "disabled", ""], ["src", "/assets/loading.svg", 1, "loading"], ["mat-fab", "", "color", "primary", "aria-label", "Play button", 3, "click"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-score", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BoardComponent_button_6_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BoardComponent_button_7_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Choice model to compare: Person or Starship. You can reset score and start over.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_11_listener() { return ctx.changeModel(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_14_listener() { return ctx.changeModel(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_17_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("score", ctx.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.cards[0])("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.cards[1])("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.model === "people" ? "primary" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.model === "starships" ? "primary" : "basic");
    } }, directives: [_score_score_component__WEBPACK_IMPORTED_MODULE_4__["ScoreComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".board[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 600px;\n  min-width: 700px;\n}\n.board__cards[_ngcontent-%COMP%] {\n  margin: 1em;\n  display: flex;\n  justify-items: center;\n  gap: 5em;\n  min-height: 460px;\n}\n.board__play[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO0FBQUoiLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBtaW4td2lkdGg6IDcwMHB4O1xyXG5cclxuICAmX19jYXJkcyB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ2MHB4O1xyXG59XHJcblxyXG4gICZfX3BsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgyKTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board.component */ "LcVa");



class AppComponent {
    constructor() {
        this.title = 'zd1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 0, consts: [["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], ["href", "https://markus.click", "target", "_blank", "rel", "noopener"], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rocket Ship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SWAPI Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rocket Ship Smoke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Programmed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " https://markus.click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Gray Clouds Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin: 1em;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });


/***/ }),

/***/ "YTri":
/*!***************************!*\
  !*** ./src/libs/model.ts ***!
  \***************************/
/*! exports provided: MAX_ID_FOR_PERSON, MAX_ID_FOR_STARSHIP, getRandomIdForModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_FOR_PERSON", function() { return MAX_ID_FOR_PERSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_FOR_STARSHIP", function() { return MAX_ID_FOR_STARSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIdForModel", function() { return getRandomIdForModel; });
/* harmony import */ var _enums_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/model */ "kf/4");

const MAX_ID_FOR_PERSON = 83;
const MAX_ID_FOR_STARSHIP = 43;
const getRandomIdForModel = (model = _enums_model__WEBPACK_IMPORTED_MODULE_0__["Model"].Person) => {
    const max = model === _enums_model__WEBPACK_IMPORTED_MODULE_0__["Model"].Person ? MAX_ID_FOR_PERSON : MAX_ID_FOR_STARSHIP;
    const lp = Math.round(Math.random() * (max - 1)) + 1;
    return lp;
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "LcVa");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score/score.component */ "7kv/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
        _score_score_component__WEBPACK_IMPORTED_MODULE_6__["ScoreComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"]] }); })();


/***/ }),

/***/ "kf/4":
/*!****************************!*\
  !*** ./src/enums/model.ts ***!
  \****************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
var Model;
(function (Model) {
    Model["Person"] = "people";
    Model["Starship"] = "starships";
})(Model || (Model = {}));


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



function CardComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Win");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r3.value);
} }
function CardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-subtitle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CardComponent_div_0_div_12_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CardComponent_div_0_div_14_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.attack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.isWin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, ctx_r0.data.info));
} }
class CardComponent {
    constructor() {
        this.data = null;
        this.loading = false;
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { data: "data", loading: "loading" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card__inner"], [1, "card__front"], [1, "card__container"], [1, "card__circle"], ["mat-card-image", "", 1, "card__img", 3, "src"], [1, "card__attack"], [1, "card__name"], [1, "card__desc"], ["class", "card__win", 4, "ngIf"], [1, "card__back"], ["class", "card__item", 4, "ngFor", "ngForOf"], [1, "card__win"], [1, "card__item"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_div_0_Template, 16, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 460px;\n  perspective: 1000px;\n}\n.card__inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n.card[_ngcontent-%COMP%]:hover   .card__inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.card__front[_ngcontent-%COMP%], .card__back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 2em;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.card__back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  overflow: hidden;\n}\n.card__container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.card__circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  background-color: var(--color-circle);\n}\n@media only screen and (max-height: 800px) {\n  .card__circle[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n}\n.card__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: auto;\n  max-height: 80%;\n  width: auto;\n  max-width: 80%;\n  transform: translate(-50%, -50%);\n}\n.card__attack[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 5em;\n  padding: 0.5em;\n  border-top-right-radius: 2em;\n  border-bottom-right-radius: 2em;\n  background-color: var(--color-circle);\n  color: #fff;\n  text-align: center;\n}\n.card__name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.5em;\n  left: 1em;\n  background: rgba(255, 255, 255, 0.8);\n}\n.card__desc[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5em;\n  left: 2em;\n  background: rgba(255, 255, 255, 0.8);\n}\n.card__win[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  right: -1em;\n  padding: 1em 4em;\n  transform: rotate(15deg);\n  background-color: var(--color-circle);\n  border-radius: 3em;\n  color: #fff;\n}\n.card__item[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n}\n.card__item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  opacity: 0.6;\n}\n.card__item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.card__item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBQ0o7QUFFRTtFQUNFLDBCQUFBO0FBQUo7QUFHRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFGSjtBQUtFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBTEo7QUFPSTtFQVZGO0lBV0ksWUFBQTtJQUNBLGFBQUE7RUFKSjtBQUNGO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBTEo7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7QUFQSjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FBUko7QUFXRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFUSjtBQVlFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUk7RUFDRSxZQUFBO0FBVk47QUFhSTtFQUNFLGlCQUFBO0FBWE47QUFjSTtFQUNFLDZCQUFBO0FBWk4iLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA0NjBweDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cclxuICAmX19pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgJl9faW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG5cclxuICAmX19mcm9udCxcclxuICAmX19iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmX19iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2lyY2xlKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAmX19hdHRhY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2lyY2xlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEuNWVtO1xyXG4gICAgbGVmdDogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gIH1cclxuXHJcbiAgJl9fZGVzYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAuNWVtO1xyXG4gICAgbGVmdDogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gIH1cclxuXHJcbiAgJl9fd2luIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMC41ZW07XHJcbiAgICByaWdodDogLTFlbTtcclxuICAgIHBhZGRpbmc6IDFlbSA0ZW07XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaXJjbGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuXHJcbiAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map