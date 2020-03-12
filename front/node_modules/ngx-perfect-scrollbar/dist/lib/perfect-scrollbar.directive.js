/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import PerfectScrollbar from "perfect-scrollbar";
import ResizeObserver from "resize-observer-polyfill";
import { isPlatformBrowser } from "@angular/common";
import { Directive, Input, Output, EventEmitter, HostListener, NgZone, ElementRef, Optional, Inject, KeyValueDiffers, PLATFORM_ID } from "@angular/core";
import { Geometry, Position } from "./perfect-scrollbar.interfaces";
import { PERFECT_SCROLLBAR_CONFIG } from "./perfect-scrollbar.interfaces";
import { PerfectScrollbarConfig } from "./perfect-scrollbar.interfaces";
var PerfectScrollbarDirective = (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.disabled = false;
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
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.emit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this[event.type.replace(/-/g, '_').toUpperCase()].emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psScrollY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psScrollX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psScrollUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psScrollDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psScrollLeft = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psScrollRight = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psReachEndY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psReachStartY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psReachEndX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.psReachStartX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.emit(event); };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled && isPlatformBrowser(this.platformId)) {
            var /** @type {?} */ config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(function () {
                _this.instance = new PerfectScrollbar(_this.elementRef.nativeElement, config_1);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(function () {
                _this.ro = new ResizeObserver(function (entries, observer) {
                    _this.update();
                });
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            });
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.ro) {
            this.ro.disconnect();
        }
        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.destroy();
            });
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.configDiff && isPlatformBrowser(this.platformId)) {
            var /** @type {?} */ changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange()) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ps = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
        this.timeout = window.setTimeout(function () {
            if (!_this.disabled && _this.configDiff) {
                try {
                    _this.zone.runOutsideAngular(function () {
                        if (_this.instance) {
                            _this.instance.update();
                        }
                    });
                }
                catch (/** @type {?} */ error) {
                    // Update can be finished after destroy so catch errors
                }
            }
        }, 0);
    };
    /**
     * @param {?=} prefix
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.geometry = /**
     * @param {?=} prefix
     * @return {?}
     */
    function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * @param {?=} absolute
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.position = /**
     * @param {?=} absolute
     * @return {?}
     */
    function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute) {
            return new Position(this.instance.reach.x, this.instance.reach.y);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    /**
     * @param {?=} direction
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollable = /**
     * @param {?=} direction
     * @return {?}
     */
    function (direction) {
        if (direction === void 0) { direction = 'any'; }
        var /** @type {?} */ element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollTo = /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToX = /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToY = /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToTop = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToLeft = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToRight = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToBottom = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToElement = /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (qs, offset, speed) {
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            var /** @type {?} */ elementPos = element.getBoundingClientRect();
            var /** @type {?} */ scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollLeft'];
                var /** @type {?} */ position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollTop'];
                var /** @type {?} */ position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.animateScrolling = /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    function (target, value, speed) {
        var _this = this;
        if (!speed) {
            var /** @type {?} */ oldValue = this.elementRef.nativeElement[target];
            this.elementRef.nativeElement[target] = value;
            if (this.instance && value !== oldValue) {
                this.instance.update();
            }
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var /** @type {?} */ newValue_1 = 0;
            var /** @type {?} */ scrollCount_1 = 0;
            var /** @type {?} */ oldTimestamp_1 = performance.now();
            var /** @type {?} */ oldValue_1 = this.elementRef.nativeElement[target];
            var /** @type {?} */ cosParameter_1 = (oldValue_1 - value) / 2;
            var /** @type {?} */ step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        if (_this.instance) {
                            _this.instance.update();
                        }
                        oldTimestamp_1 = newTimestamp;
                        window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[perfectScrollbar]',
                    exportAs: 'ngxPerfectScrollbar'
                },] },
    ];
    /** @nocollapse */
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: NgZone, },
        { type: KeyValueDiffers, },
        { type: ElementRef, },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PERFECT_SCROLLBAR_CONFIG,] },] },
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        "disabled": [{ type: Input },],
        "config": [{ type: Input, args: ['perfectScrollbar',] },],
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
        "psScrollY": [{ type: HostListener, args: ['ps-scroll-y', ['$event'],] },],
        "psScrollX": [{ type: HostListener, args: ['ps-scroll-x', ['$event'],] },],
        "psScrollUp": [{ type: HostListener, args: ['ps-scroll-up', ['$event'],] },],
        "psScrollDown": [{ type: HostListener, args: ['ps-scroll-down', ['$event'],] },],
        "psScrollLeft": [{ type: HostListener, args: ['ps-scroll-left', ['$event'],] },],
        "psScrollRight": [{ type: HostListener, args: ['ps-scroll-right', ['$event'],] },],
        "psReachEndY": [{ type: HostListener, args: ['ps-y-reach-end', ['$event'],] },],
        "psReachStartY": [{ type: HostListener, args: ['ps-y-reach-start', ['$event'],] },],
        "psReachEndX": [{ type: HostListener, args: ['ps-x-reach-end', ['$event'],] },],
        "psReachStartX": [{ type: HostListener, args: ['ps-x-reach-start', ['$event'],] },],
    };
    return PerfectScrollbarDirective;
}());
export { PerfectScrollbarDirective };
function PerfectScrollbarDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PerfectScrollbarDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PerfectScrollbarDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PerfectScrollbarDirective.propDecorators;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.ro;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.instance;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.timeout;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.configDiff;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.disabled;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.config;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_SCROLL_Y;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_SCROLL_X;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_SCROLL_UP;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_SCROLL_DOWN;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_SCROLL_LEFT;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_SCROLL_RIGHT;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_Y_REACH_END;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_Y_REACH_START;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_X_REACH_END;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.PS_X_REACH_START;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.zone;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.differs;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.elementRef;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.platformId;
    /** @type {?} */
    PerfectScrollbarDirective.prototype.defaults;
}
//# sourceMappingURL=perfect-scrollbar.directive.js.map