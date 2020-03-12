/*!
 * (The MIT License)
 * 
 * Copyright (c) Handsoncode sp. z o.o. <hello@handsoncode.net>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * Version: 5.1.0 (built at Thu Jul 11 2019 15:15:26 GMT+0200 (Central European Summer Time))
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('handsontable')) :
    typeof define === 'function' && define.amd ? define('@handsontable/angular', ['exports', '@angular/core', 'handsontable'], factory) :
    (global = global || self, factory((global.Handsontable = global.Handsontable || {}, global.Handsontable.angular = {}), global.ng.core, global.Handsontable));
}(this, function (exports, core, Handsontable) { 'use strict';

    Handsontable = Handsontable && Handsontable.hasOwnProperty('default') ? Handsontable['default'] : Handsontable;

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var instances = new Map();
    var HotTableRegisterer = /** @class */ (function () {
        function HotTableRegisterer() {
        }
        /**
         * @param {?} id
         * @return {?}
         */
        HotTableRegisterer.prototype.getInstance = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return instances.get(id);
        };
        /**
         * @param {?} id
         * @param {?} instance
         * @return {?}
         */
        HotTableRegisterer.prototype.registerInstance = /**
         * @param {?} id
         * @param {?} instance
         * @return {?}
         */
        function (id, instance) {
            return instances.set(id, instance);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        HotTableRegisterer.prototype.removeInstance = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return instances.delete(id);
        };
        HotTableRegisterer.decorators = [
            { type: core.Injectable }
        ];
        return HotTableRegisterer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AVAILABLE_OPTIONS = Object.keys(Handsontable.DefaultSettings.prototype);
    /** @type {?} */
    var AVAILABLE_HOOKS = Handsontable.hooks.getRegistered();
    var HotSettingsResolver = /** @class */ (function () {
        function HotSettingsResolver() {
        }
        /**
         * @param {?} component
         * @return {?}
         */
        HotSettingsResolver.prototype.mergeSettings = /**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            /** @type {?} */
            var isSettingsObject = typeof component['settings'] === 'object';
            /** @type {?} */
            var mergedSettings = isSettingsObject ? component['settings'] : {};
            /** @type {?} */
            var options = AVAILABLE_HOOKS.concat(AVAILABLE_OPTIONS);
            options.forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var isHook = AVAILABLE_HOOKS.indexOf(key) > -1;
                /** @type {?} */
                var option;
                if (isSettingsObject && isHook) {
                    option = component['settings'][key];
                }
                if (component[key] !== void 0) {
                    option = component[key];
                }
                if (option === void 0) {
                    return;
                }
                else if (typeof option === 'function' && isHook) {
                    mergedSettings[key] = (/**
                     * @param {...?} args
                     * @return {?}
                     */
                    function () {
                        var _this = this;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return component._ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            return option.apply(_this, args);
                        }));
                    });
                }
                else {
                    mergedSettings[key] = option;
                }
            }));
            return mergedSettings;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        HotSettingsResolver.prototype.prepareChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            /** @type {?} */
            var result = {};
            /** @type {?} */
            var parameters = Object.keys(changes);
            parameters.forEach((/**
             * @param {?} param
             * @return {?}
             */
            function (param) {
                if (changes.hasOwnProperty(param)) {
                    result[param] = changes[param].currentValue;
                }
            }));
            return result;
        };
        HotSettingsResolver.decorators = [
            { type: core.Injectable }
        ];
        return HotSettingsResolver;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HotTableComponent = /** @class */ (function () {
        function HotTableComponent(_ngZone, _hotTableRegisterer, _hotSettingsResolver) {
            this._ngZone = _ngZone;
            this._hotTableRegisterer = _hotTableRegisterer;
            this._hotSettingsResolver = _hotSettingsResolver;
            this.columnsComponents = [];
            this.hotId = '';
        }
        /**
         * @return {?}
         */
        HotTableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var options = this._hotSettingsResolver.mergeSettings(this);
            if (this.columnsComponents.length > 0) {
                /** @type {?} */
                var columns_1 = [];
                this.columnsComponents.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    columns_1.push(_this._hotSettingsResolver.mergeSettings(column));
                }));
                options['columns'] = columns_1;
            }
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.hotInstance = new Handsontable.Core(_this.container.nativeElement, options);
                if (_this.hotId) {
                    _this._hotTableRegisterer.registerInstance(_this.hotId, _this.hotInstance);
                }
                // @ts-ignore
                _this.hotInstance.init();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        HotTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.hotInstance === void 0) {
                return;
            }
            /** @type {?} */
            var newOptions = this._hotSettingsResolver.prepareChanges(changes);
            this.updateHotTable(newOptions);
        };
        /**
         * @return {?}
         */
        HotTableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.hotInstance.destroy();
            }));
            if (this.hotId) {
                this._hotTableRegisterer.removeInstance(this.hotId);
            }
        };
        /**
         * @param {?} newSettings
         * @return {?}
         */
        HotTableComponent.prototype.updateHotTable = /**
         * @param {?} newSettings
         * @return {?}
         */
        function (newSettings) {
            var _this = this;
            if (!this.hotInstance) {
                return;
            }
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.hotInstance.updateSettings(newSettings, false);
            }));
        };
        /**
         * @return {?}
         */
        HotTableComponent.prototype.onAfterColumnsChange = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.columnsComponents === void 0) {
                return;
            }
            if (this.columnsComponents.length > 0) {
                /** @type {?} */
                var columns_2 = [];
                this.columnsComponents.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    columns_2.push(_this._hotSettingsResolver.mergeSettings(column));
                }));
                /** @type {?} */
                var newOptions = {
                    columns: columns_2
                };
                this.updateHotTable(newOptions);
            }
        };
        /**
         * @return {?}
         */
        HotTableComponent.prototype.onAfterColumnsNumberChange = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var columns = [];
            if (this.columnsComponents.length > 0) {
                this.columnsComponents.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    columns.push(_this._hotSettingsResolver.mergeSettings(column));
                }));
            }
            this.updateHotTable({ columns: columns });
        };
        /**
         * @param {?} column
         * @return {?}
         */
        HotTableComponent.prototype.addColumn = /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            this.columnsComponents.push(column);
            this.onAfterColumnsNumberChange();
        };
        /**
         * @param {?} column
         * @return {?}
         */
        HotTableComponent.prototype.removeColumn = /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var index = this.columnsComponents.indexOf(column);
            this.columnsComponents.splice(index, 1);
            this.onAfterColumnsNumberChange();
        };
        HotTableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'hot-table',
                        template: '<div #container [id]="hotId"></div>',
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [HotTableRegisterer, HotSettingsResolver]
                    }] }
        ];
        /** @nocollapse */
        HotTableComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: HotTableRegisterer },
            { type: HotSettingsResolver }
        ]; };
        HotTableComponent.propDecorators = {
            container: [{ type: core.ViewChild, args: ['container', { static: false },] }],
            settings: [{ type: core.Input }],
            hotId: [{ type: core.Input }],
            activeHeaderClassName: [{ type: core.Input }],
            allowEmpty: [{ type: core.Input }],
            allowHtml: [{ type: core.Input }],
            allowInsertColumn: [{ type: core.Input }],
            allowInsertRow: [{ type: core.Input }],
            allowInvalid: [{ type: core.Input }],
            allowRemoveColumn: [{ type: core.Input }],
            allowRemoveRow: [{ type: core.Input }],
            autoColumnSize: [{ type: core.Input }],
            autoRowSize: [{ type: core.Input }],
            autoWrapCol: [{ type: core.Input }],
            autoWrapRow: [{ type: core.Input }],
            bindRowsWithHeaders: [{ type: core.Input }],
            cell: [{ type: core.Input }],
            cells: [{ type: core.Input }],
            checkedTemplate: [{ type: core.Input }],
            className: [{ type: core.Input }],
            colHeaders: [{ type: core.Input }],
            collapsibleColumns: [{ type: core.Input }],
            columnHeaderHeight: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            columnSorting: [{ type: core.Input }],
            columnSummary: [{ type: core.Input }],
            colWidths: [{ type: core.Input }],
            commentedCellClassName: [{ type: core.Input }],
            comments: [{ type: core.Input }],
            contextMenu: [{ type: core.Input }],
            copyable: [{ type: core.Input }],
            copyPaste: [{ type: core.Input }],
            correctFormat: [{ type: core.Input }],
            currentColClassName: [{ type: core.Input }],
            currentHeaderClassName: [{ type: core.Input }],
            currentRowClassName: [{ type: core.Input }],
            customBorders: [{ type: core.Input }],
            data: [{ type: core.Input }],
            dataSchema: [{ type: core.Input }],
            dateFormat: [{ type: core.Input }],
            debug: [{ type: core.Input }],
            defaultDate: [{ type: core.Input }],
            disableVisualSelection: [{ type: core.Input }],
            dragToScroll: [{ type: core.Input }],
            dropdownMenu: [{ type: core.Input }],
            editor: [{ type: core.Input }],
            enterBeginsEditing: [{ type: core.Input }],
            enterMoves: [{ type: core.Input }],
            fillHandle: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            filteringCaseSensitive: [{ type: core.Input }],
            filters: [{ type: core.Input }],
            fixedColumnsLeft: [{ type: core.Input }],
            fixedRowsBottom: [{ type: core.Input }],
            fixedRowsTop: [{ type: core.Input }],
            formulas: [{ type: core.Input }],
            fragmentSelection: [{ type: core.Input }],
            ganttChart: [{ type: core.Input }],
            headerTooltips: [{ type: core.Input }],
            height: [{ type: core.Input }],
            hiddenColumns: [{ type: core.Input }],
            hiddenRows: [{ type: core.Input }],
            invalidCellClassName: [{ type: core.Input }],
            label: [{ type: core.Input }],
            language: [{ type: core.Input }],
            licenseKey: [{ type: core.Input }],
            manualColumnFreeze: [{ type: core.Input }],
            manualColumnMove: [{ type: core.Input }],
            manualColumnResize: [{ type: core.Input }],
            manualRowMove: [{ type: core.Input }],
            manualRowResize: [{ type: core.Input }],
            maxCols: [{ type: core.Input }],
            maxRows: [{ type: core.Input }],
            mergeCells: [{ type: core.Input }],
            minCols: [{ type: core.Input }],
            minRows: [{ type: core.Input }],
            minSpareCols: [{ type: core.Input }],
            minSpareRows: [{ type: core.Input }],
            multiColumnSorting: [{ type: core.Input }],
            nestedHeaders: [{ type: core.Input }],
            nestedRows: [{ type: core.Input }],
            noWordWrapClassName: [{ type: core.Input }],
            numericFormat: [{ type: core.Input }],
            observeChanges: [{ type: core.Input }],
            observeDOMVisibility: [{ type: core.Input }],
            outsideClickDeselects: [{ type: core.Input }],
            persistentState: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            placeholderCellClassName: [{ type: core.Input }],
            preventOverflow: [{ type: core.Input }],
            readOnly: [{ type: core.Input }],
            readOnlyCellClassName: [{ type: core.Input }],
            renderAllRows: [{ type: core.Input }],
            renderer: [{ type: core.Input }],
            rowHeaders: [{ type: core.Input }],
            rowHeaderWidth: [{ type: core.Input }],
            rowHeights: [{ type: core.Input }],
            search: [{ type: core.Input }],
            selectionMode: [{ type: core.Input }],
            selectOptions: [{ type: core.Input }],
            skipColumnOnPaste: [{ type: core.Input }],
            skipRowOnPaste: [{ type: core.Input }],
            sortByRelevance: [{ type: core.Input }],
            source: [{ type: core.Input }],
            startCols: [{ type: core.Input }],
            startRows: [{ type: core.Input }],
            stretchH: [{ type: core.Input }],
            strict: [{ type: core.Input }],
            tableClassName: [{ type: core.Input }],
            tabMoves: [{ type: core.Input }],
            title: [{ type: core.Input }],
            trimDropdown: [{ type: core.Input }],
            trimRows: [{ type: core.Input }],
            trimWhitespace: [{ type: core.Input }],
            type: [{ type: core.Input }],
            uncheckedTemplate: [{ type: core.Input }],
            undo: [{ type: core.Input }],
            validator: [{ type: core.Input }],
            viewportColumnRenderingOffset: [{ type: core.Input }],
            viewportRowRenderingOffset: [{ type: core.Input }],
            visibleRows: [{ type: core.Input }],
            width: [{ type: core.Input }],
            wordWrap: [{ type: core.Input }],
            afterAddChild: [{ type: core.Input }],
            afterBeginEditing: [{ type: core.Input }],
            afterCellMetaReset: [{ type: core.Input }],
            afterChange: [{ type: core.Input }],
            afterChangesObserved: [{ type: core.Input }],
            afterColumnMove: [{ type: core.Input }],
            afterColumnResize: [{ type: core.Input }],
            afterColumnSort: [{ type: core.Input }],
            afterContextMenuDefaultOptions: [{ type: core.Input }],
            afterContextMenuHide: [{ type: core.Input }],
            afterContextMenuShow: [{ type: core.Input }],
            afterCopy: [{ type: core.Input }],
            afterCopyLimit: [{ type: core.Input }],
            afterCreateCol: [{ type: core.Input }],
            afterCreateRow: [{ type: core.Input }],
            afterCut: [{ type: core.Input }],
            afterDeselect: [{ type: core.Input }],
            afterDestroy: [{ type: core.Input }],
            afterDetachChild: [{ type: core.Input }],
            afterDocumentKeyDown: [{ type: core.Input }],
            afterDrawSelection: [{ type: core.Input }],
            afterDropdownMenuDefaultOptions: [{ type: core.Input }],
            afterDropdownMenuHide: [{ type: core.Input }],
            afterDropdownMenuShow: [{ type: core.Input }],
            afterFilter: [{ type: core.Input }],
            afterGetCellMeta: [{ type: core.Input }],
            afterGetColHeader: [{ type: core.Input }],
            afterGetColumnHeaderRenderers: [{ type: core.Input }],
            afterGetRowHeader: [{ type: core.Input }],
            afterGetRowHeaderRenderers: [{ type: core.Input }],
            afterHideColumns: [{ type: core.Input }],
            afterHideRows: [{ type: core.Input }],
            afterInit: [{ type: core.Input }],
            afterLanguageChange: [{ type: core.Input }],
            afterListen: [{ type: core.Input }],
            afterLoadData: [{ type: core.Input }],
            afterMergeCells: [{ type: core.Input }],
            afterModifyTransformEnd: [{ type: core.Input }],
            afterModifyTransformStart: [{ type: core.Input }],
            afterMomentumScroll: [{ type: core.Input }],
            afterOnCellContextMenu: [{ type: core.Input }],
            afterOnCellCornerDblClick: [{ type: core.Input }],
            afterOnCellCornerMouseDown: [{ type: core.Input }],
            afterOnCellMouseDown: [{ type: core.Input }],
            afterOnCellMouseOut: [{ type: core.Input }],
            afterOnCellMouseOver: [{ type: core.Input }],
            afterOnCellMouseUp: [{ type: core.Input }],
            afterPaste: [{ type: core.Input }],
            afterPluginsInitialized: [{ type: core.Input }],
            afterRedo: [{ type: core.Input }],
            afterRefreshDimensions: [{ type: core.Input }],
            afterRemoveCellMeta: [{ type: core.Input }],
            afterRemoveCol: [{ type: core.Input }],
            afterRemoveRow: [{ type: core.Input }],
            afterRender: [{ type: core.Input }],
            afterRenderer: [{ type: core.Input }],
            afterRowMove: [{ type: core.Input }],
            afterRowResize: [{ type: core.Input }],
            afterScrollHorizontally: [{ type: core.Input }],
            afterScrollVertically: [{ type: core.Input }],
            afterSelection: [{ type: core.Input }],
            afterSelectionByProp: [{ type: core.Input }],
            afterSelectionEnd: [{ type: core.Input }],
            afterSelectionEndByProp: [{ type: core.Input }],
            afterSetCellMeta: [{ type: core.Input }],
            afterSetDataAtCell: [{ type: core.Input }],
            afterSetDataAtRowProp: [{ type: core.Input }],
            afterTrimRow: [{ type: core.Input }],
            afterUndo: [{ type: core.Input }],
            afterUnhideColumns: [{ type: core.Input }],
            afterUnhideRows: [{ type: core.Input }],
            afterUnlisten: [{ type: core.Input }],
            afterUnmergeCells: [{ type: core.Input }],
            afterUntrimRow: [{ type: core.Input }],
            afterUpdateSettings: [{ type: core.Input }],
            afterValidate: [{ type: core.Input }],
            afterViewportColumnCalculatorOverride: [{ type: core.Input }],
            afterViewportRowCalculatorOverride: [{ type: core.Input }],
            beforeAddChild: [{ type: core.Input }],
            beforeAutofill: [{ type: core.Input }],
            beforeAutofillInsidePopulate: [{ type: core.Input }],
            beforeCellAlignment: [{ type: core.Input }],
            beforeChange: [{ type: core.Input }],
            beforeChangeRender: [{ type: core.Input }],
            beforeColumnMove: [{ type: core.Input }],
            beforeColumnResize: [{ type: core.Input }],
            beforeColumnSort: [{ type: core.Input }],
            beforeContextMenuSetItems: [{ type: core.Input }],
            beforeContextMenuShow: [{ type: core.Input }],
            beforeCopy: [{ type: core.Input }],
            beforeCreateCol: [{ type: core.Input }],
            beforeCreateRow: [{ type: core.Input }],
            beforeCut: [{ type: core.Input }],
            beforeDetachChild: [{ type: core.Input }],
            beforeDrawBorders: [{ type: core.Input }],
            beforeDropdownMenuSetItems: [{ type: core.Input }],
            beforeDropdownMenuShow: [{ type: core.Input }],
            beforeFilter: [{ type: core.Input }],
            beforeGetCellMeta: [{ type: core.Input }],
            beforeHideColumns: [{ type: core.Input }],
            beforeHideRows: [{ type: core.Input }],
            beforeInit: [{ type: core.Input }],
            beforeInitWalkontable: [{ type: core.Input }],
            beforeKeyDown: [{ type: core.Input }],
            beforeLanguageChange: [{ type: core.Input }],
            beforeMergeCells: [{ type: core.Input }],
            beforeOnCellContextMenu: [{ type: core.Input }],
            beforeOnCellMouseDown: [{ type: core.Input }],
            beforeOnCellMouseOut: [{ type: core.Input }],
            beforeOnCellMouseOver: [{ type: core.Input }],
            beforeOnCellMouseUp: [{ type: core.Input }],
            beforePaste: [{ type: core.Input }],
            beforeRedo: [{ type: core.Input }],
            beforeRefreshDimensions: [{ type: core.Input }],
            beforeRemoveCellClassNames: [{ type: core.Input }],
            beforeRemoveCellMeta: [{ type: core.Input }],
            beforeRemoveCol: [{ type: core.Input }],
            beforeRemoveRow: [{ type: core.Input }],
            beforeRender: [{ type: core.Input }],
            beforeRenderer: [{ type: core.Input }],
            beforeRowMove: [{ type: core.Input }],
            beforeRowResize: [{ type: core.Input }],
            beforeSetRangeEnd: [{ type: core.Input }],
            beforeSetRangeStart: [{ type: core.Input }],
            beforeSetRangeStartOnly: [{ type: core.Input }],
            beforeStretchingColumnWidth: [{ type: core.Input }],
            beforeTouchScroll: [{ type: core.Input }],
            beforeTrimRow: [{ type: core.Input }],
            beforeUndo: [{ type: core.Input }],
            beforeUnhideColumns: [{ type: core.Input }],
            beforeUnhideRows: [{ type: core.Input }],
            beforeUnmergeCells: [{ type: core.Input }],
            beforeUntrimRow: [{ type: core.Input }],
            beforeValidate: [{ type: core.Input }],
            beforeValueRender: [{ type: core.Input }],
            construct: [{ type: core.Input }],
            hiddenColumn: [{ type: core.Input }],
            hiddenRow: [{ type: core.Input }],
            init: [{ type: core.Input }],
            modifyAutofillRange: [{ type: core.Input }],
            modifyCol: [{ type: core.Input }],
            modifyColHeader: [{ type: core.Input }],
            modifyColumnHeaderHeight: [{ type: core.Input }],
            modifyColWidth: [{ type: core.Input }],
            modifyCopyableRange: [{ type: core.Input }],
            modifyData: [{ type: core.Input }],
            modifyGetCellCoords: [{ type: core.Input }],
            modifyRow: [{ type: core.Input }],
            modifyRowData: [{ type: core.Input }],
            modifyRowHeader: [{ type: core.Input }],
            modifyRowHeaderWidth: [{ type: core.Input }],
            modifyRowHeight: [{ type: core.Input }],
            modifyTransformEnd: [{ type: core.Input }],
            modifyTransformStart: [{ type: core.Input }],
            persistentStateLoad: [{ type: core.Input }],
            persistentStateReset: [{ type: core.Input }],
            persistentStateSave: [{ type: core.Input }],
            skipLengthCache: [{ type: core.Input }],
            unmodifyCol: [{ type: core.Input }],
            unmodifyRow: [{ type: core.Input }]
        };
        return HotTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HotColumnComponent = /** @class */ (function () {
        function HotColumnComponent(parentComponent) {
            this.parentComponent = parentComponent;
            this.firstRun = true;
        }
        /**
         * @return {?}
         */
        HotColumnComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.firstRun = false;
            this.parentComponent.addColumn(this);
        };
        /**
         * @return {?}
         */
        HotColumnComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            if (this.firstRun) {
                return;
            }
            this.parentComponent.onAfterColumnsChange();
        };
        /**
         * @return {?}
         */
        HotColumnComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.parentComponent.removeColumn(this);
        };
        HotColumnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'hot-column',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        HotColumnComponent.ctorParameters = function () { return [
            { type: HotTableComponent }
        ]; };
        HotColumnComponent.propDecorators = {
            allowEmpty: [{ type: core.Input }],
            allowHtml: [{ type: core.Input }],
            allowInvalid: [{ type: core.Input }],
            checkedTemplate: [{ type: core.Input }],
            className: [{ type: core.Input }],
            columnSorting: [{ type: core.Input }],
            colWidths: [{ type: core.Input }],
            commentedCellClassName: [{ type: core.Input }],
            copyable: [{ type: core.Input }],
            correctFormat: [{ type: core.Input }],
            data: [{ type: core.Input }],
            dateFormat: [{ type: core.Input }],
            defaultDate: [{ type: core.Input }],
            editor: [{ type: core.Input }],
            filteringCaseSensitive: [{ type: core.Input }],
            invalidCellClassName: [{ type: core.Input }],
            label: [{ type: core.Input }],
            noWordWrapClassName: [{ type: core.Input }],
            numericFormat: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            placeholderCellClassName: [{ type: core.Input }],
            readOnly: [{ type: core.Input }],
            readOnlyCellClassName: [{ type: core.Input }],
            renderer: [{ type: core.Input }],
            selectOptions: [{ type: core.Input }],
            skipColumnOnPaste: [{ type: core.Input }],
            sortByRelevance: [{ type: core.Input }],
            source: [{ type: core.Input }],
            strict: [{ type: core.Input }],
            title: [{ type: core.Input }],
            trimDropdown: [{ type: core.Input }],
            type: [{ type: core.Input }],
            uncheckedTemplate: [{ type: core.Input }],
            validator: [{ type: core.Input }],
            visibleRows: [{ type: core.Input }],
            width: [{ type: core.Input }],
            wordWrap: [{ type: core.Input }]
        };
        return HotColumnComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Angular prevents use static public getters under NgModule decorator.
     * Moreover, ngc doesn't allow importing `Version` from external file.
     */
    var /**
     * Angular prevents use static public getters under NgModule decorator.
     * Moreover, ngc doesn't allow importing `Version` from external file.
     */
    Version = /** @class */ (function () {
        function Version() {
        }
        Object.defineProperty(Version, "version", {
            get: /**
             * @return {?}
             */
            function () {
                return '5.1.0';
            },
            enumerable: true,
            configurable: true
        });
        return Version;
    }());
    var HotTableModule = /** @class */ (function (_super) {
        __extends(HotTableModule, _super);
        function HotTableModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        HotTableModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: HotTableModule,
                providers: [HotTableRegisterer],
            };
        };
        HotTableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            HotTableComponent,
                            HotColumnComponent,
                        ],
                        exports: [
                            HotTableComponent,
                            HotColumnComponent,
                        ]
                    },] }
        ];
        return HotTableModule;
    }(Version));

    exports.HotColumnComponent = HotColumnComponent;
    exports.HotSettingsResolver = HotSettingsResolver;
    exports.HotTableComponent = HotTableComponent;
    exports.HotTableModule = HotTableModule;
    exports.HotTableRegisterer = HotTableRegisterer;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=handsontable-angular.umd.js.map
