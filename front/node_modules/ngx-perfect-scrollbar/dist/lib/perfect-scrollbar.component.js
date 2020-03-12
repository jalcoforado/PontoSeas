/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Subject } from "rxjs/Subject";
import { distinctUntilChanged } from "rxjs/operators";
import { Component, ViewEncapsulation, Input, Output, ViewChild, EventEmitter, HostBinding, ElementRef, ChangeDetectorRef } from "@angular/core";
import { PerfectScrollbarDirective } from "./perfect-scrollbar.directive";
var PerfectScrollbarComponent = (function () {
    function PerfectScrollbarComponent(cdRef, elementRef) {
        this.cdRef = cdRef;
        this.elementRef = elementRef;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.stateTimeout = null;
        this.stateSub = null;
        this.scrollPositionX = null;
        this.scrollPositionY = null;
        this.scrollDirectionX = null;
        this.scrollDirectionY = null;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateUpdate = new Subject();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.PS_SCROLL_Y = new EventEmitter();
        this.PS_SCROLL_X = new EventEmitter();
        this.PS_SCROLL_UP = new EventEmitter();
        this.PS_SCROLL_DOWN = new EventEmitter();
        this.PS_SCROLL_LEFT = new EventEmitter();
        this.PS_SCROLL_RIGHT = new EventEmitter();
        this.PS_Y_REACH_END = new EventEmitter();
        this.PS_Y_REACH_START = new EventEmitter();
        this.PS_X_REACH_END = new EventEmitter();
        this.PS_X_REACH_START = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.stateSub = this.stateUpdate
            .pipe(distinctUntilChanged(function (a, b) { return (a === b && !_this.stateTimeout); }))
            .subscribe(function (state) {
            if (_this.stateTimeout) {
                window.clearTimeout(_this.stateTimeout);
                _this.stateTimeout = null;
            }
            if (state === 'x' || state === 'y') {
                _this.interaction = false;
                if (state === 'x') {
                    _this.indicatorX = false;
                    _this.states.left = false;
                    _this.states.right = false;
                    if (_this.autoPropagation && _this.usePropagationX) {
                        _this.allowPropagationX = false;
                    }
                }
                else if (state === 'y') {
                    _this.indicatorY = false;
                    _this.states.top = false;
                    _this.states.bottom = false;
                    if (_this.autoPropagation && _this.usePropagationY) {
                        _this.allowPropagationY = false;
                    }
                }
            }
            else {
                if (state === 'left' || state === 'right') {
                    _this.states.left = false;
                    _this.states.right = false;
                    _this.states[state] = true;
                    if (_this.autoPropagation && _this.usePropagationX) {
                        _this.indicatorX = true;
                    }
                }
                else if (state === 'top' || state === 'bottom') {
                    _this.states.top = false;
                    _this.states.bottom = false;
                    _this.states[state] = true;
                    if (_this.autoPropagation && _this.usePropagationY) {
                        _this.indicatorY = true;
                    }
                }
                if (_this.autoPropagation) {
                    _this.stateTimeout = window.setTimeout(function () {
                        _this.indicatorX = false;
                        _this.indicatorY = false;
                        _this.stateTimeout = null;
                        if (_this.interaction && (_this.states.left || _this.states.right)) {
                            _this.allowPropagationX = true;
                        }
                        if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                            _this.allowPropagationY = true;
                        }
                        _this.cdRef.markForCheck();
                    }, 500);
                }
            }
            _this.cdRef.markForCheck();
            _this.cdRef.detectChanges();
        });
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.stateSub) {
            this.stateSub.unsubscribe();
        }
        if (this.stateTimeout) {
            window.clearTimeout(this.stateTimeout);
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.autoPropagation && this.directiveRef) {
            var /** @type {?} */ element = this.directiveRef.elementRef.nativeElement;
            this.usePropagationX = element.classList.contains('ps--active-x');
            this.usePropagationY = element.classList.contains('ps--active-y');
        }
    };
    /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.checkPropagation = /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (event, deltaX, deltaY) {
        this.interaction = true;
        var /** @type {?} */ scrollDirectionX = (deltaX < 0) ? -1 : 1;
        var /** @type {?} */ scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.onWheelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled && this.autoPropagation) {
            var /** @type {?} */ scrollDeltaX = event.deltaX;
            var /** @type {?} */ scrollDeltaY = event.deltaY;
            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.onTouchEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled && this.autoPropagation) {
            var /** @type {?} */ scrollPositionX = event.touches[0].clientX;
            var /** @type {?} */ scrollPositionY = event.touches[0].clientY;
            var /** @type {?} */ scrollDeltaX = scrollPositionX - this.scrollPositionX;
            var /** @type {?} */ scrollDeltaY = scrollPositionY - this.scrollPositionY;
            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
            this.scrollPositionX = scrollPositionX;
            this.scrollPositionY = scrollPositionY;
        }
    };
    /**
     * @param {?} event
     * @param {?} state
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.onScrollEvent = /**
     * @param {?} event
     * @param {?} state
     * @return {?}
     */
    function (event, state) {
        if (!this.disabled && (this.autoPropagation || this.scrollIndicators)) {
            this.stateUpdate.next(state);
        }
    };
    PerfectScrollbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'perfect-scrollbar',
                    exportAs: 'ngxPerfectScrollbar',
                    template: '<div style="position: static;" [class.ps]="usePSClass" [perfectScrollbar]="config" [disabled]="disabled" (wheel)="onWheelEvent($event)" (touchmove)="onTouchEvent($event)" (ps-scroll-x)="onScrollEvent($event, \'x\')" (ps-scroll-y)="onScrollEvent($event, \'y\')" (ps-x-reach-end)="onScrollEvent($event, \'right\')" (ps-y-reach-end)="onScrollEvent($event, \'bottom\')" (ps-x-reach-start)="onScrollEvent($event, \'left\')" (ps-y-reach-start)="onScrollEvent($event, \'top\')" (psScrollY)="PS_SCROLL_Y.emit($event)" (psScrollX)="PS_SCROLL_X.emit($event)" (psScrollUp)="PS_SCROLL_UP.emit($event)" (psScrollDown)="PS_SCROLL_DOWN.emit($event)" (psScrollLeft)="PS_SCROLL_LEFT.emit($event)" (psScrollRight)="PS_SCROLL_RIGHT.emit($event)" (psYReachEnd)="PS_Y_REACH_END.emit($event)" (psYReachStart)="PS_Y_REACH_START.emit($event)" (psXReachEnd)="PS_X_REACH_END.emit($event)" (psXReachStart)="PS_X_REACH_START.emit($event)"><div class="ps-content"><ng-content></ng-content></div><div *ngIf="scrollIndicators" class="ps-overlay" [class.ps-at-top]="states.top" [class.ps-at-left]="states.left" [class.ps-at-right]="states.right" [class.ps-at-bottom]="states.bottom"><div class="ps-indicator-top" [class.ps-indicator-show]="indicatorY && interaction"></div><div class="ps-indicator-left" [class.ps-indicator-show]="indicatorX && interaction"></div><div class="ps-indicator-right" [class.ps-indicator-show]="indicatorX && interaction"></div><div class="ps-indicator-bottom" [class.ps-indicator-show]="indicatorY && interaction"></div></div></div>',
                    styles: ['.ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps__rail-x:focus,.ps__rail-x:hover,.ps__rail-y:focus,.ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:flex;flex-direction:column;-webkit-box-orient:column;-webkit-box-direction:column;height:auto;min-width:0;min-height:0}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;-ms-flex:1 1 auto;-webkit-box-flex:1;width:auto;height:auto;min-width:0;min-height:0}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:flex;flex:1 1 auto;-ms-flex:1 1 auto;-webkit-box-flex:1;align-item:inherit;place-content:inherit;-webkit-box-pack:inherit;-webkit-box-align:inherit;flex-direction:inherit;-webkit-box-orient:inherit;-webkit-box-direction:inherit;width:100%;height:100%}perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-orient:row!important;-webkit-box-direction:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-orient:column!important;-webkit-box-direction:column!important}perfect-scrollbar>.ps{position:static;display:block;width:inherit;height:inherit;max-width:inherit;max-height:inherit}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show{opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show{opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show{opacity:1}'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
        { type: ElementRef, },
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        "disabled": [{ type: Input },],
        "usePSClass": [{ type: Input },],
        "autoPropagation": [{ type: HostBinding, args: ['class.ps-show-limits',] }, { type: Input },],
        "scrollIndicators": [{ type: HostBinding, args: ['class.ps-show-active',] }, { type: Input },],
        "config": [{ type: Input },],
        "directiveRef": [{ type: ViewChild, args: [PerfectScrollbarDirective,] },],
        "PS_SCROLL_Y": [{ type: Output, args: ['psScrollY',] },],
        "PS_SCROLL_X": [{ type: Output, args: ['psScrollX',] },],
        "PS_SCROLL_UP": [{ type: Output, args: ['psScrollUp',] },],
        "PS_SCROLL_DOWN": [{ type: Output, args: ['psScrollDown',] },],
        "PS_SCROLL_LEFT": [{ type: Output, args: ['psScrollLeft',] },],
        "PS_SCROLL_RIGHT": [{ type: Output, args: ['psScrollRight',] },],
        "PS_Y_REACH_END": [{ type: Output, args: ['psYReachEnd',] },],
        "PS_Y_REACH_START": [{ type: Output, args: ['psYReachStart',] },],
        "PS_X_REACH_END": [{ type: Output, args: ['psXReachEnd',] },],
        "PS_X_REACH_START": [{ type: Output, args: ['psXReachStart',] },],
    };
    return PerfectScrollbarComponent;
}());
export { PerfectScrollbarComponent };
function PerfectScrollbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PerfectScrollbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PerfectScrollbarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PerfectScrollbarComponent.propDecorators;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.states;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.indicatorX;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.indicatorY;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.interaction;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.stateTimeout;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.stateSub;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.scrollPositionX;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.scrollPositionY;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.scrollDirectionX;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.scrollDirectionY;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.usePropagationX;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.usePropagationY;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.allowPropagationX;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.allowPropagationY;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.stateUpdate;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.disabled;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.usePSClass;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.autoPropagation;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.scrollIndicators;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.config;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.directiveRef;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_SCROLL_Y;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_SCROLL_X;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_SCROLL_UP;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_SCROLL_DOWN;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_SCROLL_LEFT;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_SCROLL_RIGHT;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_Y_REACH_END;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_Y_REACH_START;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_X_REACH_END;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.PS_X_REACH_START;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.cdRef;
    /** @type {?} */
    PerfectScrollbarComponent.prototype.elementRef;
}
//# sourceMappingURL=perfect-scrollbar.component.js.map