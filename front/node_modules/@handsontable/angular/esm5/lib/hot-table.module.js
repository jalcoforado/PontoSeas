/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HotTableComponent } from './hot-table.component';
import { HotColumnComponent } from './hot-column.component';
import { HotTableRegisterer } from './hot-table-registerer.service';
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
    tslib_1.__extends(HotTableModule, _super);
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
export { HotTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5kc29udGFibGUvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ob3QtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBTXBFOzs7OztJQUFBO0lBSUEsQ0FBQztJQUhDLHNCQUFrQixrQkFBTzs7OztRQUF6QjtZQUNFLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBQ0gsY0FBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBRUQ7SUFVb0MsMENBQU87SUFWM0M7O0lBaUJBLENBQUM7Ozs7SUFOZSxzQkFBTzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFFLGtCQUFrQixDQUFFO1NBQ2xDLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsa0JBQWtCO3FCQUNuQjtpQkFDRjs7SUFRRCxxQkFBQztDQUFBLEFBakJELENBVW9DLE9BQU8sR0FPMUM7U0FQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvdFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9ob3QtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvdENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vaG90LWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG90VGFibGVSZWdpc3RlcmVyIH0gZnJvbSAnLi9ob3QtdGFibGUtcmVnaXN0ZXJlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBBbmd1bGFyIHByZXZlbnRzIHVzZSBzdGF0aWMgcHVibGljIGdldHRlcnMgdW5kZXIgTmdNb2R1bGUgZGVjb3JhdG9yLlxuICogTW9yZW92ZXIsIG5nYyBkb2Vzbid0IGFsbG93IGltcG9ydGluZyBgVmVyc2lvbmAgZnJvbSBleHRlcm5hbCBmaWxlLlxuICovXG5jbGFzcyBWZXJzaW9uIHtcbiAgcHVibGljIHN0YXRpYyBnZXQgdmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAnNS4xLjAnO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhvdFRhYmxlQ29tcG9uZW50LFxuICAgIEhvdENvbHVtbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEhvdFRhYmxlQ29tcG9uZW50LFxuICAgIEhvdENvbHVtbkNvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb3RUYWJsZU1vZHVsZSBleHRlbmRzIFZlcnNpb24ge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBIb3RUYWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWyBIb3RUYWJsZVJlZ2lzdGVyZXIgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=