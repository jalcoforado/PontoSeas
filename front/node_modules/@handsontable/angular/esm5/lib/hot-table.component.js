/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from './hot-table-registerer.service';
import { HotSettingsResolver } from './hot-settings-resolver.service';
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
export { HotTableComponent };
if (false) {
    /** @type {?} */
    HotTableComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    HotTableComponent.prototype.hotInstance;
    /**
     * @type {?}
     * @private
     */
    HotTableComponent.prototype.columnsComponents;
    /** @type {?} */
    HotTableComponent.prototype.settings;
    /** @type {?} */
    HotTableComponent.prototype.hotId;
    /** @type {?} */
    HotTableComponent.prototype.activeHeaderClassName;
    /** @type {?} */
    HotTableComponent.prototype.allowEmpty;
    /** @type {?} */
    HotTableComponent.prototype.allowHtml;
    /** @type {?} */
    HotTableComponent.prototype.allowInsertColumn;
    /** @type {?} */
    HotTableComponent.prototype.allowInsertRow;
    /** @type {?} */
    HotTableComponent.prototype.allowInvalid;
    /** @type {?} */
    HotTableComponent.prototype.allowRemoveColumn;
    /** @type {?} */
    HotTableComponent.prototype.allowRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.autoColumnSize;
    /** @type {?} */
    HotTableComponent.prototype.autoRowSize;
    /** @type {?} */
    HotTableComponent.prototype.autoWrapCol;
    /** @type {?} */
    HotTableComponent.prototype.autoWrapRow;
    /** @type {?} */
    HotTableComponent.prototype.bindRowsWithHeaders;
    /** @type {?} */
    HotTableComponent.prototype.cell;
    /** @type {?} */
    HotTableComponent.prototype.cells;
    /** @type {?} */
    HotTableComponent.prototype.checkedTemplate;
    /** @type {?} */
    HotTableComponent.prototype.className;
    /** @type {?} */
    HotTableComponent.prototype.colHeaders;
    /** @type {?} */
    HotTableComponent.prototype.collapsibleColumns;
    /** @type {?} */
    HotTableComponent.prototype.columnHeaderHeight;
    /** @type {?} */
    HotTableComponent.prototype.columns;
    /** @type {?} */
    HotTableComponent.prototype.columnSorting;
    /** @type {?} */
    HotTableComponent.prototype.columnSummary;
    /** @type {?} */
    HotTableComponent.prototype.colWidths;
    /** @type {?} */
    HotTableComponent.prototype.commentedCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.comments;
    /** @type {?} */
    HotTableComponent.prototype.contextMenu;
    /** @type {?} */
    HotTableComponent.prototype.copyable;
    /** @type {?} */
    HotTableComponent.prototype.copyPaste;
    /** @type {?} */
    HotTableComponent.prototype.correctFormat;
    /** @type {?} */
    HotTableComponent.prototype.currentColClassName;
    /** @type {?} */
    HotTableComponent.prototype.currentHeaderClassName;
    /** @type {?} */
    HotTableComponent.prototype.currentRowClassName;
    /** @type {?} */
    HotTableComponent.prototype.customBorders;
    /** @type {?} */
    HotTableComponent.prototype.data;
    /** @type {?} */
    HotTableComponent.prototype.dataSchema;
    /** @type {?} */
    HotTableComponent.prototype.dateFormat;
    /** @type {?} */
    HotTableComponent.prototype.debug;
    /** @type {?} */
    HotTableComponent.prototype.defaultDate;
    /** @type {?} */
    HotTableComponent.prototype.disableVisualSelection;
    /** @type {?} */
    HotTableComponent.prototype.dragToScroll;
    /** @type {?} */
    HotTableComponent.prototype.dropdownMenu;
    /** @type {?} */
    HotTableComponent.prototype.editor;
    /** @type {?} */
    HotTableComponent.prototype.enterBeginsEditing;
    /** @type {?} */
    HotTableComponent.prototype.enterMoves;
    /** @type {?} */
    HotTableComponent.prototype.fillHandle;
    /** @type {?} */
    HotTableComponent.prototype.filter;
    /** @type {?} */
    HotTableComponent.prototype.filteringCaseSensitive;
    /** @type {?} */
    HotTableComponent.prototype.filters;
    /** @type {?} */
    HotTableComponent.prototype.fixedColumnsLeft;
    /** @type {?} */
    HotTableComponent.prototype.fixedRowsBottom;
    /** @type {?} */
    HotTableComponent.prototype.fixedRowsTop;
    /** @type {?} */
    HotTableComponent.prototype.formulas;
    /** @type {?} */
    HotTableComponent.prototype.fragmentSelection;
    /** @type {?} */
    HotTableComponent.prototype.ganttChart;
    /** @type {?} */
    HotTableComponent.prototype.headerTooltips;
    /** @type {?} */
    HotTableComponent.prototype.height;
    /** @type {?} */
    HotTableComponent.prototype.hiddenColumns;
    /** @type {?} */
    HotTableComponent.prototype.hiddenRows;
    /** @type {?} */
    HotTableComponent.prototype.invalidCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.label;
    /** @type {?} */
    HotTableComponent.prototype.language;
    /** @type {?} */
    HotTableComponent.prototype.licenseKey;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnFreeze;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.manualRowMove;
    /** @type {?} */
    HotTableComponent.prototype.manualRowResize;
    /** @type {?} */
    HotTableComponent.prototype.maxCols;
    /** @type {?} */
    HotTableComponent.prototype.maxRows;
    /** @type {?} */
    HotTableComponent.prototype.mergeCells;
    /** @type {?} */
    HotTableComponent.prototype.minCols;
    /** @type {?} */
    HotTableComponent.prototype.minRows;
    /** @type {?} */
    HotTableComponent.prototype.minSpareCols;
    /** @type {?} */
    HotTableComponent.prototype.minSpareRows;
    /** @type {?} */
    HotTableComponent.prototype.multiColumnSorting;
    /** @type {?} */
    HotTableComponent.prototype.nestedHeaders;
    /** @type {?} */
    HotTableComponent.prototype.nestedRows;
    /** @type {?} */
    HotTableComponent.prototype.noWordWrapClassName;
    /** @type {?} */
    HotTableComponent.prototype.numericFormat;
    /** @type {?} */
    HotTableComponent.prototype.observeChanges;
    /** @type {?} */
    HotTableComponent.prototype.observeDOMVisibility;
    /** @type {?} */
    HotTableComponent.prototype.outsideClickDeselects;
    /** @type {?} */
    HotTableComponent.prototype.persistentState;
    /** @type {?} */
    HotTableComponent.prototype.placeholder;
    /** @type {?} */
    HotTableComponent.prototype.placeholderCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.preventOverflow;
    /** @type {?} */
    HotTableComponent.prototype.readOnly;
    /** @type {?} */
    HotTableComponent.prototype.readOnlyCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.renderAllRows;
    /** @type {?} */
    HotTableComponent.prototype.renderer;
    /** @type {?} */
    HotTableComponent.prototype.rowHeaders;
    /** @type {?} */
    HotTableComponent.prototype.rowHeaderWidth;
    /** @type {?} */
    HotTableComponent.prototype.rowHeights;
    /** @type {?} */
    HotTableComponent.prototype.search;
    /** @type {?} */
    HotTableComponent.prototype.selectionMode;
    /** @type {?} */
    HotTableComponent.prototype.selectOptions;
    /** @type {?} */
    HotTableComponent.prototype.skipColumnOnPaste;
    /** @type {?} */
    HotTableComponent.prototype.skipRowOnPaste;
    /** @type {?} */
    HotTableComponent.prototype.sortByRelevance;
    /** @type {?} */
    HotTableComponent.prototype.source;
    /** @type {?} */
    HotTableComponent.prototype.startCols;
    /** @type {?} */
    HotTableComponent.prototype.startRows;
    /** @type {?} */
    HotTableComponent.prototype.stretchH;
    /** @type {?} */
    HotTableComponent.prototype.strict;
    /** @type {?} */
    HotTableComponent.prototype.tableClassName;
    /** @type {?} */
    HotTableComponent.prototype.tabMoves;
    /** @type {?} */
    HotTableComponent.prototype.title;
    /** @type {?} */
    HotTableComponent.prototype.trimDropdown;
    /** @type {?} */
    HotTableComponent.prototype.trimRows;
    /** @type {?} */
    HotTableComponent.prototype.trimWhitespace;
    /** @type {?} */
    HotTableComponent.prototype.type;
    /** @type {?} */
    HotTableComponent.prototype.uncheckedTemplate;
    /** @type {?} */
    HotTableComponent.prototype.undo;
    /** @type {?} */
    HotTableComponent.prototype.validator;
    /** @type {?} */
    HotTableComponent.prototype.viewportColumnRenderingOffset;
    /** @type {?} */
    HotTableComponent.prototype.viewportRowRenderingOffset;
    /** @type {?} */
    HotTableComponent.prototype.visibleRows;
    /** @type {?} */
    HotTableComponent.prototype.width;
    /** @type {?} */
    HotTableComponent.prototype.wordWrap;
    /** @type {?} */
    HotTableComponent.prototype.afterAddChild;
    /** @type {?} */
    HotTableComponent.prototype.afterBeginEditing;
    /** @type {?} */
    HotTableComponent.prototype.afterCellMetaReset;
    /** @type {?} */
    HotTableComponent.prototype.afterChange;
    /** @type {?} */
    HotTableComponent.prototype.afterChangesObserved;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnSort;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuDefaultOptions;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuHide;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.afterCopy;
    /** @type {?} */
    HotTableComponent.prototype.afterCopyLimit;
    /** @type {?} */
    HotTableComponent.prototype.afterCreateCol;
    /** @type {?} */
    HotTableComponent.prototype.afterCreateRow;
    /** @type {?} */
    HotTableComponent.prototype.afterCut;
    /** @type {?} */
    HotTableComponent.prototype.afterDeselect;
    /** @type {?} */
    HotTableComponent.prototype.afterDestroy;
    /** @type {?} */
    HotTableComponent.prototype.afterDetachChild;
    /** @type {?} */
    HotTableComponent.prototype.afterDocumentKeyDown;
    /** @type {?} */
    HotTableComponent.prototype.afterDrawSelection;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuDefaultOptions;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuHide;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.afterFilter;
    /** @type {?} */
    HotTableComponent.prototype.afterGetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.afterGetColHeader;
    /** @type {?} */
    HotTableComponent.prototype.afterGetColumnHeaderRenderers;
    /** @type {?} */
    HotTableComponent.prototype.afterGetRowHeader;
    /** @type {?} */
    HotTableComponent.prototype.afterGetRowHeaderRenderers;
    /** @type {?} */
    HotTableComponent.prototype.afterHideColumns;
    /** @type {?} */
    HotTableComponent.prototype.afterHideRows;
    /** @type {?} */
    HotTableComponent.prototype.afterInit;
    /** @type {?} */
    HotTableComponent.prototype.afterLanguageChange;
    /** @type {?} */
    HotTableComponent.prototype.afterListen;
    /** @type {?} */
    HotTableComponent.prototype.afterLoadData;
    /** @type {?} */
    HotTableComponent.prototype.afterMergeCells;
    /** @type {?} */
    HotTableComponent.prototype.afterModifyTransformEnd;
    /** @type {?} */
    HotTableComponent.prototype.afterModifyTransformStart;
    /** @type {?} */
    HotTableComponent.prototype.afterMomentumScroll;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellContextMenu;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellCornerDblClick;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellCornerMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseOut;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseOver;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseUp;
    /** @type {?} */
    HotTableComponent.prototype.afterPaste;
    /** @type {?} */
    HotTableComponent.prototype.afterPluginsInitialized;
    /** @type {?} */
    HotTableComponent.prototype.afterRedo;
    /** @type {?} */
    HotTableComponent.prototype.afterRefreshDimensions;
    /** @type {?} */
    HotTableComponent.prototype.afterRemoveCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.afterRemoveCol;
    /** @type {?} */
    HotTableComponent.prototype.afterRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.afterRender;
    /** @type {?} */
    HotTableComponent.prototype.afterRenderer;
    /** @type {?} */
    HotTableComponent.prototype.afterRowMove;
    /** @type {?} */
    HotTableComponent.prototype.afterRowResize;
    /** @type {?} */
    HotTableComponent.prototype.afterScrollHorizontally;
    /** @type {?} */
    HotTableComponent.prototype.afterScrollVertically;
    /** @type {?} */
    HotTableComponent.prototype.afterSelection;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionByProp;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionEnd;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionEndByProp;
    /** @type {?} */
    HotTableComponent.prototype.afterSetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.afterSetDataAtCell;
    /** @type {?} */
    HotTableComponent.prototype.afterSetDataAtRowProp;
    /** @type {?} */
    HotTableComponent.prototype.afterTrimRow;
    /** @type {?} */
    HotTableComponent.prototype.afterUndo;
    /** @type {?} */
    HotTableComponent.prototype.afterUnhideColumns;
    /** @type {?} */
    HotTableComponent.prototype.afterUnhideRows;
    /** @type {?} */
    HotTableComponent.prototype.afterUnlisten;
    /** @type {?} */
    HotTableComponent.prototype.afterUnmergeCells;
    /** @type {?} */
    HotTableComponent.prototype.afterUntrimRow;
    /** @type {?} */
    HotTableComponent.prototype.afterUpdateSettings;
    /** @type {?} */
    HotTableComponent.prototype.afterValidate;
    /** @type {?} */
    HotTableComponent.prototype.afterViewportColumnCalculatorOverride;
    /** @type {?} */
    HotTableComponent.prototype.afterViewportRowCalculatorOverride;
    /** @type {?} */
    HotTableComponent.prototype.beforeAddChild;
    /** @type {?} */
    HotTableComponent.prototype.beforeAutofill;
    /** @type {?} */
    HotTableComponent.prototype.beforeAutofillInsidePopulate;
    /** @type {?} */
    HotTableComponent.prototype.beforeCellAlignment;
    /** @type {?} */
    HotTableComponent.prototype.beforeChange;
    /** @type {?} */
    HotTableComponent.prototype.beforeChangeRender;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnSort;
    /** @type {?} */
    HotTableComponent.prototype.beforeContextMenuSetItems;
    /** @type {?} */
    HotTableComponent.prototype.beforeContextMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.beforeCopy;
    /** @type {?} */
    HotTableComponent.prototype.beforeCreateCol;
    /** @type {?} */
    HotTableComponent.prototype.beforeCreateRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeCut;
    /** @type {?} */
    HotTableComponent.prototype.beforeDetachChild;
    /** @type {?} */
    HotTableComponent.prototype.beforeDrawBorders;
    /** @type {?} */
    HotTableComponent.prototype.beforeDropdownMenuSetItems;
    /** @type {?} */
    HotTableComponent.prototype.beforeDropdownMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.beforeFilter;
    /** @type {?} */
    HotTableComponent.prototype.beforeGetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.beforeHideColumns;
    /** @type {?} */
    HotTableComponent.prototype.beforeHideRows;
    /** @type {?} */
    HotTableComponent.prototype.beforeInit;
    /** @type {?} */
    HotTableComponent.prototype.beforeInitWalkontable;
    /** @type {?} */
    HotTableComponent.prototype.beforeKeyDown;
    /** @type {?} */
    HotTableComponent.prototype.beforeLanguageChange;
    /** @type {?} */
    HotTableComponent.prototype.beforeMergeCells;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellContextMenu;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseOut;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseOver;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseUp;
    /** @type {?} */
    HotTableComponent.prototype.beforePaste;
    /** @type {?} */
    HotTableComponent.prototype.beforeRedo;
    /** @type {?} */
    HotTableComponent.prototype.beforeRefreshDimensions;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveCellClassNames;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveCol;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeRender;
    /** @type {?} */
    HotTableComponent.prototype.beforeRenderer;
    /** @type {?} */
    HotTableComponent.prototype.beforeRowMove;
    /** @type {?} */
    HotTableComponent.prototype.beforeRowResize;
    /** @type {?} */
    HotTableComponent.prototype.beforeSetRangeEnd;
    /** @type {?} */
    HotTableComponent.prototype.beforeSetRangeStart;
    /** @type {?} */
    HotTableComponent.prototype.beforeSetRangeStartOnly;
    /** @type {?} */
    HotTableComponent.prototype.beforeStretchingColumnWidth;
    /** @type {?} */
    HotTableComponent.prototype.beforeTouchScroll;
    /** @type {?} */
    HotTableComponent.prototype.beforeTrimRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeUndo;
    /** @type {?} */
    HotTableComponent.prototype.beforeUnhideColumns;
    /** @type {?} */
    HotTableComponent.prototype.beforeUnhideRows;
    /** @type {?} */
    HotTableComponent.prototype.beforeUnmergeCells;
    /** @type {?} */
    HotTableComponent.prototype.beforeUntrimRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeValidate;
    /** @type {?} */
    HotTableComponent.prototype.beforeValueRender;
    /** @type {?} */
    HotTableComponent.prototype.construct;
    /** @type {?} */
    HotTableComponent.prototype.hiddenColumn;
    /** @type {?} */
    HotTableComponent.prototype.hiddenRow;
    /** @type {?} */
    HotTableComponent.prototype.init;
    /** @type {?} */
    HotTableComponent.prototype.modifyAutofillRange;
    /** @type {?} */
    HotTableComponent.prototype.modifyCol;
    /** @type {?} */
    HotTableComponent.prototype.modifyColHeader;
    /** @type {?} */
    HotTableComponent.prototype.modifyColumnHeaderHeight;
    /** @type {?} */
    HotTableComponent.prototype.modifyColWidth;
    /** @type {?} */
    HotTableComponent.prototype.modifyCopyableRange;
    /** @type {?} */
    HotTableComponent.prototype.modifyData;
    /** @type {?} */
    HotTableComponent.prototype.modifyGetCellCoords;
    /** @type {?} */
    HotTableComponent.prototype.modifyRow;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowData;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeader;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeaderWidth;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeight;
    /** @type {?} */
    HotTableComponent.prototype.modifyTransformEnd;
    /** @type {?} */
    HotTableComponent.prototype.modifyTransformStart;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateLoad;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateReset;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateSave;
    /** @type {?} */
    HotTableComponent.prototype.skipLengthCache;
    /** @type {?} */
    HotTableComponent.prototype.unmodifyCol;
    /** @type {?} */
    HotTableComponent.prototype.unmodifyRow;
    /**
     * @type {?}
     * @private
     */
    HotTableComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    HotTableComponent.prototype._hotTableRegisterer;
    /**
     * @type {?}
     * @private
     */
    HotTableComponent.prototype._hotSettingsResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5kc29udGFibGUvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ob3QtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLFlBQVksTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHdEU7SUEwU0UsMkJBQ1UsT0FBZSxFQUNmLG1CQUF1QyxFQUN2QyxvQkFBeUM7UUFGekMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQW5TM0Msc0JBQWlCLEdBQXlCLEVBQUUsQ0FBQztRQUc1QyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBaVNqQixDQUFDOzs7O0lBRUosMkNBQWU7OztJQUFmO1FBQUEsaUJBc0JDOztZQXJCTyxPQUFPLEdBQThCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXhGLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUMvQixTQUFPLEdBQUcsRUFBRTtZQUVsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsTUFBTTtnQkFDcEMsU0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxFQUFDLENBQUM7WUFFSCxPQUFPLENBQUMs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QUEyRTs7SUFDM0UsZ0RBQStFOztJQUMvRSxvREFBdUY7O0lBQ3ZGLHdEQUErRjs7SUFDL0YsOENBQTJFOztJQUMzRSwwQ0FBbUU7O0lBQ25FLHVDQUE2RDs7SUFDN0QsZ0RBQStFOztJQUMvRSw2Q0FBeUU7O0lBQ3pFLCtDQUE2RTs7SUFDN0UsNENBQXVFOztJQUN2RSwyQ0FBcUU7O0lBQ3JFLDhDQUEyRTs7SUFDM0Usc0NBQTJEOztJQUMzRCx5Q0FBaUU7O0lBQ2pFLHNDQUEyRDs7SUFDM0QsaUNBQWlEOztJQUNqRCxnREFBK0U7O0lBQy9FLHNDQUEyRDs7SUFDM0QsNENBQXVFOztJQUN2RSxxREFBeUY7O0lBQ3pGLDJDQUFxRTs7SUFDckUsZ0RBQStFOztJQUMvRSx1Q0FBNkQ7O0lBQzdELGdEQUErRTs7SUFDL0Usc0NBQTJEOztJQUMzRCwwQ0FBbUU7O0lBQ25FLDRDQUF1RTs7SUFDdkUsaURBQWlGOztJQUNqRiw0Q0FBdUU7O0lBQ3ZFLCtDQUE2RTs7SUFDN0UsaURBQWlGOztJQUNqRixnREFBK0U7O0lBQy9FLGlEQUFpRjs7SUFDakYsZ0RBQStFOztJQUMvRSw0Q0FBdUU7O0lBQ3ZFLHdDQUErRDs7SUFDL0Qsd0NBQStEOzs7OztJQUc3RCxvQ0FBdUI7Ozs7O0lBQ3ZCLGdEQUErQzs7Ozs7SUFDL0MsaURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgSGFuZHNvbnRhYmxlIGZyb20gJ2hhbmRzb250YWJsZSc7XG5pbXBvcnQgeyBIb3RUYWJsZVJlZ2lzdGVyZXIgfSBmcm9tICcuL2hvdC10YWJsZS1yZWdpc3RlcmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSG90U2V0dGluZ3NSZXNvbHZlciB9IGZyb20gJy4vaG90LXNldHRpbmdzLXJlc29sdmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSG90Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9ob3QtY29sdW1uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvdC10YWJsZScsXG4gIHRlbXBsYXRlOiAnPGRpdiAjY29udGFpbmVyIFtpZF09XCJob3RJZFwiPjwvZGl2PicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogWyBIb3RUYWJsZVJlZ2lzdGVyZXIsIEhvdFNldHRpbmdzUmVzb2x2ZXIgXSxcbn0pXG5leHBvcnQgY2xhc3MgSG90VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgY29udGFpbmVyO1xuXG4gIHByaXZhdGUgaG90SW5zdGFuY2U6IEhhbmRzb250YWJsZTtcbiAgcHJpdmF0ZSBjb2x1bW5zQ29tcG9uZW50czogSG90Q29sdW1uQ29tcG9uZW50W10gPSBbXTtcbiAgLy8gY29tcG9uZW50IGlucHV0c1xuICBASW5wdXQoKSBzZXR0aW5nczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5ncztcbiAgQElucHV0KCkgaG90SWQgPSAnJztcbiAgLy8gaGFuZHNvbnRhYmxlIG9wdGlvbnNcbiAgQElucHV0KCkgYWN0aXZlSGVhZGVyQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhY3RpdmVIZWFkZXJDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgYWxsb3dFbXB0eTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWxsb3dFbXB0eSddO1xuICBASW5wdXQoKSBhbGxvd0h0bWw6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FsbG93SHRtbCddO1xuICBASW5wdXQoKSBhbGxvd0luc2VydENvbHVtbjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWxsb3dJbnNlcnRDb2x1bW4nXTtcbiAgQElucHV0KCkgYWxsb3dJbnNlcnRSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FsbG93SW5zZXJ0Um93J107XG4gIEBJbnB1dCgpIGFsbG93SW52YWxpZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWxsb3dJbnZhbGlkJ107XG4gIEBJbnB1dCgpIGFsbG93UmVtb3ZlQ29sdW1uOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhbGxvd1JlbW92ZUNvbHVtbiddO1xuICBASW5wdXQoKSBhbGxvd1JlbW92ZVJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWxsb3dSZW1vdmVSb3cnXTtcbiAgQElucHV0KCkgYXV0b0NvbHVtblNpemU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2F1dG9Db2x1bW5TaXplJ107XG4gIEBJbnB1dCgpIGF1dG9Sb3dTaXplOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhdXRvUm93U2l6ZSddO1xuICBASW5wdXQoKSBhdXRvV3JhcENvbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYXV0b1dyYXBDb2wnXTtcbiAgQElucHV0KCkgYXV0b1dyYXBSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2F1dG9XcmFwUm93J107XG4gIEBJbnB1dCgpIGJpbmRSb3dzV2l0aEhlYWRlcnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JpbmRSb3dzV2l0aEhlYWRlcnMnXTtcbiAgQElucHV0KCkgY2VsbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY2VsbCddO1xuICBASW5wdXQoKSBjZWxsczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY2VsbHMnXTtcbiAgQElucHV0KCkgY2hlY2tlZFRlbXBsYXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjaGVja2VkVGVtcGxhdGUnXTtcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjbGFzc05hbWUnXTtcbiAgQElucHV0KCkgY29sSGVhZGVyczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29sSGVhZGVycyddO1xuICBASW5wdXQoKSBjb2xsYXBzaWJsZUNvbHVtbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbGxhcHNpYmxlQ29sdW1ucyddO1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXJIZWlnaHQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbHVtbkhlYWRlckhlaWdodCddO1xuICBASW5wdXQoKSBjb2x1bW5zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb2x1bW5zJ107XG4gIEBJbnB1dCgpIGNvbHVtblNvcnRpbmc6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbHVtblNvcnRpbmcnXTtcbiAgQElucHV0KCkgY29sdW1uU3VtbWFyeTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29sdW1uU3VtbWFyeSddO1xuICBASW5wdXQoKSBjb2xXaWR0aHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbFdpZHRocyddO1xuICBASW5wdXQoKSBjb21tZW50ZWRDZWxsQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb21tZW50ZWRDZWxsQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIGNvbW1lbnRzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb21tZW50cyddO1xuICBASW5wdXQoKSBjb250ZXh0TWVudTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29udGV4dE1lbnUnXTtcbiAgQElucHV0KCkgY29weWFibGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvcHlhYmxlJ107XG4gIEBJbnB1dCgpIGNvcHlQYXN0ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29weVBhc3RlJ107XG4gIEBJbnB1dCgpIGNvcnJlY3RGb3JtYXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvcnJlY3RGb3JtYXQnXTtcbiAgQElucHV0KCkgY3VycmVudENvbENsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY3VycmVudENvbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSBjdXJyZW50SGVhZGVyQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjdXJyZW50SGVhZGVyQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIGN1cnJlbnRSb3dDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2N1cnJlbnRSb3dDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgY3VzdG9tQm9yZGVyczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY3VzdG9tQm9yZGVycyddO1xuICBASW5wdXQoKSBkYXRhOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydkYXRhJ107XG4gIEBJbnB1dCgpIGRhdGFTY2hlbWE6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2RhdGFTY2hlbWEnXTtcbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZGF0ZUZvcm1hdCddO1xuICBASW5wdXQoKSBkZWJ1ZzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZGVidWcnXTtcbiAgQElucHV0KCkgZGVmYXVsdERhdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2RlZmF1bHREYXRlJ107XG4gIEBJbnB1dCgpIGRpc2FibGVWaXN1YWxTZWxlY3Rpb246IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2Rpc2FibGVWaXN1YWxTZWxlY3Rpb24nXTtcbiAgQElucHV0KCkgZHJhZ1RvU2Nyb2xsOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydkcmFnVG9TY3JvbGwnXTtcbiAgQElucHV0KCkgZHJvcGRvd25NZW51OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydkcm9wZG93bk1lbnUnXTtcbiAgQElucHV0KCkgZWRpdG9yOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydlZGl0b3InXTtcbiAgQElucHV0KCkgZW50ZXJCZWdpbnNFZGl0aW5nOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydlbnRlckJlZ2luc0VkaXRpbmcnXTtcbiAgQElucHV0KCkgZW50ZXJNb3ZlczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZW50ZXJNb3ZlcyddO1xuICBASW5wdXQoKSBmaWxsSGFuZGxlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmaWxsSGFuZGxlJ107XG4gIEBJbnB1dCgpIGZpbHRlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZmlsdGVyJ107XG4gIEBJbnB1dCgpIGZpbHRlcmluZ0Nhc2VTZW5zaXRpdmU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2ZpbHRlcmluZ0Nhc2VTZW5zaXRpdmUnXTtcbiAgQElucHV0KCkgZmlsdGVyczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZmlsdGVycyddO1xuICBASW5wdXQoKSBmaXhlZENvbHVtbnNMZWZ0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmaXhlZENvbHVtbnNMZWZ0J107XG4gIEBJbnB1dCgpIGZpeGVkUm93c0JvdHRvbTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZml4ZWRSb3dzQm90dG9tJ107XG4gIEBJbnB1dCgpIGZpeGVkUm93c1RvcDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZml4ZWRSb3dzVG9wJ107XG4gIEBJbnB1dCgpIGZvcm11bGFzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmb3JtdWxhcyddO1xuICBASW5wdXQoKSBmcmFnbWVudFNlbGVjdGlvbjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZnJhZ21lbnRTZWxlY3Rpb24nXTtcbiAgQElucHV0KCkgZ2FudHRDaGFydDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZ2FudHRDaGFydCddO1xuICBASW5wdXQoKSBoZWFkZXJUb29sdGlwczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snaGVhZGVyVG9vbHRpcHMnXTtcbiAgQElucHV0KCkgaGVpZ2h0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydoZWlnaHQnXTtcbiAgQElucHV0KCkgaGlkZGVuQ29sdW1uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snaGlkZGVuQ29sdW1ucyddO1xuICBASW5wdXQoKSBoaWRkZW5Sb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydoaWRkZW5Sb3dzJ107XG4gIEBJbnB1dCgpIGludmFsaWRDZWxsQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydpbnZhbGlkQ2VsbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSBsYWJlbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbGFiZWwnXTtcbiAgQElucHV0KCkgbGFuZ3VhZ2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2xhbmd1YWdlJ107XG4gIEBJbnB1dCgpIGxpY2Vuc2VLZXk6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2xpY2Vuc2VLZXknXTtcbiAgQElucHV0KCkgbWFudWFsQ29sdW1uRnJlZXplOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtYW51YWxDb2x1bW5GcmVlemUnXTtcbiAgQElucHV0KCkgbWFudWFsQ29sdW1uTW92ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWFudWFsQ29sdW1uTW92ZSddO1xuICBASW5wdXQoKSBtYW51YWxDb2x1bW5SZXNpemU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21hbnVhbENvbHVtblJlc2l6ZSddO1xuICBASW5wdXQoKSBtYW51YWxSb3dNb3ZlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtYW51YWxSb3dNb3ZlJ107XG4gIEBJbnB1dCgpIG1hbnVhbFJvd1Jlc2l6ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWFudWFsUm93UmVzaXplJ107XG4gIEBJbnB1dCgpIG1heENvbHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21heENvbHMnXTtcbiAgQElucHV0KCkgbWF4Um93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWF4Um93cyddO1xuICBASW5wdXQoKSBtZXJnZUNlbGxzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtZXJnZUNlbGxzJ107XG4gIEBJbnB1dCgpIG1pbkNvbHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21pbkNvbHMnXTtcbiAgQElucHV0KCkgbWluUm93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWluUm93cyddO1xuICBASW5wdXQoKSBtaW5TcGFyZUNvbHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21pblNwYXJlQ29scyddO1xuICBASW5wdXQoKSBtaW5TcGFyZVJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21pblNwYXJlUm93cyddO1xuICBASW5wdXQoKSBtdWx0aUNvbHVtblNvcnRpbmc6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ211bHRpQ29sdW1uU29ydGluZyddO1xuICBASW5wdXQoKSBuZXN0ZWRIZWFkZXJzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyduZXN0ZWRIZWFkZXJzJ107XG4gIEBJbnB1dCgpIG5lc3RlZFJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ25lc3RlZFJvd3MnXTtcbiAgQElucHV0KCkgbm9Xb3JkV3JhcENsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbm9Xb3JkV3JhcENsYXNzTmFtZSddO1xuICBASW5wdXQoKSBudW1lcmljRm9ybWF0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydudW1lcmljRm9ybWF0J107XG4gIEBJbnB1dCgpIG9ic2VydmVDaGFuZ2VzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydvYnNlcnZlQ2hhbmdlcyddO1xuICBASW5wdXQoKSBvYnNlcnZlRE9NVmlzaWJpbGl0eTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snb2JzZXJ2ZURPTVZpc2liaWxpdHknXTtcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrRGVzZWxlY3RzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydvdXRzaWRlQ2xpY2tEZXNlbGVjdHMnXTtcbiAgQElucHV0KCkgcGVyc2lzdGVudFN0YXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydwZXJzaXN0ZW50U3RhdGUnXTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3BsYWNlaG9sZGVyJ107XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyQ2VsbENsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncGxhY2Vob2xkZXJDZWxsQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIHByZXZlbnRPdmVyZmxvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncHJldmVudE92ZXJmbG93J107XG4gIEBJbnB1dCgpIHJlYWRPbmx5OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydyZWFkT25seSddO1xuICBASW5wdXQoKSByZWFkT25seUNlbGxDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3JlYWRPbmx5Q2VsbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSByZW5kZXJBbGxSb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydyZW5kZXJBbGxSb3dzJ107XG4gIEBJbnB1dCgpIHJlbmRlcmVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydyZW5kZXJlciddO1xuICBASW5wdXQoKSByb3dIZWFkZXJzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydyb3dIZWFkZXJzJ107XG4gIEBJbnB1dCgpIHJvd0hlYWRlcldpZHRoOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydyb3dIZWFkZXJXaWR0aCddO1xuICBASW5wdXQoKSByb3dIZWlnaHRzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydyb3dIZWlnaHRzJ107XG4gIEBJbnB1dCgpIHNlYXJjaDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc2VhcmNoJ107XG4gIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3NlbGVjdGlvbk1vZGUnXTtcbiAgQElucHV0KCkgc2VsZWN0T3B0aW9uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc2VsZWN0T3B0aW9ucyddO1xuICBASW5wdXQoKSBza2lwQ29sdW1uT25QYXN0ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc2tpcENvbHVtbk9uUGFzdGUnXTtcbiAgQElucHV0KCkgc2tpcFJvd09uUGFzdGU6IGFueTtcbiAgQElucHV0KCkgc29ydEJ5UmVsZXZhbmNlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydzb3J0QnlSZWxldmFuY2UnXTtcbiAgQElucHV0KCkgc291cmNlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydzb3VyY2UnXTtcbiAgQElucHV0KCkgc3RhcnRDb2xzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydzdGFydENvbHMnXTtcbiAgQElucHV0KCkgc3RhcnRSb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydzdGFydFJvd3MnXTtcbiAgQElucHV0KCkgc3RyZXRjaEg6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3N0cmV0Y2hIJ107XG4gIEBJbnB1dCgpIHN0cmljdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc3RyaWN0J107XG4gIEBJbnB1dCgpIHRhYmxlQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd0YWJsZUNsYXNzTmFtZSddO1xuICBASW5wdXQoKSB0YWJNb3ZlczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndGFiTW92ZXMnXTtcbiAgQElucHV0KCkgdGl0bGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3RpdGxlJ107XG4gIEBJbnB1dCgpIHRyaW1Ecm9wZG93bjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndHJpbURyb3Bkb3duJ107XG4gIEBJbnB1dCgpIHRyaW1Sb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyduZXN0ZWRSb3dzJ107XG4gIEBJbnB1dCgpIHRyaW1XaGl0ZXNwYWNlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd0cmltV2hpdGVzcGFjZSddO1xuICBASW5wdXQoKSB0eXBlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd0eXBlJ107XG4gIEBJbnB1dCgpIHVuY2hlY2tlZFRlbXBsYXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd1bmNoZWNrZWRUZW1wbGF0ZSddO1xuICBASW5wdXQoKSB1bmRvOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd1bmRvJ107XG4gIEBJbnB1dCgpIHZhbGlkYXRvcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndmFsaWRhdG9yJ107XG4gIEBJbnB1dCgpIHZpZXdwb3J0Q29sdW1uUmVuZGVyaW5nT2Zmc2V0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd2aWV3cG9ydENvbHVtblJlbmRlcmluZ09mZnNldCddO1xuICBASW5wdXQoKSB2aWV3cG9ydFJvd1JlbmRlcmluZ09mZnNldDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndmlld3BvcnRSb3dSZW5kZXJpbmdPZmZzZXQnXTtcbiAgQElucHV0KCkgdmlzaWJsZVJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3Zpc2libGVSb3dzJ107XG4gIEBJbnB1dCgpIHdpZHRoOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd3aWR0aCddO1xuICBASW5wdXQoKSB3b3JkV3JhcDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snd29yZFdyYXAnXTtcblxuICAvLyBoYW5kc29udGFibGUgaG9va3NcbiAgQElucHV0KCkgYWZ0ZXJBZGRDaGlsZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJBZGRDaGlsZCddO1xuICBASW5wdXQoKSBhZnRlckJlZ2luRWRpdGluZzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJCZWdpbkVkaXRpbmcnXTtcbiAgQElucHV0KCkgYWZ0ZXJDZWxsTWV0YVJlc2V0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNlbGxNZXRhUmVzZXQnXTtcbiAgQElucHV0KCkgYWZ0ZXJDaGFuZ2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ2hhbmdlJ107XG4gIEBJbnB1dCgpIGFmdGVyQ2hhbmdlc09ic2VydmVkOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNoYW5nZXNPYnNlcnZlZCddO1xuICBASW5wdXQoKSBhZnRlckNvbHVtbk1vdmU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ29sdW1uTW92ZSddO1xuICBASW5wdXQoKSBhZnRlckNvbHVtblJlc2l6ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDb2x1bW5SZXNpemUnXTtcbiAgQElucHV0KCkgYWZ0ZXJDb2x1bW5Tb3J0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNvbHVtblNvcnQnXTtcbiAgQElucHV0KCkgYWZ0ZXJDb250ZXh0TWVudURlZmF1bHRPcHRpb25zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNvbnRleHRNZW51RGVmYXVsdE9wdGlvbnMnXTtcbiAgQElucHV0KCkgYWZ0ZXJDb250ZXh0TWVudUhpZGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ29udGV4dE1lbnVIaWRlJ107XG4gIEBJbnB1dCgpIGFmdGVyQ29udGV4dE1lbnVTaG93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNvbnRleHRNZW51U2hvdyddO1xuICBASW5wdXQoKSBhZnRlckNvcHk6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ29weSddO1xuICBASW5wdXQoKSBhZnRlckNvcHlMaW1pdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDb3B5TGltaXQnXTtcbiAgQElucHV0KCkgYWZ0ZXJDcmVhdGVDb2w6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ3JlYXRlQ29sJ107XG4gIEBJbnB1dCgpIGFmdGVyQ3JlYXRlUm93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNyZWF0ZVJvdyddO1xuICBASW5wdXQoKSBhZnRlckN1dDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDdXQnXTtcbiAgQElucHV0KCkgYWZ0ZXJEZXNlbGVjdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJEZXNlbGVjdCddO1xuICBASW5wdXQoKSBhZnRlckRlc3Ryb3k6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyRGVzdHJveSddO1xuICBASW5wdXQoKSBhZnRlckRldGFjaENoaWxkOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckRldGFjaENoaWxkJ107XG4gIEBJbnB1dCgpIGFmdGVyRG9jdW1lbnRLZXlEb3duOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckRvY3VtZW50S2V5RG93biddO1xuICBASW5wdXQoKSBhZnRlckRyYXdTZWxlY3Rpb246IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyRHJhd1NlbGVjdGlvbiddO1xuICBASW5wdXQoKSBhZnRlckRyb3Bkb3duTWVudURlZmF1bHRPcHRpb25zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckRyb3Bkb3duTWVudURlZmF1bHRPcHRpb25zJ107XG4gIEBJbnB1dCgpIGFmdGVyRHJvcGRvd25NZW51SGlkZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJEcm9wZG93bk1lbnVIaWRlJ107XG4gIEBJbnB1dCgpIGFmdGVyRHJvcGRvd25NZW51U2hvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJEcm9wZG93bk1lbnVTaG93J107XG4gIEBJbnB1dCgpIGFmdGVyRmlsdGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckZpbHRlciddO1xuICBASW5wdXQoKSBhZnRlckdldENlbGxNZXRhOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckdldENlbGxNZXRhJ107XG4gIEBJbnB1dCgpIGFmdGVyR2V0Q29sSGVhZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckdldENvbEhlYWRlciddO1xuICBASW5wdXQoKSBhZnRlckdldENvbHVtbkhlYWRlclJlbmRlcmVyczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJHZXRDb2x1bW5IZWFkZXJSZW5kZXJlcnMnXTtcbiAgQElucHV0KCkgYWZ0ZXJHZXRSb3dIZWFkZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyR2V0Um93SGVhZGVyJ107XG4gIEBJbnB1dCgpIGFmdGVyR2V0Um93SGVhZGVyUmVuZGVyZXJzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckdldFJvd0hlYWRlclJlbmRlcmVycyddO1xuICBASW5wdXQoKSBhZnRlckhpZGVDb2x1bW5zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckhpZGVDb2x1bW5zJ107XG4gIEBJbnB1dCgpIGFmdGVySGlkZVJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVySGlkZVJvd3MnXTtcbiAgQElucHV0KCkgYWZ0ZXJJbml0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckluaXQnXTtcbiAgQElucHV0KCkgYWZ0ZXJMYW5ndWFnZUNoYW5nZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJMYW5ndWFnZUNoYW5nZSddO1xuICBASW5wdXQoKSBhZnRlckxpc3RlbjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJMaXN0ZW4nXTtcbiAgQElucHV0KCkgYWZ0ZXJMb2FkRGF0YTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJMb2FkRGF0YSddO1xuICBASW5wdXQoKSBhZnRlck1lcmdlQ2VsbHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyTWVyZ2VDZWxscyddO1xuICBASW5wdXQoKSBhZnRlck1vZGlmeVRyYW5zZm9ybUVuZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJNb2RpZnlUcmFuc2Zvcm1FbmQnXTtcbiAgQElucHV0KCkgYWZ0ZXJNb2RpZnlUcmFuc2Zvcm1TdGFydDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJNb2RpZnlUcmFuc2Zvcm1TdGFydCddO1xuICBASW5wdXQoKSBhZnRlck1vbWVudHVtU2Nyb2xsOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlck1vbWVudHVtU2Nyb2xsJ107XG4gIEBJbnB1dCgpIGFmdGVyT25DZWxsQ29udGV4dE1lbnU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyT25DZWxsQ29udGV4dE1lbnUnXTtcbiAgQElucHV0KCkgYWZ0ZXJPbkNlbGxDb3JuZXJEYmxDbGljazogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJPbkNlbGxDb3JuZXJEYmxDbGljayddO1xuICBASW5wdXQoKSBhZnRlck9uQ2VsbENvcm5lck1vdXNlRG93bjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJPbkNlbGxDb3JuZXJNb3VzZURvd24nXTtcbiAgQElucHV0KCkgYWZ0ZXJPbkNlbGxNb3VzZURvd246IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyT25DZWxsTW91c2VEb3duJ107XG4gIEBJbnB1dCgpIGFmdGVyT25DZWxsTW91c2VPdXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyT25DZWxsTW91c2VPdXQnXTtcbiAgQElucHV0KCkgYWZ0ZXJPbkNlbGxNb3VzZU92ZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyT25DZWxsTW91c2VPdmVyJ107XG4gIEBJbnB1dCgpIGFmdGVyT25DZWxsTW91c2VVcDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJPbkNlbGxNb3VzZVVwJ107XG4gIEBJbnB1dCgpIGFmdGVyUGFzdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyUGFzdGUnXTtcbiAgQElucHV0KCkgYWZ0ZXJQbHVnaW5zSW5pdGlhbGl6ZWQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyUGx1Z2luc0luaXRpYWxpemVkJ107XG4gIEBJbnB1dCgpIGFmdGVyUmVkbzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJSZWRvJ107XG4gIEBJbnB1dCgpIGFmdGVyUmVmcmVzaERpbWVuc2lvbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyUmVmcmVzaERpbWVuc2lvbnMnXTtcbiAgQElucHV0KCkgYWZ0ZXJSZW1vdmVDZWxsTWV0YTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJSZW1vdmVDZWxsTWV0YSddO1xuICBASW5wdXQoKSBhZnRlclJlbW92ZUNvbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJSZW1vdmVDb2wnXTtcbiAgQElucHV0KCkgYWZ0ZXJSZW1vdmVSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyUmVtb3ZlUm93J107XG4gIEBJbnB1dCgpIGFmdGVyUmVuZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclJlbmRlciddO1xuICBASW5wdXQoKSBhZnRlclJlbmRlcmVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclJlbmRlcmVyJ107XG4gIEBJbnB1dCgpIGFmdGVyUm93TW92ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJSb3dNb3ZlJ107XG4gIEBJbnB1dCgpIGFmdGVyUm93UmVzaXplOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclJvd1Jlc2l6ZSddO1xuICBASW5wdXQoKSBhZnRlclNjcm9sbEhvcml6b250YWxseTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJTY3JvbGxIb3Jpem9udGFsbHknXTtcbiAgQElucHV0KCkgYWZ0ZXJTY3JvbGxWZXJ0aWNhbGx5OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclNjcm9sbFZlcnRpY2FsbHknXTtcbiAgQElucHV0KCkgYWZ0ZXJTZWxlY3Rpb246IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyU2VsZWN0aW9uJ107XG4gIEBJbnB1dCgpIGFmdGVyU2VsZWN0aW9uQnlQcm9wOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclNlbGVjdGlvbkJ5UHJvcCddO1xuICBASW5wdXQoKSBhZnRlclNlbGVjdGlvbkVuZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJTZWxlY3Rpb25FbmQnXTtcbiAgQElucHV0KCkgYWZ0ZXJTZWxlY3Rpb25FbmRCeVByb3A6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyU2VsZWN0aW9uRW5kQnlQcm9wJ107XG4gIEBJbnB1dCgpIGFmdGVyU2V0Q2VsbE1ldGE6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyU2V0Q2VsbE1ldGEnXTtcbiAgQElucHV0KCkgYWZ0ZXJTZXREYXRhQXRDZWxsOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclNldERhdGFBdENlbGwnXTtcbiAgQElucHV0KCkgYWZ0ZXJTZXREYXRhQXRSb3dQcm9wOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclNldERhdGFBdFJvd1Byb3AnXTtcbiAgQElucHV0KCkgYWZ0ZXJUcmltUm93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclRyaW1Sb3cnXTtcbiAgQElucHV0KCkgYWZ0ZXJVbmRvOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclVuZG8nXTtcbiAgQElucHV0KCkgYWZ0ZXJVbmhpZGVDb2x1bW5zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclVuaGlkZUNvbHVtbnMnXTtcbiAgQElucHV0KCkgYWZ0ZXJVbmhpZGVSb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclVuaGlkZVJvd3MnXTtcbiAgQElucHV0KCkgYWZ0ZXJVbmxpc3RlbjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJVbmxpc3RlbiddO1xuICBASW5wdXQoKSBhZnRlclVubWVyZ2VDZWxsczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJVbm1lcmdlQ2VsbHMnXTtcbiAgQElucHV0KCkgYWZ0ZXJVbnRyaW1Sb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVW50cmltUm93J107XG4gIEBJbnB1dCgpIGFmdGVyVXBkYXRlU2V0dGluZ3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVXBkYXRlU2V0dGluZ3MnXTtcbiAgQElucHV0KCkgYWZ0ZXJWYWxpZGF0ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJWYWxpZGF0ZSddO1xuICBASW5wdXQoKSBhZnRlclZpZXdwb3J0Q29sdW1uQ2FsY3VsYXRvck92ZXJyaWRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclZpZXdwb3J0Q29sdW1uQ2FsY3VsYXRvck92ZXJyaWRlJ107XG4gIEBJbnB1dCgpIGFmdGVyVmlld3BvcnRSb3dDYWxjdWxhdG9yT3ZlcnJpZGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVmlld3BvcnRSb3dDYWxjdWxhdG9yT3ZlcnJpZGUnXTtcbiAgQElucHV0KCkgYmVmb3JlQWRkQ2hpbGQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUFkZENoaWxkJ107XG4gIEBJbnB1dCgpIGJlZm9yZUF1dG9maWxsOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVBdXRvZmlsbCddO1xuICBASW5wdXQoKSBiZWZvcmVBdXRvZmlsbEluc2lkZVBvcHVsYXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVBdXRvZmlsbEluc2lkZVBvcHVsYXRlJ107XG4gIEBJbnB1dCgpIGJlZm9yZUNlbGxBbGlnbm1lbnQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNlbGxBbGlnbm1lbnQnXTtcbiAgQElucHV0KCkgYmVmb3JlQ2hhbmdlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVDaGFuZ2UnXTtcbiAgQElucHV0KCkgYmVmb3JlQ2hhbmdlUmVuZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVDaGFuZ2VSZW5kZXInXTtcbiAgQElucHV0KCkgYmVmb3JlQ29sdW1uTW92ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ29sdW1uTW92ZSddO1xuICBASW5wdXQoKSBiZWZvcmVDb2x1bW5SZXNpemU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNvbHVtblJlc2l6ZSddO1xuICBASW5wdXQoKSBiZWZvcmVDb2x1bW5Tb3J0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVDb2x1bW5Tb3J0J107XG4gIEBJbnB1dCgpIGJlZm9yZUNvbnRleHRNZW51U2V0SXRlbXM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNvbnRleHRNZW51U2V0SXRlbXMnXTtcbiAgQElucHV0KCkgYmVmb3JlQ29udGV4dE1lbnVTaG93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVDb250ZXh0TWVudVNob3cnXTtcbiAgQElucHV0KCkgYmVmb3JlQ29weTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ29weSddO1xuICBASW5wdXQoKSBiZWZvcmVDcmVhdGVDb2w6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNyZWF0ZUNvbCddO1xuICBASW5wdXQoKSBiZWZvcmVDcmVhdGVSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNyZWF0ZVJvdyddO1xuICBASW5wdXQoKSBiZWZvcmVDdXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUN1dCddO1xuICBASW5wdXQoKSBiZWZvcmVEZXRhY2hDaGlsZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlRGV0YWNoQ2hpbGQnXTtcbiAgQElucHV0KCkgYmVmb3JlRHJhd0JvcmRlcnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZURyYXdCb3JkZXJzJ107XG4gIEBJbnB1dCgpIGJlZm9yZURyb3Bkb3duTWVudVNldEl0ZW1zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVEcm9wZG93bk1lbnVTZXRJdGVtcyddO1xuICBASW5wdXQoKSBiZWZvcmVEcm9wZG93bk1lbnVTaG93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVEcm9wZG93bk1lbnVTaG93J107XG4gIEBJbnB1dCgpIGJlZm9yZUZpbHRlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlRmlsdGVyJ107XG4gIEBJbnB1dCgpIGJlZm9yZUdldENlbGxNZXRhOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVHZXRDZWxsTWV0YSddO1xuICBASW5wdXQoKSBiZWZvcmVIaWRlQ29sdW1uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlSGlkZUNvbHVtbnMnXTtcbiAgQElucHV0KCkgYmVmb3JlSGlkZVJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUhpZGVSb3dzJ107XG4gIEBJbnB1dCgpIGJlZm9yZUluaXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUluaXQnXTtcbiAgQElucHV0KCkgYmVmb3JlSW5pdFdhbGtvbnRhYmxlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVJbml0V2Fsa29udGFibGUnXTtcbiAgQElucHV0KCkgYmVmb3JlS2V5RG93bjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlS2V5RG93biddO1xuICBASW5wdXQoKSBiZWZvcmVMYW5ndWFnZUNoYW5nZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlTGFuZ3VhZ2VDaGFuZ2UnXTtcbiAgQElucHV0KCkgYmVmb3JlTWVyZ2VDZWxsczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlTWVyZ2VDZWxscyddO1xuICBASW5wdXQoKSBiZWZvcmVPbkNlbGxDb250ZXh0TWVudTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlT25DZWxsQ29udGV4dE1lbnUnXTtcbiAgQElucHV0KCkgYmVmb3JlT25DZWxsTW91c2VEb3duOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVPbkNlbGxNb3VzZURvd24nXTtcbiAgQElucHV0KCkgYmVmb3JlT25DZWxsTW91c2VPdXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZU9uQ2VsbE1vdXNlT3V0J107XG4gIEBJbnB1dCgpIGJlZm9yZU9uQ2VsbE1vdXNlT3ZlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlT25DZWxsTW91c2VPdmVyJ107XG4gIEBJbnB1dCgpIGJlZm9yZU9uQ2VsbE1vdXNlVXA6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZU9uQ2VsbE1vdXNlVXAnXTtcbiAgQElucHV0KCkgYmVmb3JlUGFzdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVBhc3RlJ107XG4gIEBJbnB1dCgpIGJlZm9yZVJlZG86IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJlZG8nXTtcbiAgQElucHV0KCkgYmVmb3JlUmVmcmVzaERpbWVuc2lvbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJlZnJlc2hEaW1lbnNpb25zJ107XG4gIEBJbnB1dCgpIGJlZm9yZVJlbW92ZUNlbGxDbGFzc05hbWVzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVSZW1vdmVDZWxsQ2xhc3NOYW1lcyddO1xuICBASW5wdXQoKSBiZWZvcmVSZW1vdmVDZWxsTWV0YTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlUmVtb3ZlQ2VsbE1ldGEnXTtcbiAgQElucHV0KCkgYmVmb3JlUmVtb3ZlQ29sOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVSZW1vdmVDb2wnXTtcbiAgQElucHV0KCkgYmVmb3JlUmVtb3ZlUm93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVSZW1vdmVSb3cnXTtcbiAgQElucHV0KCkgYmVmb3JlUmVuZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVSZW5kZXInXTtcbiAgQElucHV0KCkgYmVmb3JlUmVuZGVyZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJlbmRlcmVyJ107XG4gIEBJbnB1dCgpIGJlZm9yZVJvd01vdmU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJvd01vdmUnXTtcbiAgQElucHV0KCkgYmVmb3JlUm93UmVzaXplOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVSb3dSZXNpemUnXTtcbiAgQElucHV0KCkgYmVmb3JlU2V0UmFuZ2VFbmQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVNldFJhbmdlRW5kJ107XG4gIEBJbnB1dCgpIGJlZm9yZVNldFJhbmdlU3RhcnQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVNldFJhbmdlU3RhcnQnXTtcbiAgQElucHV0KCkgYmVmb3JlU2V0UmFuZ2VTdGFydE9ubHk6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVNldFJhbmdlU3RhcnRPbmx5J107XG4gIEBJbnB1dCgpIGJlZm9yZVN0cmV0Y2hpbmdDb2x1bW5XaWR0aDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlU3RyZXRjaGluZ0NvbHVtbldpZHRoJ107XG4gIEBJbnB1dCgpIGJlZm9yZVRvdWNoU2Nyb2xsOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVUb3VjaFNjcm9sbCddO1xuICBASW5wdXQoKSBiZWZvcmVUcmltUm93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVUcmltUm93J107XG4gIEBJbnB1dCgpIGJlZm9yZVVuZG86IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVVuZG8nXTtcbiAgQElucHV0KCkgYmVmb3JlVW5oaWRlQ29sdW1uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlVW5oaWRlQ29sdW1ucyddO1xuICBASW5wdXQoKSBiZWZvcmVVbmhpZGVSb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVVbmhpZGVSb3dzJ107XG4gIEBJbnB1dCgpIGJlZm9yZVVubWVyZ2VDZWxsczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlVW5tZXJnZUNlbGxzJ107XG4gIEBJbnB1dCgpIGJlZm9yZVVudHJpbVJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlVW50cmltUm93J107XG4gIEBJbnB1dCgpIGJlZm9yZVZhbGlkYXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVWYWxpZGF0ZSddO1xuICBASW5wdXQoKSBiZWZvcmVWYWx1ZVJlbmRlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlVmFsdWVSZW5kZXInXTtcbiAgQElucHV0KCkgY29uc3RydWN0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb25zdHJ1Y3QnXTtcbiAgQElucHV0KCkgaGlkZGVuQ29sdW1uOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydoaWRkZW5Db2x1bW4nXTtcbiAgQElucHV0KCkgaGlkZGVuUm93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydoaWRkZW5Sb3cnXTtcbiAgQElucHV0KCkgaW5pdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snaW5pdCddO1xuICBASW5wdXQoKSBtb2RpZnlBdXRvZmlsbFJhbmdlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlBdXRvZmlsbFJhbmdlJ107XG4gIEBJbnB1dCgpIG1vZGlmeUNvbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5Q29sJ107XG4gIEBJbnB1dCgpIG1vZGlmeUNvbEhlYWRlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5Q29sSGVhZGVyJ107XG4gIEBJbnB1dCgpIG1vZGlmeUNvbHVtbkhlYWRlckhlaWdodDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5Q29sdW1uSGVhZGVySGVpZ2h0J107XG4gIEBJbnB1dCgpIG1vZGlmeUNvbFdpZHRoOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlDb2xXaWR0aCddO1xuICBASW5wdXQoKSBtb2RpZnlDb3B5YWJsZVJhbmdlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlDb3B5YWJsZVJhbmdlJ107XG4gIEBJbnB1dCgpIG1vZGlmeURhdGE6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeURhdGEnXTtcbiAgQElucHV0KCkgbW9kaWZ5R2V0Q2VsbENvb3JkczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5R2V0Q2VsbENvb3JkcyddO1xuICBASW5wdXQoKSBtb2RpZnlSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeVJvdyddO1xuICBASW5wdXQoKSBtb2RpZnlSb3dEYXRhOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlSb3dEYXRhJ107XG4gIEBJbnB1dCgpIG1vZGlmeVJvd0hlYWRlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5Um93SGVhZGVyJ107XG4gIEBJbnB1dCgpIG1vZGlmeVJvd0hlYWRlcldpZHRoOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlSb3dIZWFkZXJXaWR0aCddO1xuICBASW5wdXQoKSBtb2RpZnlSb3dIZWlnaHQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeVJvd0hlaWdodCddO1xuICBASW5wdXQoKSBtb2RpZnlUcmFuc2Zvcm1FbmQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeVRyYW5zZm9ybUVuZCddO1xuICBASW5wdXQoKSBtb2RpZnlUcmFuc2Zvcm1TdGFydDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5VHJhbnNmb3JtU3RhcnQnXTtcbiAgQElucHV0KCkgcGVyc2lzdGVudFN0YXRlTG9hZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncGVyc2lzdGVudFN0YXRlTG9hZCddO1xuICBASW5wdXQoKSBwZXJzaXN0ZW50U3RhdGVSZXNldDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncGVyc2lzdGVudFN0YXRlUmVzZXQnXTtcbiAgQElucHV0KCkgcGVyc2lzdGVudFN0YXRlU2F2ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncGVyc2lzdGVudFN0YXRlU2F2ZSddO1xuICBASW5wdXQoKSBza2lwTGVuZ3RoQ2FjaGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3NraXBMZW5ndGhDYWNoZSddO1xuICBASW5wdXQoKSB1bm1vZGlmeUNvbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndW5tb2RpZnlDb2wnXTtcbiAgQElucHV0KCkgdW5tb2RpZnlSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3VubW9kaWZ5Um93J107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfaG90VGFibGVSZWdpc3RlcmVyOiBIb3RUYWJsZVJlZ2lzdGVyZXIsXG4gICAgcHJpdmF0ZSBfaG90U2V0dGluZ3NSZXNvbHZlcjogSG90U2V0dGluZ3NSZXNvbHZlcixcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzID0gdGhpcy5faG90U2V0dGluZ3NSZXNvbHZlci5tZXJnZVNldHRpbmdzKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuY29sdW1uc0NvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuXG4gICAgICB0aGlzLmNvbHVtbnNDb21wb25lbnRzLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb2x1bW5zLnB1c2godGhpcy5faG90U2V0dGluZ3NSZXNvbHZlci5tZXJnZVNldHRpbmdzKGNvbHVtbikpO1xuICAgICAgfSk7XG5cbiAgICAgIG9wdGlvbnNbJ2NvbHVtbnMnXSA9IGNvbHVtbnM7XG4gICAgfVxuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuaG90SW5zdGFuY2UgPSBuZXcgSGFuZHNvbnRhYmxlLkNvcmUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh0aGlzLmhvdElkKSB7XG4gICAgICAgIHRoaXMuX2hvdFRhYmxlUmVnaXN0ZXJlci5yZWdpc3Rlckluc3RhbmNlKHRoaXMuaG90SWQsIHRoaXMuaG90SW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5ob3RJbnN0YW5jZS5pbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaG90SW5zdGFuY2UgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld09wdGlvbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3MgPSB0aGlzLl9ob3RTZXR0aW5nc1Jlc29sdmVyLnByZXBhcmVDaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgdGhpcy51cGRhdGVIb3RUYWJsZShuZXdPcHRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmhvdEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmhvdElkKSB7XG4gICAgICB0aGlzLl9ob3RUYWJsZVJlZ2lzdGVyZXIucmVtb3ZlSW5zdGFuY2UodGhpcy5ob3RJZCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSG90VGFibGUobmV3U2V0dGluZ3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3MgKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhvdEluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuaG90SW5zdGFuY2UudXBkYXRlU2V0dGluZ3MobmV3U2V0dGluZ3MsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWZ0ZXJDb2x1bW5zQ2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbnNDb21wb25lbnRzID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2x1bW5zQ29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb2x1bW5zOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbXSA9IFtdO1xuXG4gICAgICB0aGlzLmNvbHVtbnNDb21wb25lbnRzLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb2x1bW5zLnB1c2godGhpcy5faG90U2V0dGluZ3NSZXNvbHZlci5tZXJnZVNldHRpbmdzKGNvbHVtbikpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSB7XG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnNcbiAgICAgIH07XG5cbiAgICAgIHRoaXMudXBkYXRlSG90VGFibGUobmV3T3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgb25BZnRlckNvbHVtbnNOdW1iZXJDaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uczogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzW10gPSBbXTtcblxuICAgIGlmICh0aGlzLmNvbHVtbnNDb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29sdW1uc0NvbXBvbmVudHMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbnMucHVzaCh0aGlzLl9ob3RTZXR0aW5nc1Jlc29sdmVyLm1lcmdlU2V0dGluZ3MoY29sdW1uKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUhvdFRhYmxlKHsgY29sdW1ucyB9KTtcbiAgfVxuXG4gIGFkZENvbHVtbihjb2x1bW46IEhvdENvbHVtbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uc0NvbXBvbmVudHMucHVzaChjb2x1bW4pO1xuICAgIHRoaXMub25BZnRlckNvbHVtbnNOdW1iZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIHJlbW92ZUNvbHVtbihjb2x1bW46IEhvdENvbHVtbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmNvbHVtbnNDb21wb25lbnRzLmluZGV4T2YoY29sdW1uKTtcblxuICAgIHRoaXMuY29sdW1uc0NvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLm9uQWZ0ZXJDb2x1bW5zTnVtYmVyQ2hhbmdlKCk7XG4gIH1cblxufVxuIl19