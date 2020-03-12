import Handsontable from 'handsontable';
export declare class HotTableRegisterer {
    getInstance(id: string): Handsontable;
    registerInstance(id: string, instance: Handsontable): Map<string, Handsontable>;
    removeInstance(id: string): boolean;
}
