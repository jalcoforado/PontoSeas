/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/** @type {?} */
const instances = new Map();
export class HotTableRegisterer {
    /**
     * @param {?} id
     * @return {?}
     */
    getInstance(id) {
        return instances.get(id);
    }
    /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    registerInstance(id, instance) {
        return instances.set(id, instance);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    removeInstance(id) {
        return instances.delete(id);
    }
}
HotTableRegisterer.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXRhYmxlLXJlZ2lzdGVyZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5kc29udGFibGUvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ob3QtdGFibGUtcmVnaXN0ZXJlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztNQUdyQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXdCO0FBR2pELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQ3RCLFdBQVcsQ0FBQyxFQUFVO1FBQzNCLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxFQUFVLEVBQUUsUUFBc0I7UUFDeEQsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxFQUFVO1FBQzlCLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFaRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEhhbmRzb250YWJsZSBmcm9tICdoYW5kc29udGFibGUnO1xuXG5jb25zdCBpbnN0YW5jZXMgPSBuZXcgTWFwPHN0cmluZywgSGFuZHNvbnRhYmxlPigpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG90VGFibGVSZWdpc3RlcmVyIHtcbiAgcHVibGljIGdldEluc3RhbmNlKGlkOiBzdHJpbmcpOiBIYW5kc29udGFibGUge1xuICAgIHJldHVybiBpbnN0YW5jZXMuZ2V0KGlkKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlckluc3RhbmNlKGlkOiBzdHJpbmcsIGluc3RhbmNlOiBIYW5kc29udGFibGUpOiBNYXA8c3RyaW5nLCBIYW5kc29udGFibGU+IHtcbiAgICByZXR1cm4gaW5zdGFuY2VzLnNldChpZCwgaW5zdGFuY2UpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUluc3RhbmNlKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5zdGFuY2VzLmRlbGV0ZShpZCk7XG4gIH1cbn1cbiJdfQ==