import { ElementRef, Renderer } from '@angular/core';
export declare class SBItemBody {
    private renderer;
    bodyEl: ElementRef;
    constructor(renderer: Renderer);
    ngAfterViewInit(): void;
    toggle(collapsed: boolean): void;
    setHeight(height: string): void;
}
