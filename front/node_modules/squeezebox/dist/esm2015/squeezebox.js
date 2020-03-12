import { Component, Renderer, ViewChild, ContentChild, Input, Output, EventEmitter, Inject, forwardRef, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SBItemBody {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ el = this.bodyEl.nativeElement;
        el.addEventListener('transitionend', (e) => {
            // check transition ended, so can use regular height if not expanded
            if (el.offsetHeight !== 0) {
                this.setHeight('auto');
            }
        }, false);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        let /** @type {?} */ height = '0';
        const /** @type {?} */ el = this.bodyEl.nativeElement;
        this.setHeight('auto');
        height = el.offsetHeight + 'px';
        if (!collapsed) {
            this.setHeight('0');
        }
        else {
            this.setHeight(height);
            height = '0';
        }
        setTimeout(() => this.setHeight(height), 50);
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        const /** @type {?} */ el = this.bodyEl.nativeElement;
        this.renderer.setElementStyle(el, 'height', height);
    }
}
SBItemBody.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'sb-item-body',
                template: `
        <div #body class="sb-item-body" style="height: 0;">
            <div class="inner"><ng-content></ng-content></div>
        </div>
    `
            },] },
];
/** @nocollapse */
SBItemBody.ctorParameters = () => [
    { type: Renderer, },
];
SBItemBody.propDecorators = {
    "bodyEl": [{ type: ViewChild, args: ['body',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SBItem {
    /**
     * @param {?} squeezebox
     */
    constructor(squeezebox) {
        this.collapsed = true;
        this.onToggled = new EventEmitter();
        this.squeezebox = squeezebox;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.refreshBody();
    }
    /**
     * Refreshes body calculation
     * @return {?}
     */
    refreshBody() {
        this.body.toggle(this.collapsed);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
        this.onToggled.emit(collapsed);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    applyToggle(collapsed) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    }
}
SBItem.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItem',
                selector: 'sb-item',
                template: `
        <div class="sb-item" [ngClass]="{'is-collapsed': collapsed}">
            <ng-content></ng-content>
        </div>
    `
            },] },
];
/** @nocollapse */
SBItem.ctorParameters = () => [
    { type: SqueezeBox, decorators: [{ type: Inject, args: [forwardRef(() => SqueezeBox),] },] },
];
SBItem.propDecorators = {
    "collapsed": [{ type: Input },],
    "onToggled": [{ type: Output },],
    "body": [{ type: ContentChild, args: [SBItemBody,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SqueezeBox {
    constructor() {
        this.multiple = true;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    didItemToggled(item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item && !i.collapsed) {
                    i.applyToggle(true);
                }
            });
        }
    }
    /**
     * Refreshes and recalculates expanded items
     * @return {?}
     */
    refresh() {
        this.items.toArray().forEach(function (i) {
            i.refreshBody();
        });
    }
}
SqueezeBox.decorators = [
    { type: Component, args: [{
                exportAs: 'squeezebox',
                selector: 'squeezebox',
                template: `
        <div class="squeezebox">
            <ng-content></ng-content>
        </div>
    `
            },] },
];
/** @nocollapse */
SqueezeBox.ctorParameters = () => [];
SqueezeBox.propDecorators = {
    "multiple": [{ type: Input },],
    "items": [{ type: ContentChildren, args: [forwardRef(() => SBItem),] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SBItemHead {
    /**
     * @param {?} sbItem
     */
    constructor(sbItem) {
        this.sbItem = sbItem;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleClick(event) {
        event.preventDefault();
        this.sbItem.collapsed = !this.sbItem.collapsed;
        this.sbItem.toggle(this.sbItem.collapsed);
    }
}
SBItemHead.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'sb-item-head',
                template: `
        <div class="sb-item-head">
            <a role="button" (click)="toggleClick($event)"><ng-content></ng-content><span class="toggle-icon"></span></a>
        </div>
    `
            },] },
];
/** @nocollapse */
SBItemHead.ctorParameters = () => [
    { type: SBItem, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SQUEEZEBOX_COMPONENTS = [SqueezeBox, SBItem, SBItemHead, SBItemBody];
class SqueezeBoxModule {
}
SqueezeBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SQUEEZEBOX_COMPONENTS],
                exports: [SQUEEZEBOX_COMPONENTS]
            },] },
];
/** @nocollapse */
SqueezeBoxModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { SQUEEZEBOX_COMPONENTS, SqueezeBoxModule, SBItem, SBItemHead, SBItemBody, SqueezeBox };
//# sourceMappingURL=squeezebox.js.map
