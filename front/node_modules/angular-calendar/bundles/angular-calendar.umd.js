(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('calendar-utils'), require('@angular/core'), require('@angular/common'), require('positioning'), require('date-fns/sub_days/index'), require('date-fns/sub_weeks/index'), require('date-fns/sub_months/index'), require('date-fns/add_days/index'), require('date-fns/add_weeks/index'), require('date-fns/add_months/index'), require('date-fns/start_of_today/index'), require('date-fns/get_iso_week/index'), require('angular-draggable-droppable'), require('rxjs/Subject'), require('date-fns/is_same_day/index'), require('date-fns/set_date/index'), require('date-fns/set_month/index'), require('date-fns/set_year/index'), require('date-fns/get_date/index'), require('date-fns/get_month/index'), require('date-fns/get_year/index'), require('date-fns/difference_in_seconds/index'), require('date-fns/add_seconds/index'), require('@angular/animations'), require('angular-resizable-element'), require('date-fns/add_minutes/index')) :
	typeof define === 'function' && define.amd ? define('angular-calendar', ['exports', 'calendar-utils', '@angular/core', '@angular/common', 'positioning', 'date-fns/sub_days/index', 'date-fns/sub_weeks/index', 'date-fns/sub_months/index', 'date-fns/add_days/index', 'date-fns/add_weeks/index', 'date-fns/add_months/index', 'date-fns/start_of_today/index', 'date-fns/get_iso_week/index', 'angular-draggable-droppable', 'rxjs/Subject', 'date-fns/is_same_day/index', 'date-fns/set_date/index', 'date-fns/set_month/index', 'date-fns/set_year/index', 'date-fns/get_date/index', 'date-fns/get_month/index', 'date-fns/get_year/index', 'date-fns/difference_in_seconds/index', 'date-fns/add_seconds/index', '@angular/animations', 'angular-resizable-element', 'date-fns/add_minutes/index'], factory) :
	(factory((global['angular-calendar'] = {}),global.calendarUtils,global.ng.core,global.ng.common,global.positioning,global.dateFns.subDays,global.dateFns.subWeeks,global.dateFns.subMonths,global.dateFns.addDays,global.dateFns.addWeeks,global.dateFns.addMonths,global.dateFns.startOfToday,global.dateFns.getIsoWeek,global['angular-draggable-droppable'],global.Rx,global.dateFns.isSameDay,global.dateFns.setDate,global.dateFns.setMonth,global.dateFns.setYear,global.dateFns.getDate,global.dateFns.getMonth,global.dateFns.getYear,global.dateFns.differenceInSeconds,global.dateFns.addSeconds,global.ng.animations,global['angular-resizable-element'],global.dateFns.addMinutes));
}(this, (function (exports,calendarUtils,core,common,positioning,subDays,subWeeks,subMonths,addDays,addWeeks,addMonths,startOfToday,getISOWeek,angularDraggableDroppable,Subject,isSameDay,setDate,setMonth,setYear,getDate,getMonth,getYear,differenceInSeconds,addSeconds,animations,angularResizableElement,addMinutes) { 'use strict';

subDays = subDays && subDays.hasOwnProperty('default') ? subDays['default'] : subDays;
subWeeks = subWeeks && subWeeks.hasOwnProperty('default') ? subWeeks['default'] : subWeeks;
subMonths = subMonths && subMonths.hasOwnProperty('default') ? subMonths['default'] : subMonths;
addDays = addDays && addDays.hasOwnProperty('default') ? addDays['default'] : addDays;
addWeeks = addWeeks && addWeeks.hasOwnProperty('default') ? addWeeks['default'] : addWeeks;
addMonths = addMonths && addMonths.hasOwnProperty('default') ? addMonths['default'] : addMonths;
startOfToday = startOfToday && startOfToday.hasOwnProperty('default') ? startOfToday['default'] : startOfToday;
getISOWeek = getISOWeek && getISOWeek.hasOwnProperty('default') ? getISOWeek['default'] : getISOWeek;
isSameDay = isSameDay && isSameDay.hasOwnProperty('default') ? isSameDay['default'] : isSameDay;
setDate = setDate && setDate.hasOwnProperty('default') ? setDate['default'] : setDate;
setMonth = setMonth && setMonth.hasOwnProperty('default') ? setMonth['default'] : setMonth;
setYear = setYear && setYear.hasOwnProperty('default') ? setYear['default'] : setYear;
getDate = getDate && getDate.hasOwnProperty('default') ? getDate['default'] : getDate;
getMonth = getMonth && getMonth.hasOwnProperty('default') ? getMonth['default'] : getMonth;
getYear = getYear && getYear.hasOwnProperty('default') ? getYear['default'] : getYear;
differenceInSeconds = differenceInSeconds && differenceInSeconds.hasOwnProperty('default') ? differenceInSeconds['default'] : differenceInSeconds;
addSeconds = addSeconds && addSeconds.hasOwnProperty('default') ? addSeconds['default'] : addSeconds;
addMinutes = addMinutes && addMinutes.hasOwnProperty('default') ? addMinutes['default'] : addMinutes;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}









function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var validateEvents$1 = function (events) {
    var warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, __spread(['angular-calendar'], args));
    };
    return calendarUtils.validateEvents(events, warn);
};
function isInside(outer, inner) {
    return (outer.left <= inner.left &&
        inner.left <= outer.right &&
        outer.left <= inner.right &&
        inner.right <= outer.right &&
        outer.top <= inner.top &&
        inner.top <= outer.bottom &&
        outer.top <= inner.bottom &&
        inner.bottom <= outer.bottom);
}
var trackByEventId = function (index, event) { return event.id ? event.id : event; };
var trackByWeekDayHeaderDate = function (index, day) { return day.date.toISOString(); };
var trackByIndex = function (index) { return index; };
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByIndex = trackByIndex;
    }
    return CalendarEventActionsComponent;
}());
CalendarEventActionsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-event-actions',
                template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions; trackBy:trackByIndex\"\n        (mwlClick)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
            },] },
];
CalendarEventActionsComponent.propDecorators = {
    "event": [{ type: core.Input },],
};
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    return CalendarEventTitleComponent;
}());
CalendarEventTitleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-event-title',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <a\n        class=\"cal-event-title\"\n        href=\"javascript:;\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </a>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
            },] },
];
CalendarEventTitleComponent.propDecorators = {
    "event": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
    "view": [{ type: core.Input },],
};
var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    return CalendarTooltipWindowComponent;
}());
CalendarTooltipWindowComponent.decorators = [
    { type: core.Component, args: [{
                template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
            },] },
];
CalendarTooltipWindowComponent.propDecorators = {
    "contents": [{ type: core.Input },],
    "placement": [{ type: core.Input },],
    "event": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
};
var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document
            = document;
        this.placement = 'top';
        this.positioning = new positioning.Positioning();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionTooltip = function () {
        if (this.tooltipRef) {
            var targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            var elm = this.tooltipRef.location.nativeElement
                .children[0];
            this.renderer.setStyle(elm, 'top', targetPosition.top + "px");
            this.renderer.setStyle(elm, 'left', targetPosition.left + "px");
        }
    };
    return CalendarTooltipDirective;
}());
CalendarTooltipDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mwlCalendarTooltip]'
            },] },
];
CalendarTooltipDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Injector, },
    { type: core.Renderer2, },
    { type: core.ComponentFactoryResolver, },
    { type: core.ViewContainerRef, },
    { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] },] },
]; };
CalendarTooltipDirective.propDecorators = {
    "contents": [{ type: core.Input, args: ['mwlCalendarTooltip',] },],
    "placement": [{ type: core.Input, args: ['tooltipPlacement',] },],
    "customTemplate": [{ type: core.Input, args: ['tooltipTemplate',] },],
    "event": [{ type: core.Input, args: ['tooltipEvent',] },],
    "appendToBody": [{ type: core.Input, args: ['tooltipAppendToBody',] },],
    "onMouseOver": [{ type: core.HostListener, args: ['mouseenter',] },],
    "onMouseOut": [{ type: core.HostListener, args: ['mouseleave',] },],
};
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective() {
        this.viewDateChange = new core.EventEmitter();
    }
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: subDays,
            week: subWeeks,
            month: subMonths
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    return CalendarPreviousViewDirective;
}());
CalendarPreviousViewDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mwlCalendarPreviousView]'
            },] },
];
CalendarPreviousViewDirective.propDecorators = {
    "view": [{ type: core.Input },],
    "viewDate": [{ type: core.Input },],
    "viewDateChange": [{ type: core.Output },],
    "onClick": [{ type: core.HostListener, args: ['click',] },],
};
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective() {
        this.viewDateChange = new core.EventEmitter();
    }
    CalendarNextViewDirective.prototype.onClick = function () {
        var addFn = {
            day: addDays,
            week: addWeeks,
            month: addMonths
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    return CalendarNextViewDirective;
}());
CalendarNextViewDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mwlCalendarNextView]'
            },] },
];
CalendarNextViewDirective.propDecorators = {
    "view": [{ type: core.Input },],
    "viewDate": [{ type: core.Input },],
    "viewDateChange": [{ type: core.Output },],
    "onClick": [{ type: core.HostListener, args: ['click',] },],
};
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective() {
        this.viewDateChange = new core.EventEmitter();
    }
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(startOfToday());
    };
    return CalendarTodayDirective;
}());
CalendarTodayDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mwlCalendarToday]'
            },] },
];
CalendarTodayDirective.propDecorators = {
    "viewDate": [{ type: core.Input },],
    "viewDateChange": [{ type: core.Output },],
    "onClick": [{ type: core.HostListener, args: ['click',] },],
};
var CalendarAngularDateFormatter = /** @class */ (function () {
    function CalendarAngularDateFormatter() {
    }
    CalendarAngularDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new common.DatePipe(locale).transform(date, 'EEEE', null, locale);
    };
    CalendarAngularDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new common.DatePipe(locale).transform(date, 'd', null, locale);
    };
    CalendarAngularDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new common.DatePipe(locale).transform(date, 'MMMM y', null, locale);
    };
    CalendarAngularDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new common.DatePipe(locale).transform(date, 'EEEE', null, locale);
    };
    CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new common.DatePipe(locale).transform(date, 'MMM d', null, locale);
    };
    CalendarAngularDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new common.DatePipe(locale).transform(date, 'y', null, locale);
        var weekNumber = getISOWeek(date);
        return "Week " + weekNumber + " of " + year;
    };
    CalendarAngularDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new common.DatePipe(locale).transform(date, 'h a', null, locale);
    };
    CalendarAngularDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new common.DatePipe(locale).transform(date, 'EEEE, MMMM d, y', null, locale);
    };
    return CalendarAngularDateFormatter;
}());
var CalendarDateFormatter = /** @class */ (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarDateFormatter;
}(CalendarAngularDateFormatter));
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    return CalendarDatePipe;
}());
CalendarDatePipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'calendarDate'
            },] },
];
CalendarDatePipe.ctorParameters = function () { return [
    { type: CalendarDateFormatter, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
]; };
var CalendarEventTitleFormatter = /** @class */ (function () {
    function CalendarEventTitleFormatter() {
    }
    CalendarEventTitleFormatter.prototype.month = function (event) {
        return event.title;
    };
    CalendarEventTitleFormatter.prototype.monthTooltip = function (event) {
        return event.title;
    };
    CalendarEventTitleFormatter.prototype.week = function (event) {
        return event.title;
    };
    CalendarEventTitleFormatter.prototype.weekTooltip = function (event) {
        return event.title;
    };
    CalendarEventTitleFormatter.prototype.day = function (event) {
        return event.title;
    };
    CalendarEventTitleFormatter.prototype.dayTooltip = function (event) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());
var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event);
    };
    return CalendarEventTitlePipe;
}());
CalendarEventTitlePipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'calendarEventTitle'
            },] },
];
CalendarEventTitlePipe.ctorParameters = function () { return [
    { type: CalendarEventTitleFormatter, },
]; };
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.click = new core.EventEmitter();
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        var eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            _this.click.next(event);
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
    };
    return ClickDirective;
}());
ClickDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mwlClick]'
            },] },
];
ClickDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
ClickDirective.propDecorators = {
    "click": [{ type: core.Output, args: ['mwlClick',] },],
};
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils() {
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return calendarUtils.getMonthView(args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return calendarUtils.getWeekViewHeader(args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return calendarUtils.getWeekView(args);
    };
    CalendarUtils.prototype.getDayView = function (args) {
        return calendarUtils.getDayView(args);
    };
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return calendarUtils.getDayViewHourGrid(args);
    };
    return CalendarUtils;
}());
CalendarUtils.decorators = [
    { type: core.Injectable },
];
var MOMENT = new core.InjectionToken('Moment');
var CalendarMomentDateFormatter = /** @class */ (function () {
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D MMM');
    };
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('[Week] W [of] YYYY');
    };
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    return CalendarMomentDateFormatter;
}());
CalendarMomentDateFormatter.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [MOMENT,] },] },
]; };
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter() {
    }
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new Intl.DateTimeFormat(locale, {
            year: 'numeric'
        }).format(date);
        var weekNumber = getISOWeek(date);
        return "Week " + weekNumber + " of " + year;
    };
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());
var CalendarCommonModule = /** @class */ (function () {
    function CalendarCommonModule() {
    }
    CalendarCommonModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule,
            providers: [
                angularDraggableDroppable.DraggableHelper,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    return CalendarCommonModule;
}());
CalendarCommonModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    ClickDirective
                ],
                imports: [common.CommonModule],
                exports: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    ClickDirective
                ],
                entryComponents: [CalendarTooltipWindowComponent]
            },] },
];
var CalendarMonthViewComponent = /** @class */ (function () {
    function CalendarMonthViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        this.events = [];
        this.excludeDays = [];
        this.activeDayIsOpen = false;
        this.tooltipPlacement = 'top';
        this.tooltipAppendToBody = true;
        this.beforeViewRender = new core.EventEmitter();
        this.dayClicked = new core.EventEmitter();
        this.eventClicked = new core.EventEmitter();
        this.eventTimesChanged = new core.EventEmitter();
        this.trackByIndex = trackByIndex;
        this.trackByDate = function (index, day) { return day.date.toISOString(); };
        this.locale = locale;
    }
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var year = getYear(day.date);
        var month = getMonth(day.date);
        var date = getDate(day.date);
        var newStart = setDate(setMonth(setYear(event.start, year), month), date);
        var newEnd;
        if (event.end) {
            var secondsDiff = differenceInSeconds(newStart, event.start);
            newEnd = addSeconds(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd, day: day });
    };
    CalendarMonthViewComponent.prototype.handleDayClick = function (clickEvent, day) {
        if (!clickEvent.target.classList.contains('cal-event')) {
            this.dayClicked.emit({ day: day });
        }
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) { return isSameDay(day.date, _this.viewDate); });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    return CalendarMonthViewComponent;
}());
CalendarMonthViewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-month-view',
                template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets; trackByIndex\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of (view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)); trackBy:trackByDate\"\n              [class.cal-drag-over]=\"day.dragOver\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"handleDayClick($event, day)\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              (dragEnter)=\"day.dragOver = true\"\n              (dragLeave)=\"day.dragOver = false\"\n              (drop)=\"day.dragOver = false; eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
CalendarMonthViewComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: CalendarUtils, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
]; };
CalendarMonthViewComponent.propDecorators = {
    "viewDate": [{ type: core.Input },],
    "events": [{ type: core.Input },],
    "excludeDays": [{ type: core.Input },],
    "activeDayIsOpen": [{ type: core.Input },],
    "refresh": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "tooltipPlacement": [{ type: core.Input },],
    "tooltipTemplate": [{ type: core.Input },],
    "tooltipAppendToBody": [{ type: core.Input },],
    "weekStartsOn": [{ type: core.Input },],
    "headerTemplate": [{ type: core.Input },],
    "cellTemplate": [{ type: core.Input },],
    "openDayEventsTemplate": [{ type: core.Input },],
    "eventTitleTemplate": [{ type: core.Input },],
    "weekendDays": [{ type: core.Input },],
    "beforeViewRender": [{ type: core.Output },],
    "dayClicked": [{ type: core.Output },],
    "eventClicked": [{ type: core.Output },],
    "eventTimesChanged": [{ type: core.Output },],
};
var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    return CalendarMonthViewHeaderComponent;
}());
CalendarMonthViewHeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-month-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\">\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
            },] },
];
CalendarMonthViewHeaderComponent.propDecorators = {
    "days": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
};
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new core.EventEmitter();
        this.unhighlightDay = new core.EventEmitter();
        this.eventClicked = new core.EventEmitter();
        this.trackByEventId = trackByEventId;
    }
    return CalendarMonthCellComponent;
}());
CalendarMonthCellComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-month-cell',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy:trackByEventId\"\n          [style.backgroundColor]=\"event.color?.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
                host: {
                    class: 'cal-cell cal-day-cell',
                    '[class.cal-past]': 'day.isPast',
                    '[class.cal-today]': 'day.isToday',
                    '[class.cal-future]': 'day.isFuture',
                    '[class.cal-weekend]': 'day.isWeekend',
                    '[class.cal-in-month]': 'day.inMonth',
                    '[class.cal-out-month]': '!day.inMonth',
                    '[class.cal-has-events]': 'day.events.length > 0',
                    '[class.cal-open]': 'day === openDay',
                    '[style.backgroundColor]': 'day.backgroundColor'
                }
            },] },
];
CalendarMonthCellComponent.propDecorators = {
    "day": [{ type: core.Input },],
    "openDay": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "tooltipPlacement": [{ type: core.Input },],
    "tooltipAppendToBody": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
    "tooltipTemplate": [{ type: core.Input },],
    "highlightDay": [{ type: core.Output },],
    "unhighlightDay": [{ type: core.Output },],
    "eventClicked": [{ type: core.Output },],
};
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new core.EventEmitter();
        this.trackByEventId = trackByEventId;
    }
    return CalendarOpenDayEventsComponent;
}());
CalendarOpenDayEventsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-open-day-events',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        *ngFor=\"let event of events; trackBy:trackByEventId\"\n        [ngClass]=\"event?.cssClass\"\n        mwlDraggable\n        [dropData]=\"{event: event}\"\n        [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n        <span\n          class=\"cal-event\"\n          [style.backgroundColor]=\"event.color?.primary\">\n        </span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"month\"\n          (mwlClick)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </ng-template>\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <ng-template\n        [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n        [ngTemplateOutletContext]=\"{\n          events: events,\n          eventClicked: eventClicked\n        }\">\n      </ng-template>\n    </div>\n  ",
                animations: [
                    animations.trigger('collapse', [
                        animations.transition('void => *', [
                            animations.style({ height: 0, overflow: 'hidden' }),
                            animations.animate('150ms', animations.style({ height: '*' }))
                        ]),
                        animations.transition('* => void', [
                            animations.style({ height: '*', overflow: 'hidden' }),
                            animations.animate('150ms', animations.style({ height: 0 }))
                        ])
                    ])
                ]
            },] },
];
CalendarOpenDayEventsComponent.propDecorators = {
    "isOpen": [{ type: core.Input },],
    "events": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
    "eventTitleTemplate": [{ type: core.Input },],
    "eventClicked": [{ type: core.Output },],
};
var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    return CalendarMonthModule;
}());
CalendarMonthModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, angularDraggableDroppable.DragAndDropModule, CalendarCommonModule],
                declarations: [
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent
                ],
                exports: [
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent
                ]
            },] },
];
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y;
        var newRect = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + x,
            right: this.startPosition.right + x,
            top: this.startPosition.top + y,
            bottom: this.startPosition.bottom + y
        });
        return isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
    };
    return CalendarDragHelper;
}());
var CalendarResizeHelper = /** @class */ (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    CalendarResizeHelper.prototype.validateResize = function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth && rectangle.width < this.minWidth) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());
var CalendarWeekViewComponent = /** @class */ (function () {
    function CalendarWeekViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        this.events = [];
        this.excludeDays = [];
        this.tooltipPlacement = 'bottom';
        this.tooltipAppendToBody = true;
        this.precision = 'days';
        this.dayHeaderClicked = new core.EventEmitter();
        this.eventClicked = new core.EventEmitter();
        this.eventTimesChanged = new core.EventEmitter();
        this.beforeViewRender = new core.EventEmitter();
        this.currentResizes = new Map();
        this.trackByIndex = trackByIndex;
        this.trackByEventId = function (index, weekEvent) { return weekEvent.event.id ? weekEvent.event.id : weekEvent; };
        this.locale = locale;
    }
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
    };
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarWeekViewComponent.prototype.resizeStarted = function (weekViewContainer, weekEvent, resizeEvent) {
        this.currentResizes.set(weekEvent, {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var resizeHelper = new CalendarResizeHelper(weekViewContainer, this.dayColumnWidth);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarWeekViewComponent.prototype.resizing = function (weekEvent, resizeEvent, dayWidth) {
        var currentResize = this.currentResizes.get(weekEvent);
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = currentResize.originalOffset + diff;
            weekEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = currentResize.originalSpan + diff;
        }
    };
    CalendarWeekViewComponent.prototype.resizeEnded = function (weekEvent) {
        var currentResize = this.currentResizes.get(weekEvent);
        var daysDiff;
        if (currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - currentResize.originalSpan;
        }
        weekEvent.offset = currentResize.originalOffset;
        weekEvent.span = currentResize.originalSpan;
        var newStart = weekEvent.event.start;
        var newEnd = weekEvent.event.end;
        if (currentResize.edge === 'left') {
            newStart = addDays(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = addDays(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
        this.currentResizes.delete(weekEvent);
    };
    CalendarWeekViewComponent.prototype.eventDragged = function (weekEvent, draggedByPx, dayWidth) {
        var daysDragged = draggedByPx / dayWidth;
        var newStart = addDays(weekEvent.event.start, daysDragged);
        var newEnd;
        if (weekEvent.event.end) {
            newEnd = addDays(weekEvent.event.end, daysDragged);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    CalendarWeekViewComponent.prototype.dragStart = function (weekViewContainer, event) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var dragHelper = new CalendarDragHelper(weekViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true
        });
        this.emitBeforeViewRender();
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit({
                header: this.days,
                period: this.view.period
            });
        }
    };
    return CalendarWeekViewComponent;
}());
CalendarWeekViewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-week-view',
                template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventTimesChanged.emit($event)\">\n      </mwl-calendar-week-view-header>\n      <div *ngFor=\"let eventRow of view.eventRows; trackBy:trackByIndex\" #eventRowContainer class=\"cal-events-row\">\n        <div\n          *ngFor=\"let weekEvent of eventRow.row; trackBy:trackByEventId\"\n          #event\n          class=\"cal-event-container\"\n          [class.cal-draggable]=\"weekEvent.event.draggable\"\n          [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n          [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n          [ngClass]=\"weekEvent.event?.cssClass\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth}\"\n          [validateResize]=\"validateResize\"\n          (resizeStart)=\"resizeStarted(weekViewContainer, weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, dayColumnWidth)\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\"\n          mwlDraggable\n          [dragAxis]=\"{x: weekEvent.event.draggable && currentResizes.size === 0, y: false}\"\n          [dragSnapGrid]=\"{x: dayColumnWidth}\"\n          [validateDrag]=\"validateDrag\"\n          (dragPointerDown)=\"dragStart(weekViewContainer, event)\"\n          (dragEnd)=\"eventDragged(weekEvent, $event.x, dayColumnWidth)\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            [customTemplate]=\"eventTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
CalendarWeekViewComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: CalendarUtils, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
]; };
CalendarWeekViewComponent.propDecorators = {
    "viewDate": [{ type: core.Input },],
    "events": [{ type: core.Input },],
    "excludeDays": [{ type: core.Input },],
    "refresh": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "tooltipPlacement": [{ type: core.Input },],
    "tooltipTemplate": [{ type: core.Input },],
    "tooltipAppendToBody": [{ type: core.Input },],
    "weekStartsOn": [{ type: core.Input },],
    "headerTemplate": [{ type: core.Input },],
    "eventTemplate": [{ type: core.Input },],
    "eventTitleTemplate": [{ type: core.Input },],
    "precision": [{ type: core.Input },],
    "weekendDays": [{ type: core.Input },],
    "dayHeaderClicked": [{ type: core.Output },],
    "eventClicked": [{ type: core.Output },],
    "eventTimesChanged": [{ type: core.Output },],
    "beforeViewRender": [{ type: core.Output },],
};
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new core.EventEmitter();
        this.eventDropped = new core.EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    return CalendarWeekViewHeaderComponent;
}());
CalendarWeekViewHeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-week-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\">\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
            },] },
];
CalendarWeekViewHeaderComponent.propDecorators = {
    "days": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
    "dayHeaderClicked": [{ type: core.Output },],
    "eventDropped": [{ type: core.Output },],
};
var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new core.EventEmitter();
    }
    return CalendarWeekViewEventComponent;
}());
CalendarWeekViewEventComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-week-view-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color?.secondary\"\n        [style.borderColor]=\"weekEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"weekEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
            },] },
];
CalendarWeekViewEventComponent.propDecorators = {
    "weekEvent": [{ type: core.Input },],
    "tooltipPlacement": [{ type: core.Input },],
    "tooltipAppendToBody": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
    "eventTitleTemplate": [{ type: core.Input },],
    "tooltipTemplate": [{ type: core.Input },],
    "eventClicked": [{ type: core.Output },],
};
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    return CalendarWeekModule;
}());
CalendarWeekModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarCommonModule
                ],
                declarations: [
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent
                ],
                exports: [
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent
                ]
            },] },
];
var MINUTES_IN_HOUR = 60;
var CalendarDayViewComponent = /** @class */ (function () {
    function CalendarDayViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        this.events = [];
        this.hourSegments = 2;
        this.hourSegmentHeight = 30;
        this.dayStartHour = 0;
        this.dayStartMinute = 0;
        this.dayEndHour = 23;
        this.dayEndMinute = 59;
        this.eventWidth = 150;
        this.eventSnapSize = this.hourSegmentHeight;
        this.tooltipPlacement = 'top';
        this.tooltipAppendToBody = true;
        this.eventClicked = new core.EventEmitter();
        this.hourSegmentClicked = new core.EventEmitter();
        this.eventTimesChanged = new core.EventEmitter();
        this.beforeViewRender = new core.EventEmitter();
        this.hours = [];
        this.width = 0;
        this.currentResizes = new Map();
        this.trackByEventId = trackByEventId;
        this.trackByDayEvent = function (index, dayEvent) { return dayEvent.event.id ? dayEvent.event.id : dayEvent.event; };
        this.trackByHour = function (index, hour) { return hour.segments[0].date.toISOString(); };
        this.trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
        this.locale = locale;
    }
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, segment) {
        if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({
                event: dropEvent.dropData.event,
                newStart: segment.date
            });
        }
    };
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayViewContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var resizeHelper = new CalendarResizeHelper(dayViewContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var currentResize = this.currentResizes.get(dayEvent);
        var pixelsMoved;
        if (currentResize.edge === 'top') {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * this.hourSegmentHeight);
        var minutesMoved = pixelsMoved * pixelAmountInMinutes;
        var newStart = dayEvent.event.start;
        var newEnd = dayEvent.event.end;
        if (currentResize.edge === 'top') {
            newStart = addMinutes(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = addMinutes(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
        this.currentResizes.delete(dayEvent);
    };
    CalendarDayViewComponent.prototype.dragStart = function (event, dayViewContainer) {
        var _this = this;
        var dragHelper = new CalendarDragHelper(dayViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.eventDragged = function (dayEvent, draggedInPixels) {
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * this.hourSegmentHeight);
        var minutesMoved = draggedInPixels * pixelAmountInMinutes;
        var newStart = addMinutes(dayEvent.event.start, minutesMoved);
        var newEnd;
        if (dayEvent.event.end) {
            newEnd = addMinutes(dayEvent.event.end, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.emitBeforeViewRender();
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
        this.emitBeforeViewRender();
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    CalendarDayViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours
                },
                period: this.view.period
            });
        }
    };
    return CalendarDayViewComponent;
}());
CalendarDayViewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-day-view',
                template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents; trackBy:trackByEventId\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        [eventTitleTemplate]=\"eventTitleTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy:trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n            [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayViewContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            [dragAxis]=\"{x: false, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"{y: eventSnapSize}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStart(event, dayViewContainer)\"\n            (dragEnd)=\"eventDragged(dayEvent, $event.y)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours; trackBy:trackByHour\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (click)=\"hourSegmentClicked.emit({date: segment.date})\"\n            [class.cal-drag-over]=\"segment.dragOver\"\n            mwlDroppable\n            (dragEnter)=\"segment.dragOver = true\"\n            (dragLeave)=\"segment.dragOver = false\"\n            (drop)=\"segment.dragOver = false; eventDropped($event, segment)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
CalendarDayViewComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: CalendarUtils, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
]; };
CalendarDayViewComponent.propDecorators = {
    "viewDate": [{ type: core.Input },],
    "events": [{ type: core.Input },],
    "hourSegments": [{ type: core.Input },],
    "hourSegmentHeight": [{ type: core.Input },],
    "dayStartHour": [{ type: core.Input },],
    "dayStartMinute": [{ type: core.Input },],
    "dayEndHour": [{ type: core.Input },],
    "dayEndMinute": [{ type: core.Input },],
    "eventWidth": [{ type: core.Input },],
    "refresh": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "eventSnapSize": [{ type: core.Input },],
    "tooltipPlacement": [{ type: core.Input },],
    "tooltipTemplate": [{ type: core.Input },],
    "tooltipAppendToBody": [{ type: core.Input },],
    "hourSegmentTemplate": [{ type: core.Input },],
    "allDayEventTemplate": [{ type: core.Input },],
    "eventTemplate": [{ type: core.Input },],
    "eventTitleTemplate": [{ type: core.Input },],
    "eventClicked": [{ type: core.Output },],
    "hourSegmentClicked": [{ type: core.Output },],
    "eventTimesChanged": [{ type: core.Output },],
    "beforeViewRender": [{ type: core.Output },],
};
var CalendarAllDayEventComponent = /** @class */ (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new core.EventEmitter();
    }
    return CalendarAllDayEventComponent;
}());
CalendarAllDayEventComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-all-day-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color?.secondary\"\n        [style.borderColor]=\"event.color?.primary\">\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
            },] },
];
CalendarAllDayEventComponent.propDecorators = {
    "event": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
    "eventTitleTemplate": [{ type: core.Input },],
    "eventClicked": [{ type: core.Output },],
};
var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    return CalendarDayViewHourSegmentComponent;
}());
CalendarDayViewHourSegmentComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-day-view-hour-segment',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  "
            },] },
];
CalendarDayViewHourSegmentComponent.propDecorators = {
    "segment": [{ type: core.Input },],
    "segmentHeight": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
};
var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new core.EventEmitter();
    }
    return CalendarDayViewEventComponent;
}());
CalendarDayViewEventComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mwl-calendar-day-view-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color?.secondary\"\n        [style.borderColor]=\"dayEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
            },] },
];
CalendarDayViewEventComponent.propDecorators = {
    "dayEvent": [{ type: core.Input },],
    "tooltipPlacement": [{ type: core.Input },],
    "tooltipAppendToBody": [{ type: core.Input },],
    "customTemplate": [{ type: core.Input },],
    "eventTitleTemplate": [{ type: core.Input },],
    "tooltipTemplate": [{ type: core.Input },],
    "eventClicked": [{ type: core.Output },],
};
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    return CalendarDayModule;
}());
CalendarDayModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarCommonModule
                ],
                declarations: [
                    CalendarDayViewComponent,
                    CalendarAllDayEventComponent,
                    CalendarDayViewHourSegmentComponent,
                    CalendarDayViewEventComponent
                ],
                exports: [
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarDayViewComponent,
                    CalendarAllDayEventComponent,
                    CalendarDayViewHourSegmentComponent,
                    CalendarDayViewEventComponent
                ]
            },] },
];
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                angularDraggableDroppable.DraggableHelper,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    return CalendarModule;
}());
CalendarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule
                ],
                exports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule
                ]
            },] },
];

exports.DAYS_OF_WEEK = calendarUtils.DAYS_OF_WEEK;
exports.CalendarModule = CalendarModule;
exports.CalendarCommonModule = CalendarCommonModule;
exports.CalendarEventTitleFormatter = CalendarEventTitleFormatter;
exports.MOMENT = MOMENT;
exports.CalendarMomentDateFormatter = CalendarMomentDateFormatter;
exports.CalendarNativeDateFormatter = CalendarNativeDateFormatter;
exports.CalendarAngularDateFormatter = CalendarAngularDateFormatter;
exports.CalendarDateFormatter = CalendarDateFormatter;
exports.CalendarUtils = CalendarUtils;
exports.CalendarMonthViewComponent = CalendarMonthViewComponent;
exports.CalendarMonthModule = CalendarMonthModule;
exports.CalendarWeekViewComponent = CalendarWeekViewComponent;
exports.CalendarWeekModule = CalendarWeekModule;
exports.CalendarDayViewComponent = CalendarDayViewComponent;
exports.CalendarDayModule = CalendarDayModule;
exports.ɵh = CalendarDatePipe;
exports.ɵa = CalendarEventActionsComponent;
exports.ɵb = CalendarEventTitleComponent;
exports.ɵi = CalendarEventTitlePipe;
exports.ɵf = CalendarNextViewDirective;
exports.ɵe = CalendarPreviousViewDirective;
exports.ɵg = CalendarTodayDirective;
exports.ɵd = CalendarTooltipDirective;
exports.ɵc = CalendarTooltipWindowComponent;
exports.ɵj = ClickDirective;
exports.ɵp = CalendarAllDayEventComponent;
exports.ɵr = CalendarDayViewEventComponent;
exports.ɵq = CalendarDayViewHourSegmentComponent;
exports.ɵk = CalendarMonthCellComponent;
exports.ɵm = CalendarMonthViewHeaderComponent;
exports.ɵl = CalendarOpenDayEventsComponent;
exports.ɵo = CalendarWeekViewEventComponent;
exports.ɵn = CalendarWeekViewHeaderComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-calendar.umd.js.map
