/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HotTableComponent } from './hot-table.component';
import { HotColumnComponent } from './hot-column.component';
import { HotTableRegisterer } from './hot-table-registerer.service';
/**
 * Angular prevents use static public getters under NgModule decorator.
 * Moreover, ngc doesn't allow importing `Version` from external file.
 */
class Version {
    /**
     * @return {?}
     */
    static get version() {
        return '5.1.0';
    }
}
export class HotTableModule extends Version {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: HotTableModule,
            providers: [HotTableRegisterer],
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5kc29udGFibGUvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ob3QtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFNcEUsTUFBTSxPQUFPOzs7O0lBQ0osTUFBTSxLQUFLLE9BQU87UUFDdkIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBWUQsTUFBTSxPQUFPLGNBQWUsU0FBUSxPQUFPOzs7O0lBQ2xDLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTtTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLGtCQUFrQjtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3RUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vaG90LXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb3RDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2hvdC1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IEhvdFRhYmxlUmVnaXN0ZXJlciB9IGZyb20gJy4vaG90LXRhYmxlLXJlZ2lzdGVyZXIuc2VydmljZSc7XG5cbi8qKlxuICogQW5ndWxhciBwcmV2ZW50cyB1c2Ugc3RhdGljIHB1YmxpYyBnZXR0ZXJzIHVuZGVyIE5nTW9kdWxlIGRlY29yYXRvci5cbiAqIE1vcmVvdmVyLCBuZ2MgZG9lc24ndCBhbGxvdyBpbXBvcnRpbmcgYFZlcnNpb25gIGZyb20gZXh0ZXJuYWwgZmlsZS5cbiAqL1xuY2xhc3MgVmVyc2lvbiB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJzUuMS4wJztcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBIb3RUYWJsZUNvbXBvbmVudCxcbiAgICBIb3RDb2x1bW5Db21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBIb3RUYWJsZUNvbXBvbmVudCxcbiAgICBIb3RDb2x1bW5Db21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSG90VGFibGVNb2R1bGUgZXh0ZW5kcyBWZXJzaW9uIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSG90VGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsgSG90VGFibGVSZWdpc3RlcmVyIF0sXG4gICAgfTtcbiAgfVxufVxuIl19