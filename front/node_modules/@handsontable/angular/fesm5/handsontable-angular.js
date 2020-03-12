import { Injectable, Component, ViewEncapsulation, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import Handsontable from 'handsontable';
import { __extends } from 'tslib';

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
        { type: Injectable }
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
        { type: Injectable }
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
        { type: Component, args: [{
                    selector: 'hot-table',
                    template: '<div #container [id]="hotId"></div>',
                    encapsulation: ViewEncapsulation.None,
                    providers: [HotTableRegisterer, HotSettingsResolver]
                }] }
    ];
    /** @nocollapse */
    HotTableComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: HotTableRegisterer },
        { type: HotSettingsResolver }
    ]; };
    HotTableComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { static: false },] }],
        settings: [{ type: Input }],
        hotId: [{ type: Input }],
        activeHeaderClassName: [{ type: Input }],
        allowEmpty: [{ type: Input }],
        allowHtml: [{ type: Input }],
        allowInsertColumn: [{ type: Input }],
        allowInsertRow: [{ type: Input }],
        allowInvalid: [{ type: Input }],
        allowRemoveColumn: [{ type: Input }],
        allowRemoveRow: [{ type: Input }],
        autoColumnSize: [{ type: Input }],
        autoRowSize: [{ type: Input }],
        autoWrapCol: [{ type: Input }],
        autoWrapRow: [{ type: Input }],
        bindRowsWithHeaders: [{ type: Input }],
        cell: [{ type: Input }],
        cells: [{ type: Input }],
        checkedTemplate: [{ type: Input }],
        className: [{ type: Input }],
        colHeaders: [{ type: Input }],
        collapsibleColumns: [{ type: Input }],
        columnHeaderHeight: [{ type: Input }],
        columns: [{ type: Input }],
        columnSorting: [{ type: Input }],
        columnSummary: [{ type: Input }],
        colWidths: [{ type: Input }],
        commentedCellClassName: [{ type: Input }],
        comments: [{ type: Input }],
        contextMenu: [{ type: Input }],
        copyable: [{ type: Input }],
        copyPaste: [{ type: Input }],
        correctFormat: [{ type: Input }],
        currentColClassName: [{ type: Input }],
        currentHeaderClassName: [{ type: Input }],
        currentRowClassName: [{ type: Input }],
        customBorders: [{ type: Input }],
        data: [{ type: Input }],
        dataSchema: [{ type: Input }],
        dateFormat: [{ type: Input }],
        debug: [{ type: Input }],
        defaultDate: [{ type: Input }],
        disableVisualSelection: [{ type: Input }],
        dragToScroll: [{ type: Input }],
        dropdownMenu: [{ type: Input }],
        editor: [{ type: Input }],
        enterBeginsEditing: [{ type: Input }],
        enterMoves: [{ type: Input }],
        fillHandle: [{ type: Input }],
        filter: [{ type: Input }],
        filteringCaseSensitive: [{ type: Input }],
        filters: [{ type: Input }],
        fixedColumnsLeft: [{ type: Input }],
        fixedRowsBottom: [{ type: Input }],
        fixedRowsTop: [{ type: Input }],
        formulas: [{ type: Input }],
        fragmentSelection: [{ type: Input }],
        ganttChart: [{ type: Input }],
        headerTooltips: [{ type: Input }],
        height: [{ type: Input }],
        hiddenColumns: [{ type: Input }],
        hiddenRows: [{ type: Input }],
        invalidCellClassName: [{ type: Input }],
        label: [{ type: Input }],
        language: [{ type: Input }],
        licenseKey: [{ type: Input }],
        manualColumnFreeze: [{ type: Input }],
        manualColumnMove: [{ type: Input }],
        manualColumnResize: [{ type: Input }],
        manualRowMove: [{ type: Input }],
        manualRowResize: [{ type: Input }],
        maxCols: [{ type: Input }],
        maxRows: [{ type: Input }],
        mergeCells: [{ type: Input }],
        minCols: [{ type: Input }],
        minRows: [{ type: Input }],
        minSpareCols: [{ type: Input }],
        minSpareRows: [{ type: Input }],
        multiColumnSorting: [{ type: Input }],
        nestedHeaders: [{ type: Input }],
        nestedRows: [{ type: Input }],
        noWordWrapClassName: [{ type: Input }],
        numericFormat: [{ type: Input }],
        observeChanges: [{ type: Input }],
        observeDOMVisibility: [{ type: Input }],
        outsideClickDeselects: [{ type: Input }],
        persistentState: [{ type: Input }],
        placeholder: [{ type: Input }],
        placeholderCellClassName: [{ type: Input }],
        preventOverflow: [{ type: Input }],
        readOnly: [{ type: Input }],
        readOnlyCellClassName: [{ type: Input }],
        renderAllRows: [{ type: Input }],
        renderer: [{ type: Input }],
        rowHeaders: [{ type: Input }],
        rowHeaderWidth: [{ type: Input }],
        rowHeights: [{ type: Input }],
        search: [{ type: Input }],
        selectionMode: [{ type: Input }],
        selectOptions: [{ type: Input }],
        skipColumnOnPaste: [{ type: Input }],
        skipRowOnPaste: [{ type: Input }],
        sortByRelevance: [{ type: Input }],
        source: [{ type: Input }],
        startCols: [{ type: Input }],
        startRows: [{ type: Input }],
        stretchH: [{ type: Input }],
        strict: [{ type: Input }],
        tableClassName: [{ type: Input }],
        tabMoves: [{ type: Input }],
        title: [{ type: Input }],
        trimDropdown: [{ type: Input }],
        trimRows: [{ type: Input }],
        trimWhitespace: [{ type: Input }],
        type: [{ type: Input }],
        uncheckedTemplate: [{ type: Input }],
        undo: [{ type: Input }],
        validator: [{ type: Input }],
        viewportColumnRenderingOffset: [{ type: Input }],
        viewportRowRenderingOffset: [{ type: Input }],
        visibleRows: [{ type: Input }],
        width: [{ type: Input }],
        wordWrap: [{ type: Input }],
        afterAddChild: [{ type: Input }],
        afterBeginEditing: [{ type: Input }],
        afterCellMetaReset: [{ type: Input }],
        afterChange: [{ type: Input }],
        afterChangesObserved: [{ type: Input }],
        afterColumnMove: [{ type: Input }],
        afterColumnResize: [{ type: Input }],
        afterColumnSort: [{ type: Input }],
        afterContextMenuDefaultOptions: [{ type: Input }],
        afterContextMenuHide: [{ type: Input }],
        afterContextMenuShow: [{ type: Input }],
        afterCopy: [{ type: Input }],
        afterCopyLimit: [{ type: Input }],
        afterCreateCol: [{ type: Input }],
        afterCreateRow: [{ type: Input }],
        afterCut: [{ type: Input }],
        afterDeselect: [{ type: Input }],
        afterDestroy: [{ type: Input }],
        afterDetachChild: [{ type: Input }],
        afterDocumentKeyDown: [{ type: Input }],
        afterDrawSelection: [{ type: Input }],
        afterDropdownMenuDefaultOptions: [{ type: Input }],
        afterDropdownMenuHide: [{ type: Input }],
        afterDropdownMenuShow: [{ type: Input }],
        afterFilter: [{ type: Input }],
        afterGetCellMeta: [{ type: Input }],
        afterGetColHeader: [{ type: Input }],
        afterGetColumnHeaderRenderers: [{ type: Input }],
        afterGetRowHeader: [{ type: Input }],
        afterGetRowHeaderRenderers: [{ type: Input }],
        afterHideColumns: [{ type: Input }],
        afterHideRows: [{ type: Input }],
        afterInit: [{ type: Input }],
        afterLanguageChange: [{ type: Input }],
        afterListen: [{ type: Input }],
        afterLoadData: [{ type: Input }],
        afterMergeCells: [{ type: Input }],
        afterModifyTransformEnd: [{ type: Input }],
        afterModifyTransformStart: [{ type: Input }],
        afterMomentumScroll: [{ type: Input }],
        afterOnCellContextMenu: [{ type: Input }],
        afterOnCellCornerDblClick: [{ type: Input }],
        afterOnCellCornerMouseDown: [{ type: Input }],
        afterOnCellMouseDown: [{ type: Input }],
        afterOnCellMouseOut: [{ type: Input }],
        afterOnCellMouseOver: [{ type: Input }],
        afterOnCellMouseUp: [{ type: Input }],
        afterPaste: [{ type: Input }],
        afterPluginsInitialized: [{ type: Input }],
        afterRedo: [{ type: Input }],
        afterRefreshDimensions: [{ type: Input }],
        afterRemoveCellMeta: [{ type: Input }],
        afterRemoveCol: [{ type: Input }],
        afterRemoveRow: [{ type: Input }],
        afterRender: [{ type: Input }],
        afterRenderer: [{ type: Input }],
        afterRowMove: [{ type: Input }],
        afterRowResize: [{ type: Input }],
        afterScrollHorizontally: [{ type: Input }],
        afterScrollVertically: [{ type: Input }],
        afterSelection: [{ type: Input }],
        afterSelectionByProp: [{ type: Input }],
        afterSelectionEnd: [{ type: Input }],
        afterSelectionEndByProp: [{ type: Input }],
        afterSetCellMeta: [{ type: Input }],
        afterSetDataAtCell: [{ type: Input }],
        afterSetDataAtRowProp: [{ type: Input }],
        afterTrimRow: [{ type: Input }],
        afterUndo: [{ type: Input }],
        afterUnhideColumns: [{ type: Input }],
        afterUnhideRows: [{ type: Input }],
        afterUnlisten: [{ type: Input }],
        afterUnmergeCells: [{ type: Input }],
        afterUntrimRow: [{ type: Input }],
        afterUpdateSettings: [{ type: Input }],
        afterValidate: [{ type: Input }],
        afterViewportColumnCalculatorOverride: [{ type: Input }],
        afterViewportRowCalculatorOverride: [{ type: Input }],
        beforeAddChild: [{ type: Input }],
        beforeAutofill: [{ type: Input }],
        beforeAutofillInsidePopulate: [{ type: Input }],
        beforeCellAlignment: [{ type: Input }],
        beforeChange: [{ type: Input }],
        beforeChangeRender: [{ type: Input }],
        beforeColumnMove: [{ type: Input }],
        beforeColumnResize: [{ type: Input }],
        beforeColumnSort: [{ type: Input }],
        beforeContextMenuSetItems: [{ type: Input }],
        beforeContextMenuShow: [{ type: Input }],
        beforeCopy: [{ type: Input }],
        beforeCreateCol: [{ type: Input }],
        beforeCreateRow: [{ type: Input }],
        beforeCut: [{ type: Input }],
        beforeDetachChild: [{ type: Input }],
        beforeDrawBorders: [{ type: Input }],
        beforeDropdownMenuSetItems: [{ type: Input }],
        beforeDropdownMenuShow: [{ type: Input }],
        beforeFilter: [{ type: Input }],
        beforeGetCellMeta: [{ type: Input }],
        beforeHideColumns: [{ type: Input }],
        beforeHideRows: [{ type: Input }],
        beforeInit: [{ type: Input }],
        beforeInitWalkontable: [{ type: Input }],
        beforeKeyDown: [{ type: Input }],
        beforeLanguageChange: [{ type: Input }],
        beforeMergeCells: [{ type: Input }],
        beforeOnCellContextMenu: [{ type: Input }],
        beforeOnCellMouseDown: [{ type: Input }],
        beforeOnCellMouseOut: [{ type: Input }],
        beforeOnCellMouseOver: [{ type: Input }],
        beforeOnCellMouseUp: [{ type: Input }],
        beforePaste: [{ type: Input }],
        beforeRedo: [{ type: Input }],
        beforeRefreshDimensions: [{ type: Input }],
        beforeRemoveCellClassNames: [{ type: Input }],
        beforeRemoveCellMeta: [{ type: Input }],
        beforeRemoveCol: [{ type: Input }],
        beforeRemoveRow: [{ type: Input }],
        beforeRender: [{ type: Input }],
        beforeRenderer: [{ type: Input }],
        beforeRowMove: [{ type: Input }],
        beforeRowResize: [{ type: Input }],
        beforeSetRangeEnd: [{ type: Input }],
        beforeSetRangeStart: [{ type: Input }],
        beforeSetRangeStartOnly: [{ type: Input }],
        beforeStretchingColumnWidth: [{ type: Input }],
        beforeTouchScroll: [{ type: Input }],
        beforeTrimRow: [{ type: Input }],
        beforeUndo: [{ type: Input }],
        beforeUnhideColumns: [{ type: Input }],
        beforeUnhideRows: [{ type: Input }],
        beforeUnmergeCells: [{ type: Input }],
        beforeUntrimRow: [{ type: Input }],
        beforeValidate: [{ type: Input }],
        beforeValueRender: [{ type: Input }],
        construct: [{ type: Input }],
        hiddenColumn: [{ type: Input }],
        hiddenRow: [{ type: Input }],
        init: [{ type: Input }],
        modifyAutofillRange: [{ type: Input }],
        modifyCol: [{ type: Input }],
        modifyColHeader: [{ type: Input }],
        modifyColumnHeaderHeight: [{ type: Input }],
        modifyColWidth: [{ type: Input }],
        modifyCopyableRange: [{ type: Input }],
        modifyData: [{ type: Input }],
        modifyGetCellCoords: [{ type: Input }],
        modifyRow: [{ type: Input }],
        modifyRowData: [{ type: Input }],
        modifyRowHeader: [{ type: Input }],
        modifyRowHeaderWidth: [{ type: Input }],
        modifyRowHeight: [{ type: Input }],
        modifyTransformEnd: [{ type: Input }],
        modifyTransformStart: [{ type: Input }],
        persistentStateLoad: [{ type: Input }],
        persistentStateReset: [{ type: Input }],
        persistentStateSave: [{ type: Input }],
        skipLengthCache: [{ type: Input }],
        unmodifyCol: [{ type: Input }],
        unmodifyRow: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'hot-column',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    HotColumnComponent.ctorParameters = function () { return [
        { type: HotTableComponent }
    ]; };
    HotColumnComponent.propDecorators = {
        allowEmpty: [{ type: Input }],
        allowHtml: [{ type: Input }],
        allowInvalid: [{ type: Input }],
        checkedTemplate: [{ type: Input }],
        className: [{ type: Input }],
        columnSorting: [{ type: Input }],
        colWidths: [{ type: Input }],
        commentedCellClassName: [{ type: Input }],
        copyable: [{ type: Input }],
        correctFormat: [{ type: Input }],
        data: [{ type: Input }],
        dateFormat: [{ type: Input }],
        defaultDate: [{ type: Input }],
        editor: [{ type: Input }],
        filteringCaseSensitive: [{ type: Input }],
        invalidCellClassName: [{ type: Input }],
        label: [{ type: Input }],
        noWordWrapClassName: [{ type: Input }],
        numericFormat: [{ type: Input }],
        placeholder: [{ type: Input }],
        placeholderCellClassName: [{ type: Input }],
        readOnly: [{ type: Input }],
        readOnlyCellClassName: [{ type: Input }],
        renderer: [{ type: Input }],
        selectOptions: [{ type: Input }],
        skipColumnOnPaste: [{ type: Input }],
        sortByRelevance: [{ type: Input }],
        source: [{ type: Input }],
        strict: [{ type: Input }],
        title: [{ type: Input }],
        trimDropdown: [{ type: Input }],
        type: [{ type: Input }],
        uncheckedTemplate: [{ type: Input }],
        validator: [{ type: Input }],
        visibleRows: [{ type: Input }],
        width: [{ type: Input }],
        wordWrap: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { HotColumnComponent, HotSettingsResolver, HotTableComponent, HotTableModule, HotTableRegisterer };
//# sourceMappingURL=handsontable-angular.js.map
