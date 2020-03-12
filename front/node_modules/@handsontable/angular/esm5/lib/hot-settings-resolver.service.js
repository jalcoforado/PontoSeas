/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import Handsontable from 'handsontable';
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
export { HotSettingsResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXNldHRpbmdzLXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaGFuZHNvbnRhYmxlL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaG90LXNldHRpbmdzLXJlc29sdmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sWUFBWSxNQUFNLGNBQWMsQ0FBQzs7SUFFbEMsaUJBQWlCLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQzs7SUFDakYsZUFBZSxHQUFhLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO0FBRXBFO0lBQUE7SUFpREEsQ0FBQzs7Ozs7SUEvQ0MsMkNBQWE7Ozs7SUFBYixVQUFjLFNBQVM7O1lBQ2YsZ0JBQWdCLEdBQUcsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUTs7WUFDNUQsY0FBYyxHQUE4QixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUN6RixPQUFPLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUV6RCxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBQ1gsTUFBTSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDNUMsTUFBTTtZQUVWLElBQUksZ0JBQWdCLElBQUksTUFBTSxFQUFFO2dCQUM5QixNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekI7WUFFRCxJQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDckIsT0FBTzthQUVSO2lCQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sRUFBRTtnQkFDakQsY0FBYyxDQUFDLEdBQUcsQ0FBQzs7OztnQkFBRztvQkFBQSxpQkFJckI7b0JBSjhCLGNBQU87eUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTzt3QkFBUCx5QkFBTzs7b0JBQ3BDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7b0JBQUM7d0JBQ3pCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQSxDQUFDO2FBRUg7aUJBQU07Z0JBQ0wsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUM5QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw0Q0FBYzs7OztJQUFkLFVBQWUsT0FBc0I7O1lBQzdCLE1BQU0sR0FBOEIsRUFBRTs7WUFDdEMsVUFBVSxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWpELFVBQVUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFLO1lBQ3ZCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDN0M7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQWhERixVQUFVOztJQWlEWCwwQkFBQztDQUFBLEFBakRELElBaURDO1NBaERZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBIYW5kc29udGFibGUgZnJvbSAnaGFuZHNvbnRhYmxlJztcblxuY29uc3QgQVZBSUxBQkxFX09QVElPTlM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoSGFuZHNvbnRhYmxlLkRlZmF1bHRTZXR0aW5ncy5wcm90b3R5cGUpO1xuY29uc3QgQVZBSUxBQkxFX0hPT0tTOiBzdHJpbmdbXSA9IEhhbmRzb250YWJsZS5ob29rcy5nZXRSZWdpc3RlcmVkKCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIb3RTZXR0aW5nc1Jlc29sdmVyIHtcbiAgbWVyZ2VTZXR0aW5ncyhjb21wb25lbnQpOiBvYmplY3Qge1xuICAgIGNvbnN0IGlzU2V0dGluZ3NPYmplY3QgPSB0eXBlb2YgY29tcG9uZW50WydzZXR0aW5ncyddID09PSAnb2JqZWN0JztcbiAgICBjb25zdCBtZXJnZWRTZXR0aW5nczogSGFuZHNvbnRhYmxlLkdyaWRTZXR0aW5ncyA9IGlzU2V0dGluZ3NPYmplY3QgPyBjb21wb25lbnRbJ3NldHRpbmdzJ10gOiB7fTtcbiAgICBjb25zdCBvcHRpb25zID0gQVZBSUxBQkxFX0hPT0tTLmNvbmNhdChBVkFJTEFCTEVfT1BUSU9OUyk7XG5cbiAgICBvcHRpb25zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IGlzSG9vayA9IEFWQUlMQUJMRV9IT09LUy5pbmRleE9mKGtleSkgPiAtMTtcbiAgICAgIGxldCBvcHRpb247XG5cbiAgICAgIGlmIChpc1NldHRpbmdzT2JqZWN0ICYmIGlzSG9vaykge1xuICAgICAgICBvcHRpb24gPSBjb21wb25lbnRbJ3NldHRpbmdzJ11ba2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBvbmVudFtrZXldICE9PSB2b2lkIDApIHtcbiAgICAgICAgb3B0aW9uID0gY29tcG9uZW50W2tleV07XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0hvb2spIHtcbiAgICAgICAgbWVyZ2VkU2V0dGluZ3Nba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkU2V0dGluZ3Nba2V5XSA9IG9wdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZWRTZXR0aW5ncztcbiAgfVxuXG4gIHByZXBhcmVDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBIYW5kc29udGFibGUuR3JpZFNldHRpbmdzIHtcbiAgICBjb25zdCByZXN1bHQ6IEhhbmRzb250YWJsZS5HcmlkU2V0dGluZ3MgPSB7fTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGNoYW5nZXMpO1xuXG4gICAgcGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgIHJlc3VsdFtwYXJhbV0gPSBjaGFuZ2VzW3BhcmFtXS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=