/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
import { HotTableComponent } from './hot-table.component';
export class HotColumnComponent {
    /**
     * @param {?} parentComponent
     */
    constructor(parentComponent) {
        this.parentComponent = parentComponent;
        this.firstRun = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstRun = false;
        this.parentComponent.addColumn(this);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.firstRun) {
            return;
        }
        this.parentComponent.onAfterColumnsChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.parentComponent.removeColumn(this);
    }
}
HotColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'hot-column',
                template: ''
            }] }
];
/** @nocollapse */
HotColumnComponent.ctorParameters = () => [
    { type: HotTableComponent }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    HotColumnComponent.prototype.firstRun;
    /** @type {?} */
    HotColumnComponent.prototype.allowEmpty;
    /** @type {?} */
    HotColumnComponent.prototype.allowHtml;
    /** @type {?} */
    HotColumnComponent.prototype.allowInvalid;
    /** @type {?} */
    HotColumnComponent.prototype.checkedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.className;
    /** @type {?} */
    HotColumnComponent.prototype.columnSorting;
    /** @type {?} */
    HotColumnComponent.prototype.colWidths;
    /** @type {?} */
    HotColumnComponent.prototype.commentedCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.copyable;
    /** @type {?} */
    HotColumnComponent.prototype.correctFormat;
    /** @type {?} */
    HotColumnComponent.prototype.data;
    /** @type {?} */
    HotColumnComponent.prototype.dateFormat;
    /** @type {?} */
    HotColumnComponent.prototype.defaultDate;
    /** @type {?} */
    HotColumnComponent.prototype.editor;
    /** @type {?} */
    HotColumnComponent.prototype.filteringCaseSensitive;
    /** @type {?} */
    HotColumnComponent.prototype.invalidCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.label;
    /** @type {?} */
    HotColumnComponent.prototype.noWordWrapClassName;
    /** @type {?} */
    HotColumnComponent.prototype.numericFormat;
    /** @type {?} */
    HotColumnComponent.prototype.placeholder;
    /** @type {?} */
    HotColumnComponent.prototype.placeholderCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.readOnly;
    /** @type {?} */
    HotColumnComponent.prototype.readOnlyCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.renderer;
    /** @type {?} */
    HotColumnComponent.prototype.selectOptions;
    /** @type {?} */
    HotColumnComponent.prototype.skipColumnOnPaste;
    /** @type {?} */
    HotColumnComponent.prototype.sortByRelevance;
    /** @type {?} */
    HotColumnComponent.prototype.source;
    /** @type {?} */
    HotColumnComponent.prototype.strict;
    /** @type {?} */
    HotColumnComponent.prototype.title;
    /** @type {?} */
    HotColumnComponent.prototype.trimDropdown;
    /** @type {?} */
    HotColumnComponent.prototype.type;
    /** @type {?} */
    HotColumnComponent.prototype.uncheckedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.validator;
    /** @type {?} */
    HotColumnComponent.prototype.visibleRows;
    /** @type {?} */
    HotColumnComponent.prototype.width;
    /** @type {?} */
    HotColumnComponent.prototype.wordWrap;
    /**
     * @type {?}
     * @private
     */
    HotColumnComponent.prototype.parentComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaGFuZHNvbnRhYmxlL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaG90LWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzFELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUF5QzdCLFlBQW9CLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQXhDOUMsYUFBUSxHQUFHLElBQUksQ0FBQztJQXdDaUMsQ0FBQzs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQU5RLGlCQUFpQjs7O3lCQVV2QixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FDQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUNBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7a0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUNBQ0wsS0FBSzt1QkFDTCxLQUFLO29DQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO21CQUNMLEtBQUs7Z0NBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7Ozs7O0lBdENOLHNDQUF3Qjs7SUFFeEIsd0NBQTZEOztJQUM3RCx1Q0FBMkQ7O0lBQzNELDBDQUFpRTs7SUFDakUsNkNBQXVFOztJQUN2RSx1Q0FBMkQ7O0lBQzNELDJDQUFtRTs7SUFDbkUsdUNBQTJEOztJQUMzRCxvREFBcUY7O0lBQ3JGLHNDQUF5RDs7SUFDekQsMkNBQW1FOztJQUNuRSxrQ0FBaUQ7O0lBQ2pELHdDQUE2RDs7SUFDN0QseUNBQStEOztJQUMvRCxvQ0FBcUQ7O0lBQ3JELG9EQUFxRjs7SUFDckYsa0RBQWlGOztJQUNqRixtQ0FBbUQ7O0lBQ25ELGlEQUErRTs7SUFDL0UsMkNBQW1FOztJQUNuRSx5Q0FBK0Q7O0lBQy9ELHNEQUF5Rjs7SUFDekYsc0NBQXlEOztJQUN6RCxtREFBbUY7O0lBQ25GLHNDQUF5RDs7SUFDekQsMkNBQW1FOztJQUNuRSwrQ0FBMkU7O0lBQzNFLDZDQUF1RTs7SUFDdkUsb0NBQXFEOztJQUNyRCxvQ0FBcUQ7O0lBQ3JELG1DQUFtRDs7SUFDbkQsMENBQWlFOztJQUNqRSxrQ0FBaUQ7O0lBQ2pELCtDQUEyRTs7SUFDM0UsdUNBQTJEOztJQUMzRCx5Q0FBK0Q7O0lBQy9ELG1DQUFtRDs7SUFDbkQsc0NBQXlEOzs7OztJQUU3Qyw2Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvdFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9ob3QtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCBIYW5kc29udGFibGUgZnJvbSAnaGFuZHNvbnRhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG90LWNvbHVtbicsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgSG90Q29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZmlyc3RSdW4gPSB0cnVlO1xuICAvLyBoYW5kc29udGFibGUgY29sdW1uIG9wdGlvbnNcbiAgQElucHV0KCkgYWxsb3dFbXB0eTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snYWxsb3dFbXB0eSddO1xuICBASW5wdXQoKSBhbGxvd0h0bWw6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FsbG93SHRtbCddO1xuICBASW5wdXQoKSBhbGxvd0ludmFsaWQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2FsbG93SW52YWxpZCddO1xuICBASW5wdXQoKSBjaGVja2VkVGVtcGxhdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NoZWNrZWRUZW1wbGF0ZSddO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NsYXNzTmFtZSddO1xuICBASW5wdXQoKSBjb2x1bW5Tb3J0aW5nOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydjb2x1bW5Tb3J0aW5nJ107XG4gIEBJbnB1dCgpIGNvbFdpZHRoczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snY29sV2lkdGhzJ107XG4gIEBJbnB1dCgpIGNvbW1lbnRlZENlbGxDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvbW1lbnRlZENlbGxDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgY29weWFibGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvcHlhYmxlJ107XG4gIEBJbnB1dCgpIGNvcnJlY3RGb3JtYXQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2NvcnJlY3RGb3JtYXQnXTtcbiAgQElucHV0KCkgZGF0YTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snZGF0YSddO1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydkYXRlRm9ybWF0J107XG4gIEBJbnB1dCgpIGRlZmF1bHREYXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydkZWZhdWx0RGF0ZSddO1xuICBASW5wdXQoKSBlZGl0b3I6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ2VkaXRvciddO1xuICBASW5wdXQoKSBmaWx0ZXJpbmdDYXNlU2Vuc2l0aXZlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydmaWx0ZXJpbmdDYXNlU2Vuc2l0aXZlJ107XG4gIEBJbnB1dCgpIGludmFsaWRDZWxsQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydpbnZhbGlkQ2VsbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSBsYWJlbDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbGFiZWwnXTtcbiAgQElucHV0KCkgbm9Xb3JkV3JhcENsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snbm9Xb3JkV3JhcENsYXNzTmFtZSddO1xuICBASW5wdXQoKSBudW1lcmljRm9ybWF0OiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydudW1lcmljRm9ybWF0J107XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydwbGFjZWhvbGRlciddO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNlbGxDbGFzc05hbWU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3BsYWNlaG9sZGVyQ2VsbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSByZWFkT25seTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sncmVhZE9ubHknXTtcbiAgQElucHV0KCkgcmVhZE9ubHlDZWxsQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWydyZWFkT25seUNlbGxDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgcmVuZGVyZXI6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3JlbmRlcmVyJ107XG4gIEBJbnB1dCgpIHNlbGVjdE9wdGlvbnM6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3NlbGVjdE9wdGlvbnMnXTtcbiAgQElucHV0KCkgc2tpcENvbHVtbk9uUGFzdGU6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3NraXBDb2x1bW5PblBhc3RlJ107XG4gIEBJbnB1dCgpIHNvcnRCeVJlbGV2YW5jZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc29ydEJ5UmVsZXZhbmNlJ107XG4gIEBJbnB1dCgpIHNvdXJjZTogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc291cmNlJ107XG4gIEBJbnB1dCgpIHN0cmljdDogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1snc3RyaWN0J107XG4gIEBJbnB1dCgpIHRpdGxlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd0aXRsZSddO1xuICBASW5wdXQoKSB0cmltRHJvcGRvd246IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3RyaW1Ecm9wZG93biddO1xuICBASW5wdXQoKSB0eXBlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd0eXBlJ107XG4gIEBJbnB1dCgpIHVuY2hlY2tlZFRlbXBsYXRlOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd1bmNoZWNrZWRUZW1wbGF0ZSddO1xuICBASW5wdXQoKSB2YWxpZGF0b3I6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3ZhbGlkYXRvciddO1xuICBASW5wdXQoKSB2aXNpYmxlUm93czogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5nc1sndmlzaWJsZVJvd3MnXTtcbiAgQElucHV0KCkgd2lkdGg6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3NbJ3dpZHRoJ107XG4gIEBJbnB1dCgpIHdvcmRXcmFwOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzWyd3b3JkV3JhcCddO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyZW50Q29tcG9uZW50OiBIb3RUYWJsZUNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpcnN0UnVuID0gZmFsc2U7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQuYWRkQ29sdW1uKHRoaXMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlyc3RSdW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudENvbXBvbmVudC5vbkFmdGVyQ29sdW1uc0NoYW5nZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQucmVtb3ZlQ29sdW1uKHRoaXMpO1xuICB9XG59XG4iXX0=