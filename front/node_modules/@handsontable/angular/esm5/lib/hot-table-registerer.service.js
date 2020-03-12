/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
export { HotTableRegisterer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXRhYmxlLXJlZ2lzdGVyZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5kc29udGFibGUvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ob3QtdGFibGUtcmVnaXN0ZXJlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUdyQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXdCO0FBRWpEO0lBQUE7SUFhQSxDQUFDOzs7OztJQVhRLHdDQUFXOzs7O0lBQWxCLFVBQW1CLEVBQVU7UUFDM0IsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVNLDZDQUFnQjs7Ozs7SUFBdkIsVUFBd0IsRUFBVSxFQUFFLFFBQXNCO1FBQ3hELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSwyQ0FBYzs7OztJQUFyQixVQUFzQixFQUFVO1FBQzlCLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFaRixVQUFVOztJQWFYLHlCQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEhhbmRzb250YWJsZSBmcm9tICdoYW5kc29udGFibGUnO1xuXG5jb25zdCBpbnN0YW5jZXMgPSBuZXcgTWFwPHN0cmluZywgSGFuZHNvbnRhYmxlPigpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG90VGFibGVSZWdpc3RlcmVyIHtcbiAgcHVibGljIGdldEluc3RhbmNlKGlkOiBzdHJpbmcpOiBIYW5kc29udGFibGUge1xuICAgIHJldHVybiBpbnN0YW5jZXMuZ2V0KGlkKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlckluc3RhbmNlKGlkOiBzdHJpbmcsIGluc3RhbmNlOiBIYW5kc29udGFibGUpOiBNYXA8c3RyaW5nLCBIYW5kc29udGFibGU+IHtcbiAgICByZXR1cm4gaW5zdGFuY2VzLnNldChpZCwgaW5zdGFuY2UpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUluc3RhbmNlKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5zdGFuY2VzLmRlbGV0ZShpZCk7XG4gIH1cbn1cbiJdfQ==