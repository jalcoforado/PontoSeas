import { SimpleChanges } from '@angular/core';
import Handsontable from 'handsontable';
export declare class HotSettingsResolver {
    mergeSettings(component: any): object;
    prepareChanges(changes: SimpleChanges): Handsontable.GridSettings;
}
