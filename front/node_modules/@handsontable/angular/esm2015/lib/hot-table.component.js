/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from './hot-table-registerer.service';
import { HotSettingsResolver } from './hot-settings-resolver.service';
export class HotTableComponent {
    /**
     * @param {?} _ngZone
     * @param {?} _hotTableRegisterer
     * @param {?} _hotSettingsResolver
     */
    constructor(_ngZone, _hotTableRegisterer, _hotSettingsResolver) {
        this._ngZone = _ngZone;
        this._hotTableRegisterer = _hotTableRegisterer;
        this._hotSettingsResolver = _hotSettingsResolver;
        this.columnsComponents = [];
        this.hotId = '';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const options = this._hotSettingsResolver.mergeSettings(this);
        if (this.columnsComponents.length > 0) {
            /** @type {?} */
            const columns = [];
            this.columnsComponents.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                columns.push(this._hotSettingsResolver.mergeSettings(column));
            }));
            options['columns'] = columns;
        }
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.hotInstance = new Handsontable.Core(this.container.nativeElement, options);
            if (this.hotId) {
                this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
            }
            // @ts-ignore
            this.hotInstance.init();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.hotInstance === void 0) {
            return;
        }
        /** @type {?} */
        const newOptions = this._hotSettingsResolver.prepareChanges(changes);
        this.updateHotTable(newOptions);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.hotInstance.destroy();
        }));
        if (this.hotId) {
            this._hotTableRegisterer.removeInstance(this.hotId);
        }
    }
    /**
     * @param {?} newSettings
     * @return {?}
     */
    updateHotTable(newSettings) {
        if (!this.hotInstance) {
            return;
        }
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.hotInstance.updateSettings(newSettings, false);
        }));
    }
    /**
     * @return {?}
     */
    onAfterColumnsChange() {
        if (this.columnsComponents === void 0) {
            return;
        }
        if (this.columnsComponents.length > 0) {
            /** @type {?} */
            const columns = [];
            this.columnsComponents.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                columns.push(this._hotSettingsResolver.mergeSettings(column));
            }));
            /** @type {?} */
            const newOptions = {
                columns: columns
            };
            this.updateHotTable(newOptions);
        }
    }
    /**
     * @return {?}
     */
    onAfterColumnsNumberChange() {
        /** @type {?} */
        const columns = [];
        if (this.columnsComponents.length > 0) {
            this.columnsComponents.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                columns.push(this._hotSettingsResolver.mergeSettings(column));
            }));
        }
        this.updateHotTable({ columns });
    }
    /**
     * @param {?} column
     * @return {?}
     */
    addColumn(column) {
        this.columnsComponents.push(column);
        this.onAfterColumnsNumberChange();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    removeColumn(column) {
        /** @type {?} */
        const index = this.columnsComponents.indexOf(column);
        this.columnsComponents.splice(index, 1);
        this.onAfterColumnsNumberChange();
    }
}
HotTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'hot-table',
                template: '<div #container [id]="hotId"></div>',
                encapsulation: ViewEncapsulation.None,
                providers: [HotTableRegisterer, HotSettingsResolver]
            }] }
];
/** @nocollapse */
HotTableComponent.ctorParameters = () => [
    { type: NgZone },
    { type: HotTableRegisterer },
    { type: HotSettingsResolver }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5kc29udGFibGUvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ob3QtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLFlBQVksTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFTdEUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBb1M1QixZQUNVLE9BQWUsRUFDZixtQkFBdUMsRUFDdkMsb0JBQXlDO1FBRnpDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFuUzNDLHNCQUFpQixHQUF5QixFQUFFLENBQUM7UUFHNUMsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQWlTakIsQ0FBQzs7OztJQUVKLGVBQWU7O2NBQ1AsT0FBTyxHQUE4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUV4RixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDL0IsT0FBTyxHQUFHLEVBQUU7WUFFbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLEVBQUMsQ0FBQztZQUVI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RCxnREFBK0U7O0lBQy9FLDZDQUF5RTs7SUFDekUsK0NBQTZFOztJQUM3RSw0Q0FBdUU7O0lBQ3ZFLDJDQUFxRTs7SUFDckUsOENBQTJFOztJQUMzRSxzQ0FBMkQ7O0lBQzNELHlDQUFpRTs7SUFDakUsc0NBQTJEOztJQUMzRCxpQ0FBaUQ7O0lBQ2pELGdEQUErRTs7SUFDL0Usc0NBQTJEOztJQUMzRCw0Q0FBdUU7O0lBQ3ZFLHFEQUF5Rjs7SUFDekYsMkNBQXFFOztJQUNyRSxnREFBK0U7O0lBQy9FLHVDQUE2RDs7SUFDN0QsZ0RBQStFOztJQUMvRSxzQ0FBMkQ7O0lBQzNELDBDQUFtRTs7SUFDbkUsNENBQXVFOztJQUN2RSxpREFBaUY7O0lBQ2pGLDRDQUF1RTs7SUFDdkUsK0NBQTZFOztJQUM3RSxpREFBaUY7O0lBQ2pGLGdEQUErRTs7SUFDL0UsaURBQWlGOztJQUNqRixnREFBK0U7O0lBQy9FLDRDQUF1RTs7SUFDdkUsd0NBQStEOztJQUMvRCx3Q0FBK0Q7Ozs7O0lBRzdELG9DQUF1Qjs7Ozs7SUFDdkIsZ0RBQStDOzs7OztJQUMvQyxpREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBIYW5kc29udGFibGUgZnJvbSAnaGFuZHNvbnRhYmxlJztcbmltcG9ydCB7IEhvdFRhYmxlUmVnaXN0ZXJlciB9IGZyb20gJy4vaG90LXRhYmxlLXJlZ2lzdGVyZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIb3RTZXR0aW5nc1Jlc29sdmVyIH0gZnJvbSAnLi9ob3Qtc2V0dGluZ3MtcmVzb2x2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIb3RDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2hvdC1jb2x1bW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG90LXRhYmxlJyxcbiAgdGVtcGxhdGU6ICc8ZGl2ICNjb250YWluZXIgW2lkXT1cImhvdElkXCI+PC9kaXY+JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbIEhvdFRhYmxlUmVnaXN0ZXJlciwgSG90U2V0dGluZ3NSZXNvbHZlciBdLFxufSlcbmV4cG9ydCBjbGFzcyBIb3RUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBjb250YWluZXI7XG5cbiAgcHJpdmF0ZSBob3RJbnN0YW5jZTogSGFuZHNvbnRhYmxlO1xuICBwcml2YXRlIGNvbHVtbnNDb21wb25lbnRzOiBIb3RDb2x1bW5Db21wb25lbnRbXSA9IFtdO1xuICAvLyBjb21wb25lbnQgaW5wdXRzXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzO1xuICBASW5wdXQoKSBob3RJZCA9ICcnO1xuICAvLyBoYW5kc29udGFibGUgb3B0aW9uc1xuICBASW5wdXQoKSBhY3RpdmVIZWFkZXJDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FjdGl2ZUhlYWRlckNsYXNzTmFtZSddO1xuICBASW5wdXQoKSBhbGxvd0VtcHR5OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhbGxvd0VtcHR5J107XG4gIEBJbnB1dCgpIGFsbG93SHRtbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWxsb3dIdG1sJ107XG4gIEBJbnB1dCgpIGFsbG93SW5zZXJ0Q29sdW1uOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhbGxvd0luc2VydENvbHVtbiddO1xuICBASW5wdXQoKSBhbGxvd0luc2VydFJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWxsb3dJbnNlcnRSb3cnXTtcbiAgQElucHV0KCkgYWxsb3dJbnZhbGlkOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhbGxvd0ludmFsaWQnXTtcbiAgQElucHV0KCkgYWxsb3dSZW1vdmVDb2x1bW46IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FsbG93UmVtb3ZlQ29sdW1uJ107XG4gIEBJbnB1dCgpIGFsbG93UmVtb3ZlUm93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhbGxvd1JlbW92ZVJvdyddO1xuICBASW5wdXQoKSBhdXRvQ29sdW1uU2l6ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYXV0b0NvbHVtblNpemUnXTtcbiAgQElucHV0KCkgYXV0b1Jvd1NpemU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2F1dG9Sb3dTaXplJ107XG4gIEBJbnB1dCgpIGF1dG9XcmFwQ29sOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhdXRvV3JhcENvbCddO1xuICBASW5wdXQoKSBhdXRvV3JhcFJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYXV0b1dyYXBSb3cnXTtcbiAgQElucHV0KCkgYmluZFJvd3NXaXRoSGVhZGVyczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmluZFJvd3NXaXRoSGVhZGVycyddO1xuICBASW5wdXQoKSBjZWxsOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjZWxsJ107XG4gIEBJbnB1dCgpIGNlbGxzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjZWxscyddO1xuICBASW5wdXQoKSBjaGVja2VkVGVtcGxhdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NoZWNrZWRUZW1wbGF0ZSddO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NsYXNzTmFtZSddO1xuICBASW5wdXQoKSBjb2xIZWFkZXJzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb2xIZWFkZXJzJ107XG4gIEBJbnB1dCgpIGNvbGxhcHNpYmxlQ29sdW1uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29sbGFwc2libGVDb2x1bW5zJ107XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlckhlaWdodDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29sdW1uSGVhZGVySGVpZ2h0J107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbHVtbnMnXTtcbiAgQElucHV0KCkgY29sdW1uU29ydGluZzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29sdW1uU29ydGluZyddO1xuICBASW5wdXQoKSBjb2x1bW5TdW1tYXJ5OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb2x1bW5TdW1tYXJ5J107XG4gIEBJbnB1dCgpIGNvbFdpZHRoczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29sV2lkdGhzJ107XG4gIEBJbnB1dCgpIGNvbW1lbnRlZENlbGxDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbW1lbnRlZENlbGxDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgY29tbWVudHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbW1lbnRzJ107XG4gIEBJbnB1dCgpIGNvbnRleHRNZW51OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb250ZXh0TWVudSddO1xuICBASW5wdXQoKSBjb3B5YWJsZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29weWFibGUnXTtcbiAgQElucHV0KCkgY29weVBhc3RlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb3B5UGFzdGUnXTtcbiAgQElucHV0KCkgY29ycmVjdEZvcm1hdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29ycmVjdEZvcm1hdCddO1xuICBASW5wdXQoKSBjdXJyZW50Q29sQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjdXJyZW50Q29sQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIGN1cnJlbnRIZWFkZXJDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2N1cnJlbnRIZWFkZXJDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgY3VycmVudFJvd0NsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY3VycmVudFJvd0NsYXNzTmFtZSddO1xuICBASW5wdXQoKSBjdXN0b21Cb3JkZXJzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjdXN0b21Cb3JkZXJzJ107XG4gIEBJbnB1dCgpIGRhdGE6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2RhdGEnXTtcbiAgQElucHV0KCkgZGF0YVNjaGVtYTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZGF0YVNjaGVtYSddO1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydkYXRlRm9ybWF0J107XG4gIEBJbnB1dCgpIGRlYnVnOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydkZWJ1ZyddO1xuICBASW5wdXQoKSBkZWZhdWx0RGF0ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZGVmYXVsdERhdGUnXTtcbiAgQElucHV0KCkgZGlzYWJsZVZpc3VhbFNlbGVjdGlvbjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZGlzYWJsZVZpc3VhbFNlbGVjdGlvbiddO1xuICBASW5wdXQoKSBkcmFnVG9TY3JvbGw6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2RyYWdUb1Njcm9sbCddO1xuICBASW5wdXQoKSBkcm9wZG93bk1lbnU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2Ryb3Bkb3duTWVudSddO1xuICBASW5wdXQoKSBlZGl0b3I6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2VkaXRvciddO1xuICBASW5wdXQoKSBlbnRlckJlZ2luc0VkaXRpbmc6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2VudGVyQmVnaW5zRWRpdGluZyddO1xuICBASW5wdXQoKSBlbnRlck1vdmVzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydlbnRlck1vdmVzJ107XG4gIEBJbnB1dCgpIGZpbGxIYW5kbGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2ZpbGxIYW5kbGUnXTtcbiAgQElucHV0KCkgZmlsdGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmaWx0ZXInXTtcbiAgQElucHV0KCkgZmlsdGVyaW5nQ2FzZVNlbnNpdGl2ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZmlsdGVyaW5nQ2FzZVNlbnNpdGl2ZSddO1xuICBASW5wdXQoKSBmaWx0ZXJzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmaWx0ZXJzJ107XG4gIEBJbnB1dCgpIGZpeGVkQ29sdW1uc0xlZnQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2ZpeGVkQ29sdW1uc0xlZnQnXTtcbiAgQElucHV0KCkgZml4ZWRSb3dzQm90dG9tOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmaXhlZFJvd3NCb3R0b20nXTtcbiAgQElucHV0KCkgZml4ZWRSb3dzVG9wOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmaXhlZFJvd3NUb3AnXTtcbiAgQElucHV0KCkgZm9ybXVsYXM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2Zvcm11bGFzJ107XG4gIEBJbnB1dCgpIGZyYWdtZW50U2VsZWN0aW9uOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmcmFnbWVudFNlbGVjdGlvbiddO1xuICBASW5wdXQoKSBnYW50dENoYXJ0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydnYW50dENoYXJ0J107XG4gIEBJbnB1dCgpIGhlYWRlclRvb2x0aXBzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydoZWFkZXJUb29sdGlwcyddO1xuICBASW5wdXQoKSBoZWlnaHQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2hlaWdodCddO1xuICBASW5wdXQoKSBoaWRkZW5Db2x1bW5zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydoaWRkZW5Db2x1bW5zJ107XG4gIEBJbnB1dCgpIGhpZGRlblJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2hpZGRlblJvd3MnXTtcbiAgQElucHV0KCkgaW52YWxpZENlbGxDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2ludmFsaWRDZWxsQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIGxhYmVsOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydsYWJlbCddO1xuICBASW5wdXQoKSBsYW5ndWFnZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbGFuZ3VhZ2UnXTtcbiAgQElucHV0KCkgbGljZW5zZUtleTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbGljZW5zZUtleSddO1xuICBASW5wdXQoKSBtYW51YWxDb2x1bW5GcmVlemU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21hbnVhbENvbHVtbkZyZWV6ZSddO1xuICBASW5wdXQoKSBtYW51YWxDb2x1bW5Nb3ZlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtYW51YWxDb2x1bW5Nb3ZlJ107XG4gIEBJbnB1dCgpIG1hbnVhbENvbHVtblJlc2l6ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWFudWFsQ29sdW1uUmVzaXplJ107XG4gIEBJbnB1dCgpIG1hbnVhbFJvd01vdmU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21hbnVhbFJvd01vdmUnXTtcbiAgQElucHV0KCkgbWFudWFsUm93UmVzaXplOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtYW51YWxSb3dSZXNpemUnXTtcbiAgQElucHV0KCkgbWF4Q29sczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWF4Q29scyddO1xuICBASW5wdXQoKSBtYXhSb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtYXhSb3dzJ107XG4gIEBJbnB1dCgpIG1lcmdlQ2VsbHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21lcmdlQ2VsbHMnXTtcbiAgQElucHV0KCkgbWluQ29sczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWluQ29scyddO1xuICBASW5wdXQoKSBtaW5Sb3dzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtaW5Sb3dzJ107XG4gIEBJbnB1dCgpIG1pblNwYXJlQ29sczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWluU3BhcmVDb2xzJ107XG4gIEBJbnB1dCgpIG1pblNwYXJlUm93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbWluU3BhcmVSb3dzJ107XG4gIEBJbnB1dCgpIG11bHRpQ29sdW1uU29ydGluZzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbXVsdGlDb2x1bW5Tb3J0aW5nJ107XG4gIEBJbnB1dCgpIG5lc3RlZEhlYWRlcnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ25lc3RlZEhlYWRlcnMnXTtcbiAgQElucHV0KCkgbmVzdGVkUm93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbmVzdGVkUm93cyddO1xuICBASW5wdXQoKSBub1dvcmRXcmFwQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydub1dvcmRXcmFwQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIG51bWVyaWNGb3JtYXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ251bWVyaWNGb3JtYXQnXTtcbiAgQElucHV0KCkgb2JzZXJ2ZUNoYW5nZXM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ29ic2VydmVDaGFuZ2VzJ107XG4gIEBJbnB1dCgpIG9ic2VydmVET01WaXNpYmlsaXR5OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydvYnNlcnZlRE9NVmlzaWJpbGl0eSddO1xuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2tEZXNlbGVjdHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ291dHNpZGVDbGlja0Rlc2VsZWN0cyddO1xuICBASW5wdXQoKSBwZXJzaXN0ZW50U3RhdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3BlcnNpc3RlbnRTdGF0ZSddO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncGxhY2Vob2xkZXInXTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJDZWxsQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydwbGFjZWhvbGRlckNlbGxDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgcHJldmVudE92ZXJmbG93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydwcmV2ZW50T3ZlcmZsb3cnXTtcbiAgQElucHV0KCkgcmVhZE9ubHk6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3JlYWRPbmx5J107XG4gIEBJbnB1dCgpIHJlYWRPbmx5Q2VsbENsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncmVhZE9ubHlDZWxsQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIHJlbmRlckFsbFJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3JlbmRlckFsbFJvd3MnXTtcbiAgQElucHV0KCkgcmVuZGVyZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3JlbmRlcmVyJ107XG4gIEBJbnB1dCgpIHJvd0hlYWRlcnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3Jvd0hlYWRlcnMnXTtcbiAgQElucHV0KCkgcm93SGVhZGVyV2lkdGg6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3Jvd0hlYWRlcldpZHRoJ107XG4gIEBJbnB1dCgpIHJvd0hlaWdodHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3Jvd0hlaWdodHMnXTtcbiAgQElucHV0KCkgc2VhcmNoOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydzZWFyY2gnXTtcbiAgQElucHV0KCkgc2VsZWN0aW9uTW9kZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc2VsZWN0aW9uTW9kZSddO1xuICBASW5wdXQoKSBzZWxlY3RPcHRpb25zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydzZWxlY3RPcHRpb25zJ107XG4gIEBJbnB1dCgpIHNraXBDb2x1bW5PblBhc3RlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydza2lwQ29sdW1uT25QYXN0ZSddO1xuICBASW5wdXQoKSBza2lwUm93T25QYXN0ZTogYW55O1xuICBASW5wdXQoKSBzb3J0QnlSZWxldmFuY2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3NvcnRCeVJlbGV2YW5jZSddO1xuICBASW5wdXQoKSBzb3VyY2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3NvdXJjZSddO1xuICBASW5wdXQoKSBzdGFydENvbHM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3N0YXJ0Q29scyddO1xuICBASW5wdXQoKSBzdGFydFJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3N0YXJ0Um93cyddO1xuICBASW5wdXQoKSBzdHJldGNoSDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc3RyZXRjaEgnXTtcbiAgQElucHV0KCkgc3RyaWN0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydzdHJpY3QnXTtcbiAgQElucHV0KCkgdGFibGVDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3RhYmxlQ2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIHRhYk1vdmVzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd0YWJNb3ZlcyddO1xuICBASW5wdXQoKSB0aXRsZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndGl0bGUnXTtcbiAgQElucHV0KCkgdHJpbURyb3Bkb3duOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd0cmltRHJvcGRvd24nXTtcbiAgQElucHV0KCkgdHJpbVJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ25lc3RlZFJvd3MnXTtcbiAgQElucHV0KCkgdHJpbVdoaXRlc3BhY2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3RyaW1XaGl0ZXNwYWNlJ107XG4gIEBJbnB1dCgpIHR5cGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3R5cGUnXTtcbiAgQElucHV0KCkgdW5jaGVja2VkVGVtcGxhdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3VuY2hlY2tlZFRlbXBsYXRlJ107XG4gIEBJbnB1dCgpIHVuZG86IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3VuZG8nXTtcbiAgQElucHV0KCkgdmFsaWRhdG9yOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd2YWxpZGF0b3InXTtcbiAgQElucHV0KCkgdmlld3BvcnRDb2x1bW5SZW5kZXJpbmdPZmZzZXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3ZpZXdwb3J0Q29sdW1uUmVuZGVyaW5nT2Zmc2V0J107XG4gIEBJbnB1dCgpIHZpZXdwb3J0Um93UmVuZGVyaW5nT2Zmc2V0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd2aWV3cG9ydFJvd1JlbmRlcmluZ09mZnNldCddO1xuICBASW5wdXQoKSB2aXNpYmxlUm93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndmlzaWJsZVJvd3MnXTtcbiAgQElucHV0KCkgd2lkdGg6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3dpZHRoJ107XG4gIEBJbnB1dCgpIHdvcmRXcmFwOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd3b3JkV3JhcCddO1xuXG4gIC8vIGhhbmRzb250YWJsZSBob29rc1xuICBASW5wdXQoKSBhZnRlckFkZENoaWxkOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckFkZENoaWxkJ107XG4gIEBJbnB1dCgpIGFmdGVyQmVnaW5FZGl0aW5nOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckJlZ2luRWRpdGluZyddO1xuICBASW5wdXQoKSBhZnRlckNlbGxNZXRhUmVzZXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ2VsbE1ldGFSZXNldCddO1xuICBASW5wdXQoKSBhZnRlckNoYW5nZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDaGFuZ2UnXTtcbiAgQElucHV0KCkgYWZ0ZXJDaGFuZ2VzT2JzZXJ2ZWQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ2hhbmdlc09ic2VydmVkJ107XG4gIEBJbnB1dCgpIGFmdGVyQ29sdW1uTW92ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDb2x1bW5Nb3ZlJ107XG4gIEBJbnB1dCgpIGFmdGVyQ29sdW1uUmVzaXplOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNvbHVtblJlc2l6ZSddO1xuICBASW5wdXQoKSBhZnRlckNvbHVtblNvcnQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ29sdW1uU29ydCddO1xuICBASW5wdXQoKSBhZnRlckNvbnRleHRNZW51RGVmYXVsdE9wdGlvbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ29udGV4dE1lbnVEZWZhdWx0T3B0aW9ucyddO1xuICBASW5wdXQoKSBhZnRlckNvbnRleHRNZW51SGlkZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDb250ZXh0TWVudUhpZGUnXTtcbiAgQElucHV0KCkgYWZ0ZXJDb250ZXh0TWVudVNob3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ29udGV4dE1lbnVTaG93J107XG4gIEBJbnB1dCgpIGFmdGVyQ29weTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDb3B5J107XG4gIEBJbnB1dCgpIGFmdGVyQ29weUxpbWl0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckNvcHlMaW1pdCddO1xuICBASW5wdXQoKSBhZnRlckNyZWF0ZUNvbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJDcmVhdGVDb2wnXTtcbiAgQElucHV0KCkgYWZ0ZXJDcmVhdGVSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyQ3JlYXRlUm93J107XG4gIEBJbnB1dCgpIGFmdGVyQ3V0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckN1dCddO1xuICBASW5wdXQoKSBhZnRlckRlc2VsZWN0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckRlc2VsZWN0J107XG4gIEBJbnB1dCgpIGFmdGVyRGVzdHJveTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJEZXN0cm95J107XG4gIEBJbnB1dCgpIGFmdGVyRGV0YWNoQ2hpbGQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyRGV0YWNoQ2hpbGQnXTtcbiAgQElucHV0KCkgYWZ0ZXJEb2N1bWVudEtleURvd246IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyRG9jdW1lbnRLZXlEb3duJ107XG4gIEBJbnB1dCgpIGFmdGVyRHJhd1NlbGVjdGlvbjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJEcmF3U2VsZWN0aW9uJ107XG4gIEBJbnB1dCgpIGFmdGVyRHJvcGRvd25NZW51RGVmYXVsdE9wdGlvbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyRHJvcGRvd25NZW51RGVmYXVsdE9wdGlvbnMnXTtcbiAgQElucHV0KCkgYWZ0ZXJEcm9wZG93bk1lbnVIaWRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckRyb3Bkb3duTWVudUhpZGUnXTtcbiAgQElucHV0KCkgYWZ0ZXJEcm9wZG93bk1lbnVTaG93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckRyb3Bkb3duTWVudVNob3cnXTtcbiAgQElucHV0KCkgYWZ0ZXJGaWx0ZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyRmlsdGVyJ107XG4gIEBJbnB1dCgpIGFmdGVyR2V0Q2VsbE1ldGE6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyR2V0Q2VsbE1ldGEnXTtcbiAgQElucHV0KCkgYWZ0ZXJHZXRDb2xIZWFkZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyR2V0Q29sSGVhZGVyJ107XG4gIEBJbnB1dCgpIGFmdGVyR2V0Q29sdW1uSGVhZGVyUmVuZGVyZXJzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckdldENvbHVtbkhlYWRlclJlbmRlcmVycyddO1xuICBASW5wdXQoKSBhZnRlckdldFJvd0hlYWRlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJHZXRSb3dIZWFkZXInXTtcbiAgQElucHV0KCkgYWZ0ZXJHZXRSb3dIZWFkZXJSZW5kZXJlcnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyR2V0Um93SGVhZGVyUmVuZGVyZXJzJ107XG4gIEBJbnB1dCgpIGFmdGVySGlkZUNvbHVtbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVySGlkZUNvbHVtbnMnXTtcbiAgQElucHV0KCkgYWZ0ZXJIaWRlUm93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJIaWRlUm93cyddO1xuICBASW5wdXQoKSBhZnRlckluaXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVySW5pdCddO1xuICBASW5wdXQoKSBhZnRlckxhbmd1YWdlQ2hhbmdlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckxhbmd1YWdlQ2hhbmdlJ107XG4gIEBJbnB1dCgpIGFmdGVyTGlzdGVuOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckxpc3RlbiddO1xuICBASW5wdXQoKSBhZnRlckxvYWREYXRhOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlckxvYWREYXRhJ107XG4gIEBJbnB1dCgpIGFmdGVyTWVyZ2VDZWxsczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJNZXJnZUNlbGxzJ107XG4gIEBJbnB1dCgpIGFmdGVyTW9kaWZ5VHJhbnNmb3JtRW5kOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlck1vZGlmeVRyYW5zZm9ybUVuZCddO1xuICBASW5wdXQoKSBhZnRlck1vZGlmeVRyYW5zZm9ybVN0YXJ0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlck1vZGlmeVRyYW5zZm9ybVN0YXJ0J107XG4gIEBJbnB1dCgpIGFmdGVyTW9tZW50dW1TY3JvbGw6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyTW9tZW50dW1TY3JvbGwnXTtcbiAgQElucHV0KCkgYWZ0ZXJPbkNlbGxDb250ZXh0TWVudTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJPbkNlbGxDb250ZXh0TWVudSddO1xuICBASW5wdXQoKSBhZnRlck9uQ2VsbENvcm5lckRibENsaWNrOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlck9uQ2VsbENvcm5lckRibENsaWNrJ107XG4gIEBJbnB1dCgpIGFmdGVyT25DZWxsQ29ybmVyTW91c2VEb3duOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlck9uQ2VsbENvcm5lck1vdXNlRG93biddO1xuICBASW5wdXQoKSBhZnRlck9uQ2VsbE1vdXNlRG93bjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJPbkNlbGxNb3VzZURvd24nXTtcbiAgQElucHV0KCkgYWZ0ZXJPbkNlbGxNb3VzZU91dDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJPbkNlbGxNb3VzZU91dCddO1xuICBASW5wdXQoKSBhZnRlck9uQ2VsbE1vdXNlT3ZlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJPbkNlbGxNb3VzZU92ZXInXTtcbiAgQElucHV0KCkgYWZ0ZXJPbkNlbGxNb3VzZVVwOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlck9uQ2VsbE1vdXNlVXAnXTtcbiAgQElucHV0KCkgYWZ0ZXJQYXN0ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJQYXN0ZSddO1xuICBASW5wdXQoKSBhZnRlclBsdWdpbnNJbml0aWFsaXplZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJQbHVnaW5zSW5pdGlhbGl6ZWQnXTtcbiAgQElucHV0KCkgYWZ0ZXJSZWRvOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclJlZG8nXTtcbiAgQElucHV0KCkgYWZ0ZXJSZWZyZXNoRGltZW5zaW9uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJSZWZyZXNoRGltZW5zaW9ucyddO1xuICBASW5wdXQoKSBhZnRlclJlbW92ZUNlbGxNZXRhOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclJlbW92ZUNlbGxNZXRhJ107XG4gIEBJbnB1dCgpIGFmdGVyUmVtb3ZlQ29sOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclJlbW92ZUNvbCddO1xuICBASW5wdXQoKSBhZnRlclJlbW92ZVJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJSZW1vdmVSb3cnXTtcbiAgQElucHV0KCkgYWZ0ZXJSZW5kZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyUmVuZGVyJ107XG4gIEBJbnB1dCgpIGFmdGVyUmVuZGVyZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyUmVuZGVyZXInXTtcbiAgQElucHV0KCkgYWZ0ZXJSb3dNb3ZlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclJvd01vdmUnXTtcbiAgQElucHV0KCkgYWZ0ZXJSb3dSZXNpemU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyUm93UmVzaXplJ107XG4gIEBJbnB1dCgpIGFmdGVyU2Nyb2xsSG9yaXpvbnRhbGx5OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclNjcm9sbEhvcml6b250YWxseSddO1xuICBASW5wdXQoKSBhZnRlclNjcm9sbFZlcnRpY2FsbHk6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyU2Nyb2xsVmVydGljYWxseSddO1xuICBASW5wdXQoKSBhZnRlclNlbGVjdGlvbjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJTZWxlY3Rpb24nXTtcbiAgQElucHV0KCkgYWZ0ZXJTZWxlY3Rpb25CeVByb3A6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyU2VsZWN0aW9uQnlQcm9wJ107XG4gIEBJbnB1dCgpIGFmdGVyU2VsZWN0aW9uRW5kOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclNlbGVjdGlvbkVuZCddO1xuICBASW5wdXQoKSBhZnRlclNlbGVjdGlvbkVuZEJ5UHJvcDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJTZWxlY3Rpb25FbmRCeVByb3AnXTtcbiAgQElucHV0KCkgYWZ0ZXJTZXRDZWxsTWV0YTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJTZXRDZWxsTWV0YSddO1xuICBASW5wdXQoKSBhZnRlclNldERhdGFBdENlbGw6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyU2V0RGF0YUF0Q2VsbCddO1xuICBASW5wdXQoKSBhZnRlclNldERhdGFBdFJvd1Byb3A6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyU2V0RGF0YUF0Um93UHJvcCddO1xuICBASW5wdXQoKSBhZnRlclRyaW1Sb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVHJpbVJvdyddO1xuICBASW5wdXQoKSBhZnRlclVuZG86IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVW5kbyddO1xuICBASW5wdXQoKSBhZnRlclVuaGlkZUNvbHVtbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVW5oaWRlQ29sdW1ucyddO1xuICBASW5wdXQoKSBhZnRlclVuaGlkZVJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVW5oaWRlUm93cyddO1xuICBASW5wdXQoKSBhZnRlclVubGlzdGVuOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclVubGlzdGVuJ107XG4gIEBJbnB1dCgpIGFmdGVyVW5tZXJnZUNlbGxzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclVubWVyZ2VDZWxscyddO1xuICBASW5wdXQoKSBhZnRlclVudHJpbVJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJVbnRyaW1Sb3cnXTtcbiAgQElucHV0KCkgYWZ0ZXJVcGRhdGVTZXR0aW5nczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJVcGRhdGVTZXR0aW5ncyddO1xuICBASW5wdXQoKSBhZnRlclZhbGlkYXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydhZnRlclZhbGlkYXRlJ107XG4gIEBJbnB1dCgpIGFmdGVyVmlld3BvcnRDb2x1bW5DYWxjdWxhdG9yT3ZlcnJpZGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FmdGVyVmlld3BvcnRDb2x1bW5DYWxjdWxhdG9yT3ZlcnJpZGUnXTtcbiAgQElucHV0KCkgYWZ0ZXJWaWV3cG9ydFJvd0NhbGN1bGF0b3JPdmVycmlkZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWZ0ZXJWaWV3cG9ydFJvd0NhbGN1bGF0b3JPdmVycmlkZSddO1xuICBASW5wdXQoKSBiZWZvcmVBZGRDaGlsZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQWRkQ2hpbGQnXTtcbiAgQElucHV0KCkgYmVmb3JlQXV0b2ZpbGw6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUF1dG9maWxsJ107XG4gIEBJbnB1dCgpIGJlZm9yZUF1dG9maWxsSW5zaWRlUG9wdWxhdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUF1dG9maWxsSW5zaWRlUG9wdWxhdGUnXTtcbiAgQElucHV0KCkgYmVmb3JlQ2VsbEFsaWdubWVudDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ2VsbEFsaWdubWVudCddO1xuICBASW5wdXQoKSBiZWZvcmVDaGFuZ2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNoYW5nZSddO1xuICBASW5wdXQoKSBiZWZvcmVDaGFuZ2VSZW5kZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNoYW5nZVJlbmRlciddO1xuICBASW5wdXQoKSBiZWZvcmVDb2x1bW5Nb3ZlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVDb2x1bW5Nb3ZlJ107XG4gIEBJbnB1dCgpIGJlZm9yZUNvbHVtblJlc2l6ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ29sdW1uUmVzaXplJ107XG4gIEBJbnB1dCgpIGJlZm9yZUNvbHVtblNvcnQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNvbHVtblNvcnQnXTtcbiAgQElucHV0KCkgYmVmb3JlQ29udGV4dE1lbnVTZXRJdGVtczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ29udGV4dE1lbnVTZXRJdGVtcyddO1xuICBASW5wdXQoKSBiZWZvcmVDb250ZXh0TWVudVNob3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUNvbnRleHRNZW51U2hvdyddO1xuICBASW5wdXQoKSBiZWZvcmVDb3B5OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVDb3B5J107XG4gIEBJbnB1dCgpIGJlZm9yZUNyZWF0ZUNvbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ3JlYXRlQ29sJ107XG4gIEBJbnB1dCgpIGJlZm9yZUNyZWF0ZVJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ3JlYXRlUm93J107XG4gIEBJbnB1dCgpIGJlZm9yZUN1dDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlQ3V0J107XG4gIEBJbnB1dCgpIGJlZm9yZURldGFjaENoaWxkOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVEZXRhY2hDaGlsZCddO1xuICBASW5wdXQoKSBiZWZvcmVEcmF3Qm9yZGVyczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlRHJhd0JvcmRlcnMnXTtcbiAgQElucHV0KCkgYmVmb3JlRHJvcGRvd25NZW51U2V0SXRlbXM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZURyb3Bkb3duTWVudVNldEl0ZW1zJ107XG4gIEBJbnB1dCgpIGJlZm9yZURyb3Bkb3duTWVudVNob3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZURyb3Bkb3duTWVudVNob3cnXTtcbiAgQElucHV0KCkgYmVmb3JlRmlsdGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVGaWx0ZXInXTtcbiAgQElucHV0KCkgYmVmb3JlR2V0Q2VsbE1ldGE6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUdldENlbGxNZXRhJ107XG4gIEBJbnB1dCgpIGJlZm9yZUhpZGVDb2x1bW5zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVIaWRlQ29sdW1ucyddO1xuICBASW5wdXQoKSBiZWZvcmVIaWRlUm93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlSGlkZVJvd3MnXTtcbiAgQElucHV0KCkgYmVmb3JlSW5pdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlSW5pdCddO1xuICBASW5wdXQoKSBiZWZvcmVJbml0V2Fsa29udGFibGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZUluaXRXYWxrb250YWJsZSddO1xuICBASW5wdXQoKSBiZWZvcmVLZXlEb3duOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVLZXlEb3duJ107XG4gIEBJbnB1dCgpIGJlZm9yZUxhbmd1YWdlQ2hhbmdlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVMYW5ndWFnZUNoYW5nZSddO1xuICBASW5wdXQoKSBiZWZvcmVNZXJnZUNlbGxzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVNZXJnZUNlbGxzJ107XG4gIEBJbnB1dCgpIGJlZm9yZU9uQ2VsbENvbnRleHRNZW51OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVPbkNlbGxDb250ZXh0TWVudSddO1xuICBASW5wdXQoKSBiZWZvcmVPbkNlbGxNb3VzZURvd246IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZU9uQ2VsbE1vdXNlRG93biddO1xuICBASW5wdXQoKSBiZWZvcmVPbkNlbGxNb3VzZU91dDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlT25DZWxsTW91c2VPdXQnXTtcbiAgQElucHV0KCkgYmVmb3JlT25DZWxsTW91c2VPdmVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVPbkNlbGxNb3VzZU92ZXInXTtcbiAgQElucHV0KCkgYmVmb3JlT25DZWxsTW91c2VVcDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlT25DZWxsTW91c2VVcCddO1xuICBASW5wdXQoKSBiZWZvcmVQYXN0ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlUGFzdGUnXTtcbiAgQElucHV0KCkgYmVmb3JlUmVkbzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlUmVkbyddO1xuICBASW5wdXQoKSBiZWZvcmVSZWZyZXNoRGltZW5zaW9uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlUmVmcmVzaERpbWVuc2lvbnMnXTtcbiAgQElucHV0KCkgYmVmb3JlUmVtb3ZlQ2VsbENsYXNzTmFtZXM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJlbW92ZUNlbGxDbGFzc05hbWVzJ107XG4gIEBJbnB1dCgpIGJlZm9yZVJlbW92ZUNlbGxNZXRhOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVSZW1vdmVDZWxsTWV0YSddO1xuICBASW5wdXQoKSBiZWZvcmVSZW1vdmVDb2w6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJlbW92ZUNvbCddO1xuICBASW5wdXQoKSBiZWZvcmVSZW1vdmVSb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJlbW92ZVJvdyddO1xuICBASW5wdXQoKSBiZWZvcmVSZW5kZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJlbmRlciddO1xuICBASW5wdXQoKSBiZWZvcmVSZW5kZXJlcjogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlUmVuZGVyZXInXTtcbiAgQElucHV0KCkgYmVmb3JlUm93TW92ZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlUm93TW92ZSddO1xuICBASW5wdXQoKSBiZWZvcmVSb3dSZXNpemU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVJvd1Jlc2l6ZSddO1xuICBASW5wdXQoKSBiZWZvcmVTZXRSYW5nZUVuZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlU2V0UmFuZ2VFbmQnXTtcbiAgQElucHV0KCkgYmVmb3JlU2V0UmFuZ2VTdGFydDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlU2V0UmFuZ2VTdGFydCddO1xuICBASW5wdXQoKSBiZWZvcmVTZXRSYW5nZVN0YXJ0T25seTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlU2V0UmFuZ2VTdGFydE9ubHknXTtcbiAgQElucHV0KCkgYmVmb3JlU3RyZXRjaGluZ0NvbHVtbldpZHRoOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVTdHJldGNoaW5nQ29sdW1uV2lkdGgnXTtcbiAgQElucHV0KCkgYmVmb3JlVG91Y2hTY3JvbGw6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVRvdWNoU2Nyb2xsJ107XG4gIEBJbnB1dCgpIGJlZm9yZVRyaW1Sb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVRyaW1Sb3cnXTtcbiAgQElucHV0KCkgYmVmb3JlVW5kbzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYmVmb3JlVW5kbyddO1xuICBASW5wdXQoKSBiZWZvcmVVbmhpZGVDb2x1bW5zOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVVbmhpZGVDb2x1bW5zJ107XG4gIEBJbnB1dCgpIGJlZm9yZVVuaGlkZVJvd3M6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVVuaGlkZVJvd3MnXTtcbiAgQElucHV0KCkgYmVmb3JlVW5tZXJnZUNlbGxzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVVbm1lcmdlQ2VsbHMnXTtcbiAgQElucHV0KCkgYmVmb3JlVW50cmltUm93OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVVbnRyaW1Sb3cnXTtcbiAgQElucHV0KCkgYmVmb3JlVmFsaWRhdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2JlZm9yZVZhbGlkYXRlJ107XG4gIEBJbnB1dCgpIGJlZm9yZVZhbHVlUmVuZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydiZWZvcmVWYWx1ZVJlbmRlciddO1xuICBASW5wdXQoKSBjb25zdHJ1Y3Q6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbnN0cnVjdCddO1xuICBASW5wdXQoKSBoaWRkZW5Db2x1bW46IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2hpZGRlbkNvbHVtbiddO1xuICBASW5wdXQoKSBoaWRkZW5Sb3c6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2hpZGRlblJvdyddO1xuICBASW5wdXQoKSBpbml0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydpbml0J107XG4gIEBJbnB1dCgpIG1vZGlmeUF1dG9maWxsUmFuZ2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeUF1dG9maWxsUmFuZ2UnXTtcbiAgQElucHV0KCkgbW9kaWZ5Q29sOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlDb2wnXTtcbiAgQElucHV0KCkgbW9kaWZ5Q29sSGVhZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlDb2xIZWFkZXInXTtcbiAgQElucHV0KCkgbW9kaWZ5Q29sdW1uSGVhZGVySGVpZ2h0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlDb2x1bW5IZWFkZXJIZWlnaHQnXTtcbiAgQElucHV0KCkgbW9kaWZ5Q29sV2lkdGg6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeUNvbFdpZHRoJ107XG4gIEBJbnB1dCgpIG1vZGlmeUNvcHlhYmxlUmFuZ2U6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeUNvcHlhYmxlUmFuZ2UnXTtcbiAgQElucHV0KCkgbW9kaWZ5RGF0YTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5RGF0YSddO1xuICBASW5wdXQoKSBtb2RpZnlHZXRDZWxsQ29vcmRzOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlHZXRDZWxsQ29vcmRzJ107XG4gIEBJbnB1dCgpIG1vZGlmeVJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5Um93J107XG4gIEBJbnB1dCgpIG1vZGlmeVJvd0RhdGE6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeVJvd0RhdGEnXTtcbiAgQElucHV0KCkgbW9kaWZ5Um93SGVhZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlSb3dIZWFkZXInXTtcbiAgQElucHV0KCkgbW9kaWZ5Um93SGVhZGVyV2lkdGg6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ21vZGlmeVJvd0hlYWRlcldpZHRoJ107XG4gIEBJbnB1dCgpIG1vZGlmeVJvd0hlaWdodDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5Um93SGVpZ2h0J107XG4gIEBJbnB1dCgpIG1vZGlmeVRyYW5zZm9ybUVuZDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbW9kaWZ5VHJhbnNmb3JtRW5kJ107XG4gIEBJbnB1dCgpIG1vZGlmeVRyYW5zZm9ybVN0YXJ0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydtb2RpZnlUcmFuc2Zvcm1TdGFydCddO1xuICBASW5wdXQoKSBwZXJzaXN0ZW50U3RhdGVMb2FkOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydwZXJzaXN0ZW50U3RhdGVMb2FkJ107XG4gIEBJbnB1dCgpIHBlcnNpc3RlbnRTdGF0ZVJlc2V0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydwZXJzaXN0ZW50U3RhdGVSZXNldCddO1xuICBASW5wdXQoKSBwZXJzaXN0ZW50U3RhdGVTYXZlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydwZXJzaXN0ZW50U3RhdGVTYXZlJ107XG4gIEBJbnB1dCgpIHNraXBMZW5ndGhDYWNoZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc2tpcExlbmd0aENhY2hlJ107XG4gIEBJbnB1dCgpIHVubW9kaWZ5Q29sOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd1bm1vZGlmeUNvbCddO1xuICBASW5wdXQoKSB1bm1vZGlmeVJvdzogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndW5tb2RpZnlSb3cnXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9ob3RUYWJsZVJlZ2lzdGVyZXI6IEhvdFRhYmxlUmVnaXN0ZXJlcixcbiAgICBwcml2YXRlIF9ob3RTZXR0aW5nc1Jlc29sdmVyOiBIb3RTZXR0aW5nc1Jlc29sdmVyLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3MgPSB0aGlzLl9ob3RTZXR0aW5nc1Jlc29sdmVyLm1lcmdlU2V0dGluZ3ModGhpcyk7XG5cbiAgICBpZiAodGhpcy5jb2x1bW5zQ29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb2x1bW5zID0gW107XG5cbiAgICAgIHRoaXMuY29sdW1uc0NvbXBvbmVudHMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbnMucHVzaCh0aGlzLl9ob3RTZXR0aW5nc1Jlc29sdmVyLm1lcmdlU2V0dGluZ3MoY29sdW1uKSk7XG4gICAgICB9KTtcblxuICAgICAgb3B0aW9uc1snY29sdW1ucyddID0gY29sdW1ucztcbiAgICB9XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5ob3RJbnN0YW5jZSA9IG5ldyBIYW5kc29udGFibGUuQ29yZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMuaG90SWQpIHtcbiAgICAgICAgdGhpcy5faG90VGFibGVSZWdpc3RlcmVyLnJlZ2lzdGVySW5zdGFuY2UodGhpcy5ob3RJZCwgdGhpcy5ob3RJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLmhvdEluc3RhbmNlLmluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ob3RJbnN0YW5jZSA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3T3B0aW9uczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5ncyA9IHRoaXMuX2hvdFNldHRpbmdzUmVzb2x2ZXIucHJlcGFyZUNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICB0aGlzLnVwZGF0ZUhvdFRhYmxlKG5ld09wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuaG90SW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaG90SWQpIHtcbiAgICAgIHRoaXMuX2hvdFRhYmxlUmVnaXN0ZXJlci5yZW1vdmVJbnN0YW5jZSh0aGlzLmhvdElkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVIb3RUYWJsZShuZXdTZXR0aW5nczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5ncyApOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaG90SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5ob3RJbnN0YW5jZS51cGRhdGVTZXR0aW5ncyhuZXdTZXR0aW5ncywgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgb25BZnRlckNvbHVtbnNDaGFuZ2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uc0NvbXBvbmVudHMgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbHVtbnNDb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbHVtbnM6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1tdID0gW107XG5cbiAgICAgIHRoaXMuY29sdW1uc0NvbXBvbmVudHMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbnMucHVzaCh0aGlzLl9ob3RTZXR0aW5nc1Jlc29sdmVyLm1lcmdlU2V0dGluZ3MoY29sdW1uKSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHtcbiAgICAgICAgY29sdW1uczogY29sdW1uc1xuICAgICAgfTtcblxuICAgICAgdGhpcy51cGRhdGVIb3RUYWJsZShuZXdPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBvbkFmdGVyQ29sdW1uc051bWJlckNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5zOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbXSA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY29sdW1uc0NvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb2x1bW5zQ29tcG9uZW50cy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgY29sdW1ucy5wdXNoKHRoaXMuX2hvdFNldHRpbmdzUmVzb2x2ZXIubWVyZ2VTZXR0aW5ncyhjb2x1bW4pKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlSG90VGFibGUoeyBjb2x1bW5zIH0pO1xuICB9XG5cbiAgYWRkQ29sdW1uKGNvbHVtbjogSG90Q29sdW1uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5zQ29tcG9uZW50cy5wdXNoKGNvbHVtbik7XG4gICAgdGhpcy5vbkFmdGVyQ29sdW1uc051bWJlckNoYW5nZSgpO1xuICB9XG5cbiAgcmVtb3ZlQ29sdW1uKGNvbHVtbjogSG90Q29sdW1uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuY29sdW1uc0NvbXBvbmVudHMuaW5kZXhPZihjb2x1bW4pO1xuXG4gICAgdGhpcy5jb2x1bW5zQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMub25BZnRlckNvbHVtbnNOdW1iZXJDaGFuZ2UoKTtcbiAgfVxuXG59XG4iXX0=