import { EventEmitter } from '@angular/core';
import { SBItemBody } from './sb-item-body';
import { SqueezeBox } from './squeezebox';
export declare class SBItem {
    private squeezebox;
    collapsed: boolean;
    onToggled: EventEmitter<{}>;
    body: SBItemBody;
    constructor(squeezebox: SqueezeBox);
    ngAfterViewInit(): void;
    /**
     * Refreshes body calculation
     */
    refreshBody(): void;
    toggle(collapsed: boolean): void;
    applyToggle(collapsed: boolean): void;
}
