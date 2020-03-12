import { ModuleWithProviders } from '@angular/core';
/**
 * Angular prevents use static public getters under NgModule decorator.
 * Moreover, ngc doesn't allow importing `Version` from external file.
 */
declare class Version {
    static readonly version: string;
}
export declare class HotTableModule extends Version {
    static forRoot(): ModuleWithProviders;
}
export {};
