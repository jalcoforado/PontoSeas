import { Component, Renderer, ViewChild, ContentChild, Input, Output, EventEmitter, Inject, forwardRef, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var SBItemBody = /** @class */ (function () {
    function SBItemBody(renderer) {
        this.renderer = renderer;
    }
    SBItemBody.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.bodyEl.nativeElement;
        el.addEventListener('transitionend', function (e) {
            if (el.offsetHeight !== 0) {
                _this.setHeight('auto');
            }
        }, false);
    };
    SBItemBody.prototype.toggle = function (collapsed) {
        var _this = this;
        var height = '0';
        var el = this.bodyEl.nativeElement;
        this.setHeight('auto');
        height = el.offsetHeight + 'px';
        if (!collapsed) {
            this.setHeight('0');
        }
        else {
            this.setHeight(height);
            height = '0';
        }
        setTimeout(function () { return _this.setHeight(height); }, 50);
    };
    SBItemBody.prototype.setHeight = function (height) {
        var el = this.bodyEl.nativeElement;
        this.renderer.setElementStyle(el, 'height', height);
    };
    return SBItemBody;
}());
SBItemBody.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'sb-item-body',
                template: "\n        <div #body class=\"sb-item-body\" style=\"height: 0;\">\n            <div class=\"inner\"><ng-content></ng-content></div>\n        </div>\n    "
            },] },
];
SBItemBody.ctorParameters = function () { return [
    { type: Renderer, },
]; };
SBItemBody.propDecorators = {
    "bodyEl": [{ type: ViewChild, args: ['body',] },],
};
var SBItem = /** @class */ (function () {
    function SBItem(squeezebox) {
        this.collapsed = true;
        this.onToggled = new EventEmitter();
        this.squeezebox = squeezebox;
    }
    SBItem.prototype.ngAfterViewInit = function () {
        this.refreshBody();
    };
    SBItem.prototype.refreshBody = function () {
        this.body.toggle(this.collapsed);
    };
    SBItem.prototype.toggle = function (collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
        this.onToggled.emit(collapsed);
    };
    SBItem.prototype.applyToggle = function (collapsed) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    };
    return SBItem;
}());
SBItem.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItem',
                selector: 'sb-item',
                template: "\n        <div class=\"sb-item\" [ngClass]=\"{'is-collapsed': collapsed}\">\n            <ng-content></ng-content>\n        </div>\n    "
            },] },
];
SBItem.ctorParameters = function () { return [
    { type: SqueezeBox, decorators: [{ type: Inject, args: [forwardRef(function () { return SqueezeBox; }),] },] },
]; };
SBItem.propDecorators = {
    "collapsed": [{ type: Input },],
    "onToggled": [{ type: Output },],
    "body": [{ type: ContentChild, args: [SBItemBody,] },],
};
var SqueezeBox = /** @class */ (function () {
    function SqueezeBox() {
        this.multiple = true;
    }
    SqueezeBox.prototype.didItemToggled = function (item) {
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item && !i.collapsed) {
                    i.applyToggle(true);
                }
            });
        }
    };
    SqueezeBox.prototype.refresh = function () {
        this.items.toArray().forEach(function (i) {
            i.refreshBody();
        });
    };
    return SqueezeBox;
}());
SqueezeBox.decorators = [
    { type: Component, args: [{
                exportAs: 'squeezebox',
                selector: 'squeezebox',
                template: "\n        <div class=\"squeezebox\">\n            <ng-content></ng-content>\n        </div>\n    "
            },] },
];
SqueezeBox.ctorParameters = function () { return []; };
SqueezeBox.propDecorators = {
    "multiple": [{ type: Input },],
    "items": [{ type: ContentChildren, args: [forwardRef(function () { return SBItem; }),] },],
};
var SBItemHead = /** @class */ (function () {
    function SBItemHead(sbItem) {
        this.sbItem = sbItem;
    }
    SBItemHead.prototype.toggleClick = function (event) {
        event.preventDefault();
        this.sbItem.collapsed = !this.sbItem.collapsed;
        this.sbItem.toggle(this.sbItem.collapsed);
    };
    return SBItemHead;
}());
SBItemHead.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'sb-item-head',
                template: "\n        <div class=\"sb-item-head\">\n            <a role=\"button\" (click)=\"toggleClick($event)\"><ng-content></ng-content><span class=\"toggle-icon\"></span></a>\n        </div>\n    "
            },] },
];
SBItemHead.ctorParameters = function () { return [
    { type: SBItem, },
]; };
var SQUEEZEBOX_COMPONENTS = [SqueezeBox, SBItem, SBItemHead, SBItemBody];
var SqueezeBoxModule = /** @class */ (function () {
    function SqueezeBoxModule() {
    }
    return SqueezeBoxModule;
}());
SqueezeBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SQUEEZEBOX_COMPONENTS],
                exports: [SQUEEZEBOX_COMPONENTS]
            },] },
];
SqueezeBoxModule.ctorParameters = function () { return []; };

export { SQUEEZEBOX_COMPONENTS, SqueezeBoxModule, SBItem, SBItemHead, SBItemBody, SqueezeBox };
//# sourceMappingURL=squeezebox.js.map
